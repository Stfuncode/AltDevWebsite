'use client'

// Single gold CTA identity used across the site (solid = primary, ghost = secondary).
// Hover + keyboard focus both light it, so it isn't hover-only.

import Link from 'next/link'
import type { ReactNode } from 'react'

export default function CtaButton({
  href,
  children,
  variant = 'solid',
}: {
  href: string
  children: ReactNode
  variant?: 'solid' | 'ghost'
}) {
  const solid = variant === 'solid'

  const enter = (el: HTMLAnchorElement) => {
    el.style.transform = 'translateY(-2px)'
    if (solid) el.style.background = '#EFB93C'
    else {
      el.style.borderColor = 'rgba(242,200,100,0.6)'
      el.style.color = '#F2C864'
    }
  }
  const leave = (el: HTMLAnchorElement) => {
    el.style.transform = 'translateY(0)'
    if (solid) el.style.background = '#F2C864'
    else {
      el.style.borderColor = 'rgba(233,236,221,0.28)'
      el.style.color = '#E9ECDD'
    }
  }

  return (
    <Link
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '0.85rem 1.9rem',
        borderRadius: 999,
        fontWeight: 700,
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        ...(solid
          ? { background: '#F2C864', color: '#051D2E', boxShadow: '0 8px 22px rgba(242,200,100,0.28)' }
          : { background: 'transparent', color: '#E9ECDD', border: '1px solid rgba(233,236,221,0.28)' }),
      }}
      onMouseEnter={(e) => enter(e.currentTarget)}
      onMouseLeave={(e) => leave(e.currentTarget)}
      onFocus={(e) => enter(e.currentTarget)}
      onBlur={(e) => leave(e.currentTarget)}
    >
      {children}
    </Link>
  )
}
