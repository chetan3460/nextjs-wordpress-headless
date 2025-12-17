"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function NewsContentBlock({ block }) {
  const {
    acf_fc_layout,
    content_type,
    title,
    subtitle,
    content,
    image,
    gallery_images,
    background_color,
    hide_block,
  } = block;

  const swiperRef = useRef(null);

  // Initialize Swiper for gallery
  useEffect(() => {
    if (gallery_images && gallery_images.length > 0 && swiperRef.current) {
      // Dynamically import Swiper
      import("swiper").then(({ default: Swiper }) => {
        import("swiper/modules").then(({ Navigation, Pagination }) => {
          new Swiper(swiperRef.current, {
            modules: [Navigation, Pagination],
            slidesPerView: 2,
            spaceBetween: 16,
            navigation: {
              nextEl: ".gallery-slider-next",
              prevEl: ".gallery-slider-prev",
            },
            pagination: {
              el: ".gallery-slider-pagination",
              clickable: true,
              type: "custom",
              renderCustom: (swiper, current, total) => {
                return `${current}/${total}`;
              },
            },
            breakpoints: {
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            },
          });
        });
      });
    }
  }, [gallery_images]);

  // Don't render if hide_block is true
  if (hide_block) {
    return null;
  }

  // Don't render if no content
  if (
    !content_type &&
    !title &&
    !subtitle &&
    !content &&
    !image &&
    !gallery_images
  ) {
    return null;
  }

  return (
    <section className="news_content_block">
      <div>
        {/* Title */}
        {title && <h2 className="text-2xl font-bold mb-3">{title}</h2>}

        {/* Subtitle */}
        {subtitle && (
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            {subtitle}
          </h3>
        )}

        {/* Content */}
        {content && (
          <div className="content-content prose max-w-none mb-4">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}

        {/* Single Image */}
        {image?.url && (
          <div className="image-wrapper mb-4">
            <Image
              src={image.url}
              alt={image.alt || title || "Content image"}
              width={image.width || 800}
              height={image.height || 600}
              className="image-image w-full h-auto rounded-lg"
            />
          </div>
        )}

        {/* Gallery Images - Swiper Slider */}
        {gallery_images &&
          Array.isArray(gallery_images) &&
          gallery_images.length > 0 && (
            <div className="gallery-slider-wrapper relative">
              <div ref={swiperRef} className="swiper">
                <div className="swiper-wrapper">
                  {gallery_images.map((img, index) => (
                    <div key={img.ID || index} className="swiper-slide">
                      <div className="group cursor-pointer">
                        {img?.url && (
                          <Image
                            src={img.url}
                            alt={img.alt || `Gallery image ${index + 1}`}
                            width={img.width || 400}
                            height={img.height || 300}
                            className="w-full aspect-[216/133.903] object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Navigation - Below the slider */}
              {gallery_images.length > 1 && (
                <div className="swiper-navigation flex items-center justify-center mt-3 gap-4">
                  <div className="gallery-slider-prev swiper-btn-prev cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                    >
                      <path
                        d="M7.92214 3.18291C8.16739 3.18291 8.36621 3.38173 8.36621 3.62699C8.36621 3.87224 8.16739 4.07106 7.92214 4.07106L1.66704 4.07106L3.79543 6.19944C3.96885 6.37286 3.96885 6.65403 3.79543 6.82745C3.62201 7.00087 3.34084 7.00087 3.16742 6.82745L0.594961 4.255C0.24812 3.90816 0.24812 3.34581 0.594961 2.99897L3.16742 0.426516C3.34084 0.253095 3.62201 0.253096 3.79543 0.426516C3.96885 0.599937 3.96885 0.881107 3.79543 1.05453L1.66705 3.18291L7.92214 3.18291Z"
                        fill="#DA000E"
                      />
                    </svg>
                  </div>

                  <div className="gallery-slider-pagination text-primary text-xs font-medium !w-auto flex gap-1"></div>

                  <div className="gallery-slider-next swiper-btn-next cursor-pointer">
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
                  </div>
                </div>
              )}
            </div>
          )}
      </div>
    </section>
  );
}
