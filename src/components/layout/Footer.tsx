'use client'

// AltDev footer — new 3-pillar IA, single gold CTA, consistent KL/Malaysia
// contact details, icon links with aria-labels. Inline styles only.

import Link from 'next/link'
import type { ReactNode } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, ArrowRight, Award } from 'lucide-react'

const MUTED = 'rgba(233,236,221,0.75)'
const GOLD = '#F2C864'

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      style={{ color: MUTED, textDecoration: 'none', fontSize: 14, transition: 'color 0.2s, transform 0.2s', display: 'inline-block' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = GOLD
        e.currentTarget.style.transform = 'translateX(3px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = MUTED
        e.currentTarget.style.transform = 'translateX(0)'
      }}
      onFocus={(e) => (e.currentTarget.style.color = GOLD)}
      onBlur={(e) => (e.currentTarget.style.color = MUTED)}
    >
      {children}
    </Link>
  )
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{ color: 'rgba(233,236,221,0.6)', transition: 'color 0.2s, transform 0.2s', display: 'inline-flex' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = GOLD
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'rgba(233,236,221,0.6)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
      onFocus={(e) => (e.currentTarget.style.color = GOLD)}
      onBlur={(e) => (e.currentTarget.style.color = 'rgba(233,236,221,0.6)')}
    >
      {children}
    </a>
  )
}

const colTitle = {
  fontFamily: 'var(--font-jetbrains-mono), monospace',
  fontSize: 12,
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  color: GOLD,
  marginBottom: 16,
}
const contactLine = { color: MUTED, fontSize: 14, lineHeight: 1.4 } as const
const contactSub = { color: 'rgba(233,236,221,0.45)', fontSize: 12, margin: 0 } as const

export default function Footer() {
  return (
    <footer style={{ background: '#03141F', color: '#E9ECDD', borderTop: '1px solid rgba(242,200,100,0.12)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 32, background: GOLD, borderRadius: 8 }} />
              <span style={{ fontSize: '1.4rem', fontWeight: 700 }}>
                <span style={{ color: GOLD }}>ALT</span>DEV
              </span>
            </div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              Applied AI, built on data that’s ready. We engineer the data foundation and the AI on top — then hand you
              the keys.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                width: 'fit-content',
                padding: '0.4rem 0.8rem',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                color: GOLD,
                background: 'rgba(242,200,100,0.08)',
                border: '1px solid rgba(242,200,100,0.25)',
              }}
            >
              <Award size={14} /> Microsoft-certified team
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
              {/* TODO: replace with real profile URLs */}
              <Social href="#" label="AltDev on LinkedIn">
                <Linkedin size={20} />
              </Social>
              <Social href="#" label="AltDev on GitHub">
                <Github size={20} />
              </Social>
            </div>
          </div>

          {/* What we do */}
          <div>
            <div style={colTitle}>What we do</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FooterLink href="/applied-ai">Applied AI</FooterLink>
              <FooterLink href="/data-foundation">Data Foundation</FooterLink>
              <FooterLink href="/enablement">Enablement</FooterLink>
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={colTitle}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <div style={colTitle}>Get in touch</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li style={{ display: 'flex', gap: 10 }}>
                <Mail size={18} style={{ color: GOLD, flexShrink: 0 }} />
                <div>
                  <div style={contactLine}>info@altdev.com.my</div>
                  <p style={contactSub}>24hr response time</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: 10 }}>
                <Phone size={18} style={{ color: GOLD, flexShrink: 0 }} />
                <div>
                  <div style={contactLine}>+60 12-345 6789</div>
                  <p style={contactSub}>Mon–Fri, 9AM–6PM MYT</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: 10 }}>
                <MapPin size={18} style={{ color: GOLD, flexShrink: 0 }} />
                <div>
                  <div style={contactLine}>Kuala Lumpur, Malaysia</div>
                  <p style={contactSub}>Remote-friendly worldwide</p>
                </div>
              </li>
            </ul>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 20,
                background: GOLD,
                color: '#051D2E',
                fontWeight: 700,
                fontSize: 14,
                padding: '0.6rem 1.3rem',
                borderRadius: 999,
                textDecoration: 'none',
              }}
            >
              Book a consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(233,236,221,0.1)',
            marginTop: '3rem',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ color: 'rgba(233,236,221,0.55)', fontSize: 13, margin: 0 }}>
            © 2026 <span style={{ color: GOLD }}>AltDev</span>. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/eula">EULA</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
