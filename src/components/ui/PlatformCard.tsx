'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface PlatformCardProps {
  platform: 'fabric' | 'snowflake' | 'databricks'
  name: string
  tagline: string
  capabilities: string[]
  link: string
  isPrimary?: boolean
  certified?: boolean
}

const platformStyles = {
  fabric: {
    gradient: 'from-[#FCCB49]/20 to-[#FFE68E]/20',
    border: 'border-[#FCCB49]/30',
    hoverBorder: 'border-[#FCCB49]',
    hoverShadow: 'shadow-[#FCCB49]/50',
    text: 'text-[#FCCB49]',
    bg: 'bg-[#FCCB49]/10',
    badgeBg: 'bg-[#FCCB49]',
  },
  snowflake: {
    gradient: 'from-[#9ECCFA]/20 to-[#D5EBFF]/20',
    border: 'border-[#9ECCFA]/30',
    hoverBorder: 'border-[#9ECCFA]',
    hoverShadow: 'shadow-[#9ECCFA]/50',
    text: 'text-[#9ECCFA]',
    bg: 'bg-[#9ECCFA]/10',
    badgeBg: 'bg-[#9ECCFA]',
  },
  databricks: {
    gradient: 'from-[#E6DBC7]/20 to-[#FCCB49]/20',
    border: 'border-[#E6DBC7]/30',
    hoverBorder: 'border-[#E6DBC7]',
    hoverShadow: 'shadow-[#E6DBC7]/50',
    text: 'text-[#E6DBC7]',
    bg: 'bg-[#E6DBC7]/10',
    badgeBg: 'bg-[#E6DBC7]',
  },
}

export default function PlatformCard({
  platform,
  name,
  tagline,
  capabilities,
  link,
  isPrimary = false,
  certified = false,
}: PlatformCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const styles = platformStyles[platform]

  return (
    <Link href={link}>
      <div
        className={`relative rounded-2xl border-2 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isPrimary ? 'p-8' : 'p-6'
        } ${isHovered ? `${styles.hoverBorder} shadow-2xl ${styles.hoverShadow}` : styles.border}`}
        style={{
          background: isHovered
            ? `linear-gradient(135deg, ${platform === 'fabric' ? 'rgba(252, 203, 73, 0.15)' : platform === 'snowflake' ? 'rgba(158, 204, 250, 0.15)' : 'rgba(230, 219, 199, 0.15)'} 0%, rgba(5, 29, 46, 0.95) 100%)`
            : 'rgba(5, 29, 46, 0.8)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Certified Badge */}
        {certified && (
          <div className="absolute top-4 right-4">
            <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${styles.badgeBg} flex items-center gap-1`}>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Certified
            </div>
          </div>
        )}

        {/* Primary Badge */}
        {isPrimary && (
          <div className="mb-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 text-sm font-bold">
              Our Flagship Platform
            </div>
          </div>
        )}

        {/* Platform Name */}
        <h3 className={`text-3xl font-bold mb-3 ${styles.text} ${isPrimary ? 'text-4xl' : ''}`}>
          {name}
        </h3>

        {/* Tagline */}
        <p className="text-gray-300 text-lg mb-6">{tagline}</p>

        {/* Capabilities */}
        <div className="space-y-3 mb-6">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex items-start gap-3">
              <svg
                className={`w-5 h-5 mt-0.5 flex-shrink-0 ${styles.text}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-200">{capability}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
              isPrimary
                ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 hover:from-accent-400 hover:to-accent-500'
                : `${styles.bg} ${styles.text} hover:${styles.badgeBg} hover:text-white`
            }`}
          >
{isPrimary ? 'See How It Works' : 'Explore Solutions'}
            <span className="inline-block ml-2 transition-transform duration-200" style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}>
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
