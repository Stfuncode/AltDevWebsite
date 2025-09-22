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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true)
      setCurrentIndex(0)

      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1

          if (nextIndex <= text.length) {
            setDisplayText(text.slice(0, nextIndex))
            return nextIndex
          } else {
            // Typing complete
            setIsTyping(false)
            setShowBlinkingCursor(true)
            if (intervalRef.current) {
              clearInterval(intervalRef.current)
            }
            return prevIndex
          }
        })
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