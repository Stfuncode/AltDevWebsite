'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function DataBars() {
  const groupRef = useRef<THREE.Group>(null!)
  
  const bars = useMemo(() => {
    const barData = []
    for (let i = 0; i < 12; i++) {
      barData.push({
        position: [i * 0.8 - 4.4, 0, 0] as [number, number, number],
        height: Math.random() * 3 + 0.5,
        targetHeight: Math.random() * 3 + 0.5,
        color: new THREE.Color('#fbbf24')
      })
    }
    return barData
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      
      // Animate bar heights
      bars.forEach((bar, index) => {
        // Slowly change target height
        if (Math.random() < 0.01) {
          bar.targetHeight = Math.random() * 3 + 0.5
        }
        
        // Smoothly animate current height to target
        bar.height += (bar.targetHeight - bar.height) * delta * 2
        
        // Update bar scale
        const barMesh = groupRef.current.children[index] as THREE.Mesh
        if (barMesh) {
          barMesh.scale.y = bar.height
          barMesh.position.y = bar.height / 2
          
          // Add some pulse effect
          const pulse = 1 + Math.sin(state.clock.elapsedTime * 3 + index) * 0.1
          barMesh.scale.x = pulse
          barMesh.scale.z = pulse
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {bars.map((bar, index) => (
        <mesh key={index} position={bar.position}>
          <boxGeometry args={[0.5, 1, 0.5]} />
          <meshStandardMaterial
            color={bar.color}
            transparent
            opacity={0.8}
            emissive="#fbbf24"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

function DataGrid() {
  const gridRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = -Math.PI / 6
      // Subtle movement
      gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 - 2
    }
  })

  const gridLines = useMemo(() => {
    const lines = []
    
    // Horizontal lines
    for (let i = -5; i <= 5; i++) {
      lines.push({
        points: [[-6, 0, i], [6, 0, i]],
        opacity: i === 0 ? 0.5 : 0.2
      })
    }
    
    // Vertical lines
    for (let i = -6; i <= 6; i++) {
      lines.push({
        points: [[i, 0, -5], [i, 0, 5]],
        opacity: i === 0 ? 0.5 : 0.2
      })
    }
    
    return lines
  }, [])

  return (
    <group ref={gridRef}>
      {gridLines.map((line, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array([
                  ...line.points[0],
                  ...line.points[1],
                ]),
                3, // itemSize
              ]}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#fbbf24" 
            transparent 
            opacity={line.opacity}
          />
        </line>
      ))}
    </group>
  )
}

export default function AnimatedDataChart() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 4, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <DataGrid />
        <DataBars />
      </Canvas>
    </div>
  )
}