import type { Metadata } from 'next'
import { eyebrow, h1, h2, body } from '@/components/ui/typography'

export const metadata: Metadata = {
  title: 'Privacy Policy — N8N_Query | AltDev',
  description: 'Privacy policy for N8N_Query, an internal AltDev automation connecting n8n to QuickBooks for invoicing and sales order processing.',
}

const section = { marginTop: 40 }
const p = { ...body, marginTop: 12 }
const li = { ...body, marginTop: 8 }

export default function PrivacyPolicyPage() {
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
          <h1 style={h1}>Privacy Policy</h1>
          <p style={{ ...body, marginTop: 20, color: 'rgba(233,236,221,0.55)', fontSize: 14 }}>
            Application: N8N_Query &nbsp;·&nbsp; Effective date: 25 September 2026
          </p>
        </div>
      </header>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 1.5rem 6rem' }}>
        <p style={body}>
          This Privacy Policy explains how N8N_Query (&ldquo;the Application&rdquo;), an internal automation operated
          by AltDev (&ldquo;AltDev&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), handles data when it connects our n8n
          workflow environment to QuickBooks Online to automate invoicing and sales order processing.
        </p>

        <section style={section}>
          <h2 style={h2}>1. Who this applies to</h2>
          <p style={p}>
            The Application is for AltDev&apos;s internal use only. It is not offered to the public, and no external
            customer or third party interacts with it directly. This policy describes how data flows through the
            Application as part of our own internal operations.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>2. Data the Application accesses</h2>
          <p style={p}>Through its authorized connection to QuickBooks Online, the Application reads and writes:</p>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li style={li}>Customer records (name and contact details already stored in QuickBooks), to attach transactions to the correct customer;</li>
            <li style={li}>Item and pricing records, to build accurate line items; and</li>
            <li style={li}>Sales order and invoice records, which it creates and updates.</li>
          </ul>
          <p style={p}>
            It does not access QuickBooks modules unrelated to invoicing and sales orders (e.g. payroll, banking
            connections, or tax filings), and it does not collect data from any source other than our own n8n
            workflows and QuickBooks Online.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>3. How data is used</h2>
          <p style={p}>
            Data retrieved from QuickBooks is used solely to construct and reconcile sales orders and invoices as part
            of AltDev&apos;s internal order-to-invoice workflow. It is not used for marketing, profiling, advertising, or
            any purpose beyond this operational automation, and it is not sold or shared with third parties.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>4. Storage and retention</h2>
          <p style={p}>
            Data passed through the Application is processed within AltDev&apos;s internal n8n environment and is not
            persisted beyond what is operationally necessary to complete and log each automated transaction. The
            authoritative, long-term record of the underlying financial data remains in QuickBooks Online, governed by
            Intuit&apos;s own data handling and retention practices.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>5. Data security</h2>
          <p style={p}>
            Access to the Application and its QuickBooks connection is restricted to authorized AltDev personnel and
            service accounts. Authorization uses QuickBooks Online&apos;s OAuth 2.0 flow; AltDev does not store QuickBooks
            account passwords. Access can be reviewed and revoked at any time from the connected QuickBooks account.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>6. Third parties</h2>
          <p style={p}>
            The Application communicates only with Intuit&apos;s QuickBooks Online API and AltDev&apos;s own internal n8n
            infrastructure. It does not integrate with, or send data to, any other third-party service.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>7. Changes to this policy</h2>
          <p style={p}>
            This policy may be updated if the Application&apos;s data handling changes. Material changes will be reflected
            on this page with an updated effective date.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>8. Contact</h2>
          <p style={p}>
            Questions about this policy or how the Application handles data can be directed to{' '}
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
