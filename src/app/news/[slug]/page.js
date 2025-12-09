import { fetchPostBySlug, getAllPosts } from '@/lib/wordpress/client';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/common/Breadcrumbs';

// 1. Fetch Post Data
async function getPost(slug) {
    const post = await fetchPostBySlug(slug);
    return post;
}

// 2. Generate Static Paths
export async function generateStaticParams() {
    const data = await getAllPosts(10);
    return data.posts?.nodes.map((post) => ({
        slug: post.slug,
    })) || [];
}

// 3. Page Component
export default async function SinglePostPage({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    // Get featured image
    const featuredImage = post.featuredImage?.node?.sourceUrl || '/images/placeholder.jpg';

    // Breadcrumb items
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'News & Updates', link: '/news' },
        { label: post.title, link: null }
    ];

    return (
        <>
            {/* Breadcrumbs - Outside main tag */}
            <Breadcrumbs items={breadcrumbItems} />

            <main className="site-main flex flex-col gap-12 lg:gap-y-10 mb-12 lg:mb-24 relative">
                {/* Hero Section with Featured Image */}
                <section className="news-hero relative">
                    <div className="container-fluid blog-hero-content">
                        {/* Blog Hero Banner */}
                        <div className="inner_banner_image-wrapper relative">
                            <div className="max-sm:aspect-[1.9] max-xs:aspect-[1.6]">
                                <img
                                    src={featuredImage}
                                    alt={post.title}
                                    className="lazy-image w-full h-full object-cover custom-rounded"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent custom-rounded"></div>
                            <div className="curve-shape absolute bottom-[-1px] right-[-1px] w-[135px] sm:w-[185px] sl:w-auto pointer-events-none [backface-visibility:hidden]"></div>
                        </div>

                        <div className="blog-banner-content absolute top-0 p-5 lg:p-10 flex flex-col gap-3">
                            {/* Date */}
                            <time dateTime={post.date} className="block body-2 text-white">
                                {formatDate(post.date)}
                            </time>

                            {/* Title */}
                            <h1 className="fade-text w-9/12">
                                {post.title}
                            </h1>

                            {/* Categories */}
                            {post.categories?.nodes && post.categories.nodes.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {post.categories.nodes.slice(0, 3).map((category, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-block px-3 py-2 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30 tracking-normal"
                                        >
                                            {category.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="blog-image-block">
                    <div className="container-fluid">
                        <div className="flex lg:flex-row flex-col gap-6">
                            <div className="w-full lg:w-8/12 flex flex-col gap-5 md:gap-5">
                                {/* News Content */}
                                <div
                                    className="prose prose-lg max-w-none"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                {/* Share Section */}
                                <div className="flex items-center gap-2">
                                    <div className="body-2 text-grey-3">Share</div>
                                    <div className="flex gap-1">
                                        {/* Facebook */}
                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                            target="_blank"
                                            rel="noopener"
                                            className="w-10 h-10 bg-[#FFECED] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M12.0013 1.33203H10.0013C9.11725 1.33203 8.2694 1.68322 7.64428 2.30834C7.01916 2.93346 6.66797 3.78131 6.66797 4.66536V6.66536H4.66797V9.33203H6.66797V14.6654H9.33464V9.33203H11.3346L12.0013 6.66536H9.33464V4.66536C9.33464 4.48855 9.40487 4.31898 9.5299 4.19396C9.65492 4.06894 9.82449 3.9987 10.0013 3.9987H12.0013V1.33203Z" fill="#DA000E" />
                                            </svg>
                                        </a>

                                        {/* LinkedIn */}
                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                            target="_blank"
                                            rel="noopener"
                                            className="w-10 h-10 bg-[#FFECED] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M10.666 5.33203C11.7269 5.33203 12.7443 5.75346 13.4944 6.5036C14.2446 7.25375 14.666 8.27117 14.666 9.33203V13.9987H11.9993V9.33203C11.9993 8.97841 11.8589 8.63927 11.6088 8.38922C11.3588 8.13917 11.0196 7.9987 10.666 7.9987C10.3124 7.9987 9.97326 8.13917 9.72321 8.38922C9.47316 8.63927 9.33268 8.97841 9.33268 9.33203V13.9987H6.66602V9.33203C6.66602 8.27117 7.08744 7.25375 7.83759 6.5036C8.58773 5.75346 9.60515 5.33203 10.666 5.33203Z" fill="#DA000E" />
                                                <path d="M4.00065 6H1.33398V14H4.00065V6Z" fill="#DA000E" />
                                                <path d="M2.66732 3.9987C3.4037 3.9987 4.00065 3.40174 4.00065 2.66536C4.00065 1.92898 3.4037 1.33203 2.66732 1.33203C1.93094 1.33203 1.33398 1.92898 1.33398 2.66536C1.33398 3.40174 1.93094 3.9987 2.66732 3.9987Z" fill="#DA000E" stroke="#DA000E" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>

                                        {/* Twitter/X */}
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`}
                                            target="_blank"
                                            rel="noopener"
                                            className="w-10 h-10 bg-[#FFECED] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_370_2077)">
                                                    <path d="M3 2.5H6L13 13.5H10L3 2.5Z" stroke="#DA000E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7.1175 8.9707L3 13.5001" stroke="#DA000E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12.9993 2.5L8.88184 7.02938" stroke="#DA000E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_370_2077">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-4/12">
                                {/* Sidebar - Related Blogs */}
                                <div className="sticky top-8">
                                    <div className="h3 font-semibold mb-3">Related Blogs</div>
                                    <div className="text-center text-gray-500">
                                        <p>Related posts coming soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

// Metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);
    return {
        title: post ? `${post.title} - Resplast` : 'Post Not Found',
    };
}
