'use client'

import { useState, useEffect, useCallback } from 'react'
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare, Users, BarChart3, CheckCircle, Calendar, Zap } from 'lucide-react'
import DataConnectionNetwork from '@/components/three/DataConnectionNetwork'

const projectTypes = [
  { id: 'data-analytics', name: 'Data Analytics & BI', icon: <BarChart3 size={20} /> },
  { id: 'data-migration', name: 'Data Migration', icon: <ArrowRight size={20} /> },
  { id: 'ml-ai', name: 'Machine Learning & AI', icon: <Zap size={20} /> },
  { id: 'consulting', name: 'Data Strategy Consulting', icon: <Users size={20} /> }
]

const dataSizeOptions = [
  { id: 'small', name: 'Small (< 100 GB)', basePrice: 5000 },
  { id: 'medium', name: 'Medium (100 GB - 1 TB)', basePrice: 25000 },
  { id: 'large', name: 'Large (1 TB - 10 TB)', basePrice: 80000 },
  { id: 'enterprise', name: 'Enterprise (10+ TB)', basePrice: 200000 }
]

const criticalFactorsOptions = [
  { id: 'zero-downtime', name: 'Zero Downtime Required', cost: 15000 },
  { id: 'data-validation', name: 'Comprehensive Data Validation', cost: 8000 },
  { id: 'security-compliance', name: 'Security & Compliance (HIPAA, SOC2)', cost: 12000 },
  { id: 'real-time-sync', name: 'Real-time Data Synchronization', cost: 10000 },
  { id: 'transformation', name: 'Complex Data Transformation', cost: 9000 }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
    // Data Migration specific
    dataSize: 'medium',
    dataSourcesCountMigration: 1,
    criticalFactors: [] as string[],
    // ML/AI specific
    modelComplexity: 'medium',
    dataVolume: 'medium',
    // Analytics specific
    dashboardCount: 3,
    dataSourcesCount: 2,
    // Consulting specific
    consultingDuration: 'short'
  })

  const [isFormValid, setIsFormValid] = useState(false)
  const [estimatedPrice, setEstimatedPrice] = useState({ min: 0, max: 0 })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSliderChange = (name: string, value: number) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleCheckboxChange = (factorId: string) => {
    const currentFactors = formData.criticalFactors
    const newFactors = currentFactors.includes(factorId)
      ? currentFactors.filter(f => f !== factorId)
      : [...currentFactors, factorId]

    setFormData({
      ...formData,
      criticalFactors: newFactors
    })
  }

  const calculatePrice = useCallback(() => {
    let baseMin = 0
    let baseMax = 0

    switch (formData.projectType) {
      case 'data-migration':
        // Base price by size tier
        const sizeOption = dataSizeOptions.find(s => s.id === formData.dataSize)
        const basePrice = sizeOption?.basePrice || 25000

        // Number of sources multiplier
        const sourcesMultiplier = 1 + (formData.dataSourcesCountMigration - 1) * 0.3

        // Critical factors additional cost
        const factorsCost = formData.criticalFactors.reduce((total, factorId) => {
          const factor = criticalFactorsOptions.find(f => f.id === factorId)
          return total + (factor?.cost || 0)
        }, 0)

        baseMin = Math.round((basePrice * sourcesMultiplier + factorsCost) * 0.85)
        baseMax = Math.round((basePrice * sourcesMultiplier + factorsCost) * 1.15)
        break

      case 'ml-ai':
        const complexityMap = { simple: 30000, medium: 60000, complex: 120000 }
        const volumeMap = { small: 1, medium: 1.3, large: 1.6 }
        const baseMLPrice = complexityMap[formData.modelComplexity as keyof typeof complexityMap] || 60000
        const volumeMultiplier = volumeMap[formData.dataVolume as keyof typeof volumeMap] || 1.3
        baseMin = Math.round(baseMLPrice * volumeMultiplier * 0.9)
        baseMax = Math.round(baseMLPrice * volumeMultiplier * 1.3)
        break

      case 'data-analytics':
        const dashboardPrice = 8000
        const sourcePrice = 5000
        const analyticsBase = (formData.dashboardCount * dashboardPrice) + (formData.dataSourcesCount * sourcePrice)
        baseMin = Math.round(analyticsBase * 0.85)
        baseMax = Math.round(analyticsBase * 1.25)
        break

      case 'consulting':
        const durationMap = { short: 25000, medium: 50000, long: 100000 }
        const consultingBase = durationMap[formData.consultingDuration as keyof typeof durationMap] || 50000
        baseMin = Math.round(consultingBase * 0.9)
        baseMax = Math.round(consultingBase * 1.2)
        break
    }

    setEstimatedPrice({ min: baseMin, max: baseMax })
  }, [
    formData.projectType,
    formData.dataSize,
    formData.dataSourcesCountMigration,
    formData.criticalFactors,
    formData.modelComplexity,
    formData.dataVolume,
    formData.dashboardCount,
    formData.dataSourcesCount,
    formData.consultingDuration
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData, 'Estimated price:', estimatedPrice)
    // Handle form submission logic here
  }

  useEffect(() => {
    const required = ['name', 'email', 'company', 'projectType', 'message']
    const valid = required.every(field => formData[field as keyof typeof formData])
    setIsFormValid(valid)
  }, [formData])

  useEffect(() => {
    if (formData.projectType) {
      calculatePrice()
    }
  }, [formData.projectType, calculatePrice])

  return (
    <div className="min-h-screen py-20 relative" style={{ backgroundColor: '#051D2E' }}>
      {/* Background Data Visualization */}
      <div className="absolute inset-0 opacity-20">
        <DataConnectionNetwork />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(215, 225, 80, 0.1)', border: '1px solid rgba(215, 225, 80, 0.3)', color: '#F2C864' }}>
            <MessageSquare className="mr-2" size={16} />
            Let&apos;s Build Your Data Solution
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: '#E9ECDD' }}>
            Transform Your <span style={{ color: '#F2C864' }}>Data Vision</span> Into Reality
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: 'rgba(233, 236, 221, 0.8)' }}>
            Connect with our data experts to discuss your project requirements and discover how
            we can accelerate your analytics journey with cutting-edge solutions.
          </p>
        </div>

        {/* Enhanced Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: 'rgba(3, 32, 61, 0.5)', backdropFilter: 'blur(20px)', border: '1px solid rgba(215, 225, 80, 0.2)' }}>
            {/* Form Header */}
            <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, #051D2E 0%, #04152a 100%)' }}>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#E9ECDD' }}>Start Your Data Journey</h2>
              <p style={{ color: 'rgba(233, 236, 221, 0.7)' }}>Tell us about your project and let&apos;s build something amazing together</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: '#E9ECDD' }}>
                  <Users className="mr-2" size={20} style={{ color: '#F2C864' }} />
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(233, 236, 221, 0.9)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                      style={{ backgroundColor: 'rgba(233, 236, 221, 0.1)', border: '1px solid rgba(233, 236, 221, 0.2)', color: '#E9ECDD' }}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(233, 236, 221, 0.9)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                      style={{ backgroundColor: 'rgba(233, 236, 221, 0.1)', border: '1px solid rgba(233, 236, 221, 0.2)', color: '#E9ECDD' }}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(233, 236, 221, 0.9)' }}>
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                      style={{ backgroundColor: 'rgba(233, 236, 221, 0.1)', border: '1px solid rgba(233, 236, 221, 0.2)', color: '#E9ECDD' }}
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </div>

              {/* Project Type Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: '#E9ECDD' }}>
                  <BarChart3 className="mr-2" size={20} style={{ color: '#F2C864' }} />
                  Project Type *
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <label
                      key={type.id}
                      className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200"
                      style={{
                        borderColor: formData.projectType === type.id ? '#F2C864' : 'rgba(233, 236, 221, 0.2)',
                        backgroundColor: formData.projectType === type.id ? 'rgba(215, 225, 80, 0.1)' : 'transparent',
                        color: formData.projectType === type.id ? '#F2C864' : 'rgba(233, 236, 221, 0.8)'
                      }}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={type.id}
                        checked={formData.projectType === type.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="mr-3">{type.icon}</div>
                      <span className="font-medium">{type.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project-Specific Configuration */}
              {formData.projectType === 'data-migration' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: '#E9ECDD' }}>
                    <ArrowRight className="mr-2" size={20} style={{ color: '#F2C864' }} />
                    Migration Configuration
                  </h3>

                  {/* Data Size Options */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-3" style={{ color: 'rgba(233, 236, 221, 0.9)' }}>
                      Data Size *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {dataSizeOptions.map((option) => (
                        <label
                          key={option.id}
                          className="flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200"
                          style={{
                            backgroundColor: formData.dataSize === option.id ? 'rgba(215, 225, 80, 0.1)' : 'rgba(233, 236, 221, 0.05)',
                            border: `2px solid ${formData.dataSize === option.id ? '#F2C864' : 'rgba(233, 236, 221, 0.2)'}`,
                            color: formData.dataSize === option.id ? '#F2C864' : 'rgba(233, 236, 221, 0.8)'
                          }}
                        >
                          <input
                            type="radio"
                            name="dataSize"
                            value={option.id}
                            checked={formData.dataSize === option.id}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="font-medium text-sm">{option.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Number of Data Sources */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(233, 236, 221, 0.9)' }}>
                      Number of Data Sources: <span style={{ color: '#F2C864' }}>{formData.dataSourcesCountMigration}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.dataSourcesCountMigration}
                      onChange={(e) => handleSliderChange('dataSourcesCountMigration', parseInt(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #F2C864 0%, #F2C864 ${(formData.dataSourcesCountMigration / 10) * 100}%, rgba(233, 236, 221, 0.2) ${(formData.dataSourcesCountMigration / 10) * 100}%, rgba(233, 236, 221, 0.2) 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs mt-1" style={{ color: 'rgba(233, 236, 221, 0.6)' }}>
                      <span>1 source</span>
                      <span>10 sources</span>
                    </div>
                  </div>

                  {/* Critical Factors */}
                  <div>
                    <label className="block text-sm font-medium mb-3" style={{ color: 'rgba(233, 236, 221, 0.9)' }}>
                      Critical Requirements
                    </label>
                    <div className="space-y-2">
                      {criticalFactorsOptions.map((factor) => (
                        <label
                          key={factor.id}
                          className="flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200"
                          style={{
                            backgroundColor: formData.criticalFactors.includes(factor.id) ? 'rgba(215, 225, 80, 0.1)' : 'rgba(233, 236, 221, 0.05)',
                            border: `1px solid ${formData.criticalFactors.includes(factor.id) ? '#F2C864' : 'rgba(233, 236, 221, 0.2)'}`,
                            color: formData.criticalFactors.includes(factor.id) ? '#F2C864' : 'rgba(233, 236, 221, 0.8)'
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={formData.criticalFactors.includes(factor.id)}
                            onChange={() => handleCheckboxChange(factor.id)}
                            className="mr-3"
                            style={{ accentColor: '#F2C864' }}
                          />
                          <span className="flex-1">{factor.name}</span>
                          <span className="text-sm" style={{ color: '#F2C864' }}>+${(factor.cost / 1000).toFixed(0)}K</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {formData.projectType === 'ml-ai' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: '#E9ECDD' }}>
                    <Zap className="mr-2" size={20} style={{ color: '#F2C864' }} />
                    ML/AI Configuration
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(233, 236, 221, 0.9)' }}>
                        Model Complexity
                      </label>
                      <select
                        name="modelComplexity"
                        value={formData.modelComplexity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                        style={{ backgroundColor: 'rgba(233, 236, 221, 0.1)', border: '1px solid rgba(233, 236, 221, 0.2)', color: '#E9ECDD' }}
                      >
                        <option value="simple" style={{ backgroundColor: '#051D2E' }}>Simple (Classification, Regression)</option>
                        <option value="medium" style={{ backgroundColor: '#051D2E' }}>Medium (NLP, Recommender)</option>
                        <option value="complex" style={{ backgroundColor: '#051D2E' }}>Complex (Computer Vision, Deep Learning)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(233, 236, 221, 0.9)' }}>
                        Data Volume
                      </label>
                      <select
                        name="dataVolume"
                        value={formData.dataVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                        style={{ backgroundColor: 'rgba(233, 236, 221, 0.1)', border: '1px solid rgba(233, 236, 221, 0.2)', color: '#E9ECDD' }}
                      >
                        <option value="small" style={{ backgroundColor: '#051D2E' }}>Small (&lt;100K records)</option>
                        <option value="medium" style={{ backgroundColor: '#051D2E' }}>Medium (100K-1M records)</option>
                        <option value="large" style={{ backgroundColor: '#051D2E' }}>Large (1M+ records)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {formData.projectType === 'data-analytics' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: '#E9ECDD' }}>
                    <BarChart3 className="mr-2" size={20} style={{ color: '#F2C864' }} />
                    Analytics Configuration
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(233, 236, 221, 0.9)' }}>
                        Dashboards: <span style={{ color: '#F2C864' }}>{formData.dashboardCount}</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={formData.dashboardCount}
                        onChange={(e) => handleSliderChange('dashboardCount', parseInt(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #F2C864 0%, #F2C864 ${(formData.dashboardCount / 20) * 100}%, rgba(233, 236, 221, 0.2) ${(formData.dashboardCount / 20) * 100}%, rgba(233, 236, 221, 0.2) 100%)`
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(233, 236, 221, 0.9)' }}>
                        Data Sources: <span style={{ color: '#F2C864' }}>{formData.dataSourcesCount}</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="15"
                        value={formData.dataSourcesCount}
                        onChange={(e) => handleSliderChange('dataSourcesCount', parseInt(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #F2C864 0%, #F2C864 ${(formData.dataSourcesCount / 15) * 100}%, rgba(233, 236, 221, 0.2) ${(formData.dataSourcesCount / 15) * 100}%, rgba(233, 236, 221, 0.2) 100%)`
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {formData.projectType === 'consulting' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: '#E9ECDD' }}>
                    <Users className="mr-2" size={20} style={{ color: '#F2C864' }} />
                    Consulting Configuration
                  </h3>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(233, 236, 221, 0.9)' }}>
                      Engagement Duration
                    </label>
                    <select
                      name="consultingDuration"
                      value={formData.consultingDuration}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                      style={{ backgroundColor: 'rgba(233, 236, 221, 0.1)', border: '1px solid rgba(233, 236, 221, 0.2)', color: '#E9ECDD' }}
                    >
                      <option value="short" style={{ backgroundColor: '#051D2E' }}>Short (1-3 months)</option>
                      <option value="medium" style={{ backgroundColor: '#051D2E' }}>Medium (3-6 months)</option>
                      <option value="long" style={{ backgroundColor: '#051D2E' }}>Long (6+ months)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Price Estimate Display */}
              {formData.projectType && estimatedPrice.min > 0 && (
                <div className="p-6 rounded-xl" style={{
                  background: 'linear-gradient(135deg, rgba(215, 225, 80, 0.1) 0%, rgba(215, 225, 80, 0.05) 100%)',
                  border: '2px solid rgba(215, 225, 80, 0.3)'
                }}>
                  <div className="text-center">
                    <p className="text-sm mb-2" style={{ color: 'rgba(233, 236, 221, 0.8)' }}>Estimated Project Cost</p>
                    <p className="text-3xl font-bold" style={{ color: '#F2C864' }}>
                      ${(estimatedPrice.min / 1000).toFixed(0)}K - ${(estimatedPrice.max / 1000).toFixed(0)}K
                    </p>
                    <p className="text-xs mt-2" style={{ color: 'rgba(233, 236, 221, 0.6)' }}>
                      *Actual cost may vary based on specific requirements
                    </p>
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: '#E9ECDD' }}>
                  <MessageSquare className="mr-2" size={20} style={{ color: '#F2C864' }} />
                  Project Details *
                </h3>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project goals, current challenges, data sources, and specific requirements..."
                  className="w-full px-4 py-3 rounded-lg resize-vertical transition-all duration-200"
                  style={{ backgroundColor: 'rgba(233, 236, 221, 0.1)', border: '1px solid rgba(233, 236, 221, 0.2)', color: '#E9ECDD' }}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                  style={{
                    backgroundColor: isFormValid ? '#F2C864' : 'rgba(233, 236, 221, 0.2)',
                    color: isFormValid ? '#051D2E' : 'rgba(233, 236, 221, 0.5)',
                    cursor: isFormValid ? 'pointer' : 'not-allowed',
                    boxShadow: isFormValid ? '0 10px 25px rgba(215, 225, 80, 0.3)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isFormValid) {
                      e.currentTarget.style.backgroundColor = '#E9ECDD'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(215, 225, 80, 0.5)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isFormValid) {
                      e.currentTarget.style.backgroundColor = '#F2C864'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(215, 225, 80, 0.3)'
                    }
                  }}
                >
                  <Send className="mr-2" size={20} />
                  Send Project Details
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information & Data Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">

          {/* Contact Information */}
          <div className="rounded-2xl shadow-lg p-8" style={{ backgroundColor: 'rgba(3, 32, 61, 0.5)', backdropFilter: 'blur(20px)', border: '1px solid rgba(215, 225, 80, 0.2)' }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#E9ECDD' }}>Let&apos;s Connect</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(215, 225, 80, 0.1)' }}>
                  <Mail size={24} style={{ color: '#F2C864' }} />
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: '#E9ECDD' }}>Email</h4>
                  <p style={{ color: 'rgba(233, 236, 221, 0.8)' }}>contact@altdev.com</p>
                  <p className="text-sm" style={{ color: 'rgba(233, 236, 221, 0.6)' }}>We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(215, 225, 80, 0.1)' }}>
                  <Phone size={24} style={{ color: '#F2C864' }} />
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: '#E9ECDD' }}>Phone</h4>
                  <p style={{ color: 'rgba(233, 236, 221, 0.8)' }}>+1 (555) 123-4567</p>
                  <p className="text-sm" style={{ color: 'rgba(233, 236, 221, 0.6)' }}>Mon-Fri, 9AM-6PM PST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(215, 225, 80, 0.1)' }}>
                  <MapPin size={24} style={{ color: '#F2C864' }} />
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: '#E9ECDD' }}>Location</h4>
                  <p style={{ color: 'rgba(233, 236, 221, 0.8)' }}>San Francisco, CA</p>
                  <p className="text-sm" style={{ color: 'rgba(233, 236, 221, 0.6)' }}>Remote-friendly worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl" style={{ background: 'linear-gradient(135deg, #051D2E 0%, #04152a 100%)', border: '1px solid rgba(215, 225, 80, 0.2)' }}>
              <h4 className="text-lg font-bold mb-3" style={{ color: '#E9ECDD' }}>Schedule a Data Discovery Call</h4>
              <p className="mb-4" style={{ color: 'rgba(233, 236, 221, 0.7)' }}>
                Book a 30-minute consultation to discuss your data challenges and explore solutions.
              </p>
              <button
                className="inline-flex items-center font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                style={{ backgroundColor: '#F2C864', color: '#051D2E' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E9ECDD'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F2C864'
                }}
              >
                <Calendar className="mr-2" size={16} />
                Schedule Call
              </button>
            </div>
          </div>

          {/* Data Visualization Showcase */}
          <div className="rounded-2xl p-8 relative overflow-hidden" style={{ backgroundColor: 'rgba(3, 32, 61, 0.8)', border: '1px solid rgba(215, 225, 80, 0.2)' }}>
            <div className="absolute inset-0 opacity-30">
              <DataConnectionNetwork />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#E9ECDD' }}>Your Data, Connected</h3>
              <p className="mb-6" style={{ color: 'rgba(233, 236, 221, 0.7)' }}>
                Watch how we transform disconnected data points into intelligent,
                interconnected insights that drive business value.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} style={{ color: '#F2C864' }} />
                  <span style={{ color: 'rgba(233, 236, 221, 0.9)' }}>Real-time data processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} style={{ color: '#F2C864' }} />
                  <span style={{ color: 'rgba(233, 236, 221, 0.9)' }}>Interactive visualizations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} style={{ color: '#F2C864' }} />
                  <span style={{ color: 'rgba(233, 236, 221, 0.9)' }}>Predictive analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} style={{ color: '#F2C864' }} />
                  <span style={{ color: 'rgba(233, 236, 221, 0.9)' }}>Scalable cloud architecture</span>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-lg backdrop-blur-sm" style={{ backgroundColor: 'rgba(233, 236, 221, 0.1)' }}>
                <p className="text-sm" style={{ color: 'rgba(233, 236, 221, 0.8)' }}>
                  &quot;AltDev transformed our data chaos into clear insights.
                  The implementation exceeded expectations.&quot;
                </p>
                <p className="text-xs mt-2" style={{ color: '#F2C864' }}>— Fortune 500 Client</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}