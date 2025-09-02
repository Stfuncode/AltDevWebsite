'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'

function DataNodes() {
  const ref = useRef<THREE.Points>(null!)
  const lineRef = useRef<THREE.Group>(null!)
  
  const [positions, connections] = useMemo(() => {
    const positions = new Float32Array(100 * 3)
    const connections: [number, number, number, number, number, number][] = []
    
    // Create data nodes
    for (let i = 0; i < 100; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 15
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 15
    }
    
    // Create connections between nearby nodes
    for (let i = 0; i < 100; i++) {
      for (let j = i + 1; j < 100; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
        
        if (distance < 4 && Math.random() > 0.7) {
          connections.push([
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          ])
        }
      }
    }
    
    return [positions, connections]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1
    }
    if (lineRef.current) {
      lineRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fbbf24"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      
      <group ref={lineRef}>
        {connections.map((connection, index) => (
          <Line
            key={index}
            points={[
              [connection[0], connection[1], connection[2]], 
              [connection[3], connection[4], connection[5]]
            ]}
            color="#fbbf24"
            opacity={0.3}
            transparent
            lineWidth={1}
          />
        ))}
      </group>
    </>
  )
}

function DataStream() {
  const ref = useRef<THREE.Points>(null!)
  
  const positions = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      const i3 = i * 3
      positions[i3] = (i / 200) * 20 - 10 // X: stream from left to right
      positions[i3 + 1] = Math.sin(i * 0.1) * 2 + (Math.random() - 0.5) * 0.5 // Y: sine wave
      positions[i3 + 2] = (Math.random() - 0.5) * 8 // Z: some depth variation
    }
    return positions
  }, [])

  useFrame((state, delta) => {
    if (ref.current && ref.current.geometry.attributes.position) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < 200; i++) {
        const i3 = i * 3
        // Move particles along the stream
        positions[i3] += delta * 2
        
        // Reset particles that have moved off screen
        if (positions[i3] > 10) {
          positions[i3] = -10
          positions[i3 + 1] = Math.sin(i * 0.1) * 2 + (Math.random() - 0.5) * 0.5
          positions[i3 + 2] = (Math.random() - 0.5) * 8
        }
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#fbbf24"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

export default function DataVisualization() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <DataNodes />
        <DataStream />
      </Canvas>
    </div>
  )
}