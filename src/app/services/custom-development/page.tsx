'use client'

import Link from 'next/link'
import { ArrowRight, Code, Layers, Zap, CheckCircle2, Rocket, Shield, GitBranch } from 'lucide-react'
import DataVisualization from '@/components/three/DataVisualization'

export default function CustomDevelopment() {
  return (
    <div className="min-h-screen py-20 relative" style={{minHeight: '100vh', padding: '5rem 0', backgroundColor: '#03203D', margin: 0, width: '100%', position: 'relative'}}>
      <div className="absolute inset-0 opacity-30">
        <DataVisualization />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>

        {/* Hero Section */}
        <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '3.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1.5rem'}}>
            Custom <span style={{color: '#D7E150'}}>Development</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.7'}}>
            Build tailored data solutions that perfectly align with your unique business requirements. From data pipelines to analytics platforms, we create scalable, production-ready applications.
          </p>
        </div>

        {/* What We Build */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
          {[
            {
              icon: <Code size={48} />,
              title: 'Data Applications',
              description: 'Custom web and desktop applications for data analysis, visualization, and workflow automation'
            },
            {
              icon: <Layers size={48} />,
              title: 'Data Platforms',
              description: 'End-to-end data platforms combining ingestion, processing, storage, and analytics'
            },
            {
              icon: <Zap size={48} />,
              title: 'Real-time Systems',
              description: 'Streaming data pipelines and real-time analytics for time-sensitive insights'
            }
          ].map((solution, index) => (
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
              <div className="mb-4 flex justify-center" style={{color: '#D7E150', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{fontSize: '1.5rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '1rem'}}>{solution.title}</h3>
              <p style={{color: 'rgba(233, 236, 221, 0.8)', fontSize: '1rem', lineHeight: '1.6'}}>{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
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
            Our <span style={{color: '#D7E150'}}>Technology Stack</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                category: 'Backend & Data',
                technologies: ['Python', 'Node.js', 'Apache Spark', 'PostgreSQL', 'MongoDB', 'Redis']
              },
              {
                category: 'Cloud & Infrastructure',
                technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform']
              },
              {
                category: 'Frontend & Visualization',
                technologies: ['React', 'Next.js', 'D3.js', 'Plotly', 'Tableau', 'Power BI']
              },
              {
                category: 'Data Processing',
                technologies: ['Apache Airflow', 'dbt', 'Kafka', 'Snowflake', 'Databricks', 'BigQuery']
              },
              {
                category: 'ML & AI',
                technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'MLflow', 'Hugging Face', 'OpenAI']
              },
              {
                category: 'DevOps & Quality',
                technologies: ['Git', 'CI/CD', 'Jenkins', 'pytest', 'Jest', 'SonarQube']
              }
            ].map((stack, index) => (
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
                <h4 className="font-bold mb-3" style={{fontSize: '1.125rem', fontWeight: 'bold', color: '#D7E150', marginBottom: '1rem'}}>{stack.category}</h4>
                <div className="flex flex-wrap gap-2" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {stack.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        backgroundColor: 'rgba(233, 236, 221, 0.1)',
                        color: 'rgba(233, 236, 221, 0.9)',
                        border: '1px solid rgba(233, 236, 221, 0.2)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
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
            Our Development <span style={{color: '#D7E150'}}>Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Deep dive into requirements, constraints, and success criteria',
                icon: <GitBranch size={32} />
              },
              {
                step: '02',
                title: 'Design',
                description: 'Architecture design, technology selection, and prototyping',
                icon: <Layers size={32} />
              },
              {
                step: '03',
                title: 'Development',
                description: 'Agile sprints with continuous testing and stakeholder feedback',
                icon: <Code size={32} />
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Production rollout, monitoring setup, and knowledge transfer',
                icon: <Rocket size={32} />
              }
            ].map((phase, index) => (
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
                    e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(215, 225, 80, 0.1)';
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  }}
                >
                  {phase.icon}
                </div>
                <div className="text-sm font-bold mb-2" style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#D7E150', marginBottom: '0.5rem'}}>STEP {phase.step}</div>
                <h3 className="text-lg font-semibold mb-2" style={{fontSize: '1.25rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '0.5rem'}}>{phase.title}</h3>
                <p style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.9rem', lineHeight: '1.5'}}>{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
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
            What Makes Us <span style={{color: '#D7E150'}}>Different</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                icon: <Shield size={28} />,
                title: 'Enterprise-Grade Quality',
                description: 'Production-ready code with comprehensive testing, documentation, and security best practices'
              },
              {
                icon: <Rocket size={28} />,
                title: 'Rapid Delivery',
                description: 'Agile methodology with 2-week sprints delivering incremental value continuously'
              },
              {
                icon: <Zap size={28} />,
                title: 'Performance Optimized',
                description: 'Scalable architectures designed to handle growing data volumes and user loads'
              },
              {
                icon: <Code size={28} />,
                title: 'Clean, Maintainable Code',
                description: 'Well-documented, modular code following industry standards and best practices'
              },
              {
                icon: <GitBranch size={28} />,
                title: 'Future-Proof Solutions',
                description: 'Modern tech stacks and architectures that evolve with your business needs'
              },
              {
                icon: <CheckCircle2 size={28} />,
                title: 'Post-Launch Support',
                description: 'Ongoing maintenance, monitoring, and enhancements to ensure continued success'
              }
            ].map((feature, index) => (
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
                <div style={{color: '#D7E150', flexShrink: 0, marginTop: '0.25rem'}}>{feature.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1" style={{fontSize: '1.125rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '0.5rem'}}>{feature.title}</h4>
                  <p style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.95rem', lineHeight: '1.5'}}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" style={{textAlign: 'center'}}>
          <h2 className="text-3xl font-bold mb-4" style={{fontSize: '2rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1rem'}}>Ready to Build Your Solution?</h2>
          <p className="text-lg mb-8" style={{fontSize: '1.125rem', color: 'rgba(233, 236, 221, 0.8)', marginBottom: '2rem'}}>
            Let&apos;s discuss your project requirements and create a custom solution that exceeds expectations.
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
