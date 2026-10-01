// server.mjs
import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

// Production by default (this custom server serves the built app). Only run in
// dev mode when NODE_ENV is explicitly 'development' — so a missing NODE_ENV on
// the host never silently serves an unoptimized dev build. Local dev uses `next dev`.
const dev = process.env.NODE_ENV === 'development'
const hostname = '0.0.0.0'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true)
    await handle(req, res, parsedUrl)
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})