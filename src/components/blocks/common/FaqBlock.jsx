'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ Block Component
 * Displays frequently asked questions in an accordion format
 */
export default function FaqBlock({ data }) {
  const { hide_block, title, content, faq_items } = data || {};

  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  if (hide_block) return null;

  const toggleFaq = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-[1920px]:px-5">
      <div className="bg-[#eaeceb] mx-auto max-w-[1880px] rounded-2xl py-18 md:rounded-4xl md:py-20 lg:py-25 xl:py-28">
        <div className="container-fluid">
          {/* Section Header */}
          <div className="section-heading text-center space-y-3 md:space-y-5 max-w-[720px] mx-auto lg:mb-[70px] mb-12">
            <span className="badge badge-white-v2 uppercase">FAQ</span>
            <div className="space-y-3">
              {title && <h2>{title}</h2>}
              {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
            </div>
          </div>

          {/* FAQ Accordion */}
          {faq_items && faq_items.length > 0 && (
            <div className="accordion max-w-[770px] mx-auto space-y-4">
              {faq_items.map((item, index) => {
                const isActive = activeIndex === index;
                const faqTitle = item.faq_title || item.title;
                const faqContent = item.faq_content || item.content;

                return (
                  <div
                    key={index}
                    className={`accordion-item bg-white rounded-2xl md:rounded-4xl px-6 md:px-8 ${
                      isActive ? 'active-accordion' : ''
                    }`}
                  >
                    {/* Question Button */}
                    <button
                      className="accordion-action flex items-center cursor-pointer justify-between py-6 md:py-8 w-full"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="flex-1 text-left lg:text-heading-6 text-tagline-1 font-normal text-secondary">
                        {faqTitle}
                      </span>
                      {/* Accordion Icon */}
                      <span
                        className={`sm:ml-auto ml-2.5 block accordion-arrow transition-transform duration-500 ease-in-out ${isActive ? 'rotate-180' : ''}`}
                      >
                        <ChevronDown
                          className="w-4 h-4 stroke-secondary dark:stroke-accent"
                          strokeWidth={1.5}
                        />
                      </span>
                    </button>

                    {/* Answer Content */}
                    <div
                      className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${
                        isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      style={{
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <div className="border-t border-t-stroke-2 pt-6 pb-8">
                        <div dangerouslySetInnerHTML={{ __html: faqContent }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Empty State */}
          {(!faq_items || faq_items.length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-500">No FAQs available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
