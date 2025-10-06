'use client'

import { useState, useEffect, useCallback } from 'react'
import { Code2, Server, Cloud, Database, Brain, Zap, ChevronLeft, ChevronRight, ArrowRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface TechItem {
  name: string
  icon: LucideIcon
  percentage: number
}

interface UseCase {
  title: string
  description: string
  technologies: TechItem[]
  link: string
  color: string
}

const useCases: UseCase[] = [
  {
    title: 'Data Analytics Platform',
    description: 'Build comprehensive analytics dashboards with real-time data processing and visualization',
    technologies: [
      { name: 'Python', icon: Code2, percentage: 90 },
      { name: 'PostgreSQL', icon: Database, percentage: 85 },
      { name: 'React', icon: Code2, percentage: 80 },
      { name: 'AWS', icon: Cloud, percentage: 75 },
    ],
    link: '/solutions/data-analytics',
    color: '#D7E150'
  },
  {
    title: 'Machine Learning Pipeline',
    description: 'Deploy scalable ML models with automated training and inference infrastructure',
    technologies: [
      { name: 'TensorFlow', icon: Brain, percentage: 95 },
      { name: 'Python', icon: Code2, percentage: 90 },
      { name: 'Docker', icon: Server, percentage: 85 },
      { name: 'AWS', icon: Cloud, percentage: 80 },
    ],
    link: '/solutions/ml-models',
    color: '#D7E150'
  },
  {
    title: 'Real-time Data Processing',
    description: 'Process millions of events per second with distributed streaming architecture',
    technologies: [
      { name: 'Apache Spark', icon: Zap, percentage: 90 },
      { name: 'Node.js', icon: Server, percentage: 85 },
      { name: 'MongoDB', icon: Database, percentage: 80 },
      { name: 'Docker', icon: Server, percentage: 75 },
    ],
    link: '/solutions/data-pipelines',
    color: '#D7E150'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Design and deploy scalable cloud-native applications with high availability',
    technologies: [
      { name: 'AWS', icon: Cloud, percentage: 95 },
      { name: 'Docker', icon: Server, percentage: 90 },
      { name: 'Node.js', icon: Server, percentage: 85 },
      { name: 'PostgreSQL', icon: Database, percentage: 80 },
    ],
    link: '/solutions/cloud',
    color: '#D7E150'
  }
]

export default function TechStackCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev + 1) % useCases.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }, [isAnimating])

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  const currentUseCase = useCases[currentIndex]

  return (
    <div className="relative w-full" style={{ width: '100%' }}>
      {/* Main Carousel Container */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #03203D 0%, #04152a 100%)',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          border: '1px solid rgba(215, 225, 80, 0.2)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Animated Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(215, 225, 80, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(215, 225, 80, 0.3) 0%, transparent 50%)`,
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />

        <div className="relative z-10 p-12" style={{ padding: '3rem' }}>
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* Left Side - Use Case Info */}
            <div className="flex flex-col justify-center">
              <div
                className="inline-block px-4 py-2 rounded-full mb-6"
                style={{
                  backgroundColor: 'rgba(215, 225, 80, 0.1)',
                  border: '1px solid rgba(215, 225, 80, 0.3)',
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  marginBottom: '1.5rem',
                  width: 'fit-content'
                }}
              >
                <span style={{ color: '#D7E150', fontSize: '0.875rem', fontWeight: '600' }}>
                  Use Case {currentIndex + 1} of {useCases.length}
                </span>
              </div>

              <h3
                className="text-4xl font-bold mb-4"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#E9ECDD',
                  marginBottom: '1rem',
                  lineHeight: '1.2'
                }}
              >
                {currentUseCase.title}
              </h3>

              <p
                className="text-lg mb-8"
                style={{
                  fontSize: '1.125rem',
                  color: 'rgba(233, 236, 221, 0.8)',
                  marginBottom: '2rem',
                  lineHeight: '1.6'
                }}
              >
                {currentUseCase.description}
              </p>

              <Link
                href={currentUseCase.link}
                className="inline-flex items-center gap-2 font-semibold transition-all duration-300"
                style={{
                  color: '#D7E150',
                  fontSize: '1rem',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  width: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '1rem'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '0.5rem'
                }}
              >
                Learn More <ArrowRight size={20} />
              </Link>
            </div>

            {/* Right Side - Tech Stack Bars */}
            <div className="flex flex-col justify-center gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {currentUseCase.technologies.map((tech, index) => {
                const IconComponent = tech.icon
                return (
                  <div
                    key={index}
                    className="tech-item"
                    style={{
                      opacity: 0,
                      animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
                    }}
                  >
                    <div className="flex items-center justify-between mb-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <IconComponent size={20} style={{ color: '#D7E150' }} />
                        <span style={{ color: '#E9ECDD', fontSize: '1rem', fontWeight: '500' }}>{tech.name}</span>
                      </div>
                      <span style={{ color: '#D7E150', fontSize: '1rem', fontWeight: '600' }}>{tech.percentage}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div
                      className="relative h-3 rounded-full overflow-hidden"
                      style={{
                        backgroundColor: 'rgba(233, 236, 221, 0.1)',
                        borderRadius: '0.75rem',
                        height: '0.75rem',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      {/* Animated Fill */}
                      <div
                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          backgroundColor: '#D7E150',
                          width: `${tech.percentage}%`,
                          borderRadius: '0.75rem',
                          height: '100%',
                          boxShadow: '0 0 10px rgba(215, 225, 80, 0.5)',
                          animation: `slideIn 1s ease-out ${index * 0.1}s forwards`,
                          backgroundImage: 'linear-gradient(90deg, transparent, rgba(233, 236, 221, 0.3), transparent)',
                          backgroundSize: '200% 100%',
                          backgroundRepeat: 'no-repeat',
                          animationName: 'slideIn, shimmerBar',
                          animationDuration: '1s, 2s',
                          animationDelay: `${index * 0.1}s, ${index * 0.1 + 1}s`,
                          animationIterationCount: '1, infinite',
                          animationTimingFunction: 'ease-out, linear'
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3rem' }}>
            {/* Dots Indicator */}
            <div className="flex gap-2" style={{ display: 'flex', gap: '0.5rem' }}>
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className="transition-all duration-300"
                  style={{
                    width: currentIndex === index ? '2.5rem' : '0.75rem',
                    height: '0.75rem',
                    borderRadius: '0.5rem',
                    backgroundColor: currentIndex === index ? '#D7E150' : 'rgba(233, 236, 221, 0.3)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-3" style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={prevSlide}
                className="p-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(233, 236, 221, 0.1)',
                  border: '1px solid rgba(233, 236, 221, 0.2)',
                  padding: '0.75rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.2)'
                  e.currentTarget.style.borderColor = '#D7E150'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(233, 236, 221, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(233, 236, 221, 0.2)'
                }}
              >
                <ChevronLeft size={24} style={{ color: '#E9ECDD' }} />
              </button>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(233, 236, 221, 0.1)',
                  border: '1px solid rgba(233, 236, 221, 0.2)',
                  padding: '0.75rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.2)'
                  e.currentTarget.style.borderColor = '#D7E150'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(233, 236, 221, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(233, 236, 221, 0.2)'
                }}
              >
                <ChevronRight size={24} style={{ color: '#E9ECDD' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
