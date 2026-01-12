'use client'

import React, { useState } from 'react'

interface TrainingProgramCardProps {
  title: string
  platform: 'fabric' | 'snowflake' | 'databricks' | 'ai'
  duration: string
  deliveryMethod: string
  topics: string[]
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  onRequestProposal?: () => void
}

const platformColors = {
  fabric: {
    bg: 'bg-fabric-500/10',
    border: 'border-fabric-500/30',
    text: 'text-fabric-400',
    badge: 'bg-fabric-500',
    hoverBorder: 'border-fabric-500',
  },
  snowflake: {
    bg: 'bg-snowflake-500/10',
    border: 'border-snowflake-500/30',
    text: 'text-snowflake-400',
    badge: 'bg-snowflake-500',
    hoverBorder: 'border-snowflake-500',
  },
  databricks: {
    bg: 'bg-databricks-500/10',
    border: 'border-databricks-500/30',
    text: 'text-databricks-400',
    badge: 'bg-databricks-500',
    hoverBorder: 'border-databricks-500',
  },
  ai: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    badge: 'bg-purple-500',
    hoverBorder: 'border-purple-500',
  },
}

export default function TrainingProgramCard({
  title,
  platform,
  duration,
  deliveryMethod,
  topics,
  level = 'All Levels',
  onRequestProposal,
}: TrainingProgramCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const colors = platformColors[platform]

  return (
    <div
      className={`relative rounded-xl border-2 backdrop-blur-md transition-all duration-300 overflow-hidden p-6 ${
        isHovered ? `${colors.hoverBorder} shadow-xl` : colors.border
      }`}
      style={{
        background: 'rgba(5, 29, 46, 0.8)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Platform & Level Badges */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${colors.badge}`}>
          {platform === 'fabric'
            ? 'Microsoft Fabric'
            : platform === 'snowflake'
            ? 'Snowflake'
            : platform === 'databricks'
            ? 'Databricks'
            : 'AI/ML'}
        </div>
        <div className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary-700 text-gray-200">{level}</div>
      </div>

      {/* Title */}
      <h3 className={`text-xl font-bold mb-3 ${colors.text}`}>{title}</h3>

      {/* Duration & Delivery */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{deliveryMethod}</span>
        </div>
      </div>

      {/* Topics Covered */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Topics Covered:</p>
        <div className="space-y-2">
          {topics.slice(0, 4).map((topic, index) => (
            <div key={index} className="flex items-start gap-2">
              <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-200 text-sm">{topic}</span>
            </div>
          ))}
          {topics.length > 4 && (
            <p className="text-xs text-gray-400 ml-6">+ {topics.length - 4} more topics</p>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onRequestProposal}
        className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 ${colors.bg} ${colors.text} hover:bg-opacity-80 border ${colors.border}`}
      >
        Request Proposal
        <span
          className="inline-block ml-2 transition-transform duration-200"
          style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}
        >
          →
        </span>
      </button>
    </div>
  )
}
