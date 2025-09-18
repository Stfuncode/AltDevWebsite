'use client'

import Link from 'next/link'
import { ArrowRight, BarChart3, Database, Brain, TrendingUp } from 'lucide-react'
import ParticleBackground from '@/components/three/ParticleBackground'
import FloatingShapes from '@/components/three/FloatingShapes'
import InteractiveBackground from '@/components/three/InteractiveBackground'

export default function Home() {
  return (
    <div style={{margin: 0, padding: 0, width: '100%'}}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-red-500 overflow-hidden" style={{background: '#1e293b', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', margin: 0, padding: 0, width: '100%'}}>
        <ParticleBackground />
        <FloatingShapes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center', zIndex: 10}}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.1', color: 'white'}}>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent" style={{color: '#fbbf24', fontSize: '4rem', fontWeight: '900'}}>ALTDEV</span>
            <br />
            <span className="text-4xl md:text-6xl" style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'white'}}>DATA-DRIVEN INNOVATION</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem auto'}}>
            We transform raw data into actionable insights, building intelligent solutions that drive measurable business outcomes. 
            Every decision backed by data, every solution powered by analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center'}}>
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: '#fbbf24', 
                color: '#1e293b', 
                padding: '1rem 2.5rem', 
                borderRadius: '2rem', 
                textDecoration: 'none',
                fontWeight: '700',
                boxShadow: '0 10px 25px rgba(251, 191, 36, 0.3)',
                transition: 'all 0.3s ease'
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
              }}
            >
              Get Started <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: 'transparent', 
                color: 'white', 
                padding: '1rem 2.5rem', 
                borderRadius: '2rem', 
                border: '2px solid rgba(255, 255, 255, 0.3)', 
                textDecoration: 'none',
                fontWeight: '600',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white relative" style={{padding: '5rem 0', backgroundColor: '#f8fafc', position: 'relative', margin: 0, width: '100%'}}>
        <InteractiveBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>
          <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="text-4xl font-bold text-secondary-900 mb-4" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem'}}>Data-Driven Solutions</h2>
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
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center hover:scale-105 transition-transform duration-300" style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(30, 41, 59, 0.1)',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(251, 191, 36, 0.2)';
                e.currentTarget.style.borderColor = '#fbbf24';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(30, 41, 59, 0.1)';
              }}>
                <div className="text-blue-600 mb-4 flex justify-center" style={{color: '#fbbf24', marginBottom: '1rem', display: 'flex', justifyContent: 'center'}}>{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.75rem'}}>{service.title}</h3>
                <p className="text-gray-600" style={{color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6'}}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white" style={{padding: '5rem 0', backgroundColor: '#1e293b', margin: 0, width: '100%'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center'}}>
          <h2 className="text-4xl font-bold mb-4" style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem'}}>Ready to Unlock Your Data&apos;s Potential?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem auto'}}>
            Transform your business with data-driven insights. Let&apos;s discuss how our analytics expertise can drive measurable growth for your organization.
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center" style={{
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
            Start Your Project <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
