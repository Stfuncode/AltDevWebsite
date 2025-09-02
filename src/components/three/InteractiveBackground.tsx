'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null!)
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    
    void main() {
      vec2 uv = vUv;
      
      // Create moving waves
      float wave1 = sin(uv.x * 10.0 + uTime * 0.5) * 0.1;
      float wave2 = sin(uv.y * 8.0 + uTime * 0.3) * 0.1;
      
      // Yellow gradient with animation
      vec3 color1 = vec3(0.984, 0.745, 0.141); // #fbbf24
      vec3 color2 = vec3(0.118, 0.161, 0.235); // #1e293b
      
      float gradient = uv.y + wave1 + wave2;
      vec3 finalColor = mix(color2, color1, gradient * 0.3);
      
      gl_FragColor = vec4(finalColor, 0.05);
    }
  `

  const uniforms = {
    uTime: { value: 0 }
  }

  return (
    <Plane args={[20, 20]} position={[0, 0, -5]}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </Plane>
  )
}

export default function InteractiveBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
      >
        <AnimatedPlane />
      </Canvas>
    </div>
  )
}