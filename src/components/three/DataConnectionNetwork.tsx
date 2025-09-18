'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null!)

  const { nodes, connections } = useMemo(() => {
    const nodeCount = 25
    const nodes = []
    const connections = []

    // Create nodes in a network pattern
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2
      const radius = 3 + Math.random() * 2
      const height = (Math.random() - 0.5) * 2

      nodes.push({
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ] as [number, number, number],
        id: i
      })
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = new THREE.Vector3()
          .subVectors(
            new THREE.Vector3(...nodes[i].position),
            new THREE.Vector3(...nodes[j].position)
          ).length()

        if (distance < 2.5 && Math.random() > 0.6) {
          connections.push([nodes[i].position, nodes[j].position])
        }
      }
    }

    return { nodes, connections }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      {connections.map((connection, index) => (
        <Line
          key={`connection-${index}`}
          points={connection}
          color="#fbbf24"
          opacity={0.3}
          transparent
          lineWidth={1}
        />
      ))}

      {/* Network nodes */}
      {nodes.map((node, index) => (
        <mesh key={`node-${index}`} position={node.position}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={0.3}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  )
}

function DataFlow() {
  const pointsRef = useRef<THREE.Points>(null!)

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(100 * 3)
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current && pointsRef.current.geometry.attributes.position) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < 100; i++) {
        const i3 = i * 3
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i * 0.1) * 0.01
        positions[i3] += Math.cos(state.clock.elapsedTime * 0.5 + i * 0.05) * 0.005
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={pointsRef} positions={particlePositions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

export default function DataConnectionNetwork() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <pointLight position={[-10, -10, 5]} intensity={0.3} color="#3b82f6" />
        <NetworkNodes />
        <DataFlow />
      </Canvas>
    </div>
  )
}