'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface AIServiceCardProps {
  service: 'vision' | 'ml' | 'nlp'
  name: string
  description: string
  examples: string[]
  cloudProviders: ('aws' | 'azure')[]
  icon: React.ReactNode
  link?: string
}

const serviceStyles = {
  vision: {
    gradient: 'from-purple-500/20 to-purple-700/20',
    border: 'border-purple-500/30',
    hoverBorder: 'border-purple-500',
    hoverShadow: 'shadow-purple-500/50',
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  ml: {
    gradient: 'from-blue-500/20 to-blue-700/20',
    border: 'border-blue-500/30',
    hoverBorder: 'border-blue-500',
    hoverShadow: 'shadow-blue-500/50',
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  nlp: {
    gradient: 'from-green-500/20 to-green-700/20',
    border: 'border-green-500/30',
    hoverBorder: 'border-green-500',
    hoverShadow: 'shadow-green-500/50',
    text: 'text-green-400',
    bg: 'bg-green-500/10',
  },
}

export default function AIServiceCard({
  service,
  name,
  description,
  examples,
  cloudProviders,
  icon,
  link = '/services/ai-solutions',
}: AIServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const styles = serviceStyles[service]

  return (
    <Link href={link}>
      <div
        className={`relative rounded-2xl border-2 backdrop-blur-md transition-all duration-300 overflow-hidden p-6 ${
          isHovered ? `${styles.hoverBorder} shadow-2xl ${styles.hoverShadow}` : styles.border
        }`}
        style={{
          background: isHovered ? 'rgba(5, 29, 46, 0.95)' : 'rgba(5, 29, 46, 0.8)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Cloud Provider Badges */}
        <div className="absolute top-4 right-4 flex gap-2">
          {cloudProviders.includes('aws') && (
            <div className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-aws-500 flex items-center gap-1">
              AWS
            </div>
          )}
          {cloudProviders.includes('azure') && (
            <div className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-azure-500 flex items-center gap-1">
              Azure
            </div>
          )}
        </div>

        {/* Icon */}
        <div className={`w-16 h-16 rounded-xl ${styles.bg} flex items-center justify-center mb-4 ${styles.text}`}>
          {icon}
        </div>

        {/* Service Name */}
        <h3 className={`text-2xl font-bold mb-3 ${styles.text}`}>{name}</h3>

        {/* Description */}
        <p className="text-gray-300 mb-6">{description}</p>

        {/* Examples */}
        <div className="space-y-2 mb-6">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Use Cases:</p>
          {examples.map((example, index) => (
            <div key={index} className="flex items-start gap-2">
              <svg
                className={`w-4 h-4 mt-1 flex-shrink-0 ${styles.text}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-gray-200 text-sm">{example}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <button
            className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 ${styles.bg} ${styles.text} hover:bg-opacity-80`}
          >
            Explore Solutions
            <span
              className="inline-block ml-2 transition-transform duration-200"
              style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}
            >
              →
            </span>
          </button>
        </div>

        {/* Decorative Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 transition-opacity duration-300 pointer-events-none`}
          style={{ opacity: isHovered ? 0.4 : 0 }}
        />
      </div>
    </Link>
  )
}
