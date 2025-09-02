'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav 
      className="bg-white/90 backdrop-blur-md border-b border-secondary-200 sticky top-0 z-50"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(15px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        margin: 0,
        padding: 0,
        width: '100%'
      }}
    >
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{maxWidth: '80rem', margin: '0 auto', padding: '0 2rem'}}
      >
        <div 
          className="flex justify-between items-center h-16"
          style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem'}}
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            style={{display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}
          >
            <div 
              className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg"
              style={{
                width: '2rem',
                height: '2rem',
                background: '#fbbf24',
                borderRadius: '0.5rem'
              }}
            ></div>
            <span 
              className="text-xl font-bold text-white"
              style={{fontSize: '1.25rem', fontWeight: 'bold', color: 'white'}}
            >
              AltDev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div 
            className="hidden md:flex space-x-8"
            style={{display: 'flex', gap: '2rem'}}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fbbf24';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link 
              href="/contact" 
              className="btn-primary"
              style={{
                backgroundColor: '#fbbf24',
                color: '#1e293b',
                fontWeight: '700',
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 8px 25px rgba(251, 191, 36, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f59e0b';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(251, 191, 36, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fbbf24';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(251, 191, 36, 0.3)';
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary-700 hover:text-primary-600 transition-colors"
            style={{
              display: 'block',
              color: 'rgba(255, 255, 255, 0.8)',
              background: 'none',
              border: 'none',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fbbf24';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden py-4 border-t border-secondary-200"
            style={{
              display: 'block',
              padding: '1rem 0',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(30, 41, 59, 0.98)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 transition-colors"
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'all 0.2s',
                  borderRadius: '0.5rem',
                  margin: '0 0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fbbf24';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2" style={{padding: '1rem 1.5rem'}}>
              <Link 
                href="/contact" 
                className="btn-primary block text-center"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  backgroundColor: '#fbbf24',
                  color: '#1e293b',
                  fontWeight: '700',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(251, 191, 36, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f59e0b';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(251, 191, 36, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fbbf24';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(251, 191, 36, 0.3)';
                }}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar