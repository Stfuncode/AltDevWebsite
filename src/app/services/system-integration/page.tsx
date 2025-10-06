'use client'

import Link from 'next/link'
import { ArrowRight, Link2, Database, Cloud, RefreshCw, CheckCircle2, Settings, Network } from 'lucide-react'
import DataVisualization from '@/components/three/DataVisualization'

export default function SystemIntegration() {
  return (
    <div className="min-h-screen py-20 relative" style={{minHeight: '100vh', padding: '5rem 0', backgroundColor: '#03203D', margin: 0, width: '100%', position: 'relative'}}>
      <div className="absolute inset-0 opacity-30">
        <DataVisualization />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>

        {/* Hero Section */}
        <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '3.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1.5rem'}}>
            System <span style={{color: '#D7E150'}}>Integration</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.7'}}>
            Connect disparate systems and create unified data flows across your entire technology ecosystem. We build seamless integrations that eliminate data silos and enable real-time synchronization.
          </p>
        </div>

        {/* Integration Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
          {[
            {
              icon: <Cloud size={48} />,
              title: 'Cloud Integrations',
              description: 'Connect SaaS applications, cloud platforms, and on-premise systems in hybrid environments'
            },
            {
              icon: <Database size={48} />,
              title: 'Data Integration',
              description: 'Unify data from multiple sources with ETL/ELT pipelines and real-time synchronization'
            },
            {
              icon: <Network size={48} />,
              title: 'API Integration',
              description: 'Build and connect REST, GraphQL, and event-driven APIs for seamless communication'
            }
          ].map((type, index) => (
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
              <div className="mb-4 flex justify-center" style={{color: '#D7E150', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>{type.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{fontSize: '1.5rem', fontWeight: '600', color: '#E9ECDD', marginBottom: '1rem'}}>{type.title}</h3>
              <p style={{color: 'rgba(233, 236, 221, 0.8)', fontSize: '1rem', lineHeight: '1.6'}}>{type.description}</p>
            </div>
          ))}
        </div>

        {/* Common Integration Challenges */}
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
            Challenges We <span style={{color: '#D7E150'}}>Solve</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                challenge: 'Data Silos',
                solution: 'Create unified data flows that break down barriers between departments and systems'
              },
              {
                challenge: 'Manual Data Entry',
                solution: 'Automate data transfer between systems to eliminate errors and save time'
              },
              {
                challenge: 'Incompatible Systems',
                solution: 'Build middleware and adapters that enable legacy and modern systems to communicate'
              },
              {
                challenge: 'Real-time Sync Issues',
                solution: 'Implement event-driven architectures for instant data synchronization'
              },
              {
                challenge: 'Complex Workflows',
                solution: 'Orchestrate multi-step processes across different platforms seamlessly'
              },
              {
                challenge: 'Scalability Concerns',
                solution: 'Design integrations that grow with your business without performance degradation'
              }
            ].map((item, index) => (
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
                <h4 className="font-bold mb-2" style={{fontSize: '1.125rem', fontWeight: 'bold', color: '#D7E150', marginBottom: '0.75rem'}}>{item.challenge}</h4>
                <p style={{color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.95rem', lineHeight: '1.5'}}>{item.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Platforms & Tools */}
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
            Platforms & <span style={{color: '#D7E150'}}>Tools</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                category: 'Integration Platforms',
                tools: ['MuleSoft', 'Dell Boomi', 'Zapier', 'Apache Camel', 'Workato']
              },
              {
                category: 'Message Brokers',
                tools: ['Apache Kafka', 'RabbitMQ', 'AWS SQS', 'Azure Service Bus', 'Google Pub/Sub']
              },
              {
                category: 'API Management',
                tools: ['Apigee', 'AWS API Gateway', 'Kong', 'Azure API Management', 'Postman']
              },
              {
                category: 'Data Integration',
                tools: ['Talend', 'Informatica', 'Fivetran', 'Stitch', 'Airbyte']
              },
              {
                category: 'Workflow Automation',
                tools: ['Apache Airflow', 'Prefect', 'n8n', 'Microsoft Power Automate', 'Integromat']
              },
              {
                category: 'ETL/ELT Tools',
                tools: ['dbt', 'Apache Spark', 'AWS Glue', 'Azure Data Factory', 'Matillion']
              }
            ].map((platform, index) => (
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
                <h4 className="font-bold mb-3" style={{fontSize: '1.125rem', fontWeight: 'bold', color: '#D7E150', marginBottom: '1rem'}}>{platform.category}</h4>
                <div className="space-y-2" style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  {platform.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center gap-2" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <CheckCircle2 size={16} style={{color: '#D7E150', flexShrink: 0}} />
                      <span style={{color: 'rgba(233, 236, 221, 0.8)', fontSize: '0.9rem'}}>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Process */}
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
            Our Integration <span style={{color: '#D7E150'}}>Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem'}}>
            {[
              {
                step: '01',
                title: 'Discovery & Mapping',
                description: 'Identify systems, data flows, and integration requirements',
                icon: <Settings size={32} />
              },
              {
                step: '02',
                title: 'Architecture Design',
                description: 'Design integration patterns, APIs, and data transformation rules',
                icon: <Network size={32} />
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Build connectors, configure workflows, and implement error handling',
                icon: <Link2 size={32} />
              },
              {
                step: '04',
                title: 'Testing & Monitoring',
                description: 'Validate data accuracy, performance testing, and ongoing monitoring',
                icon: <RefreshCw size={32} />
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

        {/* CTA Section */}
        <div className="text-center" style={{textAlign: 'center'}}>
          <h2 className="text-3xl font-bold mb-4" style={{fontSize: '2rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1rem'}}>Ready to Connect Your Systems?</h2>
          <p className="text-lg mb-8" style={{fontSize: '1.125rem', color: 'rgba(233, 236, 221, 0.8)', marginBottom: '2rem'}}>
            Let&apos;s eliminate data silos and create seamless integrations across your technology stack.
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
