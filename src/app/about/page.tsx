import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { HeartPulse, Leaf, Database, Layers, Award, Key } from 'lucide-react'
import ThreadSection from '@/components/layout/SignalThread'
import Reveal from '@/components/ui/Reveal'
import CtaButton from '@/components/ui/CtaButton'
import { eyebrow, h1, h2, h3, lede, body } from '@/components/ui/typography'

export const metadata: Metadata = {
  title: 'About — a focused data & AI team for healthcare and agriculture | AltDev',
  description:
    'AltDev is a small, senior, Microsoft-certified data & AI consultancy specialising in healthcare and agriculture. We build the data foundation and the AI on top — then hand you the keys.',
}

const card: CSSProperties = {
  height: '100%',
  background: 'rgba(233,236,221,0.03)',
  border: '1px solid rgba(242,200,100,0.14)',
  borderRadius: 16,
  padding: '1.9rem',
}
const grid = (min: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
  gap: 20,
})
const iconWrap: CSSProperties = { color: '#F2C864', marginBottom: 16 }

export default function AboutPage() {
  return (
    <main style={{ background: '#03141F', color: '#E9ECDD' }}>
      {/* Header */}
      <header
        style={{
          background: 'radial-gradient(900px circle at 22% 20%, rgba(11,66,81,0.5), #03141F 72%)',
          padding: 'clamp(7rem, 16vh, 12rem) 1.5rem clamp(3rem, 6vh, 4.5rem)',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={eyebrow}>About</p>
          <h1 style={{ ...h1, maxWidth: 860 }}>Small, senior, and focused on data-first AI</h1>
          <p style={{ ...lede, marginTop: 24, maxWidth: 720 }}>
            AltDev is a specialist data & AI consultancy — deliberately small, so the people who scope your work are the
            people who build it. We’re certified in the platforms and architecture that make AI reliable, with a deep
            focus on healthcare and agriculture.
          </p>
        </div>
      </header>

      {/* Who we are / the belief */}
      <ThreadSection head background="linear-gradient(#03141F, #051D2E)">
        <Reveal variant="slide" style={{ maxWidth: 760 }}>
          <p style={eyebrow}>Who we are</p>
          <h2 style={h2}>We believe data is the key to every AI</h2>
          <p style={{ ...lede, marginTop: 16 }}>
            A model is only as good as the data beneath it. So we engineer the data foundation first, add the AI on top,
            and train your team to run it. No bloated teams, no juniors learning on your project — senior people, close
            to the work, end to end.
          </p>
        </Reveal>
      </ThreadSection>

      {/* Sectors — the specialisation (peak) */}
      <ThreadSection
        peak
        background="radial-gradient(1100px circle at 28% 12%, rgba(242,200,100,0.10), transparent 55%), linear-gradient(#051D2E, #0a2c3a)"
      >
        <Reveal variant="fade" style={{ maxWidth: 720, marginBottom: 48 }}>
          <p style={eyebrow}>Where we focus</p>
          <h2 style={h2}>Built around healthcare and agriculture</h2>
          <p style={{ ...lede, marginTop: 16 }}>
            Two data-rich sectors where better AI changes real outcomes — and where the data foundation and privacy
            genuinely matter.
          </p>
        </Reveal>

        <div style={grid(280)}>
          <Reveal variant="rise">
            <div style={card}>
              <div style={iconWrap}>
                <HeartPulse size={34} />
              </div>
              <h3 style={h3}>Healthcare</h3>
              <p style={body}>
                Medical imaging (computer vision), clinical-document intelligence (NLP), and risk & readmission
                prediction (ML) — built on data handled with the governance and privacy sensitive health information
                demands.
              </p>
            </div>
          </Reveal>
          <Reveal variant="rise" delay={100}>
            <div style={card}>
              <div style={iconWrap}>
                <Leaf size={34} />
              </div>
              <h3 style={h3}>Agriculture</h3>
              <p style={body}>
                Crop and satellite imagery (computer vision), yield and demand forecasting (ML), and sensor/IoT data
                foundations that turn scattered field data into decisions.
              </p>
            </div>
          </Reveal>
        </div>
      </ThreadSection>

      {/* What makes us different */}
      <ThreadSection background="linear-gradient(#0a2c3a, #051D2E)">
        <Reveal variant="slide" style={{ maxWidth: 720, marginBottom: 48 }}>
          <p style={eyebrow}>What makes us different</p>
          <h2 style={h2}>Focused, certified, and yours to keep</h2>
        </Reveal>

        <div style={grid(250)}>
          {[
            {
              icon: <Database size={30} />,
              t: 'Data-first by conviction',
              d: 'We fix the foundation before the models — it shapes how we scope every engagement.',
            },
            {
              icon: <Layers size={30} />,
              t: 'We do both',
              d: 'The data foundation and the AI on top, so what we ship actually reaches production.',
            },
            {
              // TODO: name the specific Microsoft certification(s) held, e.g. "Fabric Analytics Engineer".
              icon: <Award size={30} />,
              t: 'Certified & architecture-led',
              d: 'A Microsoft-certified team, TOGAF-certified in enterprise architecture — we design foundations and governance, not just scripts.',
            },
            {
              icon: <Key size={30} />,
              t: 'We hand you the keys',
              d: 'We train your team to run what we build. The goal is your independence — no lock-in.',
            },
          ].map((v, i) => (
            <Reveal key={v.t} variant="rise" delay={i * 80}>
              <div style={card}>
                <div style={iconWrap}>{v.icon}</div>
                <h3 style={{ ...h3, fontSize: '1.2rem' }}>{v.t}</h3>
                <p style={body}>{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ThreadSection>

      {/* CTA */}
      <ThreadSection terminal background="linear-gradient(#051D2E, #03141F)">
        <Reveal variant="fade" style={{ maxWidth: 760 }}>
          <p style={eyebrow}>Work with us</p>
          <h2 style={h2}>Let’s see what your data can do.</h2>
          <p style={{ ...lede, marginTop: 16, marginBottom: 32 }}>
            A short, honest conversation about where your data is today — and where it could take your business.
          </p>
          <CtaButton href="/contact">Book a consultation</CtaButton>
        </Reveal>
      </ThreadSection>
    </main>
  )
}
