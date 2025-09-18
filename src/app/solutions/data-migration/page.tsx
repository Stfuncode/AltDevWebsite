'use client'

import Link from 'next/link'
import { ArrowRight, Database, Shield, Zap, CheckCircle, Clock, Users, Target, BarChart3, FileText } from 'lucide-react'
import DataVisualization from '@/components/three/DataVisualization'
import SimpleDataViz from '@/components/three/SimpleDataViz'

export default function DataMigration() {
  const migrationServices = [
    {
      icon: <Database size={48} />,
      title: 'Microsoft Fabric Migration',
      description: 'Leverage Microsoft Fabric as our primary platform for unified data migration, combining data integration, analytics, and AI capabilities in one solution.',
      features: ['Fabric OneLake Integration', 'Real-time Analytics', 'AI-Powered Insights', 'Unified Data Platform']
    },
    {
      icon: <Shield size={48} />,
      title: 'Big Data Migration',
      description: 'Migrate petabytes of structured and unstructured data from Hadoop, data lakes, and traditional warehouses to modern cloud platforms.',
      features: ['Petabyte-Scale Processing', 'Multi-Format Support', 'Distributed Computing', 'Data Lake Architecture']
    },
    {
      icon: <Zap size={48} />,
      title: 'Real-Time Streaming',
      description: 'Advanced streaming technologies for continuous data migration with zero downtime and real-time synchronization.',
      features: ['Event Streaming', 'Change Data Capture', 'Real-time Replication', 'Stream Processing']
    }
  ]

  const migrationProcess = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current data landscape, dependencies, and migration requirements.',
      deliverables: ['Data Inventory Report', 'Risk Assessment', 'Migration Strategy', 'Timeline & Budget']
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design optimal target architecture with scalability, performance, and security considerations.',
      deliverables: ['Technical Architecture', 'Data Flow Diagrams', 'Security Framework', 'Performance Baselines']
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Phased migration execution with continuous monitoring, validation, and quality assurance.',
      deliverables: ['Migration Scripts', 'Data Validation Reports', 'Performance Metrics', 'Quality Assurance']
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Post-migration optimization, performance tuning, and ongoing support for maximum efficiency.',
      deliverables: ['Performance Optimization', 'User Training', 'Documentation', 'Support Framework']
    }
  ]

  const benefits = [
    {
      icon: <BarChart3 size={32} />,
      title: '77% Cost Reduction',
      description: 'Average reduction in infrastructure and licensing costs post-migration'
    },
    {
      icon: <Clock size={32} />,
      title: '43% Faster Delivery',
      description: 'Accelerated time-to-market for new features and capabilities'
    },
    {
      icon: <Shield size={32} />,
      title: '99.9% Data Integrity',
      description: 'Guaranteed data accuracy and completeness throughout migration'
    },
    {
      icon: <Users size={32} />,
      title: '24/7 Expert Support',
      description: 'Dedicated migration specialists throughout the entire process'
    }
  ]

  const industryExpertise = [
    {
      name: 'Financial Services',
      description: 'Big Data migration for algorithmic trading, risk analytics, and regulatory compliance with petabyte-scale transaction data',
      technologies: ['Trading Data Lakes', 'Risk Analytics Hadoop', 'Regulatory Reporting', 'Real-time Market Data']
    },
    {
      name: 'Healthcare & Life Sciences',
      description: 'Genomic data, clinical trials, and medical imaging migration with HIPAA compliance and research data interoperability',
      technologies: ['Genomic Sequencing Data', 'Clinical Trial Analytics', 'Medical Imaging Archives', 'Population Health Data']
    },
    {
      name: 'Manufacturing & IoT',
      description: 'Industrial IoT sensor data, production analytics, and supply chain big data migration to Microsoft Fabric',
      technologies: ['IoT Time Series Data', 'Manufacturing Analytics', 'Predictive Maintenance', 'Supply Chain Optimization']
    },
    {
      name: 'Technology & Media',
      description: 'Content delivery networks, user analytics, and streaming data migration with real-time processing capabilities',
      technologies: ['Content Analytics', 'User Behavior Data', 'Streaming Media Logs', 'Social Media Analytics']
    }
  ]

  return (
    <div className="min-h-screen py-20 relative bg-gray-50">
      {/* 3D Background - Full page coverage */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1, opacity: 0.4 }}
      >
        <DataVisualization />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Database className="mr-2" size={16} />
            Enterprise Data Migration
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Seamless <span className="text-yellow-500">Data Migration</span> Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your data infrastructure with enterprise-grade migration services.
            We ensure 100% data integrity, zero downtime, and accelerated business outcomes
            through proven methodologies and cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Migration <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="#migration-process"
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-3 rounded-lg border border-gray-300 transition-colors duration-200"
            >
              Learn Our Process
            </Link>
          </div>

          {/* 3D Visualization Showcase */}
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-8 relative overflow-hidden" style={{ height: '400px' }}>
            <div className="absolute inset-0" style={{ opacity: 0.8 }}>
              <SimpleDataViz />
            </div>
            {/* Fallback animated background */}
            <div className="absolute inset-0 opacity-20">
              <div className="h-full w-full bg-gradient-to-r from-yellow-400/20 via-blue-500/20 to-purple-600/20 animate-pulse"></div>
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping animation-delay-300"></div>
              <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-500"></div>
              <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping animation-delay-700"></div>
            </div>
            <div className="relative z-20 text-white text-center flex flex-col justify-center h-full bg-black/20 backdrop-blur-sm rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Real-Time Data Migration Visualization</h3>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Watch as your data flows seamlessly through our migration pipelines with live monitoring and visualization
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <div className="flex items-center text-yellow-400">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm">Data Nodes</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm">Connections</span>
                </div>
                <div className="flex items-center text-green-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm">Data Flow</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Microsoft Fabric Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 mb-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Database className="mr-2" size={16} />
                Microsoft Fabric Partner
              </div>
              <h2 className="text-3xl font-bold mb-4">Powered by Microsoft Fabric</h2>
              <p className="text-lg text-blue-100 mb-6">
                As a Microsoft Fabric specialist, we leverage the world&apos;s most advanced unified data platform
                to deliver seamless migrations with built-in AI capabilities, real-time analytics, and
                enterprise-grade governance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'OneLake Data Hub',
                  'Fabric Copilot AI',
                  'Real-time Intelligence',
                  'Power BI Integration'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center text-blue-100">
                    <CheckCircle className="text-yellow-400 mr-2" size={16} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Migration Capabilities</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Data Volume</span>
                    <span className="font-bold text-yellow-400">Unlimited Petabytes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Downtime</span>
                    <span className="font-bold text-green-400">Zero</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Data Sources</span>
                    <span className="font-bold text-blue-300">500+ Connectors</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Recovery Time</span>
                    <span className="font-bold text-purple-300">&lt; 15 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {migrationServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-yellow-500 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="text-yellow-500 mr-3" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Migration Results</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our data migration expertise delivers measurable business value and operational excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Migration Process */}
        <div id="migration-process" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Migration Methodology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven 4-phase approach that minimizes risk, ensures data integrity, and accelerates time-to-value
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {migrationProcess.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{phase.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Deliverables</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Big Data Migration Showcase */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Big Data Migration Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized in migrating massive datasets from legacy systems including Hadoop ecosystems,
              traditional data warehouses, and unstructured data repositories to modern cloud platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'Hadoop Migration', desc: 'HDFS, Hive, Spark clusters to cloud', icon: '🔄' },
              { title: 'Data Lake Modernization', desc: 'S3, ADLS, and multi-cloud architectures', icon: '🏞️' },
              { title: 'Streaming Pipelines', desc: 'Kafka, Kinesis, Event Hubs migration', icon: '⚡' },
              { title: 'NoSQL Migration', desc: 'MongoDB, Cassandra, DynamoDB', icon: '🗄️' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500PB+</div>
                <div className="text-gray-300">Data Migrated Successfully</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                <div className="text-gray-300">Data Accuracy Maintained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">72hrs</div>
                <div className="text-gray-300">Average Migration Window</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 mb-20 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry-Specific Expertise</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Deep domain knowledge across regulated industries with specialized compliance and security requirements
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industryExpertise.map((industry, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">{industry.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{industry.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <Target className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Migrate Your Data?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your data migration requirements and create a customized strategy
            that ensures success with minimal risk and maximum efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/resources/case-studies"
              className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              <FileText className="mr-2" size={20} />
              View Case Studies
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}