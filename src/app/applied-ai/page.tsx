import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import ThreadSection from '@/components/layout/SignalThread'
import Reveal from '@/components/ui/Reveal'
import PillarHeader from '@/components/pillar/PillarHeader'
import CtaButton from '@/components/ui/CtaButton'
import { eyebrow, h2, h3, lede, body } from '@/components/ui/typography'

export const metadata: Metadata = {
  title: 'Applied AI — vision, ML & NLP that ship | AltDev',
  description:
    'Computer vision, machine learning and NLP built on an AI-ready data foundation — so your models reach production, not just a demo.',
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
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: 20,
}

export default function AppliedAiPage() {
  return (
    <main style={{ background: '#03141F', color: '#E9ECDD' }}>
      <PillarHeader
        kicker="Applied AI"
        title="AI that turns your data into decisions"
        intro="Computer vision, machine learning and NLP — built on a foundation engineered so they work in production, not just a demo."
      />

      <ThreadSection head background="linear-gradient(#03141F, #051D2E)">
        <Reveal variant="slide" style={{ maxWidth: 760 }}>
          <p style={eyebrow}>Applied, not experimental</p>
          <h2 style={h2}>Models that actually reach production</h2>
          <p style={{ ...lede, marginTop: 16 }}>
            Plenty of AI dies in a notebook. Ours ships — because the data underneath is ready and we build for
            production from day one.
          </p>
        </Reveal>
      </ThreadSection>

      <ThreadSection peak background="linear-gradient(#051D2E, #0a2c3a)">
        <Reveal variant="fade" style={{ maxWidth: 720, marginBottom: 48 }}>
          <p style={eyebrow}>What we build</p>
          <h2 style={h2}>Three ways to turn data into decisions</h2>
        </Reveal>
        <div style={grid}>
          {[
            { t: 'Computer Vision', d: 'Detection, inspection and document understanding — turn images and video into decisions.' },
            { t: 'Machine Learning', d: 'Forecasting, scoring and recommendations — predict what happens next and act on it.' },
            { t: 'Natural Language', d: 'Document intelligence, assistants and search — make sense of text at scale.' },
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

      <ThreadSection background="linear-gradient(#0a2c3a, #051D2E)">
        <Reveal variant="slide" style={{ maxWidth: 720, marginBottom: 48 }}>
          <p style={eyebrow}>How we ship</p>
          <h2 style={h2}>Production-first, from day one</h2>
        </Reveal>
        <div style={grid}>
          {[
            { t: 'Built on ready data', d: 'Every model sits on the governed foundation — no garbage in, no garbage out.' },
            { t: 'Integrated where you work', d: 'Predictions land in the tools your team already uses, not a side dashboard.' },
            { t: 'Monitored and maintained', d: 'We watch for drift and retrain, so accuracy holds up long after launch.' },
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
          <p style={eyebrow}>What makes it work</p>
          <h2 style={h2}>Great AI starts with great data</h2>
          <p style={{ ...lede, marginTop: 16, marginBottom: 32 }}>
            The reason our models ship is the foundation beneath them — and when we hand over, your team runs it.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <CtaButton href="/data-foundation" variant="ghost">Explore the data foundation →</CtaButton>
            <CtaButton href="/enablement" variant="ghost">Explore Enablement →</CtaButton>
            <CtaButton href="/contact">Book a consultation</CtaButton>
          </div>
        </Reveal>
      </ThreadSection>
    </main>
  )
}
