"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import SafeHTML from "@/components/common/SafeHTML";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CertificateBlock({ data }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCertificate) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Lock scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // Restore scroll
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedCertificate]);

  if (!data) return null;

  const { title, description, certificate_items, hide_block } = data;

  if (hide_block || !certificate_items || certificate_items.length === 0) {
    return null;
  }

  const certificateCount = certificate_items.length;
  const useSlider = certificateCount >= 1;

  const handleViewCertificate = (image, alt) => {
    setSelectedCertificate({ image, alt });
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <section className="certificate_block  relative">
        <div className="container-fluid">
          {/* Section Heading */}
          <div className="section-heading text-center">
            {title && <h2 className="fade-text">{title}</h2>}
            {description && (
              <div className="description-content prose max-w-none anim-uni-in-up">
                <SafeHTML html={description} />
              </div>
            )}
          </div>

          {/* Certificate Slider */}
          {useSlider && (
            <div className="certificate-slider-container">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: ".swiper-btn-prev-pagination",
                  nextEl: ".swiper-btn-next-pagination",
                }}
                pagination={{
                  el: ".swiper-pagination-custom",
                  clickable: true,
                  type: "custom",
                  renderCustom: (swiper, current, total) => {
                    return `${current}/${total}`;
                  },
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="certificate-slider"
              >
                {certificate_items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="certificate_items-item bottom-right"
                      data-delay={(index * 0.2).toFixed(1)}
                    >
                      {/* Certificate Display Image */}
                      {item.certificate_image?.url && (
                        <div className="certificate-image-container bg-[#EFF9FE] flex items-center justify-center p-4 rounded-t-2xl ">
                          <Image
                            src={item.certificate_image.url}
                            alt={item.certificate_image.alt || "Certificate"}
                            width={item.certificate_image.width || 400}
                            height={item.certificate_image.height || 300}
                            className="certificate-display-image !w-auto !h-auto mx-auto"
                          />
                        </div>
                      )}

                      {/* Certificate Information */}
                      <div className="certificate-info bg-sky-50 p-4 pb-6">
                        {item.certificate_no && (
                          <div className="certificate_no h3 text-grey-1 tracking-[-0.48px] font-semibold">
                            {item.certificate_no}
                          </div>
                        )}

                        {item.certificate_date && (
                          <div className="certificate_date body-1 text-grey-3 mb-5 font-normal">
                            {item.certificate_date}
                          </div>
                        )}

                        {/* View Certificate Button */}
                        {item.certificate_popup_image?.url && (
                          <div className="certificate_link">
                            <div
                              className="view-certificate-btn flex items-center gap-2 text-primary text-base font-semibold tracking-[0.16px] cursor-pointer hover:opacity-80 transition-opacity"
                              onClick={() =>
                                handleViewCertificate(
                                  item.certificate_popup_image.url,
                                  item.certificate_popup_image.alt ||
                                    item.certificate_no
                                )
                              }
                              role="button"
                              tabIndex={0}
                              onKeyPress={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  handleViewCertificate(
                                    item.certificate_popup_image.url,
                                    item.certificate_popup_image.alt ||
                                      item.certificate_no
                                  );
                                }
                              }}
                              aria-label={`View ${
                                item.certificate_no || "certificate"
                              }`}
                            >
                              <span className="icon">
                                <Image
                                  src="/images/about/Eye.svg"
                                  alt=""
                                  width={20}
                                  height={20}
                                />
                              </span>
                              View Certificate
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Slider Navigation & Pagination */}
              <div className="mt-3 lg:hidden flex justify-center items-center gap-4 mb-6">
                <div className="swiper-btn-prev-pagination swiper-btn-prev cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                  >
                    <path
                      d="M7.92 3.18c.24 0 .44.2.44.45s-.2.44-.44.44H1.67l2.13 2.13a.44.44 0 01-.63.63L.59 4.26a.9.9 0 010-1.26l2.58-2.57a.44.44 0 01.63.63L1.67 3.18h6.25z"
                      fill="#DA000E"
                    />
                  </svg>
                </div>

                <div className="swiper-pagination-custom text-primary text-xs font-medium !w-auto"></div>

                <div className="swiper-btn-next-pagination swiper-btn-next cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                  >
                    <path
                      d="M1.16 3.18a.44.44 0 000 .89h6.25L5.29 6.2a.44.44 0 10.63.63l2.58-2.58a.9.9 0 000-1.26L5.92.43a.44.44 0 10-.63.63l2.13 2.13H1.16z"
                      fill="#DA000E"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 bg-opacity-75 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
        >
          <div
            className=" max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
              onClick={closeModal}
              aria-label="Close certificate viewer"
            >
              ✕
            </button>
            <Image
              src={selectedCertificate.image}
              alt={selectedCertificate.alt}
              width={1200}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}
