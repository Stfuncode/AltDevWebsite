'use client'

// Reveal — scroll-into-view choreography for section content.
// IntersectionObserver-driven, one-shot, reduced-motion aware.
// Variants give each section a distinct gesture (brief §6) instead of the
// old uniform fade-up. See DESIGN_BRIEF.md section 6.

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type Variant = 'rise' | 'scale' | 'fade' | 'slide'

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)' // ease-signal (expo-out)

const HIDDEN: Record<Variant, CSSProperties> = {
  rise: { opacity: 0, transform: 'translateY(24px)' },
  scale: { opacity: 0, transform: 'scale(0.96)' },
  fade: { opacity: 0 },
  slide: { opacity: 0, transform: 'translateX(-24px)' }, // enters from the thread side
}

export default function Reveal({
  children,
  variant = 'rise',
  delay = 0,
  className,
  style,
}: {
  children: ReactNode
  variant?: Variant
  delay?: number
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const motion: CSSProperties = reduced
    ? {}
    : {
        transition: `opacity 0.7s ${EASE} ${delay}ms, transform 0.7s ${EASE} ${delay}ms`,
        willChange: 'opacity, transform',
        ...(shown ? { opacity: 1, transform: 'none' } : HIDDEN[variant]),
      }

  return (
    <div ref={ref} className={className} style={{ ...motion, ...style }}>
      {children}
    </div>
  )
}
