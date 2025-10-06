'use client'

import Link from 'next/link'
import { ArrowRight, Zap, RefreshCw, Cloud, Smartphone, Lock, Workflow } from 'lucide-react'
import DataVisualization from '@/components/three/DataVisualization'

export default function DigitalTransformation() {
  return (
    <div className="min-h-screen py-20 relative" style={{minHeight: '100vh', padding: '5rem 0', backgroundColor: '#03203D', margin: 0, width: '100%', position: 'relative'}}>
      <div className="absolute inset-0 opacity-30">
        <DataVisualization />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>

        {/* Hero Section */}
        <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '3.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1.5rem'}}>
            Digital <span style={{color: '#D7E150'}}>Transformation</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.7'}}>
            Modernize your technology infrastructure, processes, and culture to thrive in the digital age. We guide organizations through comprehensive transformation journeys that deliver measurable business value.
          </p>
        </div>

        {/* Transformation Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
          {[
            {
              icon: <Cloud size={48} />,
              title: 'Cloud Migration',
              description: 'Seamlessly move to cloud infrastructure for scalability, reliability, and cost optimization'
            },
            {
              icon: <Workflow size={48} />,
              title: 'Process Automation',
              description: 'Streamline operations with intelligent automation and workflow optimization'
            },
            {
              icon: <Zap size={48} />,
              title: 'Legacy Modernization',
              description: 'Transform outdated systems into modern, agile platforms that drive innovation'
            }
          ].map((area, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg p-6 text-center"
              style={{
                backgroundColor: 'rgba(3, 32, 61, 0.5)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(215, 225, 80, 0.2)',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(215, 225, 80, 0.3)';
                e.currentTarget.style.borderColor = '#D7E150';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.2)';
              }}
            >
              <div className="mb-4 flex justify-center" style={{color: '#D7E150', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>{area.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{fontSize: '1.5rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '1rem'}}>{area.title}</h3>
              <p style={{color: 'rgba(233, 236, 221, 0.8)', fontSize: '1rem', lineHeight: '1.6'}}>{area.description}</p>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div
          className="rounded-xl shadow-lg p-8 mb-16"
          style={{
            backgroundColor: 'rgba(3, 32, 61, 0.5)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(215, 225, 80, 0.2)',
            padding: '3rem',
            marginBottom: '4rem'
          }}
        >
          <h2 className="text-3xl font-bold text-center mb-8" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '2rem', textAlign: 'center'}}>
            Transformation <span style={{color: '#D7E150'}}>Benefits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                icon: <RefreshCw size={32} />,
                title: 'Increased Agility',
                description: 'Respond faster to market changes and customer needs with modern, flexible systems'
              },
              {
                icon: <Zap size={32} />,
                title: 'Enhanced Efficiency',
                description: 'Reduce operational costs and eliminate manual processes through automation'
              },
              {
                icon: <Smartphone size={32} />,
                title: 'Better Experiences',
                description: 'Deliver superior customer and employee experiences across all touchpoints'
              },
              {
                icon: <Cloud size={32} />,
                title: 'Scalability',
                description: 'Build infrastructure that grows with your business without major reinvestment'
              },
              {
                icon: <Lock size={32} />,
                title: 'Security & Compliance',
                description: 'Implement modern security practices and meet regulatory requirements'
              },
              {
                icon: <Workflow size={32} />,
                title: 'Data-Driven Decisions',
                description: 'Enable real-time insights and analytics for smarter business decisions'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg"
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'rgba(215, 225, 80, 0.05)',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(215, 225, 80, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.1)';
                }}
              >
                <div className="mb-3" style={{color: '#D7E150', marginBottom: '1rem'}}>{benefit.icon}</div>
                <h4 className="font-semibold mb-2" style={{fontSize: '1.125rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '0.75rem'}}>{benefit.title}</h4>
                <p style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.95rem', lineHeight: '1.5'}}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Journey */}
        <div
          className="rounded-xl shadow-lg p-8 mb-16"
          style={{
            backgroundColor: 'rgba(3, 32, 61, 0.5)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(215, 225, 80, 0.2)',
            padding: '3rem',
            marginBottom: '4rem'
          }}
        >
          <h2 className="text-3xl font-bold text-center mb-8" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '2rem', textAlign: 'center'}}>
            Your Transformation <span style={{color: '#D7E150'}}>Journey</span>
          </h2>
          <div className="space-y-6" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {[
              {
                phase: 'Phase 1',
                title: 'Vision & Strategy',
                description: 'Define transformation goals, assess current state, and create a detailed roadmap aligned with business objectives',
                duration: '2-4 weeks'
              },
              {
                phase: 'Phase 2',
                title: 'Foundation Building',
                description: 'Establish technical infrastructure, select platforms, and prepare teams for change',
                duration: '4-8 weeks'
              },
              {
                phase: 'Phase 3',
                title: 'Implementation',
                description: 'Execute transformation initiatives in iterative sprints with continuous validation and adjustment',
                duration: '3-6 months'
              },
              {
                phase: 'Phase 4',
                title: 'Optimization & Scale',
                description: 'Refine processes, expand successful initiatives, and ensure sustainable transformation',
                duration: 'Ongoing'
              }
            ].map((phase, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 rounded-lg"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  padding: '2rem',
                  backgroundColor: 'rgba(215, 225, 80, 0.05)',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(215, 225, 80, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.3)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.1)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div
                  style={{
                    minWidth: '3.5rem',
                    height: '3.5rem',
                    backgroundColor: '#D7E150',
                    color: '#03203D',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}
                >
                  {index + 1}
                </div>
                <div style={{flex: 1}}>
                  <div className="flex justify-between items-start mb-2" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                    <h4 className="font-bold text-lg" style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#E9ECDD'}}>{phase.title}</h4>
                    <span className="text-sm" style={{fontSize: '0.875rem', color: '#D7E150', fontWeight: '600'}}>{phase.duration}</span>
                  </div>
                  <p className="text-sm mb-1" style={{fontSize: '0.875rem', color: 'rgba(215, 225, 80, 0.8)', marginBottom: '0.25rem', fontWeight: '600'}}>{phase.phase}</p>
                  <p style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.95rem', lineHeight: '1.5'}}>{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" style={{textAlign: 'center'}}>
          <h2 className="text-3xl font-bold mb-4" style={{fontSize: '2rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1rem'}}>Start Your Digital Transformation</h2>
          <p className="text-lg mb-8" style={{fontSize: '1.125rem', color: 'rgba(233, 236, 221, 0.8)', marginBottom: '2rem'}}>
            Let&apos;s modernize your organization and unlock new opportunities for growth.
          </p>
          <Link href="/contact" className="inline-flex items-center" style={{
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
            Get Started <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

      </div>
    </div>
  )
}
