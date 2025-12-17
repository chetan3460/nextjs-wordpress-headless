import { NextResponse } from 'next/server';
import { fetchNewsPosts } from '@/lib/wordpress/news';

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get('page') || '1');
    const category = searchParams.get('category') || 'all';
    const order = searchParams.get('order') || 'desc';
    const search = searchParams.get('search') || '';

    const data = await fetchNewsPosts(page, category, order, search);

    return NextResponse.json(data);
}
