import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import ThreadSection from '@/components/layout/SignalThread'
import Reveal from '@/components/ui/Reveal'
import PillarHeader from '@/components/pillar/PillarHeader'
import CtaButton from '@/components/ui/CtaButton'
import { eyebrow, h2, h3, lede, body } from '@/components/ui/typography'

export const metadata: Metadata = {
  title: 'Enablement — training so you own it | AltDev',
  description:
    'Certified corporate training so your team runs the data platform and the AI we build with confidence. The goal is your independence — no lock-in.',
}

const card: CSSProperties = {
  height: '100%',
  background: 'rgba(233,236,221,0.03)',
  border: '1px solid rgba(242,200,100,0.14)',
  borderRadius: 16,
  padding: '1.75rem',
}
const grid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: 20,
}
const meta: CSSProperties = {
  fontFamily: 'var(--font-jetbrains-mono), monospace',
  fontSize: 12,
  letterSpacing: '0.05em',
  color: '#F2C864',
  marginBottom: 14,
}

export default function EnablementPage() {
  return (
    <main style={{ background: '#03141F', color: '#E9ECDD' }}>
      <PillarHeader
        kicker="Enablement"
        title="You own what we build"
        intro="Certified corporate training so your team runs the platform and the AI with confidence — long after we hand over. No lock-in."
      />

      <ThreadSection head background="linear-gradient(#03141F, #051D2E)">
        <Reveal variant="slide" style={{ maxWidth: 760 }}>
          <p style={eyebrow}>The goal is your independence</p>
          <h2 style={h2}>We hand you the keys</h2>
          <p style={{ ...lede, marginTop: 16 }}>
            A consultancy that makes itself unnecessary is doing it right. We train your people to run the platform and
            the models themselves — so the value stays with you, not on a retainer.
          </p>
        </Reveal>
      </ThreadSection>

      <ThreadSection background="linear-gradient(#051D2E, #072633)">
        <Reveal variant="slide" style={{ maxWidth: 720, marginBottom: 48 }}>
          <p style={eyebrow}>Programs</p>
          <h2 style={h2}>Certified, hands-on, on-site</h2>
        </Reveal>
        <div style={grid}>
          {[
            { t: 'Microsoft Fabric Essentials', m: '3–5 days · On-site · All levels', d: 'OneLake, Synapse and Power BI — the foundation, end to end.' },
            { t: 'Snowflake Implementation', m: '2–4 days · On-site · Intermediate', d: 'Warehousing fundamentals, SQL optimisation, sharing and governance.' },
            { t: 'Applied AI Development', m: '3–5 days · On-site · Intermediate', d: 'AWS/Azure AI services, model training and deployment, MLOps.' },
          ].map((f, i) => (
            <Reveal key={f.t} variant="rise" delay={i * 80}>
              <div style={card}>
                <div style={meta}>{f.m}</div>
                <h3 style={h3}>{f.t}</h3>
                <p style={body}>{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ThreadSection>

      <ThreadSection background="linear-gradient(#072633, #051D2E)">
        <Reveal variant="slide" style={{ maxWidth: 720, marginBottom: 48 }}>
          <p style={eyebrow}>How it works</p>
          <h2 style={h2}>Built around your real work</h2>
        </Reveal>
        <div style={grid}>
          {[
            { t: 'On-site and hands-on', d: 'Your team learns by doing, in the room, on your own stack.' },
            { t: 'Tailored to your platform', d: 'We teach the exact tools we built for you — not a generic curriculum.' },
            { t: 'Your data, your use cases', d: 'Training runs on real scenarios, so it sticks the day we leave.' },
          ].map((f, i) => (
            <Reveal key={f.t} variant="rise" delay={i * 80}>
              <div style={card}>
                <h3 style={h3}>{f.t}</h3>
                <p style={body}>{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ThreadSection>

      <ThreadSection terminal background="linear-gradient(#051D2E, #03141F)">
        <Reveal variant="fade" style={{ maxWidth: 760 }}>
          <p style={eyebrow}>The full system</p>
          <h2 style={h2}>Foundation, intelligence, ownership</h2>
          <p style={{ ...lede, marginTop: 16, marginBottom: 32 }}>
            Enablement is the last step of the same story — we build the foundation, add the AI, and hand it over.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <CtaButton href="/data-foundation" variant="ghost">Explore the data foundation →</CtaButton>
            <CtaButton href="/applied-ai" variant="ghost">Explore Applied AI →</CtaButton>
            <CtaButton href="/contact">Book a consultation</CtaButton>
          </div>
        </Reveal>
      </ThreadSection>
    </main>
  )
}
