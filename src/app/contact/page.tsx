'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare, Users, BarChart3, CheckCircle, Calendar, Zap } from 'lucide-react'
import DataConnectionNetwork from '@/components/three/DataConnectionNetwork'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  // const [currentStep, setCurrentStep] = useState(0)
  const [isFormValid, setIsFormValid] = useState(false)

  const projectTypes = [
    { id: 'data-analytics', name: 'Data Analytics & BI', icon: <BarChart3 size={20} /> },
    { id: 'data-migration', name: 'Data Migration', icon: <ArrowRight size={20} /> },
    { id: 'ml-ai', name: 'Machine Learning & AI', icon: <Zap size={20} /> },
    { id: 'consulting', name: 'Data Strategy Consulting', icon: <Users size={20} /> }
  ]

  const budgetRanges = [
    { id: 'under-25k', name: 'Under $25K' },
    { id: '25k-50k', name: '$25K - $50K' },
    { id: '50k-100k', name: '$50K - $100K' },
    { id: '100k-plus', name: '$100K+' }
  ]

  const timelines = [
    { id: '1-3-months', name: '1-3 months' },
    { id: '3-6-months', name: '3-6 months' },
    { id: '6-12-months', name: '6-12 months' },
    { id: '12-plus-months', name: '12+ months' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  useEffect(() => {
    const required = ['name', 'email', 'company', 'projectType', 'message']
    const valid = required.every(field => formData[field as keyof typeof formData])
    setIsFormValid(valid)
  }, [formData])

  return (
    <div className="min-h-screen py-20 relative bg-gray-50">
      {/* Background Data Visualization */}
      <div className="absolute inset-0 opacity-20">
        <DataConnectionNetwork />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="mr-2" size={16} />
            Let&apos;s Build Your Data Solution
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Your <span className="text-yellow-500">Data Vision</span> Into Reality
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with our data experts to discuss your project requirements and discover how
            we can accelerate your analytics journey with Microsoft Fabric and cutting-edge solutions.
          </p>
        </div>

        {/* Enhanced Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Start Your Data Journey</h2>
              <p className="text-gray-300">Tell us about your project and let&apos;s build something amazing together</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="mr-2 text-yellow-500" size={20} />
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </div>

              {/* Project Type Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BarChart3 className="mr-2 text-yellow-500" size={20} />
                  Project Type *
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <label
                      key={type.id}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        formData.projectType === type.id
                          ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
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

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline.id} value={timeline.id}>
                        {timeline.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MessageSquare className="mr-2 text-yellow-500" size={20} />
                  Project Details *
                </h3>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project goals, current challenges, data sources, and specific requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-vertical transition-all duration-200"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                    isFormValid
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
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
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let&apos;s Connect</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-yellow-100">
                  <Mail size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contact@altdev.com</p>
                  <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-yellow-100">
                  <Phone size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM PST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-yellow-100">
                  <MapPin size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                  <p className="text-sm text-gray-500">Remote-friendly worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white">
              <h4 className="text-lg font-bold mb-3">Schedule a Data Discovery Call</h4>
              <p className="text-gray-300 mb-4">
                Book a 30-minute consultation to discuss your data challenges and explore solutions.
              </p>
              <button className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
                <Calendar className="mr-2" size={16} />
                Schedule Call
              </button>
            </div>
          </div>

          {/* Data Visualization Showcase */}
          <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <DataConnectionNetwork />
            </div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Your Data, Connected</h3>
              <p className="text-gray-300 mb-6">
                Watch how we transform disconnected data points into intelligent,
                interconnected insights that drive business value.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-yellow-400" size={20} />
                  <span>Real-time data processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-yellow-400" size={20} />
                  <span>Interactive visualizations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-yellow-400" size={20} />
                  <span>Predictive analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-yellow-400" size={20} />
                  <span>Scalable cloud architecture</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-gray-300">
                  &quot;AltDev transformed our data chaos into clear insights.
                  The Microsoft Fabric implementation exceeded expectations.&quot;
                </p>
                <p className="text-xs text-yellow-400 mt-2">— Fortune 500 Client</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}