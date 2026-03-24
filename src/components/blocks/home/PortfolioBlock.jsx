export default function PortfolioBlock() {
  return (
    <>
      <section
        className="bg-background-6 relative overflow-hidden py-10 pt-20 sm:py-20 md:py-28 lg:py-36 xl:py-40 2xl:py-44"
      >
        {/*  top gradient background   */}
        <div
          className="absolute -top-1 left-0 z-4 h-[796px] w-full md:h-[760px] lg:-top-4 2xl:-top-12"
        >
          <img src="images/gradient/opai-1.png" alt="Top blend mode" />
        </div>

        <div className="main-container relative z-10">
          <div className="space-y-10 md:space-y-14 lg:space-y-20">
            <div className="space-y-2 pb-5 text-center md:space-y-3">
              <h2
                data-opai-split-text
                className="font-sora md:text-sora-heading-3 text-sora-heading-4 lg:text-sora-heading-2 text-background-7 min-[500px]:text-background-13/90 font-normal max-md:leading-[110%] lg:mx-auto lg:max-w-[600px]"
              >
                Delivering
                <span
                  className="min-[500px]:text-background-13/50 text-background-7/50"
                  >real impact.</span
                >
              </h2>
              <p
                data-opai-split-text
                data-delay="0.3"
                data-line-delay="0.1"
                className="font-inter-tight text-tagline-2 text-background-7 min-[500px]:text-background-13/50 font-normal lg:mx-auto lg:max-w-[350px]"
              >
                Explore how our solutions have helped clients succeed.
              </p>
            </div>

            {/*  portfolio  */}
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-8">
              {/*  portfolio 01  */}
              <div
                className="border-stroke-1/11 col-span-12 overflow-hidden rounded-lg border"
                data-opai-animate
                data-delay="0.3"
              >
                <a href="project-details.html" className="group relative block">
                  <figure
                    className="image-loading-reveal h-full w-full overflow-hidden max-lg:h-[280px] xl:h-full xl:max-h-[500px]"
                  >
                    <img
                      src="images/opai-img-117.jpg"
                      alt="portfolio"
                      className="h-full w-full scale-100 object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
                    />
                  </figure>
                  {/*  icons  */}
                  <div
                    className="bg-background-13/50 absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 translate-y-[57%] items-center justify-center rounded opacity-0 backdrop-blur-[6px] transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100 lg:size-18"
                  >
                    <span className="relative size-6 overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute -translate-x-12 translate-y-10.5 opacity-0 transition-all duration-700 group-hover:-translate-x-0.5 group-hover:-translate-y-0 group-hover:opacity-100"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div
                    data-opai-animate
                    data-delay="0.1"
                    className="bg-background-6 px-6 py-8 text-center backdrop-blur-[17px] max-md:text-left md:space-y-1 md:px-12"
                  >
                    <h3
                      className="text-sora-heading-6 sm:text-sora-heading-5 font-normal tracking-[-0.72px] text-white/80"
                    >
                      E-Commerce personalization
                    </h3>
                    <p className="text-tagline-2 text-white/50">
                      Increased sales by 40% through tailored recommendations.
                    </p>
                  </div>
                </a>
              </div>
              {/*  portfolio 02  */}
              <div
                className="border-stroke-1/11 col-span-12 overflow-hidden rounded-lg border"
                data-opai-animate
                data-delay="0.1"
              >
                <a href="project-details.html" className="group relative block">
                  <figure
                    className="image-loading-reveal h-full w-full overflow-hidden max-lg:h-[280px] xl:h-full xl:max-h-[500px]"
                  >
                    <img
                      src="images/opai-img-118.jpg"
                      alt="portfolio"
                      className="h-full w-full scale-100 object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
                    />
                  </figure>
                  {/*  icons  */}
                  <div
                    className="bg-background-13/50 absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 translate-y-[57%] items-center justify-center rounded opacity-0 backdrop-blur-[6px] transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100 lg:size-18"
                  >
                    <span className="relative size-6 overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute -translate-x-12 translate-y-10.5 opacity-0 transition-all duration-700 group-hover:-translate-x-0.5 group-hover:-translate-y-0 group-hover:opacity-100"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div
                    data-opai-animate
                    data-delay="0.1"
                    className="bg-background-6 px-6 py-8 text-center backdrop-blur-[17px] max-md:text-left md:space-y-1 md:px-12"
                  >
                    <h3
                      className="text-sora-heading-6 sm:text-sora-heading-5 font-normal tracking-[-0.72px] text-white/80"
                    >
                      Healthcare analytics
                    </h3>
                    <p className="text-tagline-2 text-white/50">
                      Improved patient outcomes by reducing diagnostic errors.
                    </p>
                  </div>
                </a>
              </div>
              {/*  portfolio 03  */}
              <div
                className="border-stroke-1/11 col-span-12 overflow-hidden rounded-lg border"
                data-opai-animate
                data-delay="0.2"
              >
                <a href="project-details.html" className="group relative block">
                  <figure
                    className="image-loading-reveal h-full w-full overflow-hidden max-lg:h-[280px] xl:h-full xl:max-h-[500px]"
                  >
                    <img
                      src="images/opai-img-119.jpg"
                      alt="portfolio"
                      className="h-full w-full scale-100 object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
                    />
                  </figure>
                  {/*  icons  */}
                  <div
                    className="bg-background-13/50 absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 translate-y-[57%] items-center justify-center rounded opacity-0 backdrop-blur-[6px] transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100 lg:size-18"
                  >
                    <span className="relative size-6 overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute -translate-x-12 translate-y-10.5 opacity-0 transition-all duration-700 group-hover:-translate-x-0.5 group-hover:-translate-y-0 group-hover:opacity-100"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div
                    data-opai-animate
                    data-delay="0.1"
                    className="bg-background-6 px-6 py-8 text-center backdrop-blur-[17px] max-md:text-left md:space-y-1 md:px-12"
                  >
                    <h3
                      className="text-sora-heading-6 sm:text-sora-heading-5 font-normal tracking-[-0.72px] text-white/80"
                    >
                      Fraud Detection for financial services
                    </h3>
                    <p className="text-tagline-2 text-white/50">
                      Enhanced fraud detection accuracy by 60%.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="mx-auto w-full text-center max-md:w-[85%] md:mx-0 md:w-auto"
              data-opai-animate
              data-delay="0.1"
            >
              <div
                className="{=$display-class} button-split-text-wrapper inline-block"
              >
                <a
                  href="projects.html"
                  className="group bg-background-7 hover:border-stroke-3 {=$class} relative flex max-h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
                >
                  <div className="relative overflow-hidden">
                    <div className="h-5.5">
                      <div
                        className="text-background-5 font-ibm-plex-mono button-split-upper-text text-tagline-2 block leading-[1.4] font-medium text-nowrap"
                      >
                        View all projects
                      </div>
                    </div>
                    <div className="absolute h-5.5">
                      <div
                        className="text-background-5 font-ibm-plex-mono button-split-lower-text text-tagline-2 block leading-[1.4] font-medium text-nowrap"
                      >
                        View all projects
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
