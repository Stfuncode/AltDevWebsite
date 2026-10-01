'use client'

// AltDev home — Direction A, "From Noise to Signal".
// Arc: Hero (noise→lattice→ignition) → Thesis → Foundation → Intelligence
// (the gold-lit peak) → Expertise → Method → Enablement → Invitation.
// The Data Thread (ThreadSection) runs a glowing connective spine down the
// whole page: each section is a node that ignites gold as you reach it, so the
// content feels like one connected journey rather than stacked card grids.
// See DESIGN_BRIEF.md.

import Link from 'next/link'
import { ArrowRight, Eye, Brain, MessageSquare } from 'lucide-react'
import HeroSignal from '@/components/hero/HeroSignal'
import Reveal from '@/components/ui/Reveal'
import ThreadSection from '@/components/layout/SignalThread'
import CtaButton from '@/components/ui/CtaButton'
import PlatformCard from '@/components/ui/PlatformCard'
import AIServiceCard from '@/components/ui/AIServiceCard'
import TrainingProgramCard from '@/components/ui/TrainingProgramCard'
import type { CSSProperties } from 'react'

const eyebrow: CSSProperties = {
  fontFamily: 'var(--font-jetbrains-mono), monospace',
  fontSize: 12,
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: '#F2C864',
  marginBottom: 16,
}
const h2: CSSProperties = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.1,
  color: '#E9ECDD',
  margin: 0,
}
const lede: CSSProperties = {
  fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
  lineHeight: 1.6,
  color: 'rgba(233,236,221,0.75)',
  maxWidth: 640,
}
const grid = (min: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
  gap: 24,
})
const goldCta: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  background: '#F2C864',
  color: '#051D2E',
  fontWeight: 700,
  padding: '1rem 2.25rem',
  borderRadius: 999,
  textDecoration: 'none',
}

export default function Home() {
  return (
    <div style={{ background: '#03141F', color: '#E9ECDD' }}>
      {/* 1 · HERO — the noise→signal scroll act */}
      <HeroSignal />

      {/* 2 · THESIS — the belief that bridges hero to foundation */}
      <ThreadSection id="thesis" head background="linear-gradient(#03141F, #051D2E)">
        <Reveal variant="slide">
          <p style={{ ...eyebrow, color: 'rgba(233,236,221,0.5)' }}>The order of operations</p>
          <h2 style={{ ...h2, maxWidth: 820 }}>
            Most AI never ships — because the data underneath was never ready.
          </h2>
          <p style={{ ...lede, marginTop: '1.5rem', maxWidth: 720 }}>
            We fix that order of operations: engineer the data foundation first, then build the AI on top of it. Data is
            the key to every model — so we treat it that way, and ours makes it to production.
          </p>
        </Reveal>
      </ThreadSection>

      {/* 3 · FOUNDATION — the data platform that makes AI reliable */}
      <ThreadSection id="foundation" background="linear-gradient(#051D2E, #072633)">
        <Reveal variant="slide" style={{ maxWidth: 720, marginBottom: 56 }}>
          <p style={eyebrow}>The foundation</p>
          <h2 style={h2}>Data that&apos;s actually ready for AI</h2>
          <p style={{ ...lede, marginTop: 16 }}>
            We unify your scattered systems into one trusted platform — the groundwork that makes everything after it
            reliable. Certified on Microsoft Fabric, fluent in Snowflake and Databricks.
          </p>
        </Reveal>

        <Reveal variant="scale" style={{ marginBottom: 32 }}>
          <PlatformCard
            platform="fabric"
            name="One platform for all your data"
            tagline="Microsoft Fabric · certified"
            capabilities={[
              'Every source unified in one place',
              'Reports that keep themselves current',
              'A single version of the numbers everyone trusts',
              'Typically live in 2–4 weeks',
            ]}
            link="/contact"
            isPrimary
            certified
          />
        </Reveal>

        <div style={grid(300)}>
          <Reveal variant="scale" delay={80}>
            <PlatformCard
              platform="snowflake"
              name="Scales without slowing down"
              tagline="Snowflake"
              capabilities={[
                'Millions of rows, no waiting',
                'Share data securely across teams',
                'Pay only for what you use',
                'Runs on AWS, Azure or Google Cloud',
              ]}
              link="/data-foundation"
            />
          </Reveal>
          <Reveal variant="scale" delay={160}>
            <PlatformCard
              platform="databricks"
              name="Where data meets AI"
              tagline="Databricks"
              capabilities={[
                'Data engineering and ML in one place',
                'Models that actually reach production',
                'Pipelines that hold up under load',
                'Built for AI-heavy workloads',
              ]}
              link="/data-foundation"
            />
          </Reveal>
        </div>

        <Reveal variant="rise" style={{ marginTop: 40 }}>
          <CtaButton href="/data-foundation" variant="ghost">Explore the data foundation →</CtaButton>
        </Reveal>
      </ThreadSection>

      {/* 4 · INTELLIGENCE — Applied AI. The luminance peak. */}
      <ThreadSection
        id="intelligence"
        peak
        background="radial-gradient(1100px circle at 28% 48%, rgba(213,235,255,0.10), transparent 55%), linear-gradient(#072633, #0a2c3a)"
      >
        <Reveal variant="fade" style={{ maxWidth: 720, marginBottom: 56 }}>
          <p style={eyebrow}>Applied AI</p>
          <h2 style={h2}>AI that turns your data into decisions</h2>
          <p style={{ ...lede, marginTop: 16 }}>
            Computer vision, machine learning, and NLP — built on the foundation above, so they work in production, not
            just in a demo.
          </p>
        </Reveal>

        <div style={grid(280)}>
          <Reveal variant="rise" delay={0}>
            <AIServiceCard
              service="vision"
              name="Computer Vision"
              description="Turn images and video into decisions — detection, inspection, and document understanding."
              examples={[
                'Object detection and classification',
                'Quality-control automation',
                'OCR and document processing',
                'Visual anomaly detection',
              ]}
              cloudProviders={['aws', 'azure']}
              link="/applied-ai"
              icon={<Eye size={32} />}
            />
          </Reveal>
          <Reveal variant="rise" delay={100}>
            <AIServiceCard
              service="ml"
              name="Machine Learning"
              description="Predict what happens next and act on it — forecasting, scoring, and recommendations."
              examples={[
                'Forecasting and predictive analytics',
                'Recommendation engines',
                'Anomaly detection',
                'Custom model development',
              ]}
              cloudProviders={['aws', 'azure']}
              link="/applied-ai"
              icon={<Brain size={32} />}
            />
          </Reveal>
          <Reveal variant="rise" delay={200}>
            <AIServiceCard
              service="nlp"
              name="Natural Language"
              description="Make sense of text at scale — and build assistants your team and customers can talk to."
              examples={[
                'Document intelligence',
                'Chat and virtual assistants',
                'Sentiment and intent analysis',
                'Search and summarisation',
              ]}
              cloudProviders={['aws', 'azure']}
              link="/applied-ai"
              icon={<MessageSquare size={32} />}
            />
          </Reveal>
        </div>

        <Reveal variant="rise" style={{ marginTop: 40 }}>
          <CtaButton href="/applied-ai" variant="ghost">Explore Applied AI →</CtaButton>
        </Reveal>
      </ThreadSection>

      {/* 5 · EXPERTISE — why trust us (no invented stats) */}
      <ThreadSection id="expertise" background="linear-gradient(#0a2c3a, #072028)">
        <Reveal variant="slide" style={{ maxWidth: 720, marginBottom: 56 }}>
          <p style={eyebrow}>Why AltDev</p>
          <h2 style={h2}>Certified — and honest about what works</h2>
        </Reveal>

        <div style={grid(280)}>
          {[
            {
              t: 'Microsoft-certified',
              d: 'A real, verifiable credential on the platform we build most of our foundations on — not a self-awarded badge.',
            },
            {
              t: 'Data-first by conviction',
              d: 'We believe data is the key to every AI. It shapes how we scope every engagement — foundation before models, always.',
            },
            {
              t: 'We hand you the keys',
              d: 'We train your team to run what we build. The goal is your independence, not a retainer. No lock-in.',
            },
          ].map((item, i) => (
            <Reveal key={item.t} variant="rise" delay={i * 90}>
              <div
                style={{
                  height: '100%',
                  background: 'rgba(233,236,221,0.03)',
                  border: '1px solid rgba(242,200,100,0.14)',
                  borderRadius: 16,
                  padding: '2rem',
                }}
              >
                <div style={{ ...eyebrow, marginBottom: 12 }}>0{i + 1}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#E9ECDD', margin: '0 0 10px' }}>{item.t}</h3>
                <p style={{ color: 'rgba(233,236,221,0.72)', lineHeight: 1.6, margin: 0 }}>{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ThreadSection>

      {/* 6 · METHOD — how we work */}
      <ThreadSection id="method" background="linear-gradient(#072028, #051D2E)">
        <Reveal variant="slide" style={{ maxWidth: 720, marginBottom: 56 }}>
          <p style={eyebrow}>How we work</p>
          <h2 style={h2}>A clear path from data to decisions</h2>
        </Reveal>

        <div style={grid(260)}>
          {[
            { n: '1', t: 'Discovery', d: 'We map your data and the decisions it should be driving — and where it falls short today.' },
            { n: '2', t: 'Build', d: 'We engineer the foundation and the AI together, so what we ship holds up in production.' },
            { n: '3', t: 'Ownership', d: 'We train your team to run it. You keep the platform, the models, and the know-how.' },
          ].map((step, i) => (
            <Reveal key={step.n} variant="rise" delay={i * 120}>
              <div>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    border: '2px solid rgba(242,200,100,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontSize: 20,
                    color: '#F2C864',
                    marginBottom: 20,
                  }}
                >
                  {step.n}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#E9ECDD', margin: '0 0 10px' }}>{step.t}</h3>
                <p style={{ color: 'rgba(233,236,221,0.72)', lineHeight: 1.6, margin: 0 }}>{step.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ThreadSection>

      {/* 7 · ENABLEMENT — you own what we build */}
      <ThreadSection id="enablement" background="#051D2E">
        <Reveal variant="slide" style={{ maxWidth: 720, marginBottom: 56 }}>
          <p style={eyebrow}>Enablement</p>
          <h2 style={h2}>You own what we build</h2>
          <p style={{ ...lede, marginTop: 16 }}>
            Certified corporate training so your team runs the platform and the AI with confidence — long after we hand
            over.
          </p>
        </Reveal>

        <div style={grid(300)}>
          <Reveal variant="rise" delay={0}>
            <TrainingProgramCard
              title="Microsoft Fabric Essentials"
              platform="fabric"
              duration="3–5 days"
              deliveryMethod="On-site"
              topics={[
                'OneLake architecture and integration',
                'Power BI and real-time analytics',
                'Data engineering with Synapse',
                'Governance and best practices',
              ]}
              level="All Levels"
            />
          </Reveal>
          <Reveal variant="rise" delay={90}>
            <TrainingProgramCard
              title="Snowflake Implementation"
              platform="snowflake"
              duration="2–4 days"
              deliveryMethod="On-site"
              topics={[
                'Cloud data warehouse fundamentals',
                'SQL optimisation techniques',
                'Data sharing and collaboration',
                'Performance, security and governance',
              ]}
              level="Intermediate"
            />
          </Reveal>
          <Reveal variant="rise" delay={180}>
            <TrainingProgramCard
              title="Applied AI Development"
              platform="ai"
              duration="3–5 days"
              deliveryMethod="On-site"
              topics={[
                'AWS / Azure AI services',
                'Computer vision applications',
                'Model training and deployment',
                'MLOps best practices',
              ]}
              level="Intermediate"
            />
          </Reveal>
        </div>

        <Reveal variant="rise" style={{ marginTop: 40 }}>
          <CtaButton href="/enablement" variant="ghost">Explore Enablement →</CtaButton>
        </Reveal>
      </ThreadSection>

      {/* 8 · INVITATION — the calm close, the last lit node */}
      <ThreadSection id="invitation" terminal background="linear-gradient(#051D2E, #03141F)">
        <Reveal variant="fade">
          <h2 style={{ ...h2, maxWidth: 760 }}>Let&apos;s see what your data can do.</h2>
          <p style={{ ...lede, margin: '1.5rem 0 2.5rem' }}>
            A short, honest conversation about where your data is today — and where it could take your business.
          </p>
          <Link href="/contact" style={goldCta}>
            Book a consultation <ArrowRight size={20} />
          </Link>
        </Reveal>
      </ThreadSection>
    </div>
  )
}
