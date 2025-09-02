'use client'

import Link from 'next/link'
import { ArrowRight, BarChart3, Database, Brain, TrendingUp, Globe, Shield, Cpu } from 'lucide-react'
import DataVisualization from '@/components/three/DataVisualization'
import AnimatedDataChart from '@/components/three/AnimatedDataChart'

export default function Services() {
  const services = [
    {
      icon: <BarChart3 size={48} />,
      title: 'Data Analytics & Visualization',
      description: 'Transform raw data into compelling visual narratives and actionable insights using advanced statistical analysis and modern BI tools.',
      features: ['Interactive Dashboards', 'Statistical Analysis', 'Real-time Reporting', 'Custom Data Visualizations']
    },
    {
      icon: <Database size={48} />,
      title: 'Data Engineering & Pipelines',
      description: 'Build robust, scalable data infrastructure that collects, processes, and transforms data from multiple sources into analysis-ready formats.',
      features: ['ETL/ELT Pipeline Development', 'Data Warehouse Design', 'Real-time Data Streaming', 'Cloud Data Architecture']
    },
    {
      icon: <Brain size={48} />,
      title: 'Machine Learning & AI',
      description: 'Develop intelligent systems that learn from your data to predict outcomes, automate decisions, and optimize business processes.',
      features: ['Predictive Modeling', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems']
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions that provide strategic insights, performance metrics, and data-driven decision support systems.',
      features: ['Executive Dashboards', 'KPI Monitoring', 'Forecasting & Planning', 'Market Intelligence']
    },
    {
      icon: <Globe size={48} />,
      title: 'Data Strategy Consulting',
      description: 'Strategic guidance on data governance, digital transformation, and building a data-driven culture within your organization.',
      features: ['Data Maturity Assessment', 'Digital Transformation', 'Data Governance', 'Analytics Roadmap']
    },
    {
      icon: <Shield size={48} />,
      title: 'Data Security & Compliance',
      description: 'Ensure your data assets are protected with enterprise-grade security measures and compliance with industry regulations.',
      features: ['Data Privacy Protection', 'GDPR/CCPA Compliance', 'Data Encryption', 'Access Control Systems']
    }
  ]

  return (
    <div className="min-h-screen py-20 relative" style={{minHeight: '100vh', padding: '5rem 0', backgroundColor: '#f8fafc', margin: 0, width: '100%', position: 'relative'}}>
      <DataVisualization />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>
        
        {/* Hero Section */}
        <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '3rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1.5rem'}}>
            Our <span style={{color: '#fbbf24'}}>Services</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: '#475569', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.7'}}>
            We provide end-to-end data solutions that transform how you collect, analyze, and act on information. 
            From raw data to strategic insights, we're your trusted partner in building a data-driven organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg" style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(30, 41, 59, 0.1)',
              padding: '2rem',
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
              <div className="mb-4" style={{color: '#fbbf24', marginBottom: '1.5rem'}}>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem'}}>{service.title}</h3>
              <p className="mb-4" style={{color: '#64748b', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>{service.description}</p>
              <ul className="space-y-2" style={{listStyle: 'none', padding: 0}}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center" style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <div className="w-2 h-2 bg-lime-500 rounded-full mr-3" style={{width: '8px', height: '8px', backgroundColor: '#fbbf24', borderRadius: '50%', marginRight: '0.75rem'}}></div>
                    <span style={{color: '#475569', fontSize: '0.9rem'}}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 relative" style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          padding: '3rem',
          marginBottom: '4rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="absolute inset-0 opacity-20">
            <AnimatedDataChart />
          </div>
          <h2 className="text-3xl font-bold text-center mb-8" style={{fontSize: '2rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '2rem', textAlign: 'center'}}>Our Data-Driven Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
            {[
              { step: '01', title: 'Data Assessment', desc: 'Analyze your current data landscape and identify opportunities' },
              { step: '02', title: 'Strategy Design', desc: 'Create a data strategy aligned with business objectives' },
              { step: '03', title: 'Implementation', desc: 'Build robust data infrastructure and analytics solutions' },
              { step: '04', title: 'Optimization', desc: 'Continuous monitoring, improvement, and insights delivery' }
            ].map((phase, index) => (
              <div key={index} className="text-center" style={{textAlign: 'center'}}>
                <div className="mb-4" style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: '#fbbf24',
                  color: '#1e293b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  margin: '0 auto 1rem auto'
                }}>{phase.step}</div>
                <h3 className="text-lg font-semibold mb-2" style={{fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem'}}>{phase.title}</h3>
                <p style={{color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5'}}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" style={{textAlign: 'center'}}>
          <h2 className="text-3xl font-bold mb-4" style={{fontSize: '2rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem'}}>Ready to Get Started?</h2>
          <p className="text-lg mb-8" style={{fontSize: '1.125rem', color: '#475569', marginBottom: '2rem'}}>
            Let's discuss your project and find the perfect solution for your needs.
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
            Contact Us Today <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

      </div>
    </div>
  )
}