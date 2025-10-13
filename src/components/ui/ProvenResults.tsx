'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, Award, Zap, LucideIcon } from 'lucide-react'

interface ResultCard {
  icon: LucideIcon
  number: string
  suffix: string
  label: string
  description: string
}

const results: ResultCard[] = [
  {
    icon: TrendingUp,
    number: '300',
    suffix: '%',
    label: 'Revenue Growth',
    description: 'Data-driven strategies that multiply business value'
  },
  {
    icon: Users,
    number: '150',
    suffix: '+',
    label: 'Enterprise Clients',
    description: 'Trusted by leading organizations across industries'
  },
  {
    icon: Award,
    number: '95',
    suffix: '%',
    label: 'Success Rate',
    description: 'Delivering measurable outcomes on every engagement'
  },
  {
    icon: Zap,
    number: '24',
    suffix: '/7',
    label: 'Real-Time Analytics',
    description: 'Continuous insights powering critical business decisions'
  }
]

export default function ProvenResults() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Counter animation
  useEffect(() => {
    if (!isVisible) return

    const targets = [300, 150, 95, 24]
    const durations = [2000, 2000, 2000, 2000] // 2 seconds for each
    const steps = 60

    targets.forEach((target, index) => {
      let currentStep = 0
      const increment = target / steps
      const stepDuration = durations[index] / steps

      const timer = setInterval(() => {
        currentStep++
        if (currentStep <= steps) {
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = Math.min(Math.floor(increment * currentStep), target)
            return newCounters
          })
        } else {
          clearInterval(timer)
        }
      }, stepDuration)
    })
  }, [isVisible])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #051D2E 0%, #04152a 100%)',
        margin: 0,
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(215, 225, 80, 0.4) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(215, 225, 80, 0.4) 0%, transparent 50%)`,
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        {/* Section Title */}
        <div
          className="text-center mb-16"
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, rgba(233, 236, 221, 0.6) 0%, #E9ECDD 50%, rgba(233, 236, 221, 0.6) 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem'
            }}
          >
            Impact by the Numbers
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{
              fontSize: '1.125rem',
              color: 'rgba(233, 236, 221, 0.7)',
              maxWidth: '48rem',
              margin: '0 auto'
            }}
          >
            Measurable results that demonstrate our dedication to excellence and client success.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {results.map((result, index) => {
            const IconComponent = result.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className="card-wrapper"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
                  position: 'relative'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                {/* Card */}
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(3, 32, 61, 0.5)',
                    backdropFilter: 'blur(20px)',
                    border: isHovered ? '1px solid rgba(215, 225, 80, 0.5)' : '1px solid rgba(233, 236, 221, 0.1)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: isHovered
                      ? '0 20px 60px rgba(215, 225, 80, 0.3), 0 0 40px rgba(215, 225, 80, 0.2)'
                      : '0 4px 20px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  {/* Spotlight Effect */}
                  {isHovered && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(215, 225, 80, 0.15), transparent 40%)`,
                        transition: 'background 0.1s ease'
                      }}
                    />
                  )}

                  {/* Animated Particles */}
                  {isHovered && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="particle"
                          style={{
                            position: 'absolute',
                            width: '4px',
                            height: '4px',
                            backgroundColor: '#F2C864',
                            borderRadius: '50%',
                            opacity: 0.6,
                            animation: `float ${2 + i * 0.3}s ease-in-out infinite`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Icon */}
                  <div
                    className="mb-4"
                    style={{
                      marginBottom: '1.5rem',
                      position: 'relative',
                      zIndex: 10
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        padding: '1rem',
                        backgroundColor: 'rgba(215, 225, 80, 0.1)',
                        borderRadius: '0.75rem',
                        border: '1px solid rgba(215, 225, 80, 0.2)',
                        transition: 'all 0.3s ease',
                        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                      }}
                    >
                      <IconComponent
                        size={32}
                        style={{
                          color: '#F2C864',
                          filter: isHovered ? 'drop-shadow(0 0 8px rgba(215, 225, 80, 0.6))' : 'none',
                          transition: 'filter 0.3s ease'
                        }}
                      />
                    </div>
                  </div>

                  {/* Number */}
                  <div
                    className="mb-2"
                    style={{
                      marginBottom: '0.5rem',
                      position: 'relative',
                      zIndex: 10
                    }}
                  >
                    <h3
                      className="font-bold"
                      style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        color: '#F2C864',
                        lineHeight: '1',
                        textShadow: isHovered ? '0 0 20px rgba(215, 225, 80, 0.5)' : 'none',
                        transition: 'text-shadow 0.3s ease'
                      }}
                    >
                      {counters[index]}
                      <span style={{ fontSize: '2rem' }}>{result.suffix}</span>
                    </h3>
                  </div>

                  {/* Label */}
                  <div
                    className="mb-2"
                    style={{
                      marginBottom: '0.75rem',
                      position: 'relative',
                      zIndex: 10
                    }}
                  >
                    <h4
                      className="font-semibold"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#E9ECDD'
                      }}
                    >
                      {result.label}
                    </h4>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(233, 236, 221, 0.7)',
                      lineHeight: '1.5',
                      position: 'relative',
                      zIndex: 10
                    }}
                  >
                    {result.description}
                  </p>

                  {/* Border Glow Animation */}
                  {isHovered && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        borderRadius: '1rem',
                        padding: '1px',
                        background: 'linear-gradient(45deg, transparent, rgba(215, 225, 80, 0.5), transparent)',
                        backgroundSize: '200% 200%',
                        animation: 'borderGlow 2s linear infinite'
                      }}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.3;
          }
        }

        @keyframes borderGlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  )
}
