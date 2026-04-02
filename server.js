/* eslint-disable @typescript-eslint/no-require-imports */
// This is the root server.js entry point for GoDaddy/cPanel Phusion Passenger.
// Its only job is to load the Next.js standalone server with almost zero resource usage.
const path = require('path');

process.env.NODE_ENV = 'production';
process.chdir(__dirname);

// The standalone server is automatically created by 'next build'
// if 'output: standalone' is set in next.config.ts
const serverPath = path.join(__dirname, '.next', 'standalone', 'server.js');

try {
  console.log('> Starting Next.js Standalone Bridge...');
  require(serverPath);
} catch (err) {
  console.error('> Error: Standalone server missing! Please run "npm run build" first.');
  console.error(err);

  // Minimal fallback to prevent Passenger from crashing completely
  const { createServer } = require('http');
  createServer((req, res) => {
    res.statusCode = 500;
    res.end(
      'Server is building or standalone folder is missing. Please run "npm run build" in the terminal.'
    );
  }).listen(process.env.PORT || 3000);
}
