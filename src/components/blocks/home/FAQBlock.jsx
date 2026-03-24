export default function FAQBlock() {
  return (
    <>
      <section
        className="bg-background-6 py-10 md:py-28 lg:py-30 xl:py-40 2xl:py-44"
      >
        <div className="main-container space-y-10 md:space-y-19.5">
          {/*  faq title  */}
          <div className="space-y-1.5 text-center md:space-y-3">
            <h2
              className="font-sora md:text-sora-heading-3 text-sora-heading-4 max-md:-leading-[110%] lg:text-sora-heading-2 mx-auto max-w-[700px] font-normal"
              data-opai-split-text
            >
              <span className="font-normal text-white/90"> Your questions, </span>
              <span className="text-white/30"> answered </span>
            </h2>
            <p
              className="text-tagline-2 font-inter-tight mx-auto max-w-[300px] text-white/60"
              data-opai-split-text
              data-delay="0.3"
              data-line-delay="0.1"
            >
              Explore our most frequently asked questions to get started.
            </p>
          </div>
          <div
            className="flex flex-col items-start justify-between gap-y-10 md:items-center lg:flex-row lg:items-start lg:gap-x-10 xl:gap-x-[100px]"
          >
            {/*  accordion  */}
            <div className="accordion w-full max-w-[595px] space-y-3">
              {/*  item one   */}
              <div
                className="border-stroke-1/10 default-open accordion-item rounded-lg border px-6"
              >
                <h3
                  className="accordion-action relative flex w-full cursor-pointer items-center justify-between pt-6 pb-6 transition-all duration-300 ease-in-out"
                >
                  <button
                    className="font-inter-tight text-tagline-2 cursor-pointer text-left text-white"
                  >
                    What is Headless WordPress?
                  </button>
                  <div className="accordion-plus-icon"></div>
                </h3>
                <div className="accordion-content">
                  <p
                    className="text-tagline-2 font-inter-tight max-w-[531px] cursor-text pb-6 font-extralight text-white/50"
                  >
                    Headless WordPress decouples the backend content management from the frontend presentation. WordPress acts as a powerful API-driven CMS, while Nexsas uses Next.js to deliver a blazing-fast, modern user experience.
                  </p>
                </div>
              </div>

              {/*  item two   */}
              <div
                className="border-stroke-1/10 accordion-item rounded-lg border px-6"
              >
                <h3
                  className="accordion-action relative flex w-full cursor-pointer items-center justify-between pt-6 pb-6 transition-all duration-300 ease-in-out"
                >
                  <button
                    className="font-inter-tight text-tagline-2 cursor-pointer text-left text-white"
                  >
                    Why choose Next.js for your WordPress frontend?
                  </button>
                  <div className="accordion-plus-icon"></div>
                </h3>
                <div className="accordion-content">
                  <p
                    className="text-tagline-2 font-inter-tight max-w-[531px] cursor-text pb-6 font-extralight text-white/50"
                  >
                    Next.js offers superior performance through Static Site Generation (SSG) and Incremental Static Regeneration (ISR), providing near-instant load times and an app-like feel that traditional themes can't match.
                  </p>
                </div>
              </div>

              {/*  item three   */}
              <div
                className="border-stroke-1/10 accordion-item rounded-lg border px-6"
              >
                <h3
                  className="accordion-action relative flex w-full cursor-pointer items-center justify-between pt-6 pb-6 transition-all duration-300 ease-in-out"
                >
                  <button
                    className="font-inter-tight text-tagline-2 cursor-pointer text-left text-white"
                  >
                    How does Nexsas handle SEO?
                  </button>
                  <div className="accordion-plus-icon"></div>
                </h3>
                <div className="accordion-content">
                  <p
                    className="text-tagline-2 font-inter-tight max-w-[531px] cursor-text pb-6 font-extralight text-white/50"
                  >
                    Nexsas comes with built-in SEO optimizations, including server-side rendering for meta tags, automatic sitemap generation, and lightning-fast Core Web Vitals to help you rank higher on Google.
                  </p>
                </div>
              </div>

              {/*  item four   */}
              <div
                className="border-stroke-1/10 accordion-item rounded-lg border px-6"
              >
                <h3
                  className="accordion-action relative flex w-full cursor-pointer items-center justify-between pt-6 pb-6 transition-all duration-300 ease-in-out"
                >
                  <button
                    className="font-inter-tight text-tagline-2 cursor-pointer text-left text-white"
                  >
                    What are the performance benefits?
                  </button>
                  <div className="accordion-plus-icon"></div>
                </h3>
                <div className="accordion-content">
                  <p
                    className="text-tagline-2 font-inter-tight max-w-[531px] cursor-text pb-6 font-extralight text-white/50"
                  >
                    By eliminating the heavy WordPress frontend, we reduce TBT (Total Blocking Time) and FCP (First Contentful Paint). Your site becomes more secure, scalable, and resilient to traffic spikes.
                  </p>
                </div>
              </div>

              {/*  item five   */}
              <div
                className="border-stroke-1/10 accordion-item rounded-lg border px-6"
              >
                <h3
                  className="accordion-action relative flex w-full cursor-pointer items-center justify-between pt-6 pb-6 transition-all duration-300 ease-in-out"
                >
                  <button
                    className="font-inter-tight text-tagline-2 cursor-pointer text-left text-white"
                  >
                    Can I still use WordPress plugins?
                  </button>
                  <div className="accordion-plus-icon"></div>
                </h3>
                <div className="accordion-content">
                  <p
                    className="text-tagline-2 font-inter-tight max-w-[531px] cursor-text pb-6 font-extralight text-white/50"
                  >
                    Yes! You can continue using your favorite backend plugins like Yoast, ACF, and WooCommerce. Nexsas fetches and displays this data seamlessly through WPGraphQL.
                  </p>
                </div>
              </div>

              {/*  item six   */}
              <div
                className="border-stroke-1/10 accordion-item rounded-lg border px-6"
              >
                <h3
                  className="accordion-action relative flex w-full cursor-pointer items-center justify-between pt-6 pb-6 transition-all duration-300 ease-in-out"
                >
                  <button
                    className="font-inter-tight text-tagline-2 cursor-pointer text-left text-white"
                  >
                    How does authentication work?
                  </button>
                  <div className="accordion-plus-icon"></div>
                </h3>
                <div className="accordion-content">
                  <p
                    className="text-tagline-2 font-inter-tight max-w-[531px] cursor-text pb-6 font-extralight text-white/50"
                  >
                    Nexsas supports modern authentication flows using JWT (JSON Web Tokens) or NextAuth.js, allowing you to build secure member areas and personalized user experiences.
                  </p>
                </div>
              </div>

              {/*  item seven   */}
              <div
                className="border-stroke-1/10 accordion-item rounded-lg border px-6"
              >
                <h3
                  className="accordion-action relative flex w-full cursor-pointer items-center justify-between pt-6 pb-6 transition-all duration-300 ease-in-out"
                >
                  <button
                    className="font-inter-tight text-tagline-2 cursor-pointer text-left text-white"
                  >
                    Is it compatible with my host?
                  </button>
                  <div className="accordion-plus-icon"></div>
                </h3>
                <div className="accordion-content">
                  <p
                    className="text-tagline-2 font-inter-tight max-w-[531px] cursor-text pb-6 font-extralight text-white/50"
                  >
                    Absolutely. You can host your WordPress backend on any standard provider (WPEngine, Kinsta, Cloudways) and deploy your Nexsas frontend to Vercel, Netlify, or AWS.
                  </p>
                </div>
              </div>
            </div>

            {/*  contact  */}
            <div
              className="relative z-10 w-full max-w-[595px] overflow-hidden p-7 lg:p-14"
              data-opai-animate
              data-delay="0.3"
            >
              <figure
                className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-lg"
              >
                <img
                  src="images/gradient/opai-6.svg"
                  alt="faq-v7-contact"
                  className="h-full w-full object-cover"
                />
              </figure>

              <h4
                className="font-inter-tight text-it-heading-5 mb-2 font-medium text-white/90"
              >
                Still have questions?
              </h4>
              <p className="text-tagline-4 font-inter-tight mb-6 text-white/60">
                Support details to capture customers that might be on the fence.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="focus:outline-stroke-3 text-tagline-2 font-inter-tight bg-background-13/90 border-stroke-3/35 min-h-12 w-full rounded-md border px-4 font-extralight text-white/90 backdrop-blur-[32px] placeholder:text-white/60 focus:outline-1"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="focus:outline-stroke-3 text-tagline-2 font-inter-tight bg-background-13/90 border-stroke-3/35 min-h-12 w-full rounded-md border px-4 font-extralight text-white/90 backdrop-blur-[32px] placeholder:text-white/60 focus:outline-1"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="focus:outline-stroke-3 text-tagline-2 font-inter-tight bg-background-13/90 border-stroke-3/35 min-h-12 w-full rounded-md border px-4 font-extralight text-white/90 backdrop-blur-[32px] placeholder:text-white/60 focus:outline-1"
                />
                <textarea
                  placeholder="Your Questions"
                  className="focus:outline-stroke-3 text-tagline-2 font-inter-tight bg-background-13/90 border-stroke-3/35 min-h-[220px] w-full rounded-md border p-4 font-extralight text-white/90 backdrop-blur-[32px] placeholder:text-white/60 focus:outline-1"
                ></textarea>
                <div
                  className="w-full max-md:mx-auto max-md:w-[85%] md:mx-0 md:w-auto"
                >
                  <button type="submit" className="w-full">
                    <div className="button-split-text-wrapper inline-block w-full">
                      <div
                        className="group bg-background-7 hover:border-stroke-3 relative flex max-h-12 cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-6 !py-2 transition-all duration-300 ease-in-out md:!py-3"
                      >
                        <div className="relative overflow-hidden">
                          <div className="h-5.5">
                            <div
                              className="text-background-5 font-ibm-plex-mono button-split-upper-text text-tagline-2 block leading-[1.4] font-medium text-nowrap"
                            >
                              Contact us
                            </div>
                          </div>
                          <div className="absolute h-5.5">
                            <div
                              className="text-background-5 font-ibm-plex-mono button-split-lower-text text-tagline-2 block leading-[1.4] font-medium text-nowrap"
                            >
                              Contact us
                            </div>
                          </div>
                        </div>

                        <div
                          className="relative mt-[2px] flex size-6 items-center justify-center overflow-hidden"
                        >
                          {/*  circle   */}
                          <span
                            className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] translate-x-0 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-6"
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
                            className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] -translate-x-6 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-0"
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
                      </div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
