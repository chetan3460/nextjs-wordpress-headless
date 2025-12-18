import { fetchPostBySlug } from '@/lib/wordpress/client';
import { fetchNewsPosts } from '@/lib/wordpress/news';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import BlockRenderer from '@/components/common/BlockRenderer';
import RelatedNewsBlock from '@/components/blocks/news/RelatedNewsBlock';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await fetchPostBySlug(slug, 'news');

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | News & Updates`,
        description: post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160),
    };
}

export default async function SingleNewsPage({ params }) {
    const { slug } = await params;

    // Fetch the post
    const post = await fetchPostBySlug(slug, 'news');

    if (!post) {
        notFound();
    }



    // Get featured image - try multiple sources
    let featuredImage = '/images/placeholder.jpg';
    if (post.acf?.post_thumbnail?.url) {
        featuredImage = post.acf.post_thumbnail.url;
    } else if (post.featuredImage?.node?.sourceUrl) {
        featuredImage = post.featuredImage.node.sourceUrl;
    } else if (post.featuredImage?.url) {
        featuredImage = post.featuredImage.url;
    } else if (post.featured_media_url) {
        featuredImage = post.featured_media_url;
    }


    // Get related posts (same category)
    const categoryId = post.category?.id || post.categories?.nodes?.[0]?.id || 'all';
    let relatedData = await fetchNewsPosts(1, categoryId, 'desc', '', 6);
    let relatedPosts = Array.isArray(relatedData?.posts)
        ? relatedData.posts.filter(p => p.id !== post.id).slice(0, 3)
        : [];

    // Fallback: If no related posts in same category, get latest posts
    if (relatedPosts.length === 0) {
        relatedData = await fetchNewsPosts(1, 'all', 'desc', '', 6);
        relatedPosts = Array.isArray(relatedData?.posts)
            ? relatedData.posts.filter(p => p.id !== post.id).slice(0, 3)
            : [];
    }

    return (
        <main className="site-main single-news mb-12 lg:mb-24 relative">
            {/* Breadcrumbs */}
            <Breadcrumbs />
            <div className='site-main flex flex-col gap-12 lg:gap-y-10 mb-12 lg:mb-24 relative'>

                {/* Hero Section */}
                <section className="news-hero relative">
                    <div className="container-fluid blog-hero-content">
                        {/* Banner Image */}
                        <div className="inner_banner_image-wrapper relative">
                            <div className="max-sm:aspect-[1.9] max-xs:aspect-[1.6]">
                                <Image
                                    src={featuredImage}
                                    alt={post.title}
                                    width={1920}
                                    height={600}
                                    className="lazy-image w-full h-full object-cover custom-rounded"
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent custom-rounded"></div>

                        </div>

                        {/* Banner Content */}
                        <div className="blog-banner-content absolute top-0 p-5 lg:p-10 flex flex-col gap-3">
                            {/* Date */}
                            <time dateTime={post.date} className="block body-2 text-white">
                                {new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </time>

                            {/* Title */}
                            <h1 className="fade-text w-9/12 text-white">
                                {post.title}
                            </h1>

                            {/* Categories */}
                            {(post.category || (post.categories?.nodes && post.categories.nodes.length > 0)) && (
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-block px-3 py-2 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30 tracking-normal">
                                        {post.category?.name || post.categories.nodes[0].name}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="blog-image-block">
                    <div className="container-fluid">
                        <div className="flex lg:flex-row flex-col gap-6">
                            {/* Main Content */}
                            <div className="w-full lg:w-8/12 flex flex-col gap-5 md:gap-5">
                                {/* Render Flexible Content Blocks */}
                                {post.acf?.news_panels && post.acf.news_panels.length > 0 ? (
                                    post.acf.news_panels.map((block, index) => (
                                        <BlockRenderer key={index} block={block} index={index} />
                                    ))
                                ) : (
                                    /* Fallback to post content if no flexible blocks */
                                    <div
                                        className="prose prose-lg max-w-none"
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    />
                                )}

                                {/* Share Section */}
                                <ShareButtons post={post} />
                            </div>

                            {/* Sidebar */}
                            <div className="w-full lg:w-4/12">
                                <RelatedNewsBlock
                                    posts={relatedPosts}
                                    currentPostId={post.id}
                                    layout="sidebar"
                                    data={{
                                        section_title: "Related Articles",
                                        posts_to_show: 3
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </main>
    );
}

// Share Buttons Component
function ShareButtons({ post }) {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const title = post.title;

    return (
        <div className="flex items-center gap-2">
            <div className="body-2 text-grey-3">Share</div>
            <div className="flex gap-1">
                {/* Facebook */}
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#FFECED] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12.0013 1.33203H10.0013C9.11725 1.33203 8.2694 1.68322 7.64428 2.30834C7.01916 2.93346 6.66797 3.78131 6.66797 4.66536V6.66536H4.66797V9.33203H6.66797V14.6654H9.33464V9.33203H11.3346L12.0013 6.66536H9.33464V4.66536C9.33464 4.48855 9.40487 4.31898 9.5299 4.19396C9.65492 4.06894 9.82449 3.9987 10.0013 3.9987H12.0013V1.33203Z" fill="#DA000E" />
                    </svg>
                </a >

                {/* LinkedIn */}
                < a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#FFECED] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.666 5.33203C11.7269 5.33203 12.7443 5.75346 13.4944 6.5036C14.2446 7.25375 14.666 8.27117 14.666 9.33203V13.9987H11.9993V9.33203C11.9993 8.97841 11.8589 8.63927 11.6088 8.38922C11.3588 8.13917 11.0196 7.9987 10.666 7.9987C10.3124 7.9987 9.97326 8.13917 9.72321 8.38922C9.47316 8.63927 9.33268 8.97841 9.33268 9.33203V13.9987H6.66602V9.33203C6.66602 8.27117 7.08744 7.25375 7.83759 6.5036C8.58773 5.75346 9.60515 5.33203 10.666 5.33203Z" fill="#DA000E" />
                        <path d="M4.00065 6H1.33398V14H4.00065V6Z" fill="#DA000E" />
                        <path d="M2.66732 3.9987C3.4037 3.9987 4.00065 3.40174 4.00065 2.66536C4.00065 1.92898 3.4037 1.33203 2.66732 1.33203C1.93094 1.33203 1.33398 1.92898 1.33398 2.66536C1.33398 3.40174 1.93094 3.9987 2.66732 3.9987Z" fill="#DA000E" stroke="#DA000E" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a >

                {/* Twitter/X */}
                < a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#FFECED] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_370_2077)">
                            <path d="M3 2.5H6L13 13.5H10L3 2.5Z" stroke="#DA000E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.1175 8.9707L3 13.5001" stroke="#DA000E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.9993 2.5L8.88184 7.02938" stroke="#DA000E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </a >
            </div >
        </div >
    );
}

export const revalidate = 60;
