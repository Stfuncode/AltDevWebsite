'use client'

import { useState, useEffect, useRef } from 'react'

interface MatrixTextProps {
  text: string
  className?: string
  delay?: number
  scrambleSpeed?: number
}

export default function MatrixText({
  text,
  className = '',
  delay = 0,
  scrambleSpeed = 50
}: MatrixTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isRevealing, setIsRevealing] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const revealedIndexRef = useRef(0)

  // Characters for scrambling (matrix-style)
  const scrambleChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズブプエケセテネヘメレゲゼデベペオコソトノホモヨロゴゾドボポヲン'

  const getRandomChar = () => {
    return scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
  }

  const scrambleText = (targetText: string, revealedIndex: number) => {
    return targetText
      .split('')
      .map((char, index) => {
        if (index < revealedIndex) {
          return char // Already revealed
        } else if (char === ' ') {
          return ' ' // Keep spaces
        } else {
          return getRandomChar() // Scramble remaining characters
        }
      })
      .join('')
  }

  useEffect(() => {
    const startReveal = () => {
      setIsRevealing(true)
      revealedIndexRef.current = 0

      intervalRef.current = setInterval(() => {
        setDisplayText(scrambleText(text, revealedIndexRef.current))

        // Randomly decide whether to reveal next character
        if (Math.random() < 0.3 && revealedIndexRef.current < text.length) {
          revealedIndexRef.current++
        }

        // Check if we're done
        if (revealedIndexRef.current >= text.length) {
          setDisplayText(text)
          setIsRevealing(false)
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
        }
      }, scrambleSpeed)
    }

    // Start with scrambled text
    setDisplayText(scrambleText(text, 0))

    // Start revealing after delay
    const timeoutId = setTimeout(startReveal, delay)

    return () => {
      clearTimeout(timeoutId)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [text, delay, scrambleSpeed])

  // Continue scrambling effect even when not revealing
  useEffect(() => {
    if (!isRevealing && revealedIndexRef.current < text.length) {
      const scrambleInterval = setInterval(() => {
        setDisplayText(scrambleText(text, revealedIndexRef.current))
      }, scrambleSpeed * 2)

      return () => clearInterval(scrambleInterval)
    }
  }, [isRevealing, text, scrambleSpeed])

  return (
    <span
      className={`font-mono ${className} ${isRevealing ? 'text-yellow-400' : ''}`}
      style={{
        textShadow: isRevealing ? '0 0 10px rgba(255, 255, 0, 0.5)' : 'none'
      }}
    >
      {displayText}
    </span>
  )
}