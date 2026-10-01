'use client'

// AltDev navbar — 3-pillar IA, persistent gold CTA, dark-only.
// A11y: labelled mobile toggle (aria-expanded/controls), closes on route change
// and Escape, body scroll-lock when open, and hover states mirrored on focus.

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const PILLARS = [
  { name: 'Applied AI', href: '/applied-ai', desc: 'Vision, ML & NLP that ship' },
  { name: 'Data Foundation', href: '/data-foundation', desc: 'AI-ready data platforms' },
  { name: 'Enablement', href: '/enablement', desc: 'Training so you own it' },
]
const LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const REST = 'rgba(233,236,221,0.85)'
const GOLD = '#F2C864'

function paint(el: HTMLElement, color: string) {
  el.style.color = color
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false) // mobile menu
  const [dd, setDd] = useState(false) // desktop "What we do" dropdown
  const [scrolled, setScrolled] = useState(false)
  const ddRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    const onClickOutside = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDd(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setDd(false)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // Close menus on navigation.
  useEffect(() => {
    setOpen(false)
    setDd(false)
  }, [pathname])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')
  const pillarsActive = PILLARS.some((p) => isActive(p.href))

  const linkStyle = (active: boolean) => ({
    padding: '0.5rem 0.9rem',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500,
    textDecoration: 'none',
    color: active ? GOLD : REST,
    transition: 'color 0.2s ease',
  })

  const ctaStyle = {
    background: GOLD,
    color: '#051D2E',
    fontWeight: 700,
    fontSize: 14,
    padding: '0.6rem 1.4rem',
    borderRadius: 999,
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(242,200,100,0.3)',
  } as const

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[60] transition-all duration-500"
      style={{
        // Floats over the hero: barely-there frosted glass at the top (particles
        // show through and blend), condensing to a solid dark bar on scroll.
        backgroundColor: scrolled ? 'rgba(3,20,31,0.85)' : 'rgba(3,20,31,0.2)',
        backdropFilter: scrolled ? 'saturate(140%) blur(20px)' : 'blur(8px)',
        borderBottom: scrolled ? '1px solid rgba(242,200,100,0.10)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" aria-label="AltDev home">
            <div
              className="w-8 h-8 rounded-lg transition-transform duration-200 group-hover:scale-110"
              style={{ background: GOLD }}
            />
            <span className="text-xl font-bold" style={{ color: '#E9ECDD' }}>
              <span style={{ color: GOLD }}>ALT</span>DEV
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="relative" ref={ddRef}>
              <button
                onClick={() => setDd((v) => !v)}
                className="flex items-center rounded-md"
                style={{
                  ...linkStyle(pillarsActive || dd),
                  background: dd ? 'rgba(242,200,100,0.1)' : 'transparent',
                  cursor: 'pointer',
                  border: 'none',
                }}
                aria-haspopup="menu"
                aria-expanded={dd}
                aria-controls="whatwedo-menu"
                onMouseEnter={(e) => paint(e.currentTarget, GOLD)}
                onMouseLeave={(e) => paint(e.currentTarget, pillarsActive || dd ? GOLD : REST)}
                onFocus={(e) => paint(e.currentTarget, GOLD)}
                onBlur={(e) => paint(e.currentTarget, pillarsActive || dd ? GOLD : REST)}
              >
                What we do
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dd ? 'rotate-180' : ''}`} />
              </button>

              {dd && (
                <div
                  id="whatwedo-menu"
                  role="menu"
                  className="absolute top-full left-0 mt-3 p-3 z-[100]"
                  style={{
                    minWidth: 320,
                    background: 'rgba(5,29,46,0.98)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 16,
                    border: '1px solid rgba(242,200,100,0.12)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
                  }}
                >
                  {PILLARS.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      role="menuitem"
                      className="block rounded-lg"
                      style={{ padding: '0.7rem 0.9rem', textDecoration: 'none' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(242,200,100,0.08)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.background = 'rgba(242,200,100,0.08)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      <div style={{ color: isActive(p.href) ? GOLD : '#E9ECDD', fontWeight: 600, fontSize: 15 }}>
                        {p.name}
                      </div>
                      <div style={{ color: 'rgba(233,236,221,0.6)', fontSize: 13, marginTop: 2 }}>{p.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={linkStyle(isActive(l.href))}
                onMouseEnter={(e) => paint(e.currentTarget, GOLD)}
                onMouseLeave={(e) => paint(e.currentTarget, isActive(l.href) ? GOLD : REST)}
                onFocus={(e) => paint(e.currentTarget, GOLD)}
                onBlur={(e) => paint(e.currentTarget, isActive(l.href) ? GOLD : REST)}
              >
                {l.name}
              </Link>
            ))}

            <Link href="/contact" style={{ ...ctaStyle, marginLeft: 12 }}>
              Book a consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md"
            style={{ color: REST, background: 'transparent', border: 'none', cursor: 'pointer' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 max-h-[80vh] overflow-y-auto"
            style={{
              background: 'rgba(5,29,46,0.98)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.45)',
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div
                style={{
                  ...eyebrowMini,
                }}
              >
                What we do
              </div>
              {PILLARS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block rounded-lg"
                  style={{ padding: '0.8rem 0.5rem', textDecoration: 'none', marginBottom: 4 }}
                >
                  <div style={{ color: isActive(p.href) ? GOLD : '#E9ECDD', fontWeight: 600, fontSize: 17 }}>
                    {p.name}
                  </div>
                  <div style={{ color: 'rgba(233,236,221,0.6)', fontSize: 13, marginTop: 2 }}>{p.desc}</div>
                </Link>
              ))}

              <div style={{ height: 1, background: 'rgba(233,236,221,0.1)', margin: '14px 0' }} />

              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block"
                  style={{
                    padding: '0.7rem 0.5rem',
                    textDecoration: 'none',
                    fontSize: 17,
                    fontWeight: 600,
                    color: isActive(l.href) ? GOLD : '#E9ECDD',
                  }}
                >
                  {l.name}
                </Link>
              ))}

              <Link
                href="/contact"
                className="block w-full text-center"
                style={{ ...ctaStyle, padding: '0.85rem 1.4rem', marginTop: 18, fontSize: 15 }}
              >
                Book a consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

const eyebrowMini = {
  fontFamily: 'var(--font-jetbrains-mono), monospace',
  fontSize: 11,
  letterSpacing: '0.22em',
  textTransform: 'uppercase' as const,
  color: 'rgba(233,236,221,0.45)',
  marginBottom: 10,
}
