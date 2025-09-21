'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isClickInsideDropdown = Object.values(dropdownRefs.current).some(ref =>
        ref && ref.contains(target)
      )

      if (!isClickInsideDropdown && activeDropdown) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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
    {
      name: 'Industries',
      href: '/industries',
      dropdown: [
        {
          category: 'Sectors',
          items: [
            { name: 'Financial Services', href: '/industries/financial-services' },
            { name: 'Healthcare', href: '/industries/healthcare' },
            { name: 'Retail & E-commerce', href: '/industries/retail' },
            { name: 'Manufacturing', href: '/industries/manufacturing' },
            { name: 'Technology', href: '/industries/technology' }
          ]
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        {
          category: 'Content',
          items: [
            { name: 'Case Studies', href: '/resources/case-studies' },
            { name: 'White Papers', href: '/resources/white-papers' },
            { name: 'Blog', href: '/resources/blog' },
            { name: 'Documentation', href: '/resources/docs' }
          ]
        }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="bg-white dark:bg-secondary-900 shadow-sm sticky top-0 z-[60] border-b border-secondary-200 dark:border-secondary-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-500 rounded-lg transition-transform duration-200 group-hover:scale-110"></div>
            <span className="text-xl font-bold text-secondary-900 dark:text-secondary-100">
              <span className="gradient-text">ALT</span>DEV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={(el) => (dropdownRefs.current[item.name] = el)}
              >
                {item.dropdown ? (
                  <button
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeDropdown === item.name
                        ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 dark:text-primary-400'
                        : 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800'
                    }`}
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
                    className="flex items-center px-4 py-2 text-sm font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-md transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div
                    className={`
                      absolute top-full left-1/2 transform -translate-x-1/2 mt-3
                      bg-white dark:bg-secondary-800
                      shadow-2xl dark:shadow-primary-500/10
                      rounded-xl border border-secondary-200 dark:border-secondary-700
                      min-w-[700px] max-w-4xl p-8 z-[100]
                      animate-dropdown-enter
                      before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2
                      before:w-4 before:h-4 before:bg-white dark:before:bg-secondary-800
                      before:border-l before:border-t before:border-secondary-200 dark:before:border-secondary-700
                      before:rotate-45
                    `}
                  >
                    <div className="grid grid-cols-3 gap-10">
                      {item.dropdown.map((category, categoryIndex) => (
                        <div
                          key={category.category}
                          className="animate-stagger-fade-in opacity-0"
                          style={{ animationDelay: `${categoryIndex * 100}ms` }}
                        >
                          <h3 className="text-xs font-bold text-secondary-900 dark:text-secondary-100 mb-4 uppercase tracking-wider border-b border-primary-100 dark:border-primary-800 pb-2">
                            {category.category}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((subItem, itemIndex) => (
                              <li
                                key={subItem.name}
                                className="animate-stagger-fade-in opacity-0"
                                style={{ animationDelay: `${(categoryIndex * 100) + (itemIndex * 50) + 150}ms` }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="block text-sm text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium group"
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
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-md transition-all duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md border-t border-secondary-200 dark:border-secondary-700 shadow-lg max-h-[80vh] overflow-y-auto animate-dropdown-enter">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="border-b border-secondary-100 dark:border-secondary-800 pb-4 last:border-b-0 animate-stagger-fade-in opacity-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link
                      href={item.href}
                      className="block text-lg font-semibold text-secondary-900 dark:text-secondary-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-3"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="grid grid-cols-1 gap-4">
                        {item.dropdown.map((category) => (
                          <div key={category.category} className="bg-secondary-50 dark:bg-secondary-800/50 rounded-lg p-4">
                            <h4 className="text-xs font-bold text-secondary-700 dark:text-secondary-300 uppercase tracking-wider mb-3 border-b border-primary-200 dark:border-primary-800 pb-2">
                              {category.category}
                            </h4>
                            <div className="space-y-2">
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-secondary-700 px-3 py-2 rounded-md transition-all duration-200"
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
              <div className="mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-700">
                <Link
                  href="/contact"
                  className="block w-full text-center btn-primary"
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

export default Navbar