'use client'

import Link from 'next/link'
import { ArrowRight, Eye, Brain, MessageSquare, Users, Briefcase } from 'lucide-react'
import ParticleBackground from '@/components/three/ParticleBackground'
import FloatingShapes from '@/components/three/FloatingShapes'
import InteractiveBackground from '@/components/three/InteractiveBackground'
import TechStackBackground from '@/components/three/TechStackBackground'
import ProvenResults from '@/components/ui/ProvenResults'
import PlatformCard from '@/components/ui/PlatformCard'
import AIServiceCard from '@/components/ui/AIServiceCard'
import TrainingProgramCard from '@/components/ui/TrainingProgramCard'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPlatformsVisible, setIsPlatformsVisible] = useState(false)
  const [isAIVisible, setIsAIVisible] = useState(false)
  const [isTrainingVisible, setIsTrainingVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const platformsRef = useRef<HTMLDivElement>(null)
  const aiRef = useRef<HTMLDivElement>(null)
  const trainingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const heroElement = heroRef.current
    heroElement?.addEventListener('mousemove', handleMouseMove)

    // Scroll animation observers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === platformsRef.current) setIsPlatformsVisible(true)
            if (entry.target === aiRef.current) setIsAIVisible(true)
            if (entry.target === trainingRef.current) setIsTrainingVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (platformsRef.current) observer.observe(platformsRef.current)
    if (aiRef.current) observer.observe(aiRef.current)
    if (trainingRef.current) observer.observe(trainingRef.current)

    return () => {
      heroElement?.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <div style={{margin: 0, padding: 0, width: '100%'}}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: '#051D2E',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          width: '100%'
        }}
      >
        {/* Spotlight Effect */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 120, 212, 0.15), transparent 40%)`,
            transition: 'background 0.3s ease'
          }}
        />

        <ParticleBackground />
        <FloatingShapes />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center', zIndex: 10}}>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              color: 'white',
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}
          >
            <span className="text-2xl md:text-3xl block mb-2" style={{fontSize: '1.5rem', fontWeight: '600', color: '#F2C864', marginBottom: '0.5rem'}}>
              Your Data Is Sitting There.
            </span>
            <span className="text-4xl md:text-6xl block" style={{fontSize: '3rem', fontWeight: 'bold', color: '#E9ECDD'}}>
              Why Isn&apos;t It Making You Money?
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto"
            style={{
              fontSize: '1.25rem',
              color: 'rgba(233, 236, 221, 0.9)',
              marginBottom: '2rem',
              maxWidth: '56rem',
              margin: '0 auto 2rem auto',
              animation: 'fadeInUp 0.8s ease-out 0.4s both'
            }}
          >
            Most businesses are sitting on goldmines of data but have no idea how to use it. We turn your messy spreadsheets and disconnected systems into automated insights that actually grow your business.
          </p>
          <div className="mb-8 flex items-center justify-center gap-6 text-sm" style={{marginBottom: '2rem', color: 'rgba(233, 236, 221, 0.7)', fontSize: '0.875rem'}}>
            <span>Trusted by 50+ companies</span>
            <span>•</span>
            <span>Average ROI: 340% in first year</span>
          </div>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'fadeInUp 0.8s ease-out 0.6s both'
            }}
          >
            <Link
              href="/services/microsoft-fabric"
              className="inline-flex items-center bg-fabric-500 hover:bg-fabric-600 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl group"
              style={{
                backgroundColor: '#0078D4',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                fontWeight: '700',
                boxShadow: '0 10px 25px rgba(0, 120, 212, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0060AA';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 120, 212, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0078D4';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 120, 212, 0.3)';
              }}
            >
              See What&apos;s Possible <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center bg-transparent border-2 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: 'transparent',
                color: '#E9ECDD',
                padding: '1rem 2.5rem',
                borderRadius: '2rem',
                border: '2px solid rgba(233, 236, 221, 0.3)',
                textDecoration: 'none',
                fontWeight: '600',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(233, 236, 221, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(233, 236, 221, 0.6)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(233, 236, 221, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(233, 236, 221, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Your Free Data Health Check
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        className="py-16 relative"
        style={{padding: '4rem 0', backgroundColor: '#0a1929', position: 'relative', margin: 0, width: '100%'}}
      >
        {/* Top gradient fade from previous section */}
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, #051D2E, #0a1929)', pointerEvents: 'none', zIndex: 0}} />
        {/* Bottom gradient fade to next section */}
        <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, #0a1929, #051D2E)', pointerEvents: 'none', zIndex: 0}} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{maxWidth: '60rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1}}>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-12"
            style={{fontSize: '2rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '3rem'}}
          >
            Sound Familiar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem'}}>
            <div className="bg-secondary-900/50 backdrop-blur-sm border border-secondary-700/30 rounded-xl p-6 text-left" style={{backgroundColor: 'rgba(5, 29, 46, 0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(242, 200, 100, 0.1)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'left'}}>
              <div className="text-2xl mb-3">😫</div>
              <p className="text-gray-200" style={{color: 'rgba(233, 236, 221, 0.9)', fontSize: '1rem', lineHeight: '1.6'}}>
                Spending <strong style={{color: '#F2C864'}}>10+ hours every week</strong> manually creating reports
              </p>
            </div>
            <div className="bg-secondary-900/50 backdrop-blur-sm border border-secondary-700/30 rounded-xl p-6 text-left" style={{backgroundColor: 'rgba(5, 29, 46, 0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(242, 200, 100, 0.1)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'left'}}>
              <div className="text-2xl mb-3">😫</div>
              <p className="text-gray-200" style={{color: 'rgba(233, 236, 221, 0.9)', fontSize: '1rem', lineHeight: '1.6'}}>
                Your data lives in <strong style={{color: '#F2C864'}}>10 different places</strong> and nothing talks to each other
              </p>
            </div>
            <div className="bg-secondary-900/50 backdrop-blur-sm border border-secondary-700/30 rounded-xl p-6 text-left" style={{backgroundColor: 'rgba(5, 29, 46, 0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(242, 200, 100, 0.1)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'left'}}>
              <div className="text-2xl mb-3">😫</div>
              <p className="text-gray-200" style={{color: 'rgba(233, 236, 221, 0.9)', fontSize: '1rem', lineHeight: '1.6'}}>
                You <strong style={{color: '#F2C864'}}>KNOW</strong> there are insights hiding in your data, but can&apos;t find them
              </p>
            </div>
            <div className="bg-secondary-900/50 backdrop-blur-sm border border-secondary-700/30 rounded-xl p-6 text-left" style={{backgroundColor: 'rgba(5, 29, 46, 0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(242, 200, 100, 0.1)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'left'}}>
              <div className="text-2xl mb-3">😫</div>
              <p className="text-gray-200" style={{color: 'rgba(233, 236, 221, 0.9)', fontSize: '1rem', lineHeight: '1.6'}}>
                Paying consultants <strong style={{color: '#F2C864'}}>$500/hr</strong> to answer basic questions
              </p>
            </div>
          </div>
          <p
            className="mt-12 text-xl font-medium"
            style={{marginTop: '3rem', fontSize: '1.25rem', fontWeight: '500', color: '#F2C864'}}
          >
            You&apos;re not alone. This is exactly why we exist.
          </p>
        </div>
      </section>

      {/* Platform Showcase Section */}
      <section
        ref={platformsRef}
        className="py-20 relative"
        style={{padding: '5rem 0', backgroundColor: '#051D2E', position: 'relative', margin: 0, width: '100%'}}
      >
        <InteractiveBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>
          <div
            className="text-center mb-16"
            style={{
              textAlign: 'center',
              marginBottom: '4rem',
              opacity: isPlatformsVisible ? 1 : 0,
              transform: isPlatformsVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#E9ECDD',
                marginBottom: '1rem'
              }}
            >
              What We Can Do For You
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '48rem', margin: '0 auto'}}>
              We connect all your data so it actually works together. No more tab gymnastics, no more weekend Excel marathons.
            </p>
          </div>

          {/* Primary Platform - Microsoft Fabric */}
          <div className="mb-12" style={{marginBottom: '3rem', opacity: isPlatformsVisible ? 1 : 0, transform: isPlatformsVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'}}>
            <PlatformCard
              platform="fabric"
              name="All Your Data, Finally In One Place"
              tagline="Powered by Microsoft Fabric"
              capabilities={[
                'One dashboard for everything (no more tab gymnastics)',
                'Reports that update themselves (no more weekend Excel marathons)',
                'Your CFO stops asking why the numbers don\'t match',
                'Time to results: 2-4 weeks • Starting at $15K'
              ]}
              link="/services/microsoft-fabric"
              isPrimary={true}
              certified={true}
            />
          </div>

          {/* Secondary Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div style={{opacity: isPlatformsVisible ? 1 : 0, transform: isPlatformsVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'}}>
              <PlatformCard
                platform="snowflake"
                name="Data That Scales With You"
                tagline="Built on Snowflake"
                capabilities={[
                  'Handle millions of rows without slowing down',
                  'Share data securely with partners and teams',
                  'Pay only for what you use (no wasted server costs)',
                  'Works on AWS, Azure, or Google Cloud'
                ]}
                link="/services/snowflake"
              />
            </div>
            <div style={{opacity: isPlatformsVisible ? 1 : 0, transform: isPlatformsVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'}}>
              <PlatformCard
                platform="databricks"
                name="Data + AI That Actually Works Together"
                tagline="Built on Databricks"
                capabilities={[
                  'Data engineers and data scientists work in the same place',
                  'Build AI models that actually make it to production',
                  'Reliable pipelines that don\'t break at 3 AM',
                  'Perfect for ML/AI heavy workloads'
                ]}
                link="/services/databricks"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section
        ref={aiRef}
        className="py-20 relative"
        style={{padding: '5rem 0', backgroundColor: '#051D2E', position: 'relative', margin: 0, width: '100%'}}
      >
        <TechStackBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>
          <div
            className="text-center mb-16"
            style={{
              textAlign: 'center',
              marginBottom: '4rem',
              opacity: isAIVisible ? 1 : 0,
              transform: isAIVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#E9ECDD',
                marginBottom: '1rem'
              }}
            >
              Cloud AI Solutions
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '48rem', margin: '0 auto'}}>
              Build intelligent applications with AWS and Azure AI services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            <div style={{opacity: isAIVisible ? 1 : 0, transform: isAIVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'}}>
              <AIServiceCard
                service="vision"
                name="Computer Vision"
                description="Transform images and video into actionable insights with advanced computer vision models."
                examples={[
                  'Object detection and classification',
                  'Facial recognition and analysis',
                  'OCR and document processing',
                  'Quality control automation'
                ]}
                cloudProviders={['aws', 'azure']}
                icon={<Eye size={32} />}
              />
            </div>
            <div style={{opacity: isAIVisible ? 1 : 0, transform: isAIVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'}}>
              <AIServiceCard
                service="ml"
                name="Machine Learning"
                description="Build predictive models and recommendation systems that learn from your data."
                examples={[
                  'Predictive analytics and forecasting',
                  'Recommendation engines',
                  'Anomaly detection',
                  'Custom ML model development'
                ]}
                cloudProviders={['aws', 'azure']}
                icon={<Brain size={32} />}
              />
            </div>
            <div style={{opacity: isAIVisible ? 1 : 0, transform: isAIVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'}}>
              <AIServiceCard
                service="nlp"
                name="Natural Language Processing"
                description="Extract meaning from text and build conversational AI experiences."
                examples={[
                  'Sentiment analysis',
                  'Chatbots and virtual assistants',
                  'Document intelligence',
                  'Language translation'
                ]}
                cloudProviders={['aws', 'azure']}
                icon={<MessageSquare size={32} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Preview Section */}
      <section
        ref={trainingRef}
        className="py-20 relative"
        style={{padding: '5rem 0', backgroundColor: '#0a1929', position: 'relative', margin: 0, width: '100%'}}
      >
        {/* Top gradient fade from previous section */}
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, #051D2E, #0a1929)', pointerEvents: 'none', zIndex: 0}} />
        {/* Bottom gradient fade to next section */}
        <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, #0a1929, #051D2E)', pointerEvents: 'none', zIndex: 0}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10}}>
          <div
            className="text-center mb-16"
            style={{
              textAlign: 'center',
              marginBottom: '4rem',
              opacity: isTrainingVisible ? 1 : 0,
              transform: isTrainingVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#E9ECDD',
                marginBottom: '1rem'
              }}
            >
              Empower Your Team
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-4" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '48rem', margin: '0 auto 1rem auto'}}>
              Corporate training and custom workshops from certified experts
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-fabric-400">
                <Users size={20} />
                <span className="text-sm font-semibold">On-Site Training</span>
              </div>
              <div className="flex items-center gap-2 text-accent-400">
                <Briefcase size={20} />
                <span className="text-sm font-semibold">Custom Workshops</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
            <div style={{opacity: isTrainingVisible ? 1 : 0, transform: isTrainingVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'}}>
              <TrainingProgramCard
                title="Microsoft Fabric Essentials"
                platform="fabric"
                duration="3-5 days"
                deliveryMethod="On-site"
                topics={[
                  'OneLake architecture and data integration',
                  'Power BI and real-time analytics',
                  'Data engineering with Synapse',
                  'Best practices and governance'
                ]}
                level="All Levels"
              />
            </div>
            <div style={{opacity: isTrainingVisible ? 1 : 0, transform: isTrainingVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'}}>
              <TrainingProgramCard
                title="Snowflake Implementation"
                platform="snowflake"
                duration="2-4 days"
                deliveryMethod="On-site"
                topics={[
                  'Cloud data warehouse fundamentals',
                  'SQL optimization techniques',
                  'Data sharing and collaboration',
                  'Performance tuning',
                  'Security and governance'
                ]}
                level="Intermediate"
              />
            </div>
            <div style={{opacity: isTrainingVisible ? 1 : 0, transform: isTrainingVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'}}>
              <TrainingProgramCard
                title="Cloud AI Development"
                platform="ai"
                duration="3-5 days"
                deliveryMethod="On-site"
                topics={[
                  'AWS/Azure AI services overview',
                  'Computer vision applications',
                  'ML model training and deployment',
                  'NLP and chatbot development',
                  'MLOps best practices'
                ]}
                level="Intermediate"
              />
            </div>
          </div>

          <div className="text-center" style={{opacity: isTrainingVisible ? 1 : 0, transform: isTrainingVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease-out 0.8s, transform 0.8s ease-out 0.8s'}}>
            <Link
              href="/training"
              className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-lg"
              style={{
                backgroundColor: '#F2C864',
                color: '#051D2E',
                padding: '0.875rem 2.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                fontWeight: '700',
                boxShadow: '0 10px 25px rgba(242, 200, 100, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EFB93C';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(242, 200, 100, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F2C864';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 200, 100, 0.3)';
              }}
            >
              View All Training Programs <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <ProvenResults />

      {/* How It Works Section */}
      <section className="py-20 relative" style={{padding: '5rem 0', backgroundColor: '#0a1929', position: 'relative', margin: 0, width: '100%'}}>
        {/* Top gradient fade from previous section */}
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, #051D2E, #0a1929)', pointerEvents: 'none', zIndex: 0}} />
        {/* Bottom gradient fade to next section */}
        <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, #0a1929, #051D2E)', pointerEvents: 'none', zIndex: 0}} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{maxWidth: '72rem', margin: '0 auto', padding: '0 2rem'}}>
          <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="text-4xl font-bold mb-4" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1rem'}}>
              How This Actually Works
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', maxWidth: '48rem', margin: '0 auto'}}>
              Simple, transparent process. No surprises, no BS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {/* Step 1 */}
            <div className="text-center" style={{textAlign: 'center'}}>
              <div className="w-20 h-20 rounded-full bg-fabric-500/20 border-2 border-fabric-500 flex items-center justify-center mx-auto mb-6" style={{width: '5rem', height: '5rem', borderRadius: '50%', backgroundColor: 'rgba(0, 120, 212, 0.2)', border: '2px solid #0078D4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto'}}>
                <span className="text-3xl font-bold text-fabric-400" style={{fontSize: '2rem', fontWeight: 'bold', color: '#0078D4'}}>1</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white" style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '0.75rem'}}>
                30-Min Discovery Call
              </h3>
              <p className="text-gray-300 mb-4" style={{color: 'rgba(233, 236, 221, 0.8)', marginBottom: '1rem', lineHeight: '1.6'}}>
                We look at your current setup and find the biggest time-wasters.
              </p>
              <p className="text-sm text-accent-400 font-medium" style={{fontSize: '0.875rem', color: '#F2C864', fontWeight: '500'}}>
                (Spoiler: It&apos;s usually your reporting process)
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center" style={{textAlign: 'center'}}>
              <div className="w-20 h-20 rounded-full bg-snowflake-500/20 border-2 border-snowflake-500 flex items-center justify-center mx-auto mb-6" style={{width: '5rem', height: '5rem', borderRadius: '50%', backgroundColor: 'rgba(41, 181, 232, 0.2)', border: '2px solid #29B5E8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto'}}>
                <span className="text-3xl font-bold text-snowflake-400" style={{fontSize: '2rem', fontWeight: 'bold', color: '#29B5E8'}}>2</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white" style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '0.75rem'}}>
                We Build It (You Watch)
              </h3>
              <p className="text-gray-300 mb-4" style={{color: 'rgba(233, 236, 221, 0.8)', marginBottom: '1rem', lineHeight: '1.6'}}>
                2-4 weeks, we connect your systems and build your dashboards.
              </p>
              <p className="text-sm text-accent-400 font-medium" style={{fontSize: '0.875rem', color: '#F2C864', fontWeight: '500'}}>
                No tech jargon, just &quot;here&apos;s what this button does&quot;
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center" style={{textAlign: 'center'}}>
              <div className="w-20 h-20 rounded-full bg-accent-500/20 border-2 border-accent-500 flex items-center justify-center mx-auto mb-6" style={{width: '5rem', height: '5rem', borderRadius: '50%', backgroundColor: 'rgba(242, 200, 100, 0.2)', border: '2px solid #F2C864', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto'}}>
                <span className="text-3xl font-bold text-accent-400" style={{fontSize: '2rem', fontWeight: 'bold', color: '#F2C864'}}>3</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white" style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '0.75rem'}}>
                You&apos;re Off to the Races
              </h3>
              <p className="text-gray-300 mb-4" style={{color: 'rgba(233, 236, 221, 0.8)', marginBottom: '1rem', lineHeight: '1.6'}}>
                Hit &quot;refresh&quot; and boom - instant insights. We train your team so you&apos;re never dependent on us.
              </p>
              <p className="text-sm text-accent-400 font-medium" style={{fontSize: '0.875rem', color: '#F2C864', fontWeight: '500'}}>
                Your team runs it themselves
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12" style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link
              href="/contact"
              className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg"
              style={{
                backgroundColor: '#F2C864',
                color: '#051D2E',
                padding: '1rem 2.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                fontWeight: '700',
                boxShadow: '0 10px 25px rgba(242, 200, 100, 0.3)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EFB93C';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(242, 200, 100, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F2C864';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 200, 100, 0.3)';
              }}
            >
              Book Your Discovery Call - It&apos;s Free <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{padding: '5rem 0', backgroundColor: '#051D2E', margin: 0, width: '100%'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center'}}>
          <h2 className="text-4xl font-bold mb-4" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#E9ECDD', marginBottom: '1rem'}}>Stop Wasting Time. Start Making Money.</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{fontSize: '1.25rem', color: 'rgba(233, 236, 221, 0.8)', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem auto'}}>
            Book a free 30-minute call. We&apos;ll show you exactly where you&apos;re bleeding time and money, and how to fix it. No sales pitch, just honest advice.
          </p>
          <Link href="/contact" className="inline-flex items-center shadow-lg hover:shadow-xl" style={{
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
            boxShadow: '0 10px 25px rgba(242, 200, 100, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#EFB93C';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(242, 200, 100, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F2C864';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 200, 100, 0.3)';
          }}>
            Book Your Free Call <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
