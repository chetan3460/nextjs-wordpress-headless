'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

/**
 * Content Image Block
 * Matches AI Agency template UI structure
 */
export default function ContentImageBlock({ data }) {
  const { hide_block, title, content, cta, list_items, image } = data || {};

  if (hide_block) return null;

  return (
    <section className="content-image-block py-16 md:py-20 lg:py-32 xl:py-40">
      <div className="main-container">
        <div className="relative z-0">
          {/* Gradient Background */}
          <div className="w-full h-full bg-white absolute -z-10 overflow-hidden rounded-[20px]">
            <div className="-z-10 absolute lg:-top-[155%] md:-top-[65%] -top-[75%] -right-[75%] lg:-right-[40%] md:-right-[70%] md:rotate-[60deg] rotate-[10deg] size-[1060px] select-none pointer-events-none">
              <Image
                src="/images/ns-img-504.png"
                alt="gradient"
                width={1060}
                height={1060}
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Content */}
            <div className="lg:flex-1/2 py-16 max-lg:px-5 lg:pl-14">
              <div className="mb-9">
                {title && <h2 className="mb-3 text-heading-2">{title}</h2>}
                {content && <p className="max-w-[530px]">{content}</p>}
              </div>

              {list_items && list_items.length > 0 && (
                <ul className="list-none space-y-2 mb-14">
                  {list_items.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-[18px] h-[18px] shrink-0 text-secondary"
                        strokeWidth={2}
                      />
                      <p className="text-secondary">{item.list}</p>
                    </li>
                  ))}
                </ul>
              )}

              {cta?.url && (
                <div className="text-center sm:text-left">
                  <a
                    href={cta.url}
                    target={cta.target || '_self'}
                    className="btn btn-secondary btn-md hover:btn-primary w-[85%] md:w-auto mx-auto"
                  >
                    <span>{cta.title || 'Discover more about us'}</span>
                  </a>
                </div>
              )}
            </div>

            {/* Right Column - Image */}
            <div className="lg:flex-1/2 lg:pe-[42px]">
              <div className="relative h-full max-lg:max-w-[525px] max-lg:mx-auto">
                {image?.url ? (
                  <figure className="lg:absolute lg:right-0 lg:bottom-0 max-w-[525px] max-lg:mx-auto">
                    <Image
                      src={image.url}
                      alt={image.alt || 'Content image'}
                      width={525}
                      height={500}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </figure>
                ) : (
                  <div className="lg:absolute lg:right-0 lg:bottom-0 max-w-[525px] max-lg:mx-auto min-h-[400px] flex items-center justify-center">
                    <div className="text-center text-secondary/40">
                      <p className="text-sm">Image placeholder</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
