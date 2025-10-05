'use client'

import { useState, useEffect, useRef } from 'react'
import { Code2, Server, Cloud, Database, Brain, Zap, PieChart, Leaf, FileCode, Box, Settings, CloudCog, Network, Hexagon } from 'lucide-react'
import Link from 'next/link'

interface TechCard {
  id: string
  name: string
  icon: any
  percentage: number
  position: { x: number; y: number }
  connections: string[]
}

interface UseCase {
  id: string
  title: string
  description: string
  technologies: TechCard[]
  link: string
}

const useCases: UseCase[] = [
  {
    id: 'analytics',
    title: 'Data Analytics',
    description: 'Real-time dashboards and insights',
    link: '/solutions/data-analytics',
    technologies: [
      { id: 'python-1', name: 'Python', icon: Code2, percentage: 90, position: { x: 20, y: 20 }, connections: ['postgres-1', 'react-1', 'fabric-1'] },
      { id: 'postgres-1', name: 'PostgreSQL', icon: Database, percentage: 85, position: { x: 50, y: 15 }, connections: ['python-1', 'azure-1'] },
      { id: 'react-1', name: 'React', icon: Code2, percentage: 80, position: { x: 75, y: 25 }, connections: ['python-1', 'azure-1'] },
      { id: 'azure-1', name: 'Azure', icon: Cloud, percentage: 85, position: { x: 50, y: 50 }, connections: ['postgres-1', 'react-1', 'tableau-1', 'fabric-1'] },
      { id: 'tableau-1', name: 'Tableau', icon: PieChart, percentage: 75, position: { x: 75, y: 75 }, connections: ['azure-1', 'fabric-1'] },
      { id: 'fabric-1', name: 'Fabric', icon: Network, percentage: 80, position: { x: 25, y: 70 }, connections: ['python-1', 'azure-1', 'tableau-1'] },
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'AI-powered predictive models',
    link: '/solutions/ml-models',
    technologies: [
      { id: 'tensorflow-1', name: 'TensorFlow', icon: Brain, percentage: 95, position: { x: 20, y: 20 }, connections: ['python-2', 'docker-1', 'kubernetes-1'] },
      { id: 'python-2', name: 'Python', icon: Code2, percentage: 90, position: { x: 55, y: 15 }, connections: ['tensorflow-1', 'azure-2', 'spark-1'] },
      { id: 'docker-1', name: 'Docker', icon: Box, percentage: 85, position: { x: 15, y: 55 }, connections: ['tensorflow-1', 'kubernetes-1'] },
      { id: 'kubernetes-1', name: 'Kubernetes', icon: Hexagon, percentage: 90, position: { x: 45, y: 60 }, connections: ['docker-1', 'tensorflow-1', 'azure-2'] },
      { id: 'azure-2', name: 'Azure', icon: Cloud, percentage: 85, position: { x: 75, y: 45 }, connections: ['python-2', 'kubernetes-1', 'spark-1'] },
      { id: 'spark-1', name: 'Spark', icon: Zap, percentage: 80, position: { x: 80, y: 80 }, connections: ['python-2', 'azure-2'] },
    ]
  },
  {
    id: 'realtime',
    title: 'Real-time Processing',
    description: 'Stream millions of events per second',
    link: '/solutions/data-pipelines',
    technologies: [
      { id: 'spark-2', name: 'Spark', icon: Zap, percentage: 90, position: { x: 20, y: 25 }, connections: ['node-1', 'cassandra-1', 'kafka-1'] },
      { id: 'node-1', name: 'Node.js', icon: Server, percentage: 85, position: { x: 55, y: 20 }, connections: ['spark-2', 'docker-2', 'cassandra-1'] },
      { id: 'cassandra-1', name: 'Cassandra', icon: Database, percentage: 85, position: { x: 50, y: 50 }, connections: ['spark-2', 'node-1', 'kubernetes-2'] },
      { id: 'docker-2', name: 'Docker', icon: Box, percentage: 80, position: { x: 80, y: 40 }, connections: ['node-1', 'kubernetes-2'] },
      { id: 'kubernetes-2', name: 'Kubernetes', icon: Hexagon, percentage: 85, position: { x: 75, y: 75 }, connections: ['cassandra-1', 'docker-2'] },
      { id: 'kafka-1', name: 'Kafka', icon: Zap, percentage: 85, position: { x: 20, y: 70 }, connections: ['spark-2', 'cassandra-1'] },
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud-native applications',
    link: '/solutions/cloud',
    technologies: [
      { id: 'terraform-1', name: 'Terraform', icon: Settings, percentage: 95, position: { x: 25, y: 20 }, connections: ['aws-3', 'azure-3', 'kubernetes-3'] },
      { id: 'aws-3', name: 'AWS', icon: Cloud, percentage: 90, position: { x: 55, y: 15 }, connections: ['terraform-1', 'docker-3', 'kubernetes-3'] },
      { id: 'azure-3', name: 'Azure', icon: CloudCog, percentage: 90, position: { x: 80, y: 30 }, connections: ['terraform-1', 'kubernetes-3'] },
      { id: 'docker-3', name: 'Docker', icon: Box, percentage: 85, position: { x: 20, y: 60 }, connections: ['aws-3', 'kubernetes-3'] },
      { id: 'kubernetes-3', name: 'Kubernetes', icon: Hexagon, percentage: 90, position: { x: 55, y: 65 }, connections: ['terraform-1', 'aws-3', 'azure-3', 'docker-3', 'postgres-2'] },
      { id: 'postgres-2', name: 'PostgreSQL', icon: Database, percentage: 80, position: { x: 80, y: 75 }, connections: ['kubernetes-3'] },
    ]
  }
]

export default function TechStackNetwork() {
  const [activeTab, setActiveTab] = useState(useCases[0].id)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentUseCase = useCases.find(uc => uc.id === (hoveredTab || activeTab)) || useCases[0]

  // Draw connections on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match container exactly
    const updateCanvasSize = () => {
      // Small delay to ensure container is fully rendered
      requestAnimationFrame(() => {
        // Use clientWidth/clientHeight to get the inner dimensions (excluding border)
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      })
    }

    updateCanvasSize()

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw connections with proper centering
    currentUseCase.technologies.forEach(tech => {
      tech.connections.forEach(connId => {
        const targetTech = currentUseCase.technologies.find(t => t.id === connId)
        if (!targetTech) return

        // Calculate positions - nodes are centered with translate(-50%, -50%)
        // So the canvas lines should draw to the same center positions
        const startX = (tech.position.x / 100) * canvas.width
        const startY = (tech.position.y / 100) * canvas.height
        const endX = (targetTech.position.x / 100) * canvas.width
        const endY = (targetTech.position.y / 100) * canvas.height

        // Create gradient for line
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
        gradient.addColorStop(0, 'rgba(215, 225, 80, 0.3)')
        gradient.addColorStop(0.5, 'rgba(215, 225, 80, 0.6)')
        gradient.addColorStop(1, 'rgba(215, 225, 80, 0.3)')

        // Draw line
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw animated dots along the line
        const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))
        const numDots = Math.floor(distance / 50)

        for (let i = 0; i < numDots; i++) {
          const t = (i / numDots) + (Date.now() / 3000) % 1
          const x = startX + (endX - startX) * (t % 1)
          const y = startY + (endY - startY) * (t % 1)

          ctx.beginPath()
          ctx.arc(x, y, 3, 0, Math.PI * 2)
          ctx.fillStyle = '#D7E150'
          ctx.fill()
        }
      })
    })

    // Animation loop
    let animationId: number

    const animate = () => {
      if (canvasRef.current && containerRef.current) {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Redraw with animation
        currentUseCase.technologies.forEach(tech => {
          tech.connections.forEach(connId => {
            const targetTech = currentUseCase.technologies.find(t => t.id === connId)
            if (!targetTech) return

            const startX = (tech.position.x / 100) * canvas.width
            const startY = (tech.position.y / 100) * canvas.height
            const endX = (targetTech.position.x / 100) * canvas.width
            const endY = (targetTech.position.y / 100) * canvas.height

            // Draw line
            const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
            gradient.addColorStop(0, 'rgba(215, 225, 80, 0.2)')
            gradient.addColorStop(0.5, 'rgba(215, 225, 80, 0.5)')
            gradient.addColorStop(1, 'rgba(215, 225, 80, 0.2)')

            ctx.beginPath()
            ctx.moveTo(startX, startY)
            ctx.lineTo(endX, endY)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 2
            ctx.stroke()

            // Animated dots
            const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))
            const numDots = Math.floor(distance / 80)

            for (let i = 0; i < numDots; i++) {
              const t = (i / numDots) + (Date.now() / 2000) % 1
              const x = startX + (endX - startX) * (t % 1)
              const y = startY + (endY - startY) * (t % 1)

              ctx.beginPath()
              ctx.arc(x, y, 3, 0, Math.PI * 2)
              ctx.fillStyle = 'rgba(215, 225, 80, 0.8)'
              ctx.fill()
            }
          })
        })
      }
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      updateCanvasSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [currentUseCase, hoveredTab, activeTab])

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-4 mb-12 justify-center flex-wrap" style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {useCases.map((useCase) => (
          <button
            key={useCase.id}
            onMouseEnter={() => setHoveredTab(useCase.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className="relative px-8 py-4 rounded-xl font-semibold transition-all duration-500"
            style={{
              backgroundColor: hoveredTab === useCase.id ? '#D7E150' : 'rgba(215, 225, 80, 0.1)',
              color: hoveredTab === useCase.id ? '#03203D' : '#03203D',
              border: `2px solid ${hoveredTab === useCase.id ? '#D7E150' : 'rgba(215, 225, 80, 0.3)'}`,
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredTab === useCase.id ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hoveredTab === useCase.id ? '0 8px 20px rgba(215, 225, 80, 0.4)' : '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="flex flex-col items-center" style={{ transition: 'all 0.5s ease' }}>
              <span className="text-lg font-bold" style={{ transition: 'all 0.5s ease' }}>{useCase.title}</span>
              <div
                style={{
                  maxHeight: hoveredTab === useCase.id ? '50px' : '0',
                  opacity: hoveredTab === useCase.id ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  marginTop: hoveredTab === useCase.id ? '0.25rem' : '0'
                }}
              >
                <span className="text-xs opacity-80" style={{ fontSize: '0.75rem' }}>
                  {useCase.description}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Network Visualization */}
      <div
        ref={containerRef}
        className="relative w-full rounded-2xl"
        style={{
          width: '100%',
          height: '600px',
          background: 'linear-gradient(135deg, #03203D 0%, #04152a 100%)',
          borderRadius: '1.5rem',
          border: '2px solid rgba(215, 225, 80, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Canvas for connections */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Tech Nodes */}
        {currentUseCase.technologies.map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <div
              key={tech.id}
              className="absolute tech-node"
              style={{
                position: 'absolute',
                left: `${tech.position.x}%`,
                top: `${tech.position.y}%`,
                transform: 'translate(-50%, -50%)',
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                zIndex: 10
              }}
            >
              <div className="relative group">
                {/* Main Circle Node */}
                <div
                  className="relative bg-white rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    border: '3px solid rgba(215, 225, 80, 0.3)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.15)'
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(215, 225, 80, 0.4), 0 0 40px rgba(215, 225, 80, 0.2)'
                    e.currentTarget.style.borderColor = '#D7E150'
                    e.currentTarget.style.borderWidth = '4px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)'
                    e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.3)'
                    e.currentTarget.style.borderWidth = '3px'
                  }}
                >
                  {/* Animated Pulse Ring */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      border: '2px solid #D7E150',
                      borderRadius: '50%',
                      animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                      opacity: 0
                    }}
                  />

                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(215, 225, 80, 0.2), transparent 70%)',
                      pointerEvents: 'none',
                      borderRadius: '50%',
                      transform: 'scale(1.5)'
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <IconComponent
                      size={36}
                      strokeWidth={1.8}
                      style={{ color: '#03203D' }}
                    />
                  </div>
                </div>

                {/* Label and Percentage - Positioned Below */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  style={{
                    top: '105px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    transition: 'opacity 0.3s ease',
                    textAlign: 'center'
                  }}
                >
                  <div
                    className="bg-white rounded-lg px-3 py-2 shadow-lg"
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '0.5rem',
                      padding: '0.5rem 0.75rem',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      border: '2px solid #D7E150'
                    }}
                  >
                    <h4 className="font-semibold text-sm mb-1" style={{ fontSize: '0.875rem', fontWeight: '600', color: '#03203D', marginBottom: '0.25rem' }}>
                      {tech.name}
                    </h4>
                    <div
                      className="px-2 py-1 rounded-full mx-auto"
                      style={{
                        backgroundColor: 'rgba(215, 225, 80, 0.2)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '1rem',
                        width: 'fit-content',
                        margin: '0 auto'
                      }}
                    >
                      <span className="text-xs font-bold" style={{ color: '#03203D', fontSize: '0.75rem', fontWeight: '700' }}>
                        {tech.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Learn More Link */}
      <div className="mt-8 text-center" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link
          href={currentUseCase.link}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-500"
          style={{
            backgroundColor: '#D7E150',
            color: '#03203D',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E9ECDD'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(215, 225, 80, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#D7E150'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Explore {currentUseCase.title}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}
