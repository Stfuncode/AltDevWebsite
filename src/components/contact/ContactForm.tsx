'use client'

// Contact form — clean, premium, mid-market voice. Submits to Web3Forms
// (no backend/DB). Project interest maps to the 3 pillars.
// Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local (see .env.local.example).

import { useState, type CSSProperties, type FocusEvent } from 'react'
import { Send } from 'lucide-react'

const INTERESTS = [
  { id: 'Applied AI', label: 'Applied AI' },
  { id: 'Data Foundation', label: 'Data Foundation' },
  { id: 'Enablement', label: 'Enablement' },
  { id: 'Not sure yet', label: 'Not sure yet' },
]

const card: CSSProperties = {
  background: 'rgba(5,29,46,0.5)',
  backdropFilter: 'blur(14px)',
  border: '1px solid rgba(242,200,100,0.15)',
  borderRadius: 20,
  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
}
const label: CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: 'rgba(233,236,221,0.85)',
  marginBottom: 8,
}
const input: CSSProperties = {
  width: '100%',
  padding: '0.85rem 1rem',
  borderRadius: 10,
  background: 'rgba(233,236,221,0.05)',
  border: '1px solid rgba(233,236,221,0.18)',
  color: '#E9ECDD',
  fontSize: 15,
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
}

function onFocus(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = 'rgba(242,200,100,0.6)'
  e.currentTarget.style.background = 'rgba(233,236,221,0.08)'
}
function onBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = 'rgba(233,236,221,0.18)'
  e.currentTarget.style.background = 'rgba(233,236,221,0.05)'
}

export default function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', company: '', interest: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const valid = Boolean(data.name && data.email && data.company && data.message)
  const set = (k: keyof typeof data, v: string) => setData((d) => ({ ...d, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!key) {
      setStatus('error')
      setErrorMsg('The form isn’t configured yet (missing Web3Forms access key).')
      return
    }
    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject: `New enquiry from ${data.name} — ${data.company}`,
          from_name: 'AltDev website',
          name: data.name,
          email: data.email,
          company: data.company,
          interest: data.interest || 'Not specified',
          message: data.message,
        }),
      })
      const json = await res.json()
      if (json.success) setStatus('success')
      else {
        setStatus('error')
        setErrorMsg(json.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error — please try again, or email us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ ...card, textAlign: 'center', padding: '3.5rem 2rem' }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#F2C864',
            color: '#051D2E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            fontWeight: 700,
            margin: '0 auto 20px',
          }}
        >
          ✓
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#E9ECDD', margin: '0 0 10px' }}>Message sent</h3>
        <p style={{ color: 'rgba(233,236,221,0.75)', lineHeight: 1.6, margin: 0, maxWidth: 380, marginInline: 'auto' }}>
          Thanks — we’ve got it and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} style={card} noValidate>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
        <div>
          <label htmlFor="cf-name" style={label}>Full name *</label>
          <input id="cf-name" name="name" type="text" required value={data.name} onChange={(e) => set('name', e.target.value)} onFocus={onFocus} onBlur={onBlur} style={input} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="cf-email" style={label}>Work email *</label>
          <input id="cf-email" name="email" type="email" required value={data.email} onChange={(e) => set('email', e.target.value)} onFocus={onFocus} onBlur={onBlur} style={input} placeholder="you@company.com" />
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <label htmlFor="cf-company" style={label}>Company *</label>
        <input id="cf-company" name="company" type="text" required value={data.company} onChange={(e) => set('company', e.target.value)} onFocus={onFocus} onBlur={onBlur} style={input} placeholder="Company name" />
      </div>

      <div style={{ marginTop: 22 }}>
        <span style={label}>What are you interested in?</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {INTERESTS.map((it) => {
            const on = data.interest === it.id
            return (
              <button
                key={it.id}
                type="button"
                onClick={() => set('interest', on ? '' : it.id)}
                aria-pressed={on}
                style={{
                  padding: '0.55rem 1.1rem',
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  color: on ? '#051D2E' : 'rgba(233,236,221,0.85)',
                  background: on ? '#F2C864' : 'transparent',
                  border: `1px solid ${on ? '#F2C864' : 'rgba(233,236,221,0.22)'}`,
                  transition: 'all 0.2s ease',
                }}
              >
                {it.label}
              </button>
            )
          })}
        </div>
      </div>

      <div style={{ marginTop: 22 }}>
        <label htmlFor="cf-message" style={label}>How can we help? *</label>
        <textarea id="cf-message" name="message" required rows={5} value={data.message} onChange={(e) => set('message', e.target.value)} onFocus={onFocus} onBlur={onBlur} style={{ ...input, resize: 'vertical' }} placeholder="Tell us where your data is today and what you’d like it to do." />
      </div>

      {status === 'error' && (
        <div role="alert" style={{ marginTop: 20, padding: '0.9rem 1.1rem', borderRadius: 10, background: 'rgba(220,80,80,0.12)', border: '1px solid rgba(220,80,80,0.4)', color: '#f3b0b0', fontSize: 14 }}>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={!valid || status === 'submitting'}
        style={{
          marginTop: 26,
          width: '100%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '0.95rem 1.5rem',
          borderRadius: 999,
          fontWeight: 700,
          fontSize: 15,
          border: 'none',
          cursor: valid && status !== 'submitting' ? 'pointer' : 'not-allowed',
          background: valid ? '#F2C864' : 'rgba(233,236,221,0.15)',
          color: valid ? '#051D2E' : 'rgba(233,236,221,0.5)',
          transition: 'background 0.2s ease',
        }}
      >
        <Send size={18} />
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
      <p style={{ marginTop: 14, fontSize: 12.5, color: 'rgba(233,236,221,0.5)', textAlign: 'center' }}>
        No spam. We reply within 24 hours.
      </p>
    </form>
  )
}
