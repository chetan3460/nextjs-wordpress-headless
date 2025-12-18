"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SafeHTML from "@/components/common/SafeHTML";

/**
 * Gallery Block
 * A functional gallery with Swiper support and tabbed categories.
 */
export default function GalleryBlock({ data }) {
  const {
    hide_block,
    title,
    description,
    show_tabs,
    gallery_categories,
    gallery_items: legacy_items,
  } = data || {};

  const [activeCategory, setActiveCategory] = useState(0);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Initialize Swiper
  useEffect(() => {
    const initSwiper = async () => {
      const { default: Swiper } = await import("swiper");
      const { Navigation, Pagination, Autoplay } = await import(
        "swiper/modules"
      );

      if (swiperRef.current) {
        const swiper = new Swiper(swiperRef.current, {
          modules: [Navigation, Pagination, Autoplay],
          slidesPerView: 1,
          spaceBetween: 16,
          speed: 800,
          navigation: {
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          },
          pagination: {
            el: paginationRef.current,
            type: "custom",
            renderCustom: (swiper, current, total) => {
              return `<span class="current">${current}</span>/<span class="total">${total}</span>`;
            },
          },
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          },
        });
        setSwiperInstance(swiper);
      }
    };

    initSwiper();

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, [activeCategory, swiperInstance]); // Re-init on category change

  if (hide_block) return null;

  // Determine items to show
  const currentItems = show_tabs
    ? gallery_categories?.[activeCategory]?.gallery_items || []
    : legacy_items || [];

  return (
    <section className="gallery_block py-12 lg:py-24 relative">
      <div className="container-fluid relative overflow-hidden">
        {/* Header */}
        {(title || description) && (
          <div className="section-heading text-center mb-12">
            {title && (
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">{title}</h2>
            )}
            {description && (
              <SafeHTML
                html={description}
                className="prose max-w-2xl mx-auto"
              />
            )}
          </div>
        )}

        {/* Tabs */}
        {show_tabs && gallery_categories && gallery_categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {gallery_categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === idx
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.category_name}
              </button>
            ))}
          </div>
        )}

        {/* Slider */}
        {currentItems.length > 0 ? (
          <div className="gallery-swiper-container relative">
            <div ref={swiperRef} className="swiper overflow-hidden">
              <div className="swiper-wrapper">
                {currentItems.map((item, idx) => (
                  <div key={idx} className="swiper-slide h-auto">
                    <div className="gallery_items-item group cursor-pointer h-full border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="image-container relative aspect-4/3">
                        {item.gallery_image?.url && (
                          <Image
                            src={item.gallery_image.url}
                            alt={
                              item.gallery_image.alt ||
                              item.title ||
                              "Gallery image"
                            }
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-6">
                          {item.title && (
                            <div className="title text-white font-bold text-lg">
                              {item.title}
                            </div>
                          )}
                          {item.year && (
                            <div className="year text-white/80 text-sm">
                              {item.year}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {currentItems.length > 1 && (
              <div className="swiper-navigation flex items-center justify-center mt-8 gap-6">
                <button
                  ref={prevRef}
                  className="swiper-btn-prev cursor-pointer border-2 border-primary rounded-full p-2 hover:bg-primary hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                  >
                    <path
                      d="M7.92214 3.18291C8.16739 3.18291 8.36621 3.38173 8.36621 3.62699C8.36621 4.07106 7.92214 4.07106L1.66704 4.07106L3.79543 6.19944C3.96885 6.37286 3.96885 6.65403 3.79543 6.82745C3.62201 7.00087 3.34084 7.00087 3.16742 6.82745L0.594961 4.255C0.24812 3.90816 0.24812 3.34581 0.594961 2.99897L3.16742 0.426516C3.34084 0.253095 3.62201 0.253096 3.79543 0.426516C3.96885 0.599937 3.96885 0.881107 3.79543 1.05453L1.66705 3.18291L7.92214 3.18291Z"
                      fill="#DA000E"
                    />
                  </svg>
                </button>
                <div
                  ref={paginationRef}
                  className="swiper-pagination w-auto! text-primary font-bold"
                ></div>
                <button
                  ref={nextRef}
                  className="swiper-btn-next cursor-pointer border-2 border-primary rounded-full p-2 hover:bg-primary hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                  >
                    <path
                      d="M1.15891 3.18291C0.913661 3.18291 0.714844 3.38173 0.714844 3.62699C0.714844 3.87224 0.913661 4.07106 1.15892 4.07106L7.41401 4.07106L5.28562 6.19944C5.1122 6.37286 5.1122 6.65403 5.28562 6.82745C5.45904 7.00087 5.74021 7.00087 5.91364 6.82745L8.48609 4.255C8.83293 3.90816 8.83294 3.34581 8.48609 2.99897L5.91363 0.426516C5.74021 0.253095 5.45904 0.253096 5.28562 0.426516C5.1122 0.599937 5.1122 0.881107 5.28562 1.05453L7.41401 3.18291L1.15891 3.18291Z"
                      fill="#DA000E"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            No items found in this gallery.
          </div>
        )}
      </div>
    </section>
  );
}
