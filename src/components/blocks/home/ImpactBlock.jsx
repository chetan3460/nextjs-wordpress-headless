export default function ImpactBlock() {
  return (
    <>
      <section
        className="our-impact-section bg-background-7 pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-50 xl:pb-44"
        aria-labelledby="impact-heading"
      >
        <div className="main-container">
          <div className="space-y-10 md:space-y-12 lg:space-y-20">
            {/*  content   */}
            <div className="text-center">
              <h2
                data-opai-split-text
                className="font-sora lg:text-sora-heading-2 md:text-sora-heading-3 text-sora-heading-4 font-normal max-md:leading-[110%]"
              >
                <span className="text-background-13/90 font-normal">
                  Our Impact
                </span>
                <span className="text-background-13/50"> in numbers </span>
              </h2>
            </div>

            {/*  cards   */}
            <div
              className="grid grid-cols-12 items-center justify-center gap-x-8 gap-y-8 lg:gap-x-2 xl:gap-x-8"
              aria-label="Impact statistics cards"
            >
              {/*  card one   */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div
                  data-opai-animate
                  data-delay="0.2"
                  className="border-stroke-3/18 relative h-[420px] max-w-[409px] basis-[409px] rounded-lg border bg-white px-10.5 pt-[27px] pb-10.5 max-md:mx-auto lg:px-5 xl:px-10.5"
                  aria-label="Successful projects statistics"
                >
                  {/*  image group   */}
                  <div className="relative h-[294px] w-full max-w-[324px]">
                    {/*  overlay   */}
                    <div
                      className="pointer-events-none absolute inset-0 z-20 h-[294px] max-w-[409px] bg-gradient-to-b from-transparent from-[10.09%] to-[#FFF] to-[90.05%] select-none md:to-[80.05%]"
                    ></div>
                    <figure
                      className="our-impact-image border-stroke-1/11 absolute top-[130px] right-[34px] h-[143px] w-[188px] rotate-12 overflow-hidden rounded-[2px] border"
                    >
                      <img
                        src="images/opai-img-99.png"
                        alt="Project showcase img 3 - demonstrating successful project outcomes"
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    </figure>

                    <figure
                      className="our-impact-image border-stroke-1/11 absolute top-[19px] right-[36px] h-[138px] w-[188px] -rotate-12 overflow-hidden rounded-[2px] border"
                    >
                      <img
                        src="images/opai-img-97.png"
                        alt="Project showcase img 1 - demonstrating successful project outcomes"
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    </figure>

                    <figure
                      className="our-impact-image border-stroke-1/11 absolute top-[77px] left-[19px] h-[154px] w-[188px] -rotate-8 overflow-hidden rounded-[2px] border"
                    >
                      <img
                        src="images/opai-img-98.png"
                        alt="Project showcase img 2 - demonstrating successful project outcomes"
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    </figure>
                  </div>

                  {/*  text content   */}
                  <div
                    className="absolute bottom-10.5 left-1/2 z-30 -translate-x-1/2 space-y-[30.5px] text-center"
                  >
                    <span className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-opai-purple shrink-0"
                        width="35"
                        height="42"
                        viewBox="0 0 35 42"
                        fill="none"
                      >
                        <path
                          d="M10.832 26.875H23.832"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.832 20.375H23.832"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.8324 4.125H31.957C32.388 4.125 32.8013 4.29621 33.1061 4.60095C33.4108 4.9057 33.582 5.31902 33.582 5.75V39.875C33.582 40.306 33.4108 40.7193 33.1061 41.024C32.8013 41.3288 32.388 41.5 31.957 41.5H2.70703C2.27605 41.5 1.86273 41.3288 1.55798 41.024C1.25324 40.7193 1.08203 40.306 1.08203 39.875V5.75C1.08203 5.31902 1.25324 4.9057 1.55798 4.60095C1.86273 4.29621 2.27605 4.125 2.70703 4.125H10.8316"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.20703 10.625V9C9.20703 6.84512 10.0631 4.77849 11.5868 3.25476C13.1105 1.73102 15.1771 0.875 17.332 0.875C19.4869 0.875 21.5535 1.73102 23.0773 3.25476C24.601 4.77849 25.457 6.84512 25.457 9V10.625H9.20703Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="text-center">
                      <h3
                        className="font-sora text-sora-heading-3 flex items-center justify-center font-normal text-black"
                        aria-label="500 plus successful projects"
                      >
                        <span
                          data-counter
                          data-number="500"
                          data-speed="2000"
                          data-interval="200"
                          data-rooms="3"
                          data-height-space="1.7"
                          >500</span
                        >+
                      </h3>
                      <p
                        className="font-inter-tight text-tagline-2 text-background-13/50 font-normal"
                      >
                        Successful projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*  card two   */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div
                  data-opai-animate
                  data-delay="0.3"
                  className="border-stroke-3/18 relative h-[420px] w-full max-w-[409px] overflow-hidden rounded-lg border bg-white px-10.5 pt-[57px] pb-10.5 max-md:mx-auto"
                  aria-label="Client satisfaction statistics"
                >
                  {/*  images   */}
                  <div
                    className="relative md:-left-1 lg:-left-5 xl:left-4"
                    aria-label="Client testimonials and reviews"
                  >
                    {/*  review 01  */}
                    <div
                      className="our-impact-review-card border-stroke-1/11 bg-background-6 absolute top-[35px] flex h-[200px] w-[188px] -rotate-9 flex-col items-center justify-between rounded-sm border p-4"
                      aria-label="Client testimonial from Akiko Tanaka"
                    >
                      <div
                        className="flex flex-col items-center justify-center gap-y-4"
                      >
                        {/*  star   */}
                        <span
                          className="flex items-center justify-center gap-x-1"
                          aria-label="Rating stars"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>
                        </span>

                        <blockquote
                          className="font-inter-tight max-w-[156px] text-center text-[8px] leading-[150%] font-normal text-white/60"
                          cite="Akiko Tanaka, Chief Strategy Officer, Marketing Agency"
                        >
                          "We tried other solutions, but nothing came close to
                          the precision and intelligence that NexSas brings."
                        </blockquote>
                      </div>

                      {/*  user info   */}
                      <div
                        className="flex flex-col items-center justify-center gap-y-2"
                      >
                        <figure className="size-6 overflow-hidden rounded-full">
                          <img
                            src="images/opai-avatar-img-13.png"
                            alt="Akiko Tanaka, Chief Strategy Officer profile img"
                            className="size-full object-cover"
                            loading="lazy"
                          />
                        </figure>

                        <div className="text-center">
                          <h3
                            className="font-inter-tight text-tagline-4 font-normal text-white"
                          >
                            Akiko Tanaka
                          </h3>
                          <p
                            className="font-inter-tight text-[10px] leading-[150%] font-normal text-white/60"
                          >
                            Chief Strategy Officer, Marketing Agency
                          </p>
                        </div>
                      </div>
                    </div>

                    {/*  review 02  */}
                    <div
                      className="our-impact-review-card border-stroke-1/11 bg-background-6 absolute top-[26px] left-[38px] flex h-[200px] w-[188px] flex-col items-center justify-between rounded-sm border p-4"
                      aria-label="Client testimonial from Akiko Tanaka"
                    >
                      <div
                        className="flex flex-col items-center justify-center gap-y-4"
                      >
                        {/*  star   */}
                        <span
                          className="flex items-center justify-center gap-x-1"
                          aria-label="Rating stars"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>
                        </span>

                        <blockquote
                          className="font-inter-tight max-w-[156px] text-center text-[8px] leading-[150%] font-normal text-white/60"
                          cite="Akiko Tanaka, Chief Strategy Officer, Marketing Agency"
                        >
                          "We tried other solutions, but nothing came close to
                          the precision and intelligence that NexSas brings."
                        </blockquote>
                      </div>

                      {/*  user info   */}
                      <div
                        className="flex flex-col items-center justify-center gap-y-2"
                      >
                        <figure className="size-6 overflow-hidden rounded-full">
                          <img
                            src="images/opai-avatar-img-13.png"
                            alt="Akiko Tanaka, Chief Strategy Officer profile img"
                            className="size-full object-cover"
                            loading="lazy"
                          />
                        </figure>

                        <div className="text-center">
                          <h3
                            className="font-inter-tight text-tagline-4 font-normal text-white"
                          >
                            Akiko Tanaka
                          </h3>
                          <p
                            className="font-inter-tight text-[10px] leading-[150%] font-normal text-white/60"
                          >
                            Chief Strategy Officer, Marketing Agency
                          </p>
                        </div>
                      </div>
                    </div>

                    {/*  review 03  */}
                    <div
                      className="our-impact-review-card border-stroke-1/11 bg-background-6 absolute top-[21px] left-[96px] flex h-[200px] w-[188px] rotate-15 flex-col items-center justify-between rounded-sm border p-4"
                      aria-label="Client testimonial from Akiko Tanaka"
                    >
                      <div
                        className="flex flex-col items-center justify-center gap-y-4"
                      >
                        {/*  star   */}
                        <span
                          className="flex items-center justify-center gap-x-1"
                          aria-label="Rating stars"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-opai-yellow size-2.5"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                            />
                          </svg>
                        </span>

                        <blockquote
                          className="font-inter-tight max-w-[156px] text-center text-[8px] leading-[150%] font-normal text-white/60"
                          cite="Akiko Tanaka, Chief Strategy Officer, Marketing Agency"
                        >
                          "We tried other solutions, but nothing came close to
                          the precision and intelligence that NexSas brings."
                        </blockquote>
                      </div>

                      {/*  user info   */}
                      <div
                        className="flex flex-col items-center justify-center gap-y-2"
                      >
                        <figure className="size-6 overflow-hidden rounded-full">
                          <img
                            src="images/opai-avatar-img-13.png"
                            alt="Akiko Tanaka, Chief Strategy Officer profile"
                            className="size-full object-cover"
                            loading="lazy"
                          />
                        </figure>

                        <div className="text-center">
                          <h3
                            className="font-inter-tight text-tagline-4 font-normal text-white"
                          >
                            Akiko Tanaka
                          </h3>
                          <p
                            className="font-inter-tight text-[10px] leading-[150%] font-normal text-white/60"
                          >
                            Chief Strategy Officer, Marketing Agency
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute bottom-0 left-0 z-20 h-[324px] w-full bg-gradient-to-b from-transparent from-[10.09%] to-[#FFF] to-[60.6%] select-none"
                    aria-hidden="true"
                  ></div>
                  {/*  text content   */}
                  <div
                    className="absolute bottom-10.5 left-1/2 z-30 -translate-x-1/2"
                  >
                    <div
                      className="flex flex-col items-center justify-center gap-y-6"
                    >
                      {/*  star   */}
                      <span
                        className="flex items-center justify-center gap-x-1"
                        aria-label="Rating stars"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-opai-purple size-4 size-2.5"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-opai-purple size-4 size-2.5"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-opai-purple size-4 size-2.5"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-opai-purple size-4 size-2.5"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-opai-purple size-4 size-2.5"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z"
                          />
                        </svg>
                      </span>

                      <div className="text-center">
                        <h3
                          className="font-sora text-sora-heading-3 flex items-center justify-center font-normal text-black"
                          aria-label="99 percent client satisfaction"
                        >
                          <span
                            data-counter
                            data-number="99"
                            data-speed="2000"
                            data-interval="200"
                            data-rooms="2"
                            data-height-space="1.9"
                            >99</span
                          >%
                        </h3>
                        <p
                          className="font-inter-tight text-tagline-2 text-background-13/50 font-normal"
                        >
                          Client satisfaction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  card three   */}
              <div
                className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-auto"
              >
                <div
                  data-opai-animate
                  data-delay="0.4"
                  className="border-stroke-3/18 relative h-[420px] w-full max-w-[409px] rounded-lg border bg-white p-4 max-md:mx-auto min-[1050px]:!p-4.5 min-[1100px]:!p-5 min-[1200px]:!p-10.5 sm:p-10.5 md:p-4 lg:p-2"
                  aria-label="Process workflow visualization"
                >
                  {/*  overlay   */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 z-20 h-[334px] w-full bg-gradient-to-b from-transparent from-[10.09%] to-[#FFF] to-[99.05%] select-none"
                  ></div>

                  {/*  svg pills   */}
                  <div
                    className="features-integration-pill relative top-[62px] mx-auto h-21 w-full max-w-[324px]"
                    data-dot-color="black"
                  >
                    {/*  LEFT pill  */}
                    <div className="absolute top-1/2 left-0 h-7 -translate-y-1/2">
                      <div
                        className="border-stroke-1/11 bg-background-5 flex items-center justify-center gap-x-1 rounded-full border px-[14px] py-[5px]"
                      >
                        <span className="bg-opai-blue h-2 w-2 rounded-full"></span>
                        <span
                          className="text-tagline-4 font-inter-tight font-normal text-white/50"
                          >Sync</span
                        >
                      </div>
                    </div>

                    {/*  CENTER TOP pill  */}
                    <div className="absolute left-1/2 h-7 -translate-x-1/2">
                      <div
                        className="border-stroke-1/11 bg-background-5 flex w-24 items-center justify-start gap-x-1 rounded-full border px-[14px] py-[5px]"
                      >
                        <span
                          className="bg-opai-purple h-2 w-2 rounded-full"
                        ></span>
                        <span
                          className="text-tagline-4 font-inter-tight font-normal text-white/50"
                          >Process</span
                        >
                      </div>
                    </div>

                    {/*  CENTER BOTTOM pill  */}
                    <div
                      className="absolute bottom-0 left-1/2 h-7 -translate-x-1/2"
                    >
                      <div
                        className="border-stroke-1/11 bg-background-5 flex w-24 items-center justify-start gap-x-1 rounded-full border px-[14px] py-1.5"
                      >
                        <span
                          className="bg-opai-purple h-2 w-2 rounded-full"
                        ></span>
                        <span
                          className="text-tagline-4 font-inter-tight font-normal text-white/50"
                          >Flow</span
                        >
                      </div>
                    </div>

                    {/*  RIGHT pill  */}
                    <div className="absolute top-1/2 right-0 h-7 -translate-y-1/2">
                      <div
                        className="border-stroke-1/11 bg-background-5 flex items-center justify-center gap-x-1 rounded-full border px-[14px] py-[5px]"
                      >
                        <span
                          className="bg-opai-purple h-2 w-2 rounded-full"
                        ></span>
                        <span
                          className="text-tagline-4 font-inter-tight font-normal text-white/50"
                          >Grow</span
                        >
                      </div>
                    </div>

                    {/*  svg lines connector  */}
                    {/*  Left → Process  */}
                    <svg
                      className="absolute top-[20px] left-[65px] h-6 w-[52px] lg:left-12 xl:left-[65px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="59"
                      height="25"
                      viewBox="0 0 59 25"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        className="connector"
                        d="M0.832031 24.5H26.9087C34.1358 24.5 40.9781 21.2433 45.5355 15.6342L57.832 0.5"
                        stroke="#7C8EA5"
                        stroke-opacity="0.18"
                      />
                    </svg>

                    {/*  Left → Flow  */}
                    <svg
                      className="absolute top-[43px] left-[65px] h-6 w-[57px] lg:left-12 xl:left-[65px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="59"
                      height="32"
                      viewBox="0 0 59 32"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        className="connector"
                        d="M0.332031 0.5H24.87C32.9592 0.5 40.5041 4.57491 44.9399 11.3394L57.832 31"
                        stroke="#7C8EA5"
                        stroke-opacity="0.18"
                      />
                    </svg>

                    {/*  Process → Right  */}
                    <svg
                      className="absolute top-[19px] right-[69px] h-[55px] w-12 lg:right-[52px] xl:right-[69px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="59"
                      height="56"
                      viewBox="0 0 59 56"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        className="connector"
                        d="M58.332 24.5H32.2553C25.0282 24.5 18.1859 21.2433 13.6286 15.6342L1.33203 0.5"
                        stroke="#7C8EA5"
                        stroke-opacity="0.18"
                      />
                      <path
                        className="connector"
                        d="M58.832 24.5H34.2941C26.2049 24.5 18.66 28.5749 14.2242 35.3394L1.33203 55"
                        stroke="#7C8EA5"
                        stroke-opacity="0.18"
                      />
                    </svg>
                  </div>

                  {/*  text content   */}

                  <div
                    className="absolute bottom-10.5 left-1/2 z-30 -translate-x-1/2"
                  >
                    <div
                      className="flex flex-col items-center justify-center gap-y-6"
                    >
                      <span
                        className="flex size-[52px] items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="44"
                          viewBox="0 0 38 44"
                          fill="none"
                          className="stroke-opai-purple"
                        >
                          <path
                            d="M18.6641 42.875C28.5362 42.875 36.5391 34.8721 36.5391 25C36.5391 15.1279 28.5362 7.125 18.6641 7.125C8.79197 7.125 0.789062 15.1279 0.789062 25C0.789062 34.8721 8.79197 42.875 18.6641 42.875Z"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M18.6641 24.9965L26.7074 16.9531"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.7891 0.625H23.5391"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <div className="text-center">
                        <h3
                          className="font-sora text-sora-heading-3 flex items-center justify-center font-normal text-black"
                          aria-label="3 million plus hours saved"
                        >
                          <span
                            data-counter
                            data-number="3"
                            data-speed="2000"
                            data-interval="200"
                            data-rooms="1"
                            data-height-space="1.9"
                            >3</span
                          >M+
                        </h3>
                        <p
                          className="font-inter-tight text-tagline-2 text-background-13/50 font-normal"
                        >
                          Hours saved
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
