import type { NextConfig } from 'next'

// Security headers. Applied by the Next request handler (which the custom
// server.mjs uses), so unlike web.config they work on Linux App Service.
const baseHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
]

// CSP is PRODUCTION-ONLY on purpose: Next's dev server relies on eval()
// (React Fast Refresh + source maps), and a strict script-src would block it,
// breaking client-side interactivity — including the WebGL hero — during
// `next dev`. The production build doesn't use eval, so the strict CSP is safe.
//
// It allows exactly what the site needs: self-hosted + Google Fonts, inline
// styles/scripts (React style={} and Next's bootstrap), data:/blob: images,
// blob: workers (Three.js), and the Web3Forms endpoint. Uses 'unsafe-inline'
// (no nonces yet) — acceptable for a no-user-content marketing site.
// Smoke-test in a browser before shipping: fonts render, the hero animates,
// the contact form submits. If the console flags a blocked resource, add its
// origin to the matching directive.
const cspHeader = {
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob:",
    "connect-src 'self' https://api.web3forms.com",
    "worker-src 'self' blob:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self' https://api.web3forms.com",
  ].join('; '),
}

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: isProd ? [...baseHeaders, cspHeader] : baseHeaders }]
  },
}

export default nextConfig
