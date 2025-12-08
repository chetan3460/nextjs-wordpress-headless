import { fetchPostBySlug, getAllPosts } from '@/lib/wordpress/client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 1. Fetch Post Data
async function getPost(slug) {
    const post = await fetchPostBySlug(slug);
    return post;
}

// 2. Generate Static Paths (Optional but good for SEO)
export async function generateStaticParams() {
    const data = await getAllPosts(10);
    return data.posts?.nodes.map((post) => ({
        slug: post.slug,
    })) || [];
}

// 3. Page Component
export default async function SinglePostPage({ params }) {
    const post = await getPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container-custom py-16">
            <Link href="/news" className="text-red-600 hover:underline mb-8 inline-block">
                ← Back to News
            </Link>

            <article className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>

                <div className="flex items-center text-gray-500 mb-8 text-sm">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    {post.categories?.nodes.length > 0 && (
                        <>
                            <span className="mx-2">•</span>
                            <span>{post.categories.nodes[0].name}</span>
                        </>
                    )}
                </div>

                {post.featuredImage && (
                    <div className="relative h-[400px] w-full mb-10 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.featuredImage.node.altText || post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                <div
                    className="prose prose-lg max-w-none text-gray-800 prose-headings:text-gray-900 prose-a:text-red-600"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
}

// Metadata for SEO
export async function generateMetadata({ params }) {
    const post = await getPost(params.slug);
    return {
        title: post ? `${post.title} - Resplast` : 'Post Not Found',
    };
}
