import { fetchGraphQL } from '@/lib/wordpress/client';
import { GET_ALL_POSTS } from '@/lib/graphql/queries';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
  // Fetch latest posts from WordPress
  let posts = [];

  try {
    const data = await fetchGraphQL(GET_ALL_POSTS, { first: 3 });
    posts = data.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-6">Welcome to Resplast</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Leading manufacturer of innovative plastic solutions for industries worldwide
          </p>
          <div className="flex gap-4">
            <Link href="/products" className="btn-primary bg-white text-red-600 hover:bg-gray-100">
              View Products
            </Link>
            <Link href="/contact" className="btn-secondary border-2 border-white hover:bg-white hover:text-red-600">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  {post.featuredImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      <Link href={`/news/${post.slug}`} className="hover:text-red-600">
                        {post.title}
                      </Link>
                    </h3>
                    <div
                      className="text-gray-600 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                    <Link
                      href={`/news/${post.slug}`}
                      className="text-red-600 font-semibold mt-4 inline-block hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No news articles found. Make sure WordPress is running and has published posts.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;
