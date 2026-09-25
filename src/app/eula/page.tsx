import type { Metadata } from 'next'
import type { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'End-User License Agreement — N8N_Query | AltDev',
  description: 'End-user license agreement for N8N_Query, an internal AltDev automation connecting n8n to QuickBooks for invoicing and sales order processing.',
}

const eyebrow: CSSProperties = {
  fontFamily: 'var(--font-jetbrains-mono), monospace',
  fontSize: 12,
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: '#F2C864',
  marginBottom: 16,
}
const h1: CSSProperties = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.08,
  color: '#E9ECDD',
  margin: 0,
}
const h2: CSSProperties = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.12,
  color: '#E9ECDD',
  margin: 0,
}
const body: CSSProperties = { color: 'rgba(233,236,221,0.72)', lineHeight: 1.6, margin: 0 }
const section = { marginTop: 40 }
const p = { ...body, marginTop: 12 }
const li = { ...body, marginTop: 8 }

export default function EulaPage() {
  return (
    <main style={{ background: '#03141F', color: '#E9ECDD' }}>
      <header
        style={{
          background: 'radial-gradient(900px circle at 22% 20%, rgba(11,66,81,0.5), #03141F 72%)',
          padding: 'clamp(7rem, 16vh, 10rem) 1.5rem clamp(3rem, 6vh, 4rem)',
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={eyebrow}>Legal</p>
          <h1 style={h1}>End-User License Agreement</h1>
          <p style={{ ...body, marginTop: 20, color: 'rgba(233,236,221,0.55)', fontSize: 14 }}>
            Application: N8N_Query &nbsp;·&nbsp; Effective date: 25 September 2026
          </p>
        </div>
      </header>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 1.5rem 6rem' }}>
        <p style={body}>
          This End-User License Agreement (&ldquo;Agreement&rdquo;) governs the use of N8N_Query (&ldquo;the
          Application&rdquo;), an internal automation built and operated by AltDev (&ldquo;AltDev&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) that connects our n8n workflow environment to QuickBooks Online for the
          purpose of automating invoicing and sales order processing.
        </p>

        <section style={section}>
          <h2 style={h2}>1. Scope and intended use</h2>
          <p style={p}>
            N8N_Query is an internal-use application. It is developed, deployed, and used exclusively by AltDev
            personnel and its authorized service accounts to automate the creation, update, and synchronization of
            invoices and sales orders between our internal systems and QuickBooks Online. It is not distributed,
            licensed, sold, or made available to the public or to third parties, and no external party is granted
            access to it under this Agreement.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>2. License grant</h2>
          <p style={p}>
            AltDev grants its authorized personnel a limited, non-exclusive, non-transferable, revocable right to use
            N8N_Query solely for internal business operations. No right is granted to copy, sublicense, resell,
            reverse-engineer, or distribute the Application outside of AltDev.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>3. QuickBooks connectivity</h2>
          <p style={p}>
            The Application connects to QuickBooks Online via Intuit&apos;s official APIs, using OAuth 2.0 authorization
            granted by an authorized AltDev QuickBooks account administrator. The Application only performs the
            actions necessary to:
          </p>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li style={li}>Create and update sales orders and invoices;</li>
            <li style={li}>Read customer and item records required to build those transactions; and</li>
            <li style={li}>Reconcile transaction status between our internal workflow (n8n) and QuickBooks Online.</li>
          </ul>
          <p style={p}>
            The Application does not access QuickBooks data beyond what is required for this purpose.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>4. Restrictions</h2>
          <p style={p}>
            Users may not use the Application for any purpose other than authorized invoicing and sales order
            automation, attempt to circumvent its access controls, or use it to access or modify QuickBooks data
            unrelated to its stated purpose.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>5. Disclaimer and liability</h2>
          <p style={p}>
            The Application is provided &ldquo;as is&rdquo; for internal operational use. AltDev makes reasonable efforts to keep
            it accurate and available but does not warrant uninterrupted or error-free operation. AltDev is not liable
            for indirect or consequential damages arising from its use, beyond what is required by applicable law.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>6. Termination</h2>
          <p style={p}>
            AltDev may suspend or revoke access to the Application, and its connection to QuickBooks Online, at any
            time, including immediately upon a user&apos;s change of role or departure from AltDev.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>7. Changes to this Agreement</h2>
          <p style={p}>
            This Agreement may be updated as the Application&apos;s scope changes. Material changes will be reflected on
            this page with an updated effective date.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>8. Contact</h2>
          <p style={p}>
            Questions about this Agreement or the Application can be directed to{' '}
            <a href="mailto:info@altdev.com.my" style={{ color: '#F2C864' }}>
              info@altdev.com.my
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
