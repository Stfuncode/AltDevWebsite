'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Handle scroll and close dropdown when clicking outside
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isClickInsideDropdown = Object.values(dropdownRefs.current).some(ref =>
        ref && ref.contains(target)
      )

      if (!isClickInsideDropdown && activeDropdown) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeDropdown])

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const navItems = [
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        {
          category: 'Analytics & Intelligence',
          items: [
            { name: 'Data Analytics', href: '/solutions/data-analytics' },
            { name: 'Business Intelligence', href: '/solutions/business-intelligence' },
            { name: 'Predictive Modeling', href: '/solutions/predictive-modeling' },
            { name: 'Real-time Dashboards', href: '/solutions/dashboards' }
          ]
        },
        {
          category: 'Data Engineering',
          items: [
            { name: 'Data Pipelines', href: '/solutions/data-pipelines' },
            { name: 'Data Migration', href: '/solutions/data-migration' },
            { name: 'Data Warehousing', href: '/solutions/data-warehousing' },
            { name: 'API Development', href: '/solutions/api-development' }
          ]
        },
        {
          category: 'AI & Machine Learning',
          items: [
            { name: 'Custom ML Models', href: '/solutions/ml-models' },
            { name: 'Natural Language Processing', href: '/solutions/nlp' },
            { name: 'Computer Vision', href: '/solutions/computer-vision' },
            { name: 'Recommendation Systems', href: '/solutions/recommendations' }
          ]
        }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        {
          category: 'Consulting',
          items: [
            { name: 'Data Strategy', href: '/services/data-strategy' },
            { name: 'Digital Transformation', href: '/services/digital-transformation' },
            { name: 'Analytics Roadmap', href: '/services/analytics-roadmap' }
          ]
        },
        {
          category: 'Implementation',
          items: [
            { name: 'Custom Development', href: '/services/custom-development' },
            { name: 'System Integration', href: '/services/system-integration' },
            { name: 'Training & Support', href: '/services/training-support' }
          ]
        }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav
      className="sticky top-0 z-[60] transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(5, 29, 46, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: 'none',
        boxShadow: 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br rounded-lg transition-transform duration-200 group-hover:scale-110" style={{ background: '#F2C864' }}></div>
            <span className="text-xl font-bold transition-colors duration-300" style={{ color: scrolled ? '#E9ECDD' : '#051D2E' }}>
              <span style={{ color: '#F2C864' }}>ALT</span>DEV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={(el) => { dropdownRefs.current[item.name] = el }}
              >
                {item.dropdown ? (
                  <button
                    className="flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-300"
                    style={{
                      color: activeDropdown === item.name ? '#F2C864' : (scrolled ? 'rgba(233, 236, 221, 0.9)' : 'rgba(5, 29, 46, 0.8)'),
                      backgroundColor: activeDropdown === item.name ? 'rgba(242, 200, 100, 0.1)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = scrolled ? '#F2C864' : '#051D2E';
                      e.currentTarget.style.backgroundColor = scrolled ? 'rgba(242, 200, 100, 0.1)' : 'rgba(5, 29, 46, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      if (activeDropdown !== item.name) {
                        e.currentTarget.style.color = scrolled ? 'rgba(233, 236, 221, 0.9)' : 'rgba(5, 29, 46, 0.8)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                    onClick={() => toggleDropdown(item.name)}
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-300"
                    style={{ color: scrolled ? 'rgba(233, 236, 221, 0.9)' : 'rgba(5, 29, 46, 0.8)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = scrolled ? '#F2C864' : '#051D2E';
                      e.currentTarget.style.backgroundColor = scrolled ? 'rgba(242, 200, 100, 0.1)' : 'rgba(5, 29, 46, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = scrolled ? 'rgba(233, 236, 221, 0.9)' : 'rgba(5, 29, 46, 0.8)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 min-w-[700px] max-w-4xl p-8 z-[100] animate-dropdown-enter"
                    style={{
                      backgroundColor: 'rgba(5, 29, 46, 0.98)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                      borderRadius: '1rem',
                      border: 'none'
                    }}
                  >
                    <div className="grid grid-cols-3 gap-10">
                      {item.dropdown.map((category, categoryIndex) => (
                        <div
                          key={category.category}
                          className="animate-stagger-fade-in opacity-0"
                          style={{ animationDelay: `${categoryIndex * 50}ms` }}
                        >
                          <h3 className="text-xs font-bold mb-4 uppercase tracking-wider border-b pb-2" style={{ color: '#F2C864', borderColor: 'rgba(233, 236, 221, 0.1)' }}>
                            {category.category}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((subItem, itemIndex) => (
                              <li
                                key={subItem.name}
                                className="animate-stagger-fade-in opacity-0"
                                style={{ animationDelay: `${(categoryIndex * 50) + (itemIndex * 25) + 100}ms` }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="block text-sm px-3 py-2 rounded-lg transition-all duration-200 font-medium group"
                                  style={{ color: 'rgba(233, 236, 221, 0.8)' }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#F2C864';
                                    e.currentTarget.style.backgroundColor = 'rgba(242, 200, 100, 0.1)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'rgba(233, 236, 221, 0.8)';
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                  }}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="flex items-center">
                                    {subItem.name}
                                    <svg
                                      className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="font-semibold px-6 py-2 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: '#F2C864',
                color: '#051D2E',
                boxShadow: '0 4px 15px rgba(242, 200, 100, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EFB93C';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(242, 200, 100, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F2C864';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(242, 200, 100, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md transition-all duration-300"
            style={{ color: scrolled ? 'rgba(233, 236, 221, 0.9)' : 'rgba(5, 29, 46, 0.8)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = scrolled ? '#F2C864' : '#051D2E';
              e.currentTarget.style.backgroundColor = scrolled ? 'rgba(242, 200, 100, 0.1)' : 'rgba(5, 29, 46, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = scrolled ? 'rgba(233, 236, 221, 0.9)' : 'rgba(5, 29, 46, 0.8)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="lg:hidden absolute top-full left-0 right-0 max-h-[80vh] overflow-y-auto animate-dropdown-enter"
            style={{
              backgroundColor: 'rgba(5, 29, 46, 0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: 'none',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="border-b pb-4 last:border-b-0 animate-stagger-fade-in opacity-0"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      borderColor: 'rgba(233, 236, 221, 0.1)'
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block text-lg font-semibold transition-colors mb-3"
                      style={{ color: '#E9ECDD' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#F2C864';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#E9ECDD';
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="grid grid-cols-1 gap-4">
                        {item.dropdown.map((category) => (
                          <div
                            key={category.category}
                            className="rounded-lg p-4"
                            style={{
                              backgroundColor: 'rgba(233, 236, 221, 0.05)',
                              border: '1px solid rgba(233, 236, 221, 0.1)'
                            }}
                          >
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-3 border-b pb-2" style={{ color: '#F2C864', borderColor: 'rgba(233, 236, 221, 0.1)' }}>
                              {category.category}
                            </h4>
                            <div className="space-y-2">
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block text-sm px-3 py-2 rounded-md transition-all duration-200"
                                  style={{ color: 'rgba(233, 236, 221, 0.8)' }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#F2C864';
                                    e.currentTarget.style.backgroundColor = 'rgba(242, 200, 100, 0.1)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'rgba(233, 236, 221, 0.8)';
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                  }}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(233, 236, 221, 0.1)' }}>
                <Link
                  href="/contact"
                  className="block w-full text-center font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: '#F2C864', color: '#051D2E' }}
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NewNavbar