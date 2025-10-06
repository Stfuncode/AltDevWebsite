'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function TechStackBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current // Capture ref value

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 100
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    // Material with lime color
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xD7E150,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Create wireframe cubes
    const cubes: THREE.LineSegments[] = [] // Changed from THREE.Mesh[]
    const cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3)
    const cubeEdges = new THREE.EdgesGeometry(cubeGeometry)

    for (let i = 0; i < 8; i++) {
      const cubeMaterial = new THREE.LineBasicMaterial({
        color: 0xD7E150,
        transparent: true,
        opacity: 0.3
      })
      const cube = new THREE.LineSegments(cubeEdges, cubeMaterial)
      cube.position.x = (Math.random() - 0.5) * 10
      cube.position.y = (Math.random() - 0.5) * 10
      cube.position.z = (Math.random() - 0.5) * 10
      cubes.push(cube) // Removed 'as any'
      scene.add(cube)
    }

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.05
      particlesMesh.rotation.x = Math.sin(elapsedTime * 0.1) * 0.2

      // Animate cubes
      cubes.forEach((cube, index) => {
        cube.rotation.x = elapsedTime * 0.3 + index * 0.1
        cube.rotation.y = elapsedTime * 0.2 + index * 0.1
        cube.position.y = Math.sin(elapsedTime + index) * 0.5
      })

      // Mouse interaction
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', handleMouseMove)
      container.removeChild(renderer.domElement) // Use captured variable
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.6,
        zIndex: 0
      }}
    />
  )
}