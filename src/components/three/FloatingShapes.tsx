'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingBox({ position, scale, rotationSpeed }: { position: [number, number, number], scale: number, rotationSpeed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed
      meshRef.current.rotation.y += delta * rotationSpeed * 0.5
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.001
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial 
        color="#fbbf24" 
        transparent 
        opacity={0.1} 
        wireframe 
      />
    </mesh>
  )
}

function FloatingSphere({ position, scale, rotationSpeed }: { position: [number, number, number], scale: number, rotationSpeed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed
      meshRef.current.rotation.z += delta * rotationSpeed * 0.7
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime + position[1]) * 0.001
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial 
        color="#fbbf24" 
        transparent 
        opacity={0.08} 
        wireframe 
      />
    </mesh>
  )
}

function Shapes() {
  return (
    <>
      <FloatingBox position={[-8, 4, -5]} scale={1} rotationSpeed={0.3} />
      <FloatingBox position={[6, -3, -3]} scale={0.8} rotationSpeed={0.2} />
      <FloatingBox position={[-4, -6, -4]} scale={1.2} rotationSpeed={0.4} />
      
      <FloatingSphere position={[8, 2, -6]} scale={1.5} rotationSpeed={0.1} />
      <FloatingSphere position={[-6, -2, -2]} scale={0.9} rotationSpeed={0.25} />
      <FloatingSphere position={[3, 6, -8]} scale={1.1} rotationSpeed={0.15} />
    </>
  )
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Shapes />
      </Canvas>
    </div>
  )
}