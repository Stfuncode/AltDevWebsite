&apos;use client&apos;

import { useRef, useMemo } from &apos;react&apos;
import { Canvas, useFrame } from &apos;@react-three/fiber&apos;
import { Points, PointMaterial } from &apos;@react-three/drei&apos;
import * as random from &apos;maath/random/dist/maath-random.esm&apos;
import * as THREE from &apos;three&apos;

function Stars(props: any) {
  const ref = useRef<THREE.Points>()
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(5000), { radius: 1.5 })], [])

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
          color="#0ea5e9"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color="#d946ef"
        transparent
        opacity={0.8}
        wireframe={true}
      />
    </mesh>
  )
}

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: &apos;transparent&apos; }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <FloatingCube />
      </Canvas>
    </div>
  )
}

export default HeroScene