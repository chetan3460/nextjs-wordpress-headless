import { NextResponse } from 'next/server';

// Simple in-memory rate limiter
const rateLimit = new Map();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 100; // 100 requests per minute

export function middleware(request) {
  // Only apply rate limiting to API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip =
      request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'anonymous';

    const now = Date.now();
    const limit = rateLimit.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW };

    // Reset counter if window has passed
    if (now > limit.resetTime) {
      limit.count = 0;
      limit.resetTime = now + RATE_LIMIT_WINDOW;
    }

    limit.count++;

    // Check if limit exceeded
    if (limit.count > MAX_REQUESTS) {
      return new NextResponse(
        JSON.stringify({
          error: 'Too Many Requests',
          message: 'Rate limit exceeded. Please try again later.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(Math.ceil((limit.resetTime - now) / 1000)),
          },
        }
      );
    }

    rateLimit.set(ip, limit);

    // Clean up old entries periodically (every 100 requests)
    if (rateLimit.size > 1000) {
      const cutoff = now - RATE_LIMIT_WINDOW;
      for (const [key, value] of rateLimit.entries()) {
        if (value.resetTime < cutoff) {
          rateLimit.delete(key);
        }
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
