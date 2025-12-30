import { notFound } from 'next/navigation';
import { fetchPostBySlug } from '@/lib/wordpress/client';
import SafeHTML from '@/components/common/SafeHTML';
import Image from 'next/image';

/**
 * Helper to render detail blocks based on ACF Flexible Content (REST API structure)
 */
function renderDetailBlock(block, index) {
  // REST API uses 'acf_fc_layout' for layout names
  const layout = block.acf_fc_layout;

  switch (layout) {
    case 'rich_text':
      return (
        <div key={index} id={block.anchor_id} className="services-details-content mb-[72px]">
          {block.title && <h2 className="mb-4">{block.title}</h2>}
          {block.content && <SafeHTML html={block.content} />}
        </div>
      );

    case 'image_block':
      return (
        <figure
          key={index}
          id={block.anchor_id}
          className="rounded-xl overflow-hidden max-w-[767px] mb-[72px]"
        >
          {block.image?.url && (
            <Image
              src={block.image.url}
              alt={block.image.alt || 'Case study image'}
              width={block.image.width || 767}
              height={block.image.height || 500}
              className="size-full object-cover"
            />
          )}
        </figure>
      );

    case 'checklist_section':
      return (
        <div key={index} id={block.anchor_id} className="mb-[72px]">
          {block.title && <h2 className="mb-4">{block.title}</h2>}
          {block.description && <p className="mb-6 opacity-60">{block.description}</p>}
          <ul className="space-y-4 pt-2">
            {block.list_items?.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="size-5 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    className="fill-white"
                  >
                    <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                  </svg>
                </span>
                <span className="text-tagline-1 font-normal text-secondary">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'testimonial':
      return (
        <div key={index} className="mt-[70px] space-y-8 bg-secondary p-8 rounded-[20px] mb-[72px]">
          {block.avatar?.url && (
            <figure className="size-16 rounded-full overflow-hidden bg-white/10 shrink-0">
              <Image
                src={block.avatar.url}
                alt={block.avatar.alt || block.name || 'Avatar'}
                width={64}
                height={64}
                className="size-full object-cover"
              />
            </figure>
          )}
          <blockquote className="space-y-6">
            {block.quote && <p className="text-white text-lg">“{block.quote}”</p>}
            <div>
              {block.name && <p className="text-lg font-medium text-white">{block.name}</p>}
              {block.role && (
                <p className="text-tagline-2 font-normal text-white/60">{block.role}</p>
              )}
            </div>
          </blockquote>
        </div>
      );

    default:
      return null;
  }
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = params;

  // Fetch data using REST API client
  const caseStudy = await fetchPostBySlug(slug, 'case-studies');

  if (!caseStudy) {
    notFound();
  }

  const { title, acf } = caseStudy;
  const blocks = acf?.detail_blocks || [];

  // Extract anchors for Table of Contents
  const toc = blocks
    .filter(b => b.anchor_id && b.title)
    .map(b => ({ id: b.anchor_id, label: b.title }));

  return (
    <main>
      <section className="pb-24 md:pb-36 lg:pb-44 xl:pb-[200px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
        <div className="main-container">
          <div className="flex flex-col lg:flex-row items-start lg:gap-[72px]">
            {/* Main Content Column */}
            <div className="lg:max-w-[767px] max-w-full w-full">
              {acf?.subtitle && <span className="badge badge-green mb-6">{acf.subtitle}</span>}
              <h1 className="hero-title mb-8">{title}</h1>

              <div className="case-study-content">
                {blocks.map((block, index) => renderDetailBlock(block, index))}
              </div>
            </div>

            {/* Sticky Sidebar / Table of Contents */}
            {toc.length > 0 && (
              <aside className="lg:max-w-[400px] w-full lg:sticky lg:top-32 hidden lg:block">
                <div className="p-8 lg:p-11 rounded-[20px] bg-background-1 space-y-6">
                  <h3 className="text-heading-5">Summary</h3>
                  <ul className="space-y-1">
                    {toc.map((item, i) => (
                      <li key={i}>
                        <a
                          href={`#${item.id}`}
                          className="py-4 flex items-center justify-between border-b border-stroke-4 last:border-b-0 hover:text-primary transition-colors group"
                        >
                          <span className="text-lg font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                            {item.label}
                          </span>
                          <span className="opacity-40 group-hover:opacity-100 transition-opacity">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M10 8.5L14 12.5L10 16.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
