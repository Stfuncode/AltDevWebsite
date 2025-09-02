'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <div className="min-h-screen py-20" style={{minHeight: '100vh', padding: '5rem 0', backgroundColor: '#f8fafc', margin: 0, width: '100%'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem'}}>
        
        {/* Hero Section */}
        <div className="text-center mb-16" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 className="text-4xl font-bold text-center mb-8" style={{fontSize: '3rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1.5rem'}}>
            Contact <span style={{color: '#fbbf24'}}>Us</span>
          </h1>
          <p className="text-lg text-center mb-8" style={{fontSize: '1.25rem', color: '#475569', marginBottom: '2rem', lineHeight: '1.7'}}>
            Ready to start your project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start'}}>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8" style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            padding: '2.5rem'
          }}>
            <h2 className="text-2xl font-bold mb-6" style={{fontSize: '1.75rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1.5rem'}}>Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem'}}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#fbbf24';
                    e.target.style.boxShadow = '0 0 0 3px rgba(251, 191, 36, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem'}}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#fbbf24';
                    e.target.style.boxShadow = '0 0 0 3px rgba(251, 191, 36, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2" style={{display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem'}}>
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#fbbf24';
                    e.target.style.boxShadow = '0 0 0 3px rgba(251, 191, 36, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem'}}>
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent resize-vertical"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '120px',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#fbbf24';
                    e.target.style.boxShadow = '0 0 0 3px rgba(251, 191, 36, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center"
                style={{
                  width: '100%',
                  backgroundColor: '#fbbf24',
                  color: '#1e293b',
                  fontWeight: '700',
                  padding: '0.875rem 1.5rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f59e0b';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(251, 191, 36, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fbbf24';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(251, 191, 36, 0.3)';
                }}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div className="bg-white rounded-xl shadow-lg p-8" style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              padding: '2.5rem'
            }}>
              <h2 className="text-2xl font-bold mb-6" style={{fontSize: '1.75rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1.5rem'}}>Let's Connect</h2>
              <div className="space-y-6" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div className="flex items-start space-x-4" style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <div className="p-3 rounded-full" style={{padding: '0.75rem', backgroundColor: 'rgba(251, 191, 36, 0.1)', borderRadius: '50%'}}>
                    <Mail size={24} style={{color: '#fbbf24'}} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem'}}>Email</h3>
                    <p style={{color: '#64748b'}}>contact@altdev.com</p>
                    <p className="text-sm" style={{fontSize: '0.875rem', color: '#94a3b8'}}>We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <div className="p-3 rounded-full" style={{padding: '0.75rem', backgroundColor: 'rgba(251, 191, 36, 0.1)', borderRadius: '50%'}}>
                    <Phone size={24} style={{color: '#fbbf24'}} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem'}}>Phone</h3>
                    <p style={{color: '#64748b'}}>+1 (555) 123-4567</p>
                    <p className="text-sm" style={{fontSize: '0.875rem', color: '#94a3b8'}}>Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <div className="p-3 rounded-full" style={{padding: '0.75rem', backgroundColor: 'rgba(251, 191, 36, 0.1)', borderRadius: '50%'}}>
                    <MapPin size={24} style={{color: '#fbbf24'}} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem'}}>Location</h3>
                    <p style={{color: '#64748b'}}>San Francisco, CA</p>
                    <p className="text-sm" style={{fontSize: '0.875rem', color: '#94a3b8'}}>Remote-friendly worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br rounded-xl p-8" style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '1rem',
              padding: '2.5rem',
              color: 'white'
            }}>
              <h2 className="text-2xl font-bold mb-4" style={{fontSize: '1.75rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem'}}>Why Choose AltDev?</h2>
              <ul className="space-y-3" style={{listStyle: 'none', padding: 0}}>
                {[
                  'Expert team with 10+ years experience',
                  'Custom solutions tailored to your needs',
                  '24/7 support and maintenance',
                  'Agile development methodology',
                  'Transparent pricing and timelines'
                ].map((item, index) => (
                  <li key={index} className="flex items-center" style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem'}}>
                    <div className="w-2 h-2 rounded-full mr-3" style={{width: '8px', height: '8px', backgroundColor: '#fbbf24', borderRadius: '50%', marginRight: '0.75rem'}}></div>
                    <span style={{color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem'}}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6" style={{marginTop: '1.5rem'}}>
                <Link href="/services" className="inline-flex items-center" style={{
                  color: '#fbbf24',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#f59e0b';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#fbbf24';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  Learn more about our services <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}