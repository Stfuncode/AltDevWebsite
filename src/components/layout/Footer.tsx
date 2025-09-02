'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white" style={{
      backgroundColor: 'rgba(30, 41, 59, 0.85)', 
      color: 'white',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.3)',
      margin: 0,
      padding: 0,
      width: '100%'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{maxWidth: '80rem', margin: '0 auto', padding: '3rem 2rem'}}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
          
          {/* Company Info */}
          <div className="space-y-4" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div className="flex items-center space-x-2" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg" style={{
                width: '2rem',
                height: '2rem',
                background: '#fbbf24',
                borderRadius: '0.5rem'
              }}></div>
              <span className="text-xl font-bold" style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'white'}}>
                <span style={{color: '#fbbf24'}}>ALT</span>DEV
              </span>
            </div>
            <p className="text-secondary-400 text-sm" style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', lineHeight: '1.5'}}>
              Transforming businesses through <strong style={{color: '#fbbf24'}}>data-driven insights</strong> and intelligent analytics. 
              Building the future, one dataset at a time.
            </p>
            <div className="flex space-x-4" style={{display: 'flex', gap: '1rem'}}>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors" style={{
                color: 'rgba(255, 255, 255, 0.6)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fbbf24';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <Github size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors" style={{
                color: 'rgba(255, 255, 255, 0.6)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fbbf24';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors" style={{
                color: 'rgba(255, 255, 255, 0.6)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fbbf24';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '1rem'}}>
              Quick Links
            </h3>
            <ul className="space-y-2" style={{listStyle: 'none', padding: 0}}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name} style={{marginBottom: '0.5rem'}}>
                  <Link href={link.href} className="text-secondary-400 hover:text-white transition-colors" style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#fbbf24';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '1rem'}}>
              Our Services
            </h3>
            <ul className="space-y-2" style={{listStyle: 'none', padding: 0}}>
              {[
                'Data Analytics',
                'Data Engineering', 
                'Machine Learning',
                'Business Intelligence',
                'Data Strategy',
                'Data Security'
              ].map((service) => (
                <li key={service} className="flex items-center" style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                  <div className="w-1.5 h-1.5 rounded-full mr-2" style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#fbbf24',
                    borderRadius: '50%',
                    marginRight: '0.5rem'
                  }}></div>
                  <span className="text-secondary-400" style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem'}}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '1rem'}}>
              Get In Touch
            </h3>
            <ul className="space-y-3" style={{listStyle: 'none', padding: 0}}>
              <li className="flex items-start space-x-3 text-secondary-400" style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem'}}>
                <Mail size={16} style={{color: '#fbbf24', marginTop: '2px'}} />
                <div>
                  <span style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem'}}>contact@altdev.com</span>
                  <p style={{fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', margin: 0}}>24hr response time</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-secondary-400" style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem'}}>
                <Phone size={16} style={{color: '#fbbf24', marginTop: '2px'}} />
                <div>
                  <span style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem'}}>+1 (555) 123-4567</span>
                  <p style={{fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', margin: 0}}>Mon-Fri, 9AM-6PM PST</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-secondary-400" style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem'}}>
                <MapPin size={16} style={{color: '#fbbf24', marginTop: '2px'}} />
                <div>
                  <span style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem'}}>San Francisco, CA</span>
                  <p style={{fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', margin: 0}}>Remote-friendly worldwide</p>
                </div>
              </li>
            </ul>

            <div className="mt-6" style={{marginTop: '1.5rem'}}>
              <Link href="/contact" className="inline-flex items-center" style={{
                backgroundColor: '#fbbf24',
                color: '#1e293b',
                fontWeight: '600',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(251, 191, 36, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f59e0b';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(251, 191, 36, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fbbf24';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(251, 191, 36, 0.2)';
              }}>
                Start Project <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-12 pt-8" style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: '3rem',
          paddingTop: '2rem'
        }}>
          <div className="flex flex-col md:flex-row justify-between items-center" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'}}>
            <p className="text-center text-secondary-400 text-sm" style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', textAlign: 'center'}}>
              &copy; 2025 <span style={{color: '#fbbf24'}}>AltDev</span>. All rights reserved. Built with ❤️ and cutting-edge technology.
            </p>
            <div className="flex space-x-6 text-sm" style={{display: 'flex', gap: '1.5rem', fontSize: '0.875rem'}}>
              <a href="#" className="text-secondary-400 hover:text-lime-400 transition-colors" style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 hover:text-lime-400 transition-colors" style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer