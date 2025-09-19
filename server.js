const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.WEBSITE_HOSTNAME || 'localhost'
const port = process.env.PORT || process.env.WEBSITES_PORT || 3000

console.log(`Starting server in ${dev ? 'development' : 'production'} mode`)
console.log(`Hostname: ${hostname}`)
console.log(`Port: ${port}`)

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Handle health check endpoint for Azure
      if (req.url === '/health' || req.url === '/api/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ status: 'OK', timestamp: new Date().toISOString() }))
        return
      }

      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  })
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
  .on('error', (err) => {
    console.error('Server error:', err)
    process.exit(1)
  })
})
.catch((ex) => {
  console.error('Failed to start server:', ex)
  process.exit(1)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully')
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully')
  process.exit(0)
})