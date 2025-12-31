'use client';

import Image from 'next/image';

/**
 * Checklist Section Block
 * Auto-generated from ACF Layout: checklist_section
 */
export default function ChecklistSection({ data }) {
  const { anchor_id, title, description, list_items } = data || {};

  if (data?.hide_block) return null;

  return (
    <section className="checklist_section py-12 lg:py-24 relative overflow-hidden">
      <div className="container-fluid mx-auto px-4">
        {/* Block content starts here */}
        {title && <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-black">{title}</h2>}
        {list_items && list_items.length > 0 && (
          <ul className="space-y-3 mt-6">
            {list_items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
