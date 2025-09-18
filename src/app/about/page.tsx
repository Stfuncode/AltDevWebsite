'use client'

import Link from 'next/link'
import { ArrowRight, Database, Target, BarChart, Lightbulb } from 'lucide-react'
import DataVisualization from '@/components/three/DataVisualization'

export default function About() {
  return (
    <div className="min-h-screen py-20 relative" style={{minHeight: '100vh', padding: '5rem 0', backgroundColor: '#f8fafc', margin: 0, width: '100%', position: 'relative'}}>
      <div className="absolute inset-0 opacity-30">
        <DataVisualization />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>
        
        {/* Hero Section */}
        <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '3rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1.5rem'}}>
            About <span style={{color: '#fbbf24'}}>ALTDEV</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: '#475569', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.7'}}>
            We are a team of data scientists, engineers, and analysts who believe that every business decision should be backed by data. 
            We transform raw information into <strong style={{color: '#fbbf24'}}>actionable intelligence</strong> that drives measurable results.
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
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center" style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(30, 41, 59, 0.1)',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(251, 191, 36, 0.2)';
              e.currentTarget.style.borderColor = '#fbbf24';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(30, 41, 59, 0.1)';
            }}>
              <div className="mb-4 flex justify-center" style={{color: '#fbbf24', marginBottom: '1rem', display: 'flex', justifyContent: 'center'}}>{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.75rem'}}>{value.title}</h3>
              <p style={{color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6'}}>{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16" style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          padding: '3rem',
          marginBottom: '4rem'
        }}>
          <h2 className="text-3xl font-bold text-center mb-6" style={{fontSize: '2rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1.5rem', textAlign: 'center'}}>Our Mission</h2>
          <p className="text-lg text-center max-w-4xl mx-auto" style={{fontSize: '1.125rem', color: '#475569', maxWidth: '56rem', margin: '0 auto', lineHeight: '1.7', textAlign: 'center'}}>
            At AltDev, we believe that data is the most valuable asset of the 21st century. 
            Our mission is to democratize data science and make advanced analytics accessible to businesses of all sizes. 
            We transform complex datasets into clear, actionable insights that drive strategic decisions, optimize operations, 
            and unlock new revenue opportunities. Every solution we build is designed to turn your data into your competitive advantage.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center" style={{textAlign: 'center'}}>
          <h2 className="text-3xl font-bold mb-4" style={{fontSize: '2rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem'}}>Ready to Work Together?</h2>
          <p className="text-lg mb-8" style={{fontSize: '1.125rem', color: '#475569', marginBottom: '2rem'}}>
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <Link href="/contact" className="inline-flex items-center" style={{
            backgroundColor: '#fbbf24',
            color: '#1e293b',
            fontWeight: '700',
            padding: '1rem 2.5rem',
            borderRadius: '2rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 25px rgba(251, 191, 36, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f59e0b';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(251, 191, 36, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#fbbf24';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(251, 191, 36, 0.3)';
          }}>
            Get Started <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

      </div>
    </div>
  )
}