'use client';

import SafeHTML from '../../common/SafeHTML';
import Link from 'next/link';
import Image from 'next/image';
import { convertToNextPath } from '../../../lib/utils/urls';

export default function HeroBlock({ data }) {
  const banner_slider = data?.banner_slider || [];
  const cta = data?.cta || null;
  const hide_block = data?.hide_block || false;

  if (hide_block) {
    return null;
  }

  // Fallback to data if available, otherwise use static text
  const slide = banner_slider[0] || {};
  const image = slide.banner_images;
  const imageUrl = image
    ? typeof image === 'string'
      ? image
      : image?.url
    : '/images/opai-img-95.png';
  const imageAlt =
    image && typeof image === 'object'
      ? image?.alt
      : 'AI-powered business solutions dashboard showing analytics and automation tools';

  const slide_description =
    slide.banner_description ||
    'Streamline operations, elevate decision-making, and fuel growth with practical, results-driven AI.';

  return (
    <section
      className="relative overflow-hidden pt-34 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-50"
      aria-labelledby="hero-heading"
    >
      <div className="main-container relative z-4">
        <div className="space-y-[55px]">
          <div className="space-y-10 md:space-y-14">
            {/* content  */}
            <div className="spcae-y-3 text-center">
              <h1
                className="font-sora text-sora-heading-3 md:text-sora-heading-2 lg:text-sora-heading-1 mx-auto w-full max-w-[1136px] max-md:leading-[110%]"
                data-opai-split-text
              >
                <span className="inline-flex items-center justify-center gap-x-2 font-normal text-white/90">
                  AI solutions
                  <button
                    className="bg-red/10 modal-action group relative my-auto inline-block h-14 w-[102px] cursor-pointer overflow-hidden rounded-full border-5 border-white/3 md:h-[66px]"
                    aria-label="Play video about AI solutions"
                    type="button"
                    data-video-url="https://www.youtube.com/embed/LuKAeNC8e3c?si=dNprxE8hkadUeDvf"
                  >
                    <img
                      src="/images/opai-img-96.png"
                      alt="Video thumbnail showing AI solutions in action"
                      className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-140 group-hover:rotate-10"
                    />
                    <span
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="none"
                        className="fill-white"
                      >
                        <path d="M0 2.00317C0 0.420843 1.75049 -0.53484 3.08152 0.320818L11.383 5.65749C12.6076 6.44476 12.6076 8.23493 11.383 9.0222L3.08152 14.3589C1.75049 15.2145 0 14.2588 0 12.6765V2.00317Z" />
                      </svg>
                    </span>
                  </button>
                </span>
                <span className="text-white/30">
                  {' built for real '}
                  <br className="hidden md:block" />
                  business impact
                </span>
              </h1>
              <p
                className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[450px] font-normal text-white/50"
                aria-describedby="hero-heading"
                data-opai-split-text
                data-delay="0.3"
                data-line-delay="0.1"
              >
                {slide_description}
              </p>
            </div>

            {/* buttons */}
            <div
              className="flex items-center justify-center gap-x-6.5 lg:gap-x-15"
              aria-label="Action buttons"
            >
              <div data-opai-animate data-delay="0.9" data-duration="0.7">
                <Link
                  href={cta?.url ? convertToNextPath(cta.url) : '#'}
                  className="button-split-text-wrapper group inline-block"
                  target={cta?.target || undefined}
                >
                  <div className="relative z-10 h-full max-h-[52px] cursor-pointer">
                    <div className="bg-background-7 flex cursor-pointer items-center justify-center rounded-full py-[5px] pr-1.5 pl-6">
                      <div className="relative overflow-hidden pr-5 transition-all duration-300 ease-in-out">
                        <div className="h-[21px]">
                          <div className="text-background-5 font-ibm-plex-mono button-split-upper-text text-tagline-2 block leading-[1.4] font-medium text-nowrap">
                            {cta?.title || 'Start for free'}
                          </div>
                        </div>
                        <div className="absolute top-0 h-[21px]">
                          <div className="text-background-5 font-ibm-plex-mono button-split-lower-text text-tagline-2 block leading-[1.4] font-medium text-nowrap">
                            {cta?.title || 'Start for free'}
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-[2px] inline-block shrink-0 rounded-full p-2">
                        {/* circle border  */}
                        <div className="bg-background-6 absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[var(--button-shadow)] transition-all duration-300 ease-in-out"></div>
                        <span className="relative z-10 size-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="rotate-45 stroke-white transition-all duration-400 ease-in-out group-hover:rotate-0"
                          >
                            <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* rounded lines with staging animation */}
                    <span className="absolute top-1/2 left-1/2 h-[68px] w-[107%] -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full border border-white/20 opacity-100"></span>
                    <span className="absolute top-1/2 left-1/2 h-[84px] w-[115%] -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full border border-white/10 opacity-100"></span>
                    <span className="absolute top-1/2 left-1/2 h-[100px] w-[123%] -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full border border-white/5 opacity-100"></span>
                  </div>
                </Link>
              </div>

              <button
                data-opai-animate
                data-delay="1"
                data-duration="0.7"
                className="bg-background-7 border-stroke-1/11 group modal-action relative z-20 flex size-[52px] cursor-pointer items-center justify-center rounded-full border"
                aria-label="Play demo video"
                type="button"
                data-video-url="https://www.youtube.com/embed/BTMjD7_evjE?si=HXnYR-0JdkmV_kwM"
              >
                <span
                  className="flex size-6 items-center justify-center gap-x-1 overflow-hidden"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    className="fill-background-6 h-[18px] w-[14px] shrink-0 -translate-x-4 scale-95 transition-all duration-400 ease-out group-hover:translate-x-3 group-hover:scale-100"
                  >
                    <path d="M0 2.00317C0 0.420843 1.75049 -0.53484 3.08152 0.320818L11.383 5.65749C12.6076 6.44476 12.6076 8.23493 11.383 9.0222L3.08152 14.3589C1.75049 15.2145 0 14.2588 0 12.6765V2.00317Z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    className="fill-background-6 h-[18px] w-[14px] shrink-0 -translate-x-[7px] scale-100 transition-all duration-400 ease-out group-hover:translate-x-3 group-hover:scale-75"
                  >
                    <path d="M0 2.00317C0 0.420843 1.75049 -0.53484 3.08152 0.320818L11.383 5.65749C12.6076 6.44476 12.6076 8.23493 11.383 9.0222L3.08152 14.3589C1.75049 15.2145 0 14.2588 0 12.6765V2.00317Z" />
                  </svg>
                </span>
                {/* lines with stagger effect */}
                <span
                  className="absolute top-1/2 left-1/2 z-10 size-17 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-100"
                  aria-hidden="true"
                ></span>
                <span
                  className="absolute top-1/2 left-1/2 z-10 size-21 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-100"
                  aria-hidden="true"
                ></span>
                <span
                  className="absolute top-1/2 left-1/2 z-10 size-25 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-100"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
          {/* img  */}
          <figure
            data-opai-animate
            data-delay="1.1"
            data-duration="0.7"
            data-instant
            className="relative z-10 mx-auto h-[300px] max-w-[1223px]   md:h-[400px] lg:h-[573px]"
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              loading="eager"
              width="1223"
              height="573"
              className="size-full rounded-16 object-cover"
            />
          </figure>
        </div>
      </div>
      {/* hero gradient img  */}
      <video
        data-opai-animate
        data-delay="0.1"
        data-offset="5"
        data-duration="0.7"
        className="absolute bottom-0 left-0 z-2 size-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://ai-solutions-tailwind.vercel.app/video/hero-bg.mp4" type="video/mp4" />
        <track
          src="https://ai-solutions-tailwind.vercel.app/subtitles/hero-bg-en.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        <track
          src="https://ai-solutions-tailwind.vercel.app/descriptions/hero-bg-desc.vtt"
          kind="descriptions"
          srcLang="en"
          label="English Descriptions"
        />
        Your browser does not support the video tag.
      </video>

      {/* overlay-1  */}
      <div className="to-background-7 pointer-events-none absolute -bottom-10 left-0 z-20 h-[184px] w-full bg-linear-to-b from-transparent from-[10.09%] to-[89.05%] select-none"></div>
      {/* overlay-2  */}
      <div className="to-background-7 pointer-events-none absolute -bottom-12 left-0 z-19 h-[104px] w-full bg-linear-to-b from-transparent from-[10.09%] to-[69.05%] select-none"></div>
      {/* overlay-3  */}
      <div className="to-background-7 pointer-events-none absolute -bottom-2 left-0 z-18 h-[40px] w-full bg-linear-to-b from-transparent from-[10.09%] to-[55.05%] select-none"></div>
      {/* bottom blend mode */}
      <div className="absolute left-0 z-20 hidden h-[200px] w-full min-[1920px]:-bottom-5 lg:-bottom-22 lg:block xl:-bottom-17 2xl:-bottom-7">
        <img
          src="/images/blend.png"
          alt="Bottom blend mode"
          className="pointer-events-none absolute bottom-0 left-0 z-20 h-[170px] w-full object-cover mix-blend-screen select-none"
        />
      </div>
    </section>
  );
}
