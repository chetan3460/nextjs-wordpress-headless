"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TabBlock({ data }) {
  const {
    title = "Applications by Industry",
    description = "<p>Tailored plastic solutions for diverse sectors.</p>",
    tab_items = [
      {
        title: "Automotive",
        description:
          "Lightweight components improving fuel efficiency and safety standards.",
        tab_image: {
          url: "https://placehold.co/600x800/1e3a8a/ffffff?text=Automotive",
        },
      },
      {
        title: "Medical",
        description:
          "Precision-molded devices for critical healthcare applications.",
        tab_image: {
          url: "https://placehold.co/600x800/0ea5e9/ffffff?text=Medical",
        },
      },
      {
        title: "Construction",
        description:
          "Durable, weather-resistant materials for modern infrastructure.",
        tab_image: {
          url: "https://placehold.co/600x800/f59e0b/ffffff?text=Construction",
        },
      },
      {
        title: "Consumer Goods",
        description:
          "Aesthetically pleasing and functional parts for everyday products.",
        tab_image: {
          url: "https://placehold.co/600x800/10b981/ffffff?text=Consumer",
        },
      },
    ],
    cta = { title: "View Industries", url: "/industries" },
  } = data || {};

  const [activeIndex, setActiveIndex] = useState(0);

  if (!tab_items || tab_items.length === 0) return null;

  return (
    <section
      className="home-tab-block py-16 md:py-24 bg-gray-50 overflow-hidden"
      data-component="TabBlock"
    >
      <div className="container-fluid xl:px-24">
        {/* Header (Mobile Only / Minimal on Desktop if needed) */}
        {(title || description) && (
          <div className="section-heading text-center mb-8 md:mb-12">
            {title && (
              <h2 className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">
                {title}
              </h2>
            )}
            {description && (
              <div
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        )}

        {/* Tab Layout */}
        <div className="flex flex-col lg:flex-row gap-6 h-[600px] lg:h-[500px]">
          {tab_items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-[20px] transition-all duration-500 ease-out cursor-pointer group flex flex-col justify-end
                     ${
                       isActive
                         ? "lg:flex-[3] flex-[3]"
                         : "lg:flex-1 hidden lg:flex"
                     }
                     ${isActive ? "h-full" : "h-1/4 lg:h-full"}
                   `}
                onClick={() => setActiveIndex(index)}
              >
                {/* Background Image */}
                {item.tab_image && item.tab_image.url && (
                  <Image
                    src={item.tab_image.url}
                    alt={item.title || "Tab Image"}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isActive ? "scale-100" : "scale-105 group-hover:scale-110"
                    }`}
                  />
                )}

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                    isActive
                      ? "opacity-20"
                      : "opacity-50 group-hover:opacity-30"
                  }`}
                ></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10">
                  <h3
                    className={`text-xl font-bold mb-2 transition-all ${
                      isActive ? "text-2xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="text-sm md:text-base text-gray-100 max-w-lg">
                          {item.description}
                        </div>
                        <div className="mt-4">
                          <span className="inline-block text-xs font-bold uppercase tracking-wider border-b border-white pb-1">
                            Learn More
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Vertical Title for Inactive State (Desktop) */}
                {!isActive && (
                  <div className="hidden lg:flex absolute inset-0 items-center justify-center p-4">
                    <span className="writing-vertical-rl rotate-180 text-white font-bold text-xl tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.title}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Tab Helper (Dots) */}
        <div className="flex lg:hidden justify-center gap-2 mt-4">
          {tab_items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === activeIndex ? "bg-red-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        {cta && cta.url && (
          <div className="text-center mt-12">
            <Link href={cta.url} className="btn-primary inline-flex">
              {cta.title}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
