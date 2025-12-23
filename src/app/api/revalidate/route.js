import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * On-Demand Revalidation API
 *
 * Usage:
 * POST /api/revalidate?secret=YOUR_SECRET&path=/
 * POST /api/revalidate?secret=YOUR_SECRET&tag=news
 *
 * Set REVALIDATION_SECRET in .env.local
 */
export async function POST(request) {
  const secret = request.nextUrl.searchParams.get('secret');
  const path = request.nextUrl.searchParams.get('path');
  const tag = request.nextUrl.searchParams.get('tag');

  // Validate secret
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    if (path) {
      // Revalidate specific path
      await revalidatePath(path);
      console.log(`Revalidated path: ${path}`);
      return NextResponse.json({
        revalidated: true,
        path,
        timestamp: new Date().toISOString(),
      });
    }

    if (tag) {
      // Revalidate by tag
      await revalidateTag(tag);
      console.log(`Revalidated tag: ${tag}`);
      return NextResponse.json({
        revalidated: true,
        tag,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ message: 'Missing path or tag parameter' }, { status: 400 });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json(
      { message: 'Error revalidating', error: err.message },
      { status: 500 }
    );
  }
}

// GET method for testing
export async function GET() {
  return NextResponse.json({
    message: 'Revalidation API is working',
    usage: 'POST /api/revalidate?secret=YOUR_SECRET&path=/',
    note: 'Set REVALIDATION_SECRET in .env.local',
  });
}
