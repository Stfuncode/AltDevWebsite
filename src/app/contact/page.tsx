import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Mail, Phone, MapPin, Award } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'
import { eyebrow, h1, lede, body } from '@/components/ui/typography'

export const metadata: Metadata = {
  title: 'Contact — talk to us about your data | AltDev',
  description:
    'A short, honest conversation about where your data is today and where it could take your business. Applied AI, built on data that’s ready.',
}

const contactRow: CSSProperties = { display: 'flex', gap: 12, alignItems: 'flex-start' }
const contactMain: CSSProperties = { color: 'rgba(233,236,221,0.85)', fontSize: 15, lineHeight: 1.4 }
const contactSub: CSSProperties = { color: 'rgba(233,236,221,0.45)', fontSize: 12.5, margin: '2px 0 0' }
const asideTitle: CSSProperties = {
  fontFamily: 'var(--font-jetbrains-mono), monospace',
  fontSize: 12,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#F2C864',
  marginBottom: 18,
}

const STEPS = [
  { n: '1', t: 'Discovery', d: 'A 30-minute call to map your data and the decisions it should drive.' },
  { n: '2', t: 'Build', d: 'We engineer the foundation and the AI together, for production.' },
  { n: '3', t: 'Ownership', d: 'We train your team so you run it — no lock-in.' },
]

export default function ContactPage() {
  return (
    <main style={{ background: '#03141F', color: '#E9ECDD', minHeight: '100vh' }}>
      {/* Header */}
      <header
        style={{
          background: 'radial-gradient(900px circle at 25% 20%, rgba(11,66,81,0.5), #03141F 72%)',
          padding: 'clamp(6.5rem, 15vh, 11rem) 1.5rem clamp(2.5rem, 5vh, 4rem)',
        }}
      >
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <p style={eyebrow}>Contact</p>
          <h1 style={{ ...h1, maxWidth: 780 }}>Let’s see what your data can do.</h1>
          <p style={{ ...lede, marginTop: 22 }}>
            A short, honest conversation about where your data is today — and where it could take your business. Tell us
            a little below and we’ll take it from there.
          </p>
        </div>
      </header>

      {/* Form + aside */}
      <section style={{ padding: '0 1.5rem clamp(5rem, 10vh, 8rem)' }}>
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 44,
            alignItems: 'start',
          }}
        >
          <ContactForm />

          <aside style={{ display: 'flex', flexDirection: 'column', gap: 40, paddingTop: 8 }}>
            <div>
              <div style={asideTitle}>Prefer to reach us directly?</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={contactRow}>
                  <Mail size={18} style={{ color: '#F2C864', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={contactMain}>info@altdev.com.my</div>
                    <p style={contactSub}>24hr response time</p>
                  </div>
                </div>
                <div style={contactRow}>
                  <Phone size={18} style={{ color: '#F2C864', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={contactMain}>+60 12-345 6789</div>
                    <p style={contactSub}>Mon–Fri, 9AM–6PM MYT</p>
                  </div>
                </div>
                <div style={contactRow}>
                  <MapPin size={18} style={{ color: '#F2C864', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={contactMain}>Kuala Lumpur, Malaysia</div>
                    <p style={contactSub}>Remote-friendly worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={asideTitle}>What happens next</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {STEPS.map((s) => (
                  <div key={s.n} style={{ display: 'flex', gap: 14 }}>
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        flexShrink: 0,
                        borderRadius: '50%',
                        border: '1px solid rgba(242,200,100,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-jetbrains-mono), monospace',
                        fontSize: 14,
                        color: '#F2C864',
                      }}
                    >
                      {s.n}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#E9ECDD', marginBottom: 2 }}>{s.t}</div>
                      <p style={{ ...body, fontSize: 14 }}>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                width: 'fit-content',
                padding: '0.45rem 0.9rem',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                color: '#F2C864',
                background: 'rgba(242,200,100,0.08)',
                border: '1px solid rgba(242,200,100,0.25)',
              }}
            >
              <Award size={14} /> Microsoft-certified team
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
