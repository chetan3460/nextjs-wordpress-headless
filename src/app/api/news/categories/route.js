import { NextResponse } from 'next/server';
import { fetchNewsCategories } from '@/lib/wordpress/news';

export async function GET() {
    try {
        const categories = await fetchNewsCategories();
        return NextResponse.json(categories);
    } catch (error) {
        console.error('Error fetching news categories:', error);
        return NextResponse.json(
            { error: 'Failed to fetch categories' },
            { status: 500 }
        );
    }
}
