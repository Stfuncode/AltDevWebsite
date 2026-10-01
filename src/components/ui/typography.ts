// Shared text styles for the AltDev design system (mid-market clarity voice).
import type { CSSProperties } from 'react'

export const eyebrow: CSSProperties = {
  fontFamily: 'var(--font-jetbrains-mono), monospace',
  fontSize: 12,
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: '#F2C864',
  marginBottom: 16,
}

export const h1: CSSProperties = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.08,
  color: '#E9ECDD',
  margin: 0,
}

export const h2: CSSProperties = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.12,
  color: '#E9ECDD',
  margin: 0,
}

export const h3: CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: 700,
  color: '#E9ECDD',
  margin: '0 0 10px',
}

export const lede: CSSProperties = {
  fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
  lineHeight: 1.6,
  color: 'rgba(233,236,221,0.75)',
  maxWidth: 660,
}

export const body: CSSProperties = {
  color: 'rgba(233,236,221,0.72)',
  lineHeight: 1.6,
  margin: 0,
}
