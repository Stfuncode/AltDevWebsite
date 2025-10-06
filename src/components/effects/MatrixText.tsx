'use client'

import { useState, useEffect, useRef } from 'react'

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  typeSpeed?: number
  showCursor?: boolean
}

export default function TypewriterText({
  text,
  className = '',
  delay = 0,
  typeSpeed = 100,
  showCursor = true
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true)
      let currentIndex = 0

      intervalRef.current = setInterval(() => {
        currentIndex += 1

        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
        } else {
          // Typing complete
          setIsTyping(false)
          setShowBlinkingCursor(true)
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
        }
      }, typeSpeed)
    }

    // Start typing after delay
    const timeoutId = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(timeoutId)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [text, delay, typeSpeed])

  const cursorClass = showCursor && (isTyping || showBlinkingCursor)
    ? 'after:content-["|"] after:animate-pulse after:text-yellow-400 after:ml-1'
    : ''

  return (
    <span
      className={`font-mono ${className} ${cursorClass} ${isTyping ? 'text-yellow-400' : ''}`}
      style={{
        textShadow: isTyping ? '0 0 10px rgba(255, 255, 0, 0.3)' : 'none'
      }}
    >
      {displayText}
    </span>
  )
}