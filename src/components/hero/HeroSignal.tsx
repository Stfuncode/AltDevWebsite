'use client'

// HERO SIGNAL — Direction A ("From Noise to Signal"), production hero act.
// One scroll-driven canvas: a noise field of data points converges into a
// knowledge-graph lattice, then the AI "ignites" it gold (= intelligence).
// The canvas pauses its render loop once scrolled past (frees the GPU).
// See DESIGN_BRIEF.md sections 3, 4, 6.

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo, useEffect, useState } from 'react'
import Link from 'next/link'
import * as THREE from 'three'

const POINTS = 1800
const NODES = 42
const R_NOISE = 6.5

const BASE = new THREE.Color('#5aa0c0') // teal — the data foundation
const GOLD = new THREE.Color('#f2c864') // gold — the ignited signal

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)))
  return t * t * (3 - 2 * t)
}
function clamp01(x: number) {
  return Math.min(1, Math.max(0, x))
}

type FieldData = {
  noise: Float32Array
  lattice: Float32Array
  weight: Float32Array
  nodePositions: Float32Array
  linePositions: Float32Array
}

function buildFieldData(): FieldData {
  const nodes: THREE.Vector3[] = []
  for (let n = 0; n < NODES; n++) {
    nodes.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 5.2,
        (Math.random() - 0.5) * 3,
      ),
    )
  }

  const noise = new Float32Array(POINTS * 3)
  const lattice = new Float32Array(POINTS * 3)
  const weight = new Float32Array(POINTS)

  for (let i = 0; i < POINTS; i++) {
    const ix = i * 3

    const dir = new THREE.Vector3(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
    )
      .normalize()
      .multiplyScalar(R_NOISE * Math.cbrt(Math.random()))
    noise[ix] = dir.x
    noise[ix + 1] = dir.y
    noise[ix + 2] = dir.z

    const node = nodes[i % NODES]
    const jx = (Math.random() - 0.5) * 0.5
    const jy = (Math.random() - 0.5) * 0.5
    const jz = (Math.random() - 0.5) * 0.5
    lattice[ix] = node.x + jx
    lattice[ix + 1] = node.y + jy
    lattice[ix + 2] = node.z + jz

    const dist = Math.sqrt(jx * jx + jy * jy + jz * jz)
    weight[i] = 0.35 + 0.65 * clamp01(1 - dist / 0.45)
  }

  const nodePositions = new Float32Array(NODES * 3)
  for (let n = 0; n < NODES; n++) {
    nodePositions[n * 3] = nodes[n].x
    nodePositions[n * 3 + 1] = nodes[n].y
    nodePositions[n * 3 + 2] = nodes[n].z
  }

  const segs: number[] = []
  let count = 0
  for (let a = 0; a < NODES && count < 70; a++) {
    for (let b = a + 1; b < NODES && count < 70; b++) {
      if (nodes[a].distanceTo(nodes[b]) < 3.0) {
        segs.push(nodes[a].x, nodes[a].y, nodes[a].z, nodes[b].x, nodes[b].y, nodes[b].z)
        count++
      }
    }
  }

  return { noise, lattice, weight, nodePositions, linePositions: new Float32Array(segs) }
}

function DataField({ progressRef, reduced }: { progressRef: { current: number }; reduced: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const displayed = useRef(0)

  const { mainGeom, coreGeom, lineGeom, mainMat, coreMat, lineMat, data } = useMemo(() => {
    const data = buildFieldData()

    const mainGeom = new THREE.BufferGeometry()
    mainGeom.setAttribute('position', new THREE.BufferAttribute(data.noise.slice(), 3))
    const colors = new Float32Array(POINTS * 3)
    for (let i = 0; i < POINTS; i++) {
      colors[i * 3] = BASE.r
      colors[i * 3 + 1] = BASE.g
      colors[i * 3 + 2] = BASE.b
    }
    mainGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const coreGeom = new THREE.BufferGeometry()
    coreGeom.setAttribute('position', new THREE.BufferAttribute(data.nodePositions.slice(), 3))

    const lineGeom = new THREE.BufferGeometry()
    lineGeom.setAttribute('position', new THREE.BufferAttribute(data.linePositions.slice(), 3))

    const mainMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    const coreMat = new THREE.PointsMaterial({
      size: 0.02,
      color: GOLD,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    const lineMat = new THREE.LineBasicMaterial({ color: BASE, transparent: true, opacity: 0 })

    return { mainGeom, coreGeom, lineGeom, mainMat, coreMat, lineMat, data }
  }, [])

  useEffect(() => {
    return () => {
      mainGeom.dispose()
      coreGeom.dispose()
      lineGeom.dispose()
      mainMat.dispose()
      coreMat.dispose()
      lineMat.dispose()
    }
  }, [mainGeom, coreGeom, lineGeom, mainMat, coreMat, lineMat])

  useFrame((state, delta) => {
    const d = Math.min(0.1, delta)
    const target = progressRef.current
    displayed.current += (target - displayed.current) * (reduced ? 1 : Math.min(1, d * 3.2))
    const p = displayed.current

    const tc = smoothstep(0, 0.78, p)
    const ti = smoothstep(0.55, 1, p)

    const pos = mainGeom.attributes.position.array as Float32Array
    const col = mainGeom.attributes.color.array as Float32Array
    const { noise, lattice, weight } = data
    for (let i = 0; i < POINTS; i++) {
      const ix = i * 3
      pos[ix] = noise[ix] + (lattice[ix] - noise[ix]) * tc
      pos[ix + 1] = noise[ix + 1] + (lattice[ix + 1] - noise[ix + 1]) * tc
      pos[ix + 2] = noise[ix + 2] + (lattice[ix + 2] - noise[ix + 2]) * tc
      const g = ti * weight[i]
      col[ix] = BASE.r + (GOLD.r - BASE.r) * g
      col[ix + 1] = BASE.g + (GOLD.g - BASE.g) * g
      col[ix + 2] = BASE.b + (GOLD.b - BASE.b) * g
    }
    mainGeom.attributes.position.needsUpdate = true
    mainGeom.attributes.color.needsUpdate = true

    coreMat.opacity = ti
    coreMat.size = 0.02 + 0.14 * ti
    lineMat.opacity = smoothstep(0.3, 0.85, p) * 0.4

    const g = groupRef.current
    if (g) {
      const t = reduced ? 0 : state.clock.elapsedTime
      g.rotation.y = p * 0.35 + t * 0.02
      const px = reduced ? 0 : state.pointer.x
      const py = reduced ? 0 : state.pointer.y
      g.rotation.x += (py * 0.12 - g.rotation.x) * 0.05
      g.position.x += (px * 0.3 - g.position.x) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <points geometry={mainGeom} material={mainMat} />
      <points geometry={coreGeom} material={coreMat} />
      <lineSegments geometry={lineGeom} material={lineMat} />
    </group>
  )
}

export default function HeroSignal() {
  const progressRef = useRef(0)
  const wrapRef = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const capRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)
  const [active, setActive] = useState(true) // render loop only while hero is on screen

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isReduced = mq.matches
    setReduced(isReduced)

    const paint = (p: number) => {
      if (line2Ref.current) line2Ref.current.style.opacity = String(smoothstep(0.55, 0.95, p))
      if (subRef.current) subRef.current.style.opacity = String(smoothstep(0.12, 0.4, p))
      if (ctaRef.current) {
        const o = smoothstep(0.6, 0.95, p)
        ctaRef.current.style.opacity = String(o)
        ctaRef.current.style.transform = `translateY(${(1 - o) * 12}px)`
        ctaRef.current.style.pointerEvents = o > 0.6 ? 'auto' : 'none'
      }
      if (hintRef.current) hintRef.current.style.opacity = String(1 - smoothstep(0, 0.12, p))
      if (capRef.current) {
        capRef.current.textContent =
          p < 0.34 ? 'Noise — raw, scattered data' : p < 0.66 ? 'Foundation — made AI-ready' : 'Intelligence — decisions'
      }
    }

    // Pause the WebGL render loop when the hero scrolls off screen.
    const el = wrapRef.current
    let io: IntersectionObserver | undefined
    if (el) {
      io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0 })
      io.observe(el)
    }

    if (isReduced) {
      progressRef.current = 1
      paint(1)
      return () => io?.disconnect()
    }

    const onScroll = () => {
      const wrap = wrapRef.current
      if (!wrap) return
      const total = wrap.offsetHeight - window.innerHeight
      const p = clamp01(-wrap.getBoundingClientRect().top / Math.max(1, total))
      progressRef.current = p
      paint(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      io?.disconnect()
    }
  }, [])

  return (
    <div ref={wrapRef} style={{ height: '260vh', position: 'relative' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: 'radial-gradient(1200px circle at 50% 30%, rgba(11,66,81,0.55), #03141F 70%)',
        }}
      >
        <Canvas
          frameloop={active ? 'always' : 'never'}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 9], fov: 60 }}
          gl={{ alpha: true, antialias: true }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <DataField progressRef={progressRef} reduced={reduced} />
        </Canvas>

        {/* Copy overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 1.5rem',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: 12,
              letterSpacing: '0.28em',
              color: '#F2C864',
              marginBottom: 20,
              textTransform: 'uppercase',
            }}
          >
            Applied AI, built on data that&apos;s ready
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 700,
              lineHeight: 1.05,
              fontSize: 'clamp(2.4rem, 6vw, 4.75rem)',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            <span style={{ display: 'block', color: '#E9ECDD' }}>Your data is noise.</span>
            <span
              ref={line2Ref}
              style={{ display: 'block', color: '#F2C864', opacity: 0, transition: 'opacity 0.15s linear' }}
            >
              We make it signal.
            </span>
          </h1>
          <p
            ref={subRef}
            style={{
              maxWidth: 620,
              marginTop: 24,
              fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
              lineHeight: 1.6,
              color: 'rgba(233,236,221,0.78)',
              opacity: 0,
              transition: 'opacity 0.2s linear',
            }}
          >
            We build the vision, ML, and NLP systems that turn your data into decisions — on a foundation engineered so
            they work in production, not just in a demo.
          </p>
          <div ref={ctaRef} style={{ marginTop: 30, opacity: 0, pointerEvents: 'none' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                background: '#F2C864',
                color: '#051D2E',
                fontWeight: 700,
                padding: '0.9rem 2rem',
                borderRadius: 999,
                textDecoration: 'none',
              }}
            >
              Book a consultation
            </Link>
          </div>
        </div>

        {/* Stage caption (narrative beat) */}
        <div
          ref={capRef}
          style={{
            position: 'absolute',
            left: 24,
            bottom: 22,
            zIndex: 3,
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 12,
            letterSpacing: '0.05em',
            color: 'rgba(233,236,221,0.55)',
          }}
        >
          Noise — raw, scattered data
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          style={{
            position: 'absolute',
            bottom: 22,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 11,
            letterSpacing: '0.25em',
            color: 'rgba(233,236,221,0.5)',
          }}
        >
          SCROLL ↓
        </div>
      </div>
    </div>
  )
}
