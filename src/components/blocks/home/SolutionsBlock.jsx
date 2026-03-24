export default function SolutionsBlock() {
  return (
    <>
      <section
        className="bg-background-7 py-10 pb-20 sm:py-20 md:py-28 lg:py-30 xl:py-40 2xl:py-44"
        aria-labelledby="innovative-solutions-heading"
      >
        <div className="main-container">
          <div className="mb-10 space-y-12 lg:space-y-19">
            <div className="space-y-2 text-center md:space-y-3">
              <h2
                data-opai-split-text
                className="font-sora md:text-sora-heading-3 text-sora-heading-4 lg:text-sora-heading-2 text-background-13/90 font-normal max-md:leading-[110%] lg:mx-auto lg:max-w-[700px]"
                itemProp="name"
              >
                Scalable Headless

                <span className="text-background-13/50">
                  solutions for <br className="hidden md:block" />
                  modern businesses
                </span>
              </h2>
              <p
                data-opai-split-text
                data-delay="0.3"
                data-line-delay="0.1"
                className="font-inter-tight text-tagline-2 text-background-13/60 font-normal lg:mx-auto lg:max-w-[450px]"
              >
                We deliver high-performance WordPress architectures for every digital need.
              </p>
            </div>

            {/*  Industries Grid  */}
            <div className="grid grid-cols-12 gap-y-8 md:gap-8">
              {/*  E-commerce Card  */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div
                  data-opai-animate
                  data-delay="0.2"
                  className="border-stroke-3/18 flex flex-col items-center gap-8 rounded-lg border bg-white px-10.5 py-10.5 text-center"
                >
                  {/*  Icon  */}
                  <div className="size-13" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                    >
                      <path
                        d="M35.125 33.5H11.9318L6.26533 2.33431C6.19725 1.95989 5.99993 1.62124 5.70775 1.3774C5.41558 1.13356 5.0471 1 4.66654 1H1"
                        stroke="#11141D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 41.625C16.2437 41.625 18.0625 39.8062 18.0625 37.5625C18.0625 35.3188 16.2437 33.5 14 33.5C11.7563 33.5 9.9375 35.3188 9.9375 37.5625C9.9375 39.8062 11.7563 41.625 14 41.625Z"
                        stroke="#11141D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.125 41.625C37.3687 41.625 39.1875 39.8062 39.1875 37.5625C39.1875 35.3188 37.3687 33.5 35.125 33.5C32.8813 33.5 31.0625 35.3188 31.0625 37.5625C31.0625 39.8062 32.8813 41.625 35.125 41.625Z"
                        stroke="#11141D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.4545 25.375H35.9581C36.7192 25.375 37.4562 25.1079 38.0405 24.6202C38.6249 24.1325 39.0195 23.4552 39.1557 22.7064L41.625 9.125H7.5"
                        stroke="#11141D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/*  Text Content  */}
                  <div className="space-y-0">
                    <h3
                      className="font-sora text-sora-heading-5 text-background-6/80 font-normal tracking-[-0.72px]"
                    >
                      Enterprise E-commerce
                    </h3>
                    <p
                      className="font-inter-tight text-tagline-3 text-background-6/50 font-normal"
                    >
                      Scalable stores with lightning-fast checkout.
                    </p>
                  </div>
                </div>
              </div>

              {/*  SaaS Marketing Card  */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div
                  data-opai-animate
                  data-delay="0.3"
                  className="border-stroke-3/18 flex flex-col items-center gap-8 rounded-lg border bg-white px-10.5 py-10.5 text-center"
                >
                  {/*  Icon  */}
                  <div className="size-13" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M6.5 8.125L6.5 32.5L6.5 43.875"
                        stroke="#11141D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.5 24.375L12.1875 14.625L17.875 32.5L23.5625 19.5L29.25 32.5L34.9375 22.75L40.625 32.5L45.5 24.375"
                        stroke="#11141D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/*  Text Content  */}
                  <div className="space-y-0">
                    <h3
                      className="font-sora text-sora-heading-5 text-background-6/80 font-normal tracking-[-0.72px]"
                    >
                      SaaS Marketing
                    </h3>
                    <p
                      className="font-inter-tight text-tagline-3 text-background-6/50 font-normal"
                    >
                      High-converting landing pages for growth teams.
                    </p>
                  </div>
                </div>
              </div>

              {/*  Enterprise Blogs Card  */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div
                  data-opai-animate
                  data-delay="0.4"
                  className="border-stroke-3/18 flex flex-col items-center gap-8 rounded-lg border bg-white px-10.5 py-10.5 text-center"
                >
                  {/*  Icon  */}
                  <div className="size-13" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M45.5 26C45.5 36.7696 36.7696 45.5 26 45.5C15.2304 45.5 6.5 36.7696 6.5 26C6.5 15.2304 15.2304 6.5 26 6.5C36.7696 6.5 45.5 15.2304 45.5 26Z"
                        stroke="#11141D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.5 8.125L19.5 11.375M19.5 27.625L19.5 30.875"
                        stroke="#11141D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/*  Text Content  */}
                  <div className="space-y-0">
                    <h3
                      className="font-sora text-sora-heading-5 text-background-6/80 font-normal tracking-[-0.72px]"
                    >
                      Enterprise Publishers
                    </h3>
                    <p
                      className="font-inter-tight text-tagline-3 text-background-6/50 font-normal"
                    >
                      Unmatched performance for global news sites.
                    </p>
                  </div>
                </div>
              </div>

              {/*  Creative Portfolios Card  */}
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-5"
              >
                <div
                  data-opai-animate
                  data-delay="0.1"
                  className="border-stroke-3/18 flex flex-col items-center gap-8 rounded-lg border bg-white px-10.5 py-10.5 text-center"
                >
                  {/*  Icon  */}
                  <div className="size-13" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M3.25 43.875L48.75 43.875"
                        stroke="#11141D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.5 43.875L6.5 6.5L25.5 6.5L25.5 43.875"
                        stroke="#11141D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/*  Text Content  */}
                  <div className="space-y-0">
                    <h3
                      className="font-sora text-sora-heading-5 text-background-6/80 font-normal tracking-[-0.72px]"
                    >
                      Creative Agencies
                    </h3>
                    <p
                      className="font-inter-tight text-tagline-3 text-background-6/50 font-normal"
                    >
                      Immersive, designer-led experiences that win.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="inline-flex w-full justify-center md:flex"
            data-opai-animate
            data-delay="0.2"
          >
            <div
              className="max-md:w-[85%] max-md:mx-auto button-split-text-wrapper inline-block"
            >
              <a
                href="about.html"
                className="group bg-background-6 hover:bg-background-4 border-stroke-3/18 {=$class} relative flex max-h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border px-6 py-[13px] transition-all duration-300 ease-in-out"
              >
                <div className="relative overflow-hidden">
                  <div className="h-5.5">
                    <div
                      className="font-ibm-plex-mono text-tagline-2 button-split-upper-text block cursor-pointer leading-[1.4] font-medium text-nowrap text-white/90"
                    >
                      Learn more about industries
                    </div>
                  </div>
                  <div className="absolute h-5.5">
                    <div
                      className="font-ibm-plex-mono text-tagline-2 button-split-lower-text block cursor-pointer leading-[1.4] font-medium text-nowrap text-white/90"
                    >
                      Learn more about industries
                    </div>
                  </div>
                </div>

                <div
                  className="relative mt-[2px] flex size-6 items-center justify-center overflow-hidden"
                >
                  {/*  arrow   */}
                  <span
                    className="ease-custom-ease-1 absolute size-[18px] translate-x-0 stroke-white/90 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M6.75 13.5L11.25 9L6.75 4.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  {/*  arrow    */}
                  <span
                    className="ease-custom-ease-1 absolute size-[18px] -translate-x-6 stroke-white/90 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M6.75 13.5L11.25 9L6.75 4.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
