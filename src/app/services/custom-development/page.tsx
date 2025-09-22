'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { ArrowRight, Code, Zap, Shield, Users, CheckCircle, ArrowUpRight } from 'lucide-react'
import MatrixEffect from '@/components/three/MatrixEffect'
import TypewriterText from '@/components/effects/MatrixText'

const technologies = [
  'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL',
  'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'Redis'
]

const features = [
  {
    icon: Code,
    title: 'Shift-Left Development',
    description: 'Quality, security, and testing integrated from the very beginning of the development cycle.'
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Optimized applications that load fast and scale seamlessly with your business growth.'
  },
  {
    icon: Shield,
    title: 'Security by Design',
    description: 'Enterprise-grade security measures and threat modeling integrated from day one.'
  },
  {
    icon: Users,
    title: 'Early Collaboration',
    description: 'Stakeholder feedback and user testing integrated throughout the development process.'
  }
]

const process = [
  {
    step: '01',
    title: 'Security & Quality Planning',
    description: 'Define security requirements, quality gates, and testing strategies before writing any code.'
  },
  {
    step: '02',
    title: 'Secure Architecture Design',
    description: 'Create threat models, security controls, and performance benchmarks in the design phase.'
  },
  {
    step: '03',
    title: 'Shift-Left Development',
    description: 'Continuous testing, security scanning, and quality checks integrated into every commit.'
  },
  {
    step: '04',
    title: 'Automated Deployment',
    description: 'Zero-downtime deployment with automated security validation and performance monitoring.'
  }
]

const caseStudies = [
  {
    title: 'E-commerce Platform',
    description: 'Built a high-performance marketplace handling 100K+ daily transactions',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    metric: '300% increase in conversion rate'
  },
  {
    title: 'Healthcare Dashboard',
    description: 'Real-time patient monitoring system with advanced analytics',
    tech: ['React', 'Python', 'MongoDB'],
    metric: '50% reduction in response time'
  },
  {
    title: 'FinTech API',
    description: 'Secure payment processing system with fraud detection',
    tech: ['Node.js', 'Redis', 'AWS'],
    metric: '99.99% uptime achieved'
  }
]

export default function CustomDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Matrix Background Effect */}
      <Suspense fallback={null}>
        <MatrixEffect intensity="medium" />
      </Suspense>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/90" />

          <div className="relative max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30">
                Custom Development Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Code the Future
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We transform your vision into secure, scalable software solutions using shift-left development methodology that delivers quality from day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#process"
                className="group border border-gray-600 hover:border-yellow-500 text-white hover:text-yellow-400 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                Our Process
                <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            {/* Technology Pills */}
            <div className="mt-16">
              <p className="text-gray-400 mb-6 text-sm uppercase tracking-wider">Technologies We Master</p>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-200 min-w-[100px] text-center"
                  >
                    <TypewriterText
                      text={tech}
                      delay={index * 300 + 1000}
                      typeSpeed={60}
                      showCursor={false}
                      className="text-gray-300"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Choose Our Development
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We don&apos;t just write code—we engineer secure, tested solutions using shift-left methodology that prevents issues before they occur.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our shift-left approach integrates quality, security, and testing from the earliest stages for faster, more reliable delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300">
                    <div className="text-4xl font-bold text-yellow-500 mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-yellow-500 to-transparent transform -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real projects, real results. See how we&apos;ve helped businesses transform their ideas into reality.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-yellow-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {study.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and explore how we can bring your vision to life with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="group border border-gray-600 hover:border-yellow-500 text-white hover:text-yellow-400 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}