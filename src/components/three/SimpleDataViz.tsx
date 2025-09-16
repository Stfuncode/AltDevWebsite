'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function AnimatedSphere({ position, color, size = 0.1, speed = 1 }: { position: [number, number, number], color: string, size?: number, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const initialY = position[1]

  useFrame((state) => {
    if (meshRef.current) {
      // More pronounced sine wave animation
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.8
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5) * 0.3
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.8
      // Pulsing effect
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.2)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.9}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  )
}

function DataSpheres() {
  const spheres = useMemo(() => {
    const positions: [number, number, number][] = []
    const colors = ['#fbbf24', '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4']

    for (let i = 0; i < 15; i++) {
      positions.push([
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 4
      ])
    }

    return positions.map((pos, i) => ({
      position: pos,
      color: colors[i % colors.length],
      size: 0.15 + Math.random() * 0.1,
      speed: 0.8 + Math.random() * 0.4
    }))
  }, [])

  return (
    <>
      {spheres.map((sphere, index) => (
        <AnimatedSphere
          key={index}
          position={sphere.position}
          color={sphere.color}
          size={sphere.size}
          speed={sphere.speed}
        />
      ))}
    </>
  )
}

export default function SimpleDataViz() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, 5]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[5, -5, -5]} intensity={0.3} color="#fbbf24" />
        <DataSpheres />
      </Canvas>
    </div>
  )
}