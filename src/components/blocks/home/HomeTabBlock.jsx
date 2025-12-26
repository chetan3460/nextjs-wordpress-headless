'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function TabBlock({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!data) return null;
  const { title, description, tabs_items } = data;

  if (!tabs_items || tabs_items.length === 0) return null;

  return (
    <section className="home_tab_block py-12" data-component="TabBlock">
      <div className="container-fluid mx-auto">
        {(title || description) && (
          <div className="section-heading text-center">
            {title && <h2 className="fade-text text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {description && (
              <div
                className="anim-uni-in-up text-lg text-gray-600 max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        )}

        {tabs_items && tabs_items.length > 0 && (
          <div className="tabs_items-grid flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Tab Buttons / List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              {tabs_items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`
                    text-left p-4 rounded-xl transition-all duration-300
                    ${
                      activeTab === index
                        ? 'bg-primary text-white shadow-lg scale-[1.02]'
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-primary'
                    }
                  `}
                >
                  {item.title && (
                    <div className="tabs_items-item font-bold text-lg mb-1">{item.title}</div>
                  )}
                  {/* Showing preview of description if needed, or just title */}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="w-full lg:w-2/3 min-h-[400px] relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <AnimatePresence mode="wait">
                {tabs_items.map(
                  (item, index) =>
                    activeTab === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex flex-col md:flex-row"
                      >
                        {/* Image Side */}
                        {(item.tab_image || item.tab_inner_image) && (
                          <div className="w-full md:w-1/2 relative h-64 md:h-full">
                            <Image
                              src={item.tab_inner_image?.url || item.tab_image?.url}
                              alt={item.title || 'Tab Image'}
                              width={item.tab_inner_image?.width || item.tab_image?.width || 800}
                              height={item.tab_inner_image?.height || item.tab_image?.height || 600}
                              className="w-full h-full object-cover"
                            />
                            {item.tab_mobile_image && (
                              <div className="md:hidden absolute inset-0">
                                <Image
                                  src={item.tab_mobile_image.url}
                                  alt="Mobile View"
                                  width={item.tab_mobile_image.width || 400}
                                  height={item.tab_mobile_image.height || 600}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                        )}

                        {/* Text Side */}
                        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                          <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                          {item.description && (
                            <div
                              className="text-gray-600 leading-relaxed"
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            />
                          )}
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
