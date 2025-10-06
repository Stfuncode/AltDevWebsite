'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface MatrixRainProps {
  count?: number
}

function MatrixRain({ count = 2000 }: MatrixRainProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const tempObject = useMemo(() => new THREE.Object3D(), [])

  // Matrix characters (mix of numbers, letters, and special chars)
  const matrixChars = useMemo(() =>
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズブプエケセテネヘメレゲゼデベペオコソトノホモヨロゴゾドボポヲン'.split('')
  , [])

  // Initialize positions and velocities
  const { positions, velocities, characters, opacities } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count)
    const characters = new Float32Array(count)
    const opacities = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100 // x
      positions[i * 3 + 1] = Math.random() * 100 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50 // z

      velocities[i] = Math.random() * 0.3 + 0.1
      characters[i] = Math.floor(Math.random() * matrixChars.length)
      opacities[i] = Math.random()
    }

    return { positions, velocities, characters, opacities }
  }, [count, matrixChars.length])

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Update Y position (falling down)
      positions[i3 + 1] -= velocities[i]

      // Reset position when it goes below screen
      if (positions[i3 + 1] < -50) {
        positions[i3 + 1] = 50
        positions[i3] = (Math.random() - 0.5) * 100
        characters[i] = Math.floor(Math.random() * matrixChars.length)
      }

      // Randomly change characters
      if (Math.random() < 0.002) {
        characters[i] = Math.floor(Math.random() * matrixChars.length)
      }

      // Flicker opacity
      opacities[i] = Math.sin(time * 5 + i) * 0.5 + 0.5

      // Update instance matrix
      tempObject.position.set(positions[i3], positions[i3 + 1], positions[i3 + 2])
      tempObject.scale.setScalar(Math.random() * 0.5 + 0.5)
      tempObject.updateMatrix()

      meshRef.current.setMatrixAt(i, tempObject.matrix)
      meshRef.current.setColorAt(i, new THREE.Color().setHSL(0.3, 0.8, opacities[i]))
    }

    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <planeGeometry args={[0.8, 1.2]} />
      <meshBasicMaterial
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  )
}

interface MatrixEffectProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export default function MatrixEffect({ className = '', intensity = 'medium' }: MatrixEffectProps) {
  const particleCount = {
    low: 1000,
    medium: 2000,
    high: 3000
  }[intensity]

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: -1 }}>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <MatrixRain count={particleCount} />
      </Canvas>
    </div>
  )
}