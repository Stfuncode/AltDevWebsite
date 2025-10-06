'use client'

import Link from 'next/link'
import { ArrowRight, GraduationCap, Users, BookOpen, CheckCircle2, Headphones, LifeBuoy, MessageCircle } from 'lucide-react'
import DataVisualization from '@/components/three/DataVisualization'

export default function TrainingSupport() {
  return (
    <div className="min-h-screen py-20 relative" style={{minHeight: '100vh', padding: '5rem 0', backgroundColor: '#03203D', margin: 0, width: '100%', position: 'relative'}}>
      <div className="absolute inset-0 opacity-30">
        <DataVisualization />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>

        {/* Hero Section */}
        <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '3.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1.5rem'}}>
            Training & <span style={{color: '#D7E150'}}>Support</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.7'}}>
            Empower your team with expert training and ongoing support to maximize the value of your data solutions. We ensure your organization has the knowledge and assistance needed for long-term success.
          </p>
        </div>

        {/* Service Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
          {[
            {
              icon: <GraduationCap size={48} />,
              title: 'Custom Training',
              description: 'Tailored training programs designed for your team\'s specific needs and skill levels'
            },
            {
              icon: <Headphones size={48} />,
              title: 'Technical Support',
              description: '24/7 technical assistance to keep your systems running smoothly and efficiently'
            },
            {
              icon: <Users size={48} />,
              title: 'Team Enablement',
              description: 'Build internal capabilities to manage and evolve your data solutions independently'
            }
          ].map((service, index) => (
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
              <div className="mb-4 flex justify-center" style={{color: '#D7E150', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{fontSize: '1.5rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '1rem'}}>{service.title}</h3>
              <p style={{color: 'rgba(233, 236, 221, 0.8)', fontSize: '1rem', lineHeight: '1.6'}}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Training Programs */}
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
            Training <span style={{color: '#D7E150'}}>Programs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                title: 'Data Analytics Fundamentals',
                description: 'Learn core concepts of data analysis, visualization, and interpretation',
                topics: ['Data Analysis Techniques', 'Dashboard Design', 'Data Storytelling', 'KPI Development']
              },
              {
                title: 'SQL & Database Essentials',
                description: 'Master querying, data manipulation, and database management',
                topics: ['SQL Query Writing', 'Data Modeling', 'Performance Optimization', 'Database Administration']
              },
              {
                title: 'Business Intelligence Tools',
                description: 'Hands-on training for Tableau, Power BI, and other BI platforms',
                topics: ['Report Building', 'Advanced Visualizations', 'DAX/Calculations', 'Data Source Connections']
              },
              {
                title: 'Python for Data Science',
                description: 'Programming fundamentals for data manipulation and analysis',
                topics: ['pandas & NumPy', 'Data Cleaning', 'Statistical Analysis', 'Machine Learning Basics']
              },
              {
                title: 'Data Governance & Quality',
                description: 'Best practices for managing and maintaining data assets',
                topics: ['Data Quality Standards', 'Governance Frameworks', 'Metadata Management', 'Compliance']
              },
              {
                title: 'Advanced Analytics',
                description: 'Predictive modeling, machine learning, and AI applications',
                topics: ['Statistical Modeling', 'ML Algorithms', 'Model Evaluation', 'Deployment Strategies']
              }
            ].map((program, index) => (
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
                <h4 className="font-bold mb-2" style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '0.75rem'}}>{program.title}</h4>
                <p className="mb-3" style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem'}}>{program.description}</p>
                <div className="space-y-2" style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  {program.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-2" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <CheckCircle2 size={16} style={{color: '#D7E150', flexShrink: 0}} />
                      <span style={{color: 'rgba(233, 236, 221, 0.8)', fontSize: '0.875rem'}}>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Tiers */}
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
            Support <span style={{color: '#D7E150'}}>Tiers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                tier: 'Standard',
                description: 'Essential support for ongoing maintenance and issue resolution',
                features: [
                  'Email support (24-hour response)',
                  'Bug fixes and patches',
                  'Quarterly system health checks',
                  'Documentation updates'
                ]
              },
              {
                tier: 'Premium',
                description: 'Enhanced support with faster response times and proactive monitoring',
                features: [
                  'Priority support (4-hour response)',
                  'Proactive system monitoring',
                  'Monthly performance reviews',
                  'Minor enhancements included'
                ],
                highlighted: true
              },
              {
                tier: 'Enterprise',
                description: 'Dedicated support team with 24/7 availability and strategic guidance',
                features: [
                  '24/7 phone & email support',
                  'Dedicated account manager',
                  'Custom SLA agreements',
                  'Strategic consulting included'
                ]
              }
            ].map((tier, index) => (
              <div
                key={index}
                className="p-6 rounded-lg"
                style={{
                  padding: '2rem',
                  backgroundColor: tier.highlighted ? 'rgba(215, 225, 80, 0.15)' : 'rgba(215, 225, 80, 0.05)',
                  borderRadius: '0.75rem',
                  border: tier.highlighted ? '2px solid rgba(215, 225, 80, 0.5)' : '1px solid rgba(215, 225, 80, 0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  if (!tier.highlighted) {
                    e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.3)';
                  }
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  if (!tier.highlighted) {
                    e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(215, 225, 80, 0.1)';
                  }
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2" style={{position: 'absolute', top: '-0.75rem', left: '50%', transform: 'translateX(-50%)'}}>
                    <span className="px-3 py-1 text-xs font-bold rounded-full" style={{padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 'bold', borderRadius: '9999px', backgroundColor: '#D7E150', color: '#03203D'}}>
                      POPULAR
                    </span>
                  </div>
                )}
                <h4 className="font-bold text-center mb-2" style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#D7E150', marginBottom: '0.5rem', textAlign: 'center'}}>{tier.tier}</h4>
                <p className="text-center mb-4" style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.5rem', textAlign: 'center'}}>{tier.description}</p>
                <div className="space-y-3" style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2" style={{display: 'flex', alignItems: 'flex-start', gap: '0.5rem'}}>
                      <CheckCircle2 size={18} style={{color: '#D7E150', flexShrink: 0, marginTop: '0.125rem'}} />
                      <span style={{color: 'rgba(233, 236, 221, 0.9)', fontSize: '0.9rem', lineHeight: '1.4'}}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Delivery Methods */}
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
            Delivery <span style={{color: '#D7E150'}}>Methods</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                icon: <Users size={32} />,
                title: 'On-site Training',
                description: 'In-person sessions at your location for hands-on learning'
              },
              {
                icon: <MessageCircle size={32} />,
                title: 'Virtual Classes',
                description: 'Live online training with real-time interaction and Q&A'
              },
              {
                icon: <BookOpen size={32} />,
                title: 'Self-paced Learning',
                description: 'Recorded modules and documentation for flexible learning'
              },
              {
                icon: <LifeBuoy size={32} />,
                title: 'Ongoing Coaching',
                description: 'Regular check-ins and personalized guidance for continuous improvement'
              }
            ].map((method, index) => (
              <div key={index} className="text-center" style={{textAlign: 'center'}}>
                <div
                  className="mb-4 flex items-center justify-center"
                  style={{
                    width: '5rem',
                    height: '5rem',
                    backgroundColor: 'rgba(215, 225, 80, 0.1)',
                    color: '#D7E150',
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
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{fontSize: '1.25rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '0.5rem'}}>{method.title}</h3>
                <p style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.9rem', lineHeight: '1.5'}}>{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" style={{textAlign: 'center'}}>
          <h2 className="text-3xl font-bold mb-4" style={{fontSize: '2rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1rem'}}>Empower Your Team Today</h2>
          <p className="text-lg mb-8" style={{fontSize: '1.125rem', color: 'rgba(233, 236, 221, 0.8)', marginBottom: '2rem'}}>
            Let&apos;s build your team&apos;s data capabilities and ensure ongoing success with our training and support services.
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
