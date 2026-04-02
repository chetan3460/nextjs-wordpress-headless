/* eslint-disable @typescript-eslint/no-require-imports */
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Passenger automatically sets the environment to production when configured, but we fallback just in case
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Passenger provides the PORT environment variable dynamically
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
