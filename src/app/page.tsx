'use client'

import Link from 'next/link'
import { ArrowRight, BarChart3, Database, Brain, TrendingUp, Code2, Server, Cloud, Box, Zap, PieChart, Leaf, FileCode, Settings, CloudCog, Network, Hexagon } from 'lucide-react'
import ParticleBackground from '@/components/three/ParticleBackground'
import FloatingShapes from '@/components/three/FloatingShapes'
import InteractiveBackground from '@/components/three/InteractiveBackground'
import TechStackBackground from '@/components/three/TechStackBackground'
import TechStackNetwork from '@/components/ui/TechStackNetwork'
import ProvenResults from '@/components/ui/ProvenResults'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const heroElement = heroRef.current
    heroElement?.addEventListener('mousemove', handleMouseMove)

    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => {
      heroElement?.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <div style={{margin: 0, padding: 0, width: '100%'}}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-red-500 overflow-hidden"
        style={{
          background: '#03203D',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          width: '100%'
        }}
      >
        {/* Spotlight Effect */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(215, 225, 80, 0.15), transparent 40%)`,
            transition: 'background 0.3s ease'
          }}
        />

        <ParticleBackground />
        <FloatingShapes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center', zIndex: 10}}>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in"
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              color: 'white',
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            <span
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(90deg, #D7E150 0%, #E9ECDD 50%, #D7E150 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '4rem',
                fontWeight: '900',
                animation: 'shimmer 3s linear infinite'
              }}
            >
              ALTDEV
            </span>
            <br />
            <span className="text-4xl md:text-6xl" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#E9ECDD'}}>DATA-DRIVEN INNOVATION</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            style={{
              fontSize: '1.25rem',
              color: 'rgba(233, 236, 221, 0.9)',
              marginBottom: '2rem',
              maxWidth: '48rem',
              margin: '0 auto 2rem auto',
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}
          >
            We transform raw data into actionable insights, building intelligent solutions that drive measurable business outcomes.
            Every decision backed by data, every solution powered by analytics.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'fadeInUp 0.8s ease-out 0.4s both'
            }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl group"
              style={{
                backgroundColor: '#D7E150',
                color: '#03203D',
                padding: '1rem 2.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                fontWeight: '700',
                boxShadow: '0 10px 25px rgba(215, 225, 80, 0.3)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E9ECDD';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(215, 225, 80, 0.5), 0 0 30px rgba(215, 225, 80, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D7E150';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(215, 225, 80, 0.3)';
              }}
            >
              Get Started <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: 'transparent',
                color: '#E9ECDD',
                padding: '1rem 2.5rem',
                borderRadius: '2rem',
                border: '2px solid rgba(233, 236, 221, 0.3)',
                textDecoration: 'none',
                fontWeight: '600',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(233, 236, 221, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(233, 236, 221, 0.6)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(233, 236, 221, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(233, 236, 221, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        ref={servicesRef}
        className="py-20 bg-white relative"
        style={{padding: '5rem 0', backgroundColor: '#f8fafc', position: 'relative', margin: 0, width: '100%'}}
      >
        <InteractiveBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>
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
              className="text-4xl font-bold text-secondary-900 mb-4"
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '1rem',
                background: 'linear-gradient(90deg, #1e293b 0%, #475569 50%, #1e293b 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Data-Driven Solutions
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: '#475569', maxWidth: '48rem', margin: '0 auto'}}>
              We leverage advanced analytics, machine learning, and data intelligence to build solutions that provide measurable ROI and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            {[
              {
                icon: <BarChart3 size={40} />,
                title: 'Data Analytics',
                description: 'Transform your data into actionable insights with advanced analytics and real-time dashboards.'
              },
              {
                icon: <Database size={40} />,
                title: 'Data Engineering',
                description: 'Build robust data pipelines and architectures that scale with your business growth.'
              },
              {
                icon: <Brain size={40} />,
                title: 'Machine Learning',
                description: 'Implement intelligent algorithms that learn from your data to predict and optimize outcomes.'
              },
              {
                icon: <TrendingUp size={40} />,
                title: 'Business Intelligence',
                description: 'Make data-driven decisions with comprehensive BI solutions and predictive analytics.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center hover:scale-105 transition-transform duration-300 group"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(30, 41, 59, 0.1)',
                  padding: '1.5rem',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 0.1}s`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(215, 225, 80, 0.25), 0 0 20px rgba(215, 225, 80, 0.15)';
                  e.currentTarget.style.borderColor = '#D7E150';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(30, 41, 59, 0.1)';
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(215, 225, 80, 0.05), transparent 70%)',
                    pointerEvents: 'none'
                  }}
                />
                <div
                  className="text-blue-600 mb-4 flex justify-center relative z-10"
                  style={{
                    color: '#D7E150',
                    marginBottom: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10" style={{fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.75rem'}}>{service.title}</h3>
                <p className="text-gray-600 relative z-10" style={{color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6'}}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Carousel Section */}
      <section className="py-20 bg-white relative overflow-hidden" style={{padding: '5rem 0', backgroundColor: '#f8fafc', margin: 0, width: '100%', position: 'relative', overflow: 'hidden'}}>
        <TechStackBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>
          <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="text-4xl font-bold mb-4" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#03203D', marginBottom: '1rem'}}>Technology Stacks for Every Use Case</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: '#475569', maxWidth: '48rem', margin: '0 auto'}}>
              Explore how we combine cutting-edge technologies to deliver solutions tailored to your specific needs
            </p>
          </div>

          <TechStackNetwork />
        </div>
      </section>

      {/* Technology Icons Grid */}
      <section className="py-20 bg-white relative overflow-hidden" style={{padding: '5rem 0', backgroundColor: '#ffffff', margin: 0, width: '100%', position: 'relative', overflow: 'hidden'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>
          <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="text-4xl font-bold mb-4" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#03203D', marginBottom: '1rem'}}>Our Technology Expertise</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: '#475569', maxWidth: '48rem', margin: '0 auto'}}>
              We leverage cutting-edge technologies to build robust, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem'}}>
            {[
              { name: 'Python', Icon: Code2 },
              { name: 'React', Icon: Code2 },
              { name: 'Node.js', Icon: Server },
              { name: 'PostgreSQL', Icon: Database },
              { name: 'AWS', Icon: Cloud },
              { name: 'Azure', Icon: CloudCog },
              { name: 'Docker', Icon: Box },
              { name: 'Kubernetes', Icon: Hexagon },
              { name: 'Terraform', Icon: Settings },
              { name: 'TensorFlow', Icon: Brain },
              { name: 'Apache Spark', Icon: Zap },
              { name: 'Tableau', Icon: PieChart },
              { name: 'Fabric', Icon: Network },
              { name: 'MongoDB', Icon: Leaf },
              { name: 'Cassandra', Icon: Database },
              { name: 'TypeScript', Icon: FileCode }
            ].map((tech, index) => {
              const IconComponent = tech.Icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '2px solid transparent',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(215, 225, 80, 0.25)';
                    e.currentTarget.style.borderColor = '#D7E150';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  {/* Animated background gradient on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(215, 225, 80, 0.1), transparent 70%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Icon with pulsing effect */}
                  <div
                    className="mb-3 relative z-10"
                    style={{
                      marginBottom: '0.75rem',
                      position: 'relative',
                      animation: 'pulse 3s ease-in-out infinite'
                    }}
                  >
                    <IconComponent
                      size={48}
                      strokeWidth={1.5}
                      className="transition-all duration-300 group-hover:scale-110"
                      style={{
                        color: '#03203D',
                        filter: 'drop-shadow(0 2px 4px rgba(3, 32, 61, 0.1))'
                      }}
                    />
                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'radial-gradient(circle, rgba(215, 225, 80, 0.3), transparent 70%)',
                        filter: 'blur(10px)',
                        transform: 'scale(1.5)'
                      }}
                    />
                  </div>

                  <h3 className="text-sm font-semibold text-center relative z-10" style={{fontSize: '0.875rem', fontWeight: '600', color: '#03203D', textAlign: 'center'}}>
                    {tech.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <ProvenResults />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white" style={{padding: '5rem 0', backgroundColor: '#03203D', margin: 0, width: '100%'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center'}}>
          <h2 className="text-4xl font-bold mb-4" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1rem'}}>Ready to Unlock Your Data&apos;s Potential?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem auto'}}>
            Transform your business with data-driven insights. Let&apos;s discuss how our analytics expertise can drive measurable growth for your organization.
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center" style={{
            backgroundColor: '#D7E150',
            color: '#03203D',
            fontWeight: '700',
            padding: '1rem 2.5rem',
            borderRadius: '2rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 25px rgba(215, 225, 80, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E9ECDD';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(215, 225, 80, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#D7E150';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(215, 225, 80, 0.3)';
          }}>
            Start Your Project <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
