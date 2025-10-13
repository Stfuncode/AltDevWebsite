'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Database, Target, BarChart, Lightbulb } from 'lucide-react'
import DataVisualization from '@/components/three/DataVisualization'

export default function About() {
  const [missionVisible, setMissionVisible] = useState(false)
  const [visionVisible, setVisionVisible] = useState(false)
  const missionRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === missionRef.current && entry.isIntersecting) {
            setMissionVisible(true)
          }
          if (entry.target === visionRef.current && entry.isIntersecting) {
            setVisionVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (missionRef.current) observer.observe(missionRef.current)
    if (visionRef.current) observer.observe(visionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen py-20 relative" style={{minHeight: '100vh', padding: '5rem 0', backgroundColor: '#051D2E', margin: 0, width: '100%', position: 'relative'}}>
      <div className="absolute inset-0 opacity-30">
        <DataVisualization />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>

        {/* Hero Section */}
        <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '3rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1.5rem'}}>
            About <span style={{color: '#F2C864'}}>ALTDEV</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.7'}}>
            We are a team of data scientists, engineers, and analysts who believe that every business decision should be backed by data.
            We transform raw information into <strong style={{color: '#F2C864'}}>actionable intelligence</strong> that drives measurable results.
          </p>
        </div>

        {/* Mission Statement */}
        <div
          ref={missionRef}
          className="rounded-xl shadow-lg p-8 mb-16"
          style={{
            backgroundColor: 'rgba(3, 32, 61, 0.5)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(215, 225, 80, 0.2)',
            padding: '3rem',
            marginBottom: '4rem',
            opacity: missionVisible ? 1 : 0,
            transform: missionVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h2 className="text-3xl font-bold text-center mb-6" style={{fontSize: '2rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1.5rem', textAlign: 'center'}}>Our Mission</h2>
          <p className="text-lg text-center max-w-4xl mx-auto" style={{fontSize: '1.125rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '56rem', margin: '0 auto', lineHeight: '1.7', textAlign: 'center'}}>
            At AltDev, we believe that data is the{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F2C864 0%, #E9ECDD 25%, #F2C864 50%, #E9ECDD 75%, #F2C864 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                opacity: missionVisible ? 1 : 0,
                transform: missionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
                display: 'inline-block',
                animation: missionVisible ? 'shimmer 3s linear infinite' : 'none',
                position: 'relative'
              }}
            >
              most valuable asset
            </span>
            {' '}of the 21st century. Our mission is to{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F2C864 0%, #E9ECDD 25%, #F2C864 50%, #E9ECDD 75%, #F2C864 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                opacity: missionVisible ? 1 : 0,
                transform: missionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s',
                display: 'inline-block',
                animation: missionVisible ? 'shimmer 3s linear infinite' : 'none',
                position: 'relative'
              }}
            >
              democratize data science
            </span>
            {' '}and make{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F2C864 0%, #E9ECDD 25%, #F2C864 50%, #E9ECDD 75%, #F2C864 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                opacity: missionVisible ? 1 : 0,
                transform: missionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease-out 0.7s, transform 0.6s ease-out 0.7s',
                display: 'inline-block',
                animation: missionVisible ? 'shimmer 3s linear infinite' : 'none',
                position: 'relative'
              }}
            >
              advanced analytics accessible
            </span>
            {' '}to businesses of all sizes. We transform complex datasets into{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F2C864 0%, #E9ECDD 25%, #F2C864 50%, #E9ECDD 75%, #F2C864 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                opacity: missionVisible ? 1 : 0,
                transform: missionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease-out 0.9s, transform 0.6s ease-out 0.9s',
                display: 'inline-block',
                animation: missionVisible ? 'shimmer 3s linear infinite' : 'none',
                position: 'relative'
              }}
            >
              clear, actionable insights
            </span>
            {' '}that drive strategic decisions, optimize operations, and unlock new revenue opportunities. Every solution we build is designed to turn your data into your{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F2C864 0%, #E9ECDD 25%, #F2C864 50%, #E9ECDD 75%, #F2C864 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                opacity: missionVisible ? 1 : 0,
                transform: missionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease-out 1.1s, transform 0.6s ease-out 1.1s',
                display: 'inline-block',
                animation: missionVisible ? 'shimmer 3s linear infinite' : 'none',
                position: 'relative'
              }}
            >
              competitive advantage
            </span>.
          </p>
        </div>

        {/* Vision Statement */}
        <div
          ref={visionRef}
          className="rounded-xl shadow-lg p-8 mb-16"
          style={{
            backgroundColor: 'rgba(3, 32, 61, 0.5)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(215, 225, 80, 0.2)',
            padding: '3rem',
            marginBottom: '4rem',
            opacity: visionVisible ? 1 : 0,
            transform: visionVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h2 className="text-3xl font-bold text-center mb-6" style={{fontSize: '2rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1.5rem', textAlign: 'center'}}>Our Vision</h2>
          <p className="text-lg text-center max-w-4xl mx-auto" style={{fontSize: '1.125rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '56rem', margin: '0 auto', lineHeight: '1.7', textAlign: 'center'}}>
            We envision a future where{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F2C864 0%, #E9ECDD 25%, #F2C864 50%, #E9ECDD 75%, #F2C864 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                opacity: visionVisible ? 1 : 0,
                transform: visionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
                display: 'inline-block',
                animation: visionVisible ? 'shimmer 3s linear infinite' : 'none',
                position: 'relative'
              }}
            >
              every organization
            </span>
            , regardless of size or industry, has the power to{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F2C864 0%, #E9ECDD 25%, #F2C864 50%, #E9ECDD 75%, #F2C864 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                opacity: visionVisible ? 1 : 0,
                transform: visionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s',
                display: 'inline-block',
                animation: visionVisible ? 'shimmer 3s linear infinite' : 'none',
                position: 'relative'
              }}
            >
              harness their data for transformative growth
            </span>. Through{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F2C864 0%, #E9ECDD 25%, #F2C864 50%, #E9ECDD 75%, #F2C864 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                opacity: visionVisible ? 1 : 0,
                transform: visionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease-out 0.7s, transform 0.6s ease-out 0.7s',
                display: 'inline-block',
                animation: visionVisible ? 'shimmer 3s linear infinite' : 'none',
                position: 'relative'
              }}
            >
              innovative technology and expert guidance
            </span>, we aim to be the{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F2C864 0%, #E9ECDD 25%, #F2C864 50%, #E9ECDD 75%, #F2C864 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                opacity: visionVisible ? 1 : 0,
                transform: visionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease-out 0.9s, transform 0.6s ease-out 0.9s',
                display: 'inline-block',
                animation: visionVisible ? 'shimmer 3s linear infinite' : 'none',
                position: 'relative'
              }}
            >
              trusted partner
            </span>
            {' '}that empowers businesses to make confident, data-driven decisions that shape their success. Our vision is to create a world where{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F2C864 0%, #E9ECDD 25%, #F2C864 50%, #E9ECDD 75%, #F2C864 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                opacity: visionVisible ? 1 : 0,
                transform: visionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease-out 1.1s, transform 0.6s ease-out 1.1s',
                display: 'inline-block',
                animation: visionVisible ? 'shimmer 3s linear infinite' : 'none',
                position: 'relative'
              }}
            >
              insights are immediate, intelligence is accessible
            </span>, and every byte of data becomes a{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F2C864 0%, #E9ECDD 25%, #F2C864 50%, #E9ECDD 75%, #F2C864 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                opacity: visionVisible ? 1 : 0,
                transform: visionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease-out 1.3s, transform 0.6s ease-out 1.3s',
                display: 'inline-block',
                animation: visionVisible ? 'shimmer 3s linear infinite' : 'none',
                position: 'relative'
              }}
            >
              catalyst for innovation
            </span>.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
          {[
            {
              icon: <Database size={40} />,
              title: 'Data-First Approach',
              description: 'Every solution starts with understanding your data landscape and identifying key insights.'
            },
            {
              icon: <Target size={40} />,
              title: 'Measurable Results',
              description: 'We deliver solutions that provide clear ROI and trackable business impact.'
            },
            {
              icon: <BarChart size={40} />,
              title: 'Analytics Expertise',
              description: 'Deep knowledge in statistical analysis, machine learning, and predictive modeling.'
            },
            {
              icon: <Lightbulb size={40} />,
              title: 'Intelligent Automation',
              description: 'We build systems that learn and adapt, reducing manual work and improving accuracy.'
            }
          ].map((value, index) => (
            <div key={index} className="rounded-xl shadow-lg p-6 text-center" style={{
              backgroundColor: 'rgba(3, 32, 61, 0.5)',
              backdropFilter: 'blur(20px)',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(215, 225, 80, 0.2)',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(215, 225, 80, 0.3)';
              e.currentTarget.style.borderColor = '#F2C864';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.2)';
            }}>
              <div className="mb-4 flex justify-center" style={{color: '#F2C864', marginBottom: '1rem', display: 'flex', justifyContent: 'center'}}>{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{fontSize: '1.25rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '0.75rem'}}>{value.title}</h3>
              <p style={{color: 'rgba(233, 236, 221, 0.8)', fontSize: '0.95rem', lineHeight: '1.6'}}>{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center" style={{textAlign: 'center'}}>
          <h2 className="text-3xl font-bold mb-4" style={{fontSize: '2rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1rem'}}>Ready to Work Together?</h2>
          <p className="text-lg mb-8" style={{fontSize: '1.125rem', color: 'rgba(233, 236, 221, 0.8)', marginBottom: '2rem'}}>
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <Link href="/contact" className="inline-flex items-center" style={{
            backgroundColor: '#F2C864',
            color: '#051D2E',
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
            e.currentTarget.style.backgroundColor = '#F2C864';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(215, 225, 80, 0.3)';
          }}>
            Get Started <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

      </div>
    </div>
  )
}