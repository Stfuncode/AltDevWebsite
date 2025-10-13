'use client'

import Link from 'next/link'
import { ArrowRight, Map, Compass, Flag, CheckCircle2, TrendingUp, Target, Calendar } from 'lucide-react'
import DataVisualization from '@/components/three/DataVisualization'

export default function AnalyticsRoadmap() {
  return (
    <div className="min-h-screen py-20 relative" style={{minHeight: '100vh', padding: '5rem 0', backgroundColor: '#051D2E', margin: 0, width: '100%', position: 'relative'}}>
      <div className="absolute inset-0 opacity-30">
        <DataVisualization />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>

        {/* Hero Section */}
        <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '3.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1.5rem'}}>
            Analytics <span style={{color: '#F2C864'}}>Roadmap</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.7'}}>
            Build a strategic plan to evolve your analytics capabilities from basic reporting to advanced predictive insights. We create actionable roadmaps that deliver value at every milestone.
          </p>
        </div>

        {/* Why You Need a Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
          {[
            {
              icon: <Map size={48} />,
              title: 'Clear Direction',
              description: 'Navigate complex analytics initiatives with a structured, phased approach'
            },
            {
              icon: <Target size={48} />,
              title: 'Focused Priorities',
              description: 'Concentrate resources on high-impact analytics projects that drive ROI'
            },
            {
              icon: <TrendingUp size={48} />,
              title: 'Measurable Progress',
              description: 'Track advancement with clear milestones and success metrics at each stage'
            }
          ].map((reason, index) => (
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
              <div className="mb-4 flex justify-center" style={{color: '#F2C864', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{fontSize: '1.5rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '1rem'}}>{reason.title}</h3>
              <p style={{color: 'rgba(233, 236, 221, 0.8)', fontSize: '1rem', lineHeight: '1.6'}}>{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Maturity Levels */}
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
            Analytics <span style={{color: '#F2C864'}}>Maturity Levels</span>
          </h2>
          <div className="space-y-4" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {[
              {
                level: 'Level 1',
                title: 'Descriptive Analytics',
                description: 'Historical reporting and basic dashboards to understand what happened',
                capabilities: ['Standard Reports', 'Basic Dashboards', 'Historical Data Analysis']
              },
              {
                level: 'Level 2',
                title: 'Diagnostic Analytics',
                description: 'Drill-down analysis and data exploration to understand why it happened',
                capabilities: ['Interactive Dashboards', 'Ad-hoc Analysis', 'Root Cause Analysis']
              },
              {
                level: 'Level 3',
                title: 'Predictive Analytics',
                description: 'Statistical models and machine learning to forecast what will happen',
                capabilities: ['Forecasting Models', 'Trend Analysis', 'Pattern Recognition']
              },
              {
                level: 'Level 4',
                title: 'Prescriptive Analytics',
                description: 'Optimization and simulation to recommend what actions to take',
                capabilities: ['Optimization Engines', 'Scenario Planning', 'Automated Recommendations']
              }
            ].map((maturity, index) => (
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
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.1)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div className="flex items-start gap-4" style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <div
                    style={{
                      minWidth: '3rem',
                      height: '3rem',
                      backgroundColor: index === 3 ? '#F2C864' : 'rgba(215, 225, 80, 0.2)',
                      color: index === 3 ? '#051D2E' : '#F2C864',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.125rem',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}
                  >
                    {index + 1}
                  </div>
                  <div style={{flex: 1}}>
                    <div className="mb-1" style={{marginBottom: '0.5rem'}}>
                      <span className="text-sm font-bold" style={{fontSize: '0.875rem', color: '#F2C864', fontWeight: 'bold'}}>{maturity.level}</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2" style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '0.5rem'}}>{maturity.title}</h4>
                    <p className="mb-3" style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem'}}>{maturity.description}</p>
                    <div className="flex flex-wrap gap-2" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                      {maturity.capabilities.map((capability, capIndex) => (
                        <span
                          key={capIndex}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            backgroundColor: 'rgba(215, 225, 80, 0.1)',
                            color: 'rgba(233, 236, 221, 0.9)',
                            border: '1px solid rgba(215, 225, 80, 0.2)'
                          }}
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Components */}
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
            What&apos;s <span style={{color: '#F2C864'}}>Included</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                icon: <Compass size={32} />,
                title: 'Current State Assessment',
                description: 'Evaluate existing analytics capabilities, tools, and data infrastructure'
              },
              {
                icon: <Flag size={32} />,
                title: 'Future State Vision',
                description: 'Define target analytics capabilities aligned with business objectives'
              },
              {
                icon: <Map size={32} />,
                title: 'Phased Implementation Plan',
                description: 'Step-by-step roadmap with timelines, resources, and dependencies'
              },
              {
                icon: <Target size={32} />,
                title: 'Use Case Prioritization',
                description: 'Identify and sequence high-value analytics initiatives'
              },
              {
                icon: <TrendingUp size={32} />,
                title: 'Technology Recommendations',
                description: 'Platform and tool selections for each roadmap phase'
              },
              {
                icon: <Calendar size={32} />,
                title: 'Success Metrics & KPIs',
                description: 'Measurable outcomes and tracking mechanisms for each milestone'
              }
            ].map((component, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg"
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
                <div style={{color: '#F2C864', flexShrink: 0, marginTop: '0.25rem'}}>{component.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1" style={{fontSize: '1.125rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '0.5rem'}}>{component.title}</h4>
                  <p style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.95rem', lineHeight: '1.5'}}>{component.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typical Timeline */}
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
            Typical <span style={{color: '#F2C864'}}>Timeline</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                phase: 'Weeks 1-2',
                title: 'Discovery & Assessment',
                items: ['Stakeholder interviews', 'Current state analysis', 'Quick wins identification']
              },
              {
                phase: 'Weeks 3-4',
                title: 'Strategy & Planning',
                items: ['Future state design', 'Roadmap development', 'Resource planning']
              },
              {
                phase: 'Week 5+',
                title: 'Execution Support',
                items: ['Implementation guidance', 'Progress tracking', 'Continuous optimization']
              }
            ].map((timeline, index) => (
              <div
                key={index}
                className="p-6 rounded-lg text-center"
                style={{
                  padding: '2rem',
                  backgroundColor: 'rgba(215, 225, 80, 0.05)',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(215, 225, 80, 0.1)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="text-sm font-bold mb-2" style={{fontSize: '0.875rem', color: '#F2C864', fontWeight: 'bold', marginBottom: '0.75rem'}}>{timeline.phase}</div>
                <h4 className="font-bold text-lg mb-4" style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1rem'}}>{timeline.title}</h4>
                <ul className="space-y-2" style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  {timeline.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-center gap-2" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
                      <CheckCircle2 size={16} style={{color: '#F2C864', flexShrink: 0}} />
                      <span style={{color: 'rgba(233, 236, 221, 0.8)', fontSize: '0.9rem'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" style={{textAlign: 'center'}}>
          <h2 className="text-3xl font-bold mb-4" style={{fontSize: '2rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1rem'}}>Ready to Plan Your Analytics Journey?</h2>
          <p className="text-lg mb-8" style={{fontSize: '1.125rem', color: 'rgba(233, 236, 221, 0.8)', marginBottom: '2rem'}}>
            Let&apos;s create a roadmap that transforms your analytics capabilities.
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
