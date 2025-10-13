'use client'

import Link from 'next/link'
import { ArrowRight, Target, TrendingUp, Users, CheckCircle2, BarChart3, Database } from 'lucide-react'
import DataVisualization from '@/components/three/DataVisualization'

export default function DataStrategy() {
  return (
    <div className="min-h-screen py-20 relative" style={{minHeight: '100vh', padding: '5rem 0', backgroundColor: '#051D2E', margin: 0, width: '100%', position: 'relative'}}>
      <div className="absolute inset-0 opacity-30">
        <DataVisualization />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>

        {/* Hero Section */}
        <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '3.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1.5rem'}}>
            Data <span style={{color: '#F2C864'}}>Strategy</span> Consulting
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.7'}}>
            Transform your organization with a comprehensive data strategy that aligns technology, people, and processes to drive measurable business outcomes.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
          {[
            {
              icon: <Target size={48} />,
              title: 'Aligned Goals',
              description: 'Connect data initiatives directly to business objectives and strategic priorities'
            },
            {
              icon: <TrendingUp size={48} />,
              title: 'Competitive Edge',
              description: 'Leverage data as a strategic asset to outpace competitors and capture market opportunities'
            },
            {
              icon: <Users size={48} />,
              title: 'Data-Driven Culture',
              description: 'Build organizational capabilities and foster data literacy across all levels'
            }
          ].map((benefit, index) => (
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
                e.currentTarget.style.borderColor = '#F2C864';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.2)';
              }}
            >
              <div className="mb-4 flex justify-center" style={{color: '#F2C864', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{fontSize: '1.5rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '1rem'}}>{benefit.title}</h3>
              <p style={{color: 'rgba(233, 236, 221, 0.8)', fontSize: '1rem', lineHeight: '1.6'}}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* What We Deliver */}
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
            What We <span style={{color: '#F2C864'}}>Deliver</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                title: 'Data Maturity Assessment',
                description: 'Comprehensive evaluation of your current data capabilities, infrastructure, and organizational readiness'
              },
              {
                title: 'Strategic Roadmap',
                description: 'Phased implementation plan with clear milestones, timelines, and resource requirements'
              },
              {
                title: 'Technology Selection',
                description: 'Expert guidance on choosing the right tools, platforms, and architectures for your needs'
              },
              {
                title: 'Governance Framework',
                description: 'Policies, standards, and processes to ensure data quality, security, and compliance'
              },
              {
                title: 'Use Case Prioritization',
                description: 'Identify and prioritize high-impact data initiatives based on business value and feasibility'
              },
              {
                title: 'Change Management',
                description: 'Strategies to drive adoption, build skills, and transform organizational culture'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
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
                <CheckCircle2 size={24} style={{color: '#F2C864', flexShrink: 0, marginTop: '0.25rem'}} />
                <div>
                  <h4 className="font-semibold mb-1" style={{fontSize: '1.125rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '0.5rem'}}>{item.title}</h4>
                  <p style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.95rem', lineHeight: '1.5'}}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
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
            Our <span style={{color: '#F2C864'}}>Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'Understand your business goals, challenges, and current data landscape',
                icon: <Database size={32} />
              },
              {
                step: '02',
                title: 'Assessment',
                desc: 'Evaluate data maturity, identify gaps, and benchmark against industry standards',
                icon: <BarChart3 size={32} />
              },
              {
                step: '03',
                title: 'Design',
                desc: 'Create a comprehensive strategy with prioritized initiatives and clear roadmap',
                icon: <Target size={32} />
              },
              {
                step: '04',
                title: 'Enablement',
                desc: 'Support execution with change management, training, and ongoing guidance',
                icon: <Users size={32} />
              }
            ].map((phase, index) => (
              <div key={index} className="text-center" style={{textAlign: 'center'}}>
                <div
                  className="mb-4 flex items-center justify-center"
                  style={{
                    width: '5rem',
                    height: '5rem',
                    backgroundColor: 'rgba(215, 225, 80, 0.1)',
                    color: '#F2C864',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto',
                    border: '2px solid rgba(215, 225, 80, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.2)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.1)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {phase.icon}
                </div>
                <div className="text-sm font-bold mb-2" style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#F2C864', marginBottom: '0.5rem'}}>STEP {phase.step}</div>
                <h3 className="text-lg font-semibold mb-2" style={{fontSize: '1.25rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '0.5rem'}}>{phase.title}</h3>
                <p style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.9rem', lineHeight: '1.5'}}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" style={{textAlign: 'center'}}>
          <h2 className="text-3xl font-bold mb-4" style={{fontSize: '2rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1rem'}}>Ready to Build Your Data Strategy?</h2>
          <p className="text-lg mb-8" style={{fontSize: '1.125rem', color: 'rgba(233, 236, 221, 0.8)', marginBottom: '2rem'}}>
            Let&apos;s discuss how we can help you create a roadmap for data-driven success.
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
