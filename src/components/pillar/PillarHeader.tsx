// Shared header band for the three pillar pages. Server component.

import Link from 'next/link'
import CtaButton from '@/components/ui/CtaButton'
import { eyebrow, h1, lede } from '@/components/ui/typography'

export default function PillarHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string
  title: string
  intro: string
}) {
  return (
    <header
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(900px circle at 20% 20%, rgba(255,255,255,0.12), #03141F 72%)',
        padding: 'clamp(7rem, 16vh, 12rem) 1.5rem clamp(4rem, 8vh, 6rem)',
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={eyebrow}>{kicker}</p>
        <h1 style={{ ...h1, maxWidth: 840 }}>{title}</h1>
        <p style={{ ...lede, marginTop: 24 }}>{intro}</p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginTop: 36 }}>
          <CtaButton href="/contact">Book a consultation</CtaButton>
          <Link href="/" style={{ color: 'rgba(233,236,221,0.6)', textDecoration: 'none', fontSize: 14 }}>
            ← Back to overview
          </Link>
        </div>
      </div>
    </header>
  )
}
