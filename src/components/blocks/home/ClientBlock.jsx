"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SafeImage from "@/components/common/SafeImage";
import "swiper/css";
import "swiper/css/autoplay";

export default function ClientBlock({ data }) {
  if (!data) return null;

  const { title, description, client_items } = data;

  if (!client_items || client_items.length === 0) return null;

  return (
    <section width={100} height={100} className="home_client_block py-12" data-component="ClientBlock">
      <div width={100} height={100} className="container-fluid mx-auto">
        {(title || description) && (
          <div width={100} height={100} className="section-heading text-center">
            {title && (
              <h2 width={100} height={100} className="fade-text text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <div
                width={100} height={100} className="anim-uni-in-up text-lg text-gray-600 max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        )}

        {client_items && client_items.length > 0 && (
          <div width={100} height={100} className="client_items-grid">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              width={100} height={100} className="client-slider py-8"
            >
              {client_items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div width={100} height={100} className="client_items-item flex flex-col items-center justify-center p-4 h-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    {item.image && (
                      <div width={100} height={100} className="relative w-full h-full">
                        <SafeImage
                          src={item.image.url}
                          alt={item.image.alt || item.title || "Client Logo"}
                          width={100} height={100} className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    {/* Description and title are usually hidden or tooltip in logo sliders, 
                        but legacy php has them. We include them if relevant, or just rely on image.
                        Legacy PHP structure has them.
                    */}
                    {(item.title || item.description) && (
                      <div width={100} height={100} className="hidden">
                        {item.title} {item.description}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}
