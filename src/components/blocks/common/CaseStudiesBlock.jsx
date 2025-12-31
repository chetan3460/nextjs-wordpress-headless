'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SafeHTML from '@/components/common/SafeHTML';
import { fetchCaseStudies } from '@/lib/wordpress/client';

/**
 * Case Studies Block
 * Matches AI Agency template UI for portfolio/projects
 */
export default function CaseStudiesBlock({ data }) {
  const { hide_block, subtitle, title, content, case_studies = [], cta } = data || {};
  const [dynamicItems, setDynamicItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // If no case studies are provided in the block data, fetch the latest ones automatically
      if (!case_studies || case_studies.length === 0) {
        setLoading(true);
        try {
          const posts = await fetchCaseStudies(4);
          const mapped = posts.map(post => ({
            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ? { url: post._embedded['wp:featuredmedia'][0].source_url, alt: post.title.rendered }
              : null,
            title: post.title.rendered,
            description: post.excerpt?.rendered?.replace(/<[^>]*>/g, '').substring(0, 100) + '...',
            link: `/case-studies/${post.slug}`,
          }));
          setDynamicItems(mapped);
        } catch (error) {
          console.error('Failed to fetch fallback case studies:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [case_studies]);

  if (hide_block) return null;

  // Use manual case studies if provided, else use dynamically fetched items
  const displayItems = case_studies && case_studies.length > 0 ? case_studies : dynamicItems;

  if (loading) {
    return (
      <div className="py-20 text-center animate-pulse">
        <p className="opacity-50">Loading case studies...</p>
      </div>
    );
  }

  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[160px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[160px] bg-white">
      <div className="main-container">
        {/* Header Section */}
        <div className="text-center space-y-5 mb-10 md:mb-[70px]">
          {subtitle && <span className="badge badge-green">{subtitle}</span>}
          <div className="space-y-3">
            {title && <h2 className="text-heading-2">{title}</h2>}
            {content && (
              <div className="max-w-[680px] mx-auto opacity-60">
                <SafeHTML html={content} />
              </div>
            )}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mb-14">
          <div className="grid grid-cols-12 gap-y-14 lg:gap-x-14">
            {displayItems && displayItems.length > 0 ? (
              displayItems.map((item, index) => {
                const isFullWidth = index === 0 || index === 3;
                const colSpan = isFullWidth ? 'col-span-12' : 'col-span-12 lg:col-span-6';

                return (
                  <div key={index} className={colSpan}>
                    <figure className="space-y-6">
                      <div className="relative w-full h-[300px] lg:h-[576px] rounded-[20px] overflow-hidden group cursor-pointer">
                        {item.image?.url && (
                          <Image
                            src={item.image.url}
                            alt={item.image.alt || item.title || 'Portfolio'}
                            fill
                            className="object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                          />
                        )}

                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out"></div>

                        {item.link && (
                          <Link
                            href={item.link}
                            className="group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 opacity-0 scale-95 -translate-y-[calc(50%-8px)] transition-all duration-500 ease-out absolute top-1/2 left-1/2 -translate-x-1/2 btn btn-md hover:btn-primary btn-secondary transform-gpu"
                          >
                            <span>View Projects</span>
                          </Link>
                        )}
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                        {item.title && (
                          <h3 className="text-heading-6 sm:text-heading-5 max-w-[500px]">
                            {item.title}
                          </h3>
                        )}
                        {item.description && (
                          <p className="max-w-[257px] text-left md:text-right opacity-60">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </figure>
                  </div>
                );
              })
            ) : (
              <div className="col-span-12 text-center py-10 opacity-40">No case studies found.</div>
            )}
          </div>
        </div>

        {/* Portfolio CTA */}
        {cta?.url && (
          <div className="text-center">
            <Link
              href={cta.url}
              target={cta.target || '_self'}
              className="btn btn-secondary btn-md hover:btn-primary mx-auto"
            >
              <span>{cta.title || 'View portfolio'}</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
