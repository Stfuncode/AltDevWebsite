'use client'

import React from 'react'
import { useRef, useMemo } from 'react'
import type { ComponentProps } from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Particles(props: ComponentProps<typeof Points>) {
  const ref = useRef<
    THREE.Points<THREE.BufferGeometry, THREE.Material | THREE.Material[]>
  >(null)
  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3
      sphere[i3] = (Math.random() - 0.5) * 20
      sphere[i3 + 1] = (Math.random() - 0.5) * 20
      sphere[i3 + 2] = (Math.random() - 0.5) * 20
    }
    return [sphere]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#fbbf24"
          size={0.03}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  )
}


export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
      >
        <Particles />
      </Canvas>
    </div>
  )
}