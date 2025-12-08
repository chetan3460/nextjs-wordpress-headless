"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ClientBlock({ data }) {
  const {
    title = "Trusted by Industry Leaders",
    description = "<p>Partnerships built on reliability and innovation.</p>",
    client_items = [
      {
        image: { url: "https://placehold.co/200x80/ffffff/000000?text=LOGO" },
        title: "Global Tech Inc.",
        description:
          "<p>Resplast delivered exceptional quality components for our new product line, meeting our tight deadlines.</p>",
      },
      {
        image: { url: "https://placehold.co/200x80/ffffff/000000?text=LOGO" },
        title: "AutoParts Co.",
        description:
          "<p>Their engineering team helped us optimize our designs for better manufacturability and cost savings.</p>",
      },
      {
        image: { url: "https://placehold.co/200x80/ffffff/000000?text=LOGO" },
        title: "MedSafe Solutions",
        description:
          "<p>Strict adherence to medical-grade standards confirms Resplast as our preferred supplier for critical parts.</p>",
      },
      {
        image: { url: "https://placehold.co/200x80/ffffff/000000?text=LOGO" },
        title: "BuildWell Corp",
        description:
          "<p>Consistent quality and durable materials that stand the test of time in our construction projects.</p>",
      },
    ],
  } = data || {};

  if (!client_items || client_items.length === 0) return null;

  return (
    <section
      className="home-client-block py-16 md:py-24 relative overflow-hidden"
      data-component="ClientSlider"
    >
      <div className="container-fluid relative px-5 xl:px-24">
        {/* Header Section */}
        {(title || description) && (
          <div className="section-heading text-center mb-8 md:mb-12">
            {title && (
              <h2 className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">
                {title}
              </h2>
            )}
            {description && (
              <div
                className="text-base leading-[21px] font-normal md:text-[18px] md:leading-[25px] text-gray-600 max-w-2xl mx-auto"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        )}

        {/* Client Slider */}
        <div className="client-slider-container relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: ".swiper-btn-prev",
              nextEl: ".swiper-btn-next",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
              type: "fraction",
            }}
            className="client-slider !pb-12"
          >
            {client_items.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="client-item bg-[#dff2fd] px-5 sm:px-6 pt-6 pb-8 sm:pb-12 rounded-[20px] md:rounded-[40px] relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                  {/* Client Image */}
                  {item.image && item.image.url && (
                    <div className="client-image text-center mb-6 h-[60px] flex items-center justify-center">
                      <Image
                        src={item.image.url}
                        alt={item.title || "Client Logo"}
                        width={120}
                        height={60}
                        className="max-h-full w-auto object-contain mix-blend-multiply"
                      />
                    </div>
                  )}

                  {/* Client Content */}
                  <div className="client-content flex flex-col grow">
                    {item.description && (
                      <div className="flex items-start gap-4 md:gap-6 grow">
                        {/* Quote Icon */}
                        <div className="shrink-0 mt-1 w-6 h-6 sm:w-8 sm:h-8 text-red-600 opacity-20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-full h-full"
                          >
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z"></path>
                          </svg>
                        </div>

                        <div className="testimonial-content flex flex-col gap-4 grow">
                          <div
                            className="prose prose-p:text-[#111111] text-base leading-[22px]"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                          {item.title && (
                            <div className="font-semibold mt-auto text-gray-900">
                              {item.title}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Decorative Shape (Bottom Right) */}
                  <div className="absolute right-[-1px] bottom-0 w-[40px] h-[40px] bg-white rounded-tl-[20px] z-10"></div>
                  <div className="absolute right-[-1px] bottom-0 w-[40px] h-[40px] bg-[#dff2fd] rounded-br-[20px]"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation & Pagination */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <button className="swiper-btn-prev w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer text-gray-400">
              ←
            </button>

            <div className="swiper-pagination-custom text-red-600 font-medium text-sm w-auto"></div>

            <button className="swiper-btn-next w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer text-gray-400">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
