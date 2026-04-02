/* eslint-disable @typescript-eslint/no-require-imports */
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false; // Always false for GoDaddy production
const app = next({ dev, hostname: 'localhost', port: process.env.PORT || 3000 });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

// Skip app.prepare() to save critical resources on shared hosting
createServer(async (req, res) => {
  try {
    const parsedUrl = parse(req.url, true);
    await handle(req, res, parsedUrl);
  } catch (err) {
    console.error('Error occurred handling', req.url, err);
    res.statusCode = 500;
    res.end(`Internal Server Error: ${err.message}\nStack: ${err.stack}`);
  }
}).listen(port, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
