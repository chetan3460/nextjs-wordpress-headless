'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import SafeHTML from '@/components/common/SafeHTML';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CertificateBlock({ data }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCertificate) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Lock scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        // Restore scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
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
                  prevEl,
                  nextEl,
                }}
                pagination={{
                  el: paginationEl,
                  clickable: true,
                  type: 'custom',
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
                            alt={item.certificate_image.alt || 'Certificate'}
                            width={item.certificate_image.width || 400}
                            height={item.certificate_image.height || 300}
                            className="certificate-display-image w-auto! h-auto! mx-auto"
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
                                  item.certificate_popup_image.alt || item.certificate_no
                                )
                              }
                              role="button"
                              tabIndex={0}
                              onKeyPress={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  handleViewCertificate(
                                    item.certificate_popup_image.url,
                                    item.certificate_popup_image.alt || item.certificate_no
                                  );
                                }
                              }}
                              aria-label={`View ${item.certificate_no || 'certificate'}`}
                            >
                              <span className="icon">
                                <Eye className="w-5 h-5 text-primary" />
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
                <div
                  ref={setPrevEl}
                  className="swiper-btn-prev-pagination swiper-btn-prev cursor-pointer flex items-center justify-center"
                >
                  <ChevronLeft className="w-6 h-6 text-primary" strokeWidth={2.5} />
                </div>

                <div
                  ref={setPaginationEl}
                  className="swiper-pagination-custom text-primary text-xs font-medium w-auto!"
                ></div>

                <div
                  ref={setNextEl}
                  className="swiper-btn-next-pagination swiper-btn-next cursor-pointer flex items-center justify-center"
                >
                  <ChevronRight className="w-6 h-6 text-primary" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 bg-opacity-75 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
        >
          <div className=" max-w-4xl max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
              onClick={closeModal}
              aria-label="Close certificate viewer"
            >
              <X className="w-6 h-6" />
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
