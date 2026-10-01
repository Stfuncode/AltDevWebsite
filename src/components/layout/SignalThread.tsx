'use client'

// ThreadSection — "The Data Thread". A glowing connective spine runs down the
// whole lower page; each section is a node on the graph that ignites gold as it
// reaches the viewport, and the gold "signal" fills the line section by section.
// This carries the hero's lattice metaphor down the page so the content feels
// connected, not like a stack of separate card grids. See DESIGN_BRIEF.md §5.

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'

const RAIL_X = 'clamp(24px, 4vw, 48px)' // x of the thread line
const INSET = 'clamp(58px, 9vw, 116px)' // left padding for content (right of the line)
const PAD_V = 'clamp(5.5rem, 11vh, 9rem)' // vertical section padding
const NODE_Y = `calc(${PAD_V} + 4px)` // node aligns with the section eyebrow/heading
const TEAL = 'rgba(135,187,215,0.18)'
const GOLD = '#FCCB49'
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

export default function ThreadSection({
  id,
  background = '#051D2E',
  peak = false,
  terminal = false,
  head = false,
  children,
}: {
  id?: string
  background?: string
  peak?: boolean // the luminance peak (bigger, brighter node)
  terminal?: boolean // last node — the line stops here
  head?: boolean // first node — the line fades in from the hero above
  children: ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(true)
      return
    }
    const el = ref.current
    if (!el) return
    // Activate once the section rises into the upper viewport (the "signal arrives").
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -55% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const size = peak ? 26 : 16
  const shortHeight = `calc(${NODE_Y} + 8px)`

  const lineBase: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: RAIL_X,
    width: 2,
    transform: 'translateX(-50%)',
    ...(terminal ? { height: shortHeight } : { bottom: 0 }),
    background: head ? `linear-gradient(to bottom, rgba(135,187,215,0) 0, ${TEAL} 90px)` : TEAL,
    zIndex: 1,
    pointerEvents: 'none',
  }
  const lineFill: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: RAIL_X,
    width: 2,
    transform: 'translateX(-50%)',
    height: active ? (terminal ? shortHeight : '100%') : '0%',
    background: `linear-gradient(to bottom, ${GOLD}, rgba(252,203,73,0.4))`,
    boxShadow: active ? '0 0 12px rgba(255,255,255,0.35)' : 'none',
    transition: `height 1s ${EASE}`,
    zIndex: 1,
    pointerEvents: 'none',
  }
  const nodeStyle: CSSProperties = {
    position: 'absolute',
    top: NODE_Y,
    left: RAIL_X,
    width: size,
    height: size,
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    background: active ? GOLD : '#051D2E',
    border: `2px solid ${active ? GOLD : 'rgba(135,187,215,0.5)'}`,
    boxShadow: active
      ? peak
        ? '0 0 34px rgba(255,255,255,0.85)'
        : '0 0 16px rgba(255,255,255,0.6)'
      : 'none',
    transition: `all 0.6s ${EASE}`,
    zIndex: 3,
    pointerEvents: 'none',
  }
  const connector: CSSProperties = {
    position: 'absolute',
    top: NODE_Y,
    left: RAIL_X,
    width: `calc(${INSET} - ${RAIL_X})`,
    height: 1,
    background: active ? 'rgba(252,203,73,0.4)' : 'rgba(135,187,215,0.15)',
    transition: `background 0.6s ${EASE}`,
    zIndex: 1,
    pointerEvents: 'none',
  }

  return (
    <section ref={ref} id={id} style={{ position: 'relative', background }}>
      <div aria-hidden style={lineBase} />
      <div aria-hidden style={lineFill} />
      <div aria-hidden style={connector} />
      <div aria-hidden style={nodeStyle} />
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: `${PAD_V} 1.5rem ${PAD_V} ${INSET}` }}>{children}</div>
    </section>
  )
}
