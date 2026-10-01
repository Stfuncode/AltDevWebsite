import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import ThreadSection from '@/components/layout/SignalThread'
import Reveal from '@/components/ui/Reveal'
import PillarHeader from '@/components/pillar/PillarHeader'
import CtaButton from '@/components/ui/CtaButton'
import { eyebrow, h2, h3, lede, body } from '@/components/ui/typography'

export const metadata: Metadata = {
  title: 'Data Foundation — AI-ready data platforms | AltDev',
  description:
    'We unify your scattered systems into one trusted platform on Microsoft Fabric, Snowflake or Databricks — the groundwork that makes your AI reliable.',
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

export default function DataFoundationPage() {
  return (
    <main style={{ background: '#03141F', color: '#E9ECDD' }}>
      <PillarHeader
        kicker="The foundation"
        title="Data that’s actually ready for AI"
        intro="We unify your scattered systems into one trusted platform — the groundwork that makes every model, dashboard and decision after it reliable. Certified on Microsoft Fabric, fluent in Snowflake and Databricks."
      />

      <ThreadSection head background="linear-gradient(#03141F, #051D2E)">
        <Reveal variant="slide" style={{ maxWidth: 760 }}>
          <p style={eyebrow}>Why it comes first</p>
          <h2 style={h2}>Most “AI problems” are really data problems</h2>
          <p style={{ ...lede, marginTop: 16 }}>
            Scattered sources, numbers that don’t agree, pipelines that break at 3am — no model survives that. We fix the
            foundation first, so everything built on top of it holds.
          </p>
        </Reveal>
      </ThreadSection>

      <ThreadSection background="linear-gradient(#051D2E, #072633)">
        <Reveal variant="slide" style={{ maxWidth: 720, marginBottom: 48 }}>
          <p style={eyebrow}>What you get</p>
          <h2 style={h2}>One trusted platform</h2>
        </Reveal>
        <div style={grid}>
          {[
            { t: 'One source of truth', d: 'Every system unified so the numbers finally agree — across finance, ops and sales.' },
            { t: 'Reports that stay current', d: 'Self-updating pipelines replace the weekend spreadsheet marathons.' },
            { t: 'Governed and secure', d: 'Access, lineage and quality are built in, not bolted on later.' },
            { t: 'AI-ready datasets', d: 'Clean, modelled data your models can actually learn from.' },
          ].map((f, i) => (
            <Reveal key={f.t} variant="rise" delay={i * 70}>
              <div style={card}>
                <h3 style={h3}>{f.t}</h3>
                <p style={body}>{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ThreadSection>

      <ThreadSection background="linear-gradient(#072633, #051D2E)">
        <Reveal variant="slide" style={{ maxWidth: 720, marginBottom: 48 }}>
          <p style={eyebrow}>Platforms we build on</p>
          <h2 style={h2}>Certified where it counts</h2>
        </Reveal>
        <div style={grid}>
          {[
            { t: 'Microsoft Fabric', d: 'Our certified home base — OneLake, Synapse and Power BI in one platform. Most engagements start here.' },
            { t: 'Snowflake', d: 'When you need elastic scale and secure data sharing across teams and partners.' },
            { t: 'Databricks', d: 'When data engineering and heavy ML/AI workloads need to live in the same place.' },
          ].map((f, i) => (
            <Reveal key={f.t} variant="rise" delay={i * 70}>
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
          <p style={eyebrow}>Where it leads</p>
          <h2 style={h2}>Foundation first — then the intelligence</h2>
          <p style={{ ...lede, marginTop: 16, marginBottom: 32 }}>
            With the data ready, the AI on top of it actually ships. See what we build once the foundation is in place —
            and how your team takes it over.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <CtaButton href="/applied-ai" variant="ghost">Explore Applied AI →</CtaButton>
            <CtaButton href="/enablement" variant="ghost">Explore Enablement →</CtaButton>
            <CtaButton href="/contact">Book a consultation</CtaButton>
          </div>
        </Reveal>
      </ThreadSection>
    </main>
  )
}
