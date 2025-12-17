import { NextResponse } from 'next/server';
import { fetchNewsPosts } from '@/lib/wordpress/news';

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get('page') || '1');
    const category = searchParams.get('category') || 'all';
    const order = searchParams.get('order') || 'desc';

    const data = await fetchNewsPosts(page, category, order);

    return NextResponse.json(data);
}
