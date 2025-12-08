import { getLatestNews } from '@/lib/wordpress/client';
import Link from 'next/link';
import Image from 'next/image';

export default async function NewsPage() {
    const posts = await getLatestNews(20);

    return (
        <div className="container-custom py-16">
            <h1 className="text-4xl font-bold mb-10 text-center">Latest News</h1>

            {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            {post.featuredImage ? (
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={post.featuredImage.node.sourceUrl}
                                        alt={post.featuredImage.node.altText || post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400">
                                    No Image
                                </div>
                            )}

                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2">
                                    <Link href={`/news/${post.slug}`} className="hover:text-red-600 transition">
                                        {post.title}
                                    </Link>
                                </h2>
                                <div
                                    className="text-gray-600 line-clamp-3 mb-4 text-sm"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                />
                                <Link
                                    href={`/news/${post.slug}`}
                                    className="text-red-600 font-semibold text-sm hover:underline"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">No news found. Please add posts in WordPress.</p>
            )}
        </div>
    );
}

export const revalidate = 60;
