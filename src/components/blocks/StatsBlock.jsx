"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";

export default function StatsBlock({ data }) {
  const {
    title = "Why Choose Resplast?",
    description = "<p>Numbers that speak to our commitment and quality.</p>",
    stats_items = [
      { stats_number: "50", stats_sign: "+", stats_title: "Years Experience" },
      { stats_number: "200", stats_sign: "+", stats_title: "Global Clients" },
      {
        stats_number: "1000",
        stats_sign: "+",
        stats_title: "Projects Completed",
      },
      {
        stats_number: "24",
        stats_sign: "/7",
        stats_title: "Support Available",
      },
    ],
    stats_cta = { title: "Contact Us", url: "/contact" },
  } = data || {};

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!stats_items || stats_items.length === 0) return null;

  return (
    <section
      className="stats-block relative fade-in overflow-hidden py-12 md:py-20"
      ref={ref}
    >
      <div className="container-fluid relative">
        {/* Header Section */}
        {(title || description) && (
          <div className="text-center section-heading">
            {title && (
              <h2 className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">
                {title}
              </h2>
            )}
            {description && (
              <div
                className="text-base leading-[21px] font-normal md:text-[18px] md:leading-[25px] text-gray-600"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div
          className={`stats-grid-items w-full lg:w-7/12 mx-auto py-6 md:py-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-${Math.min(
            5,
            stats_items.length
          )} gap-4 lg:gap-12`}
        >
          {stats_items.map((item, index) => (
            <div key={index} className="stats-item text-center">
              {/* Number Display */}
              <div className="inline-flex items-center justify-center">
                <div className="stats-counter text-[38px] leading-[35px] tracking-[-0.76px] md:text-[80px] md:leading-[76px] font-normal text-primary tabular-nums">
                  <Counter value={item.stats_number} isInView={isInView} />
                </div>
                {item.stats_sign && (
                  <span className="text-[38px] leading-[35px] md:text-[80px] md:leading-[75px] text-primary font-normal">
                    {item.stats_sign}
                  </span>
                )}
              </div>

              {/* Stats Title */}
              {item.stats_title && (
                <div className="text-sm md:text-base text-grey-2 mt-2">
                  {item.stats_title}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {stats_cta && stats_cta.url && (
          <div className="text-center mt-8 md:mt-12">
            <Link href={stats_cta.url} className="btn-primary inline-flex">
              {stats_cta.title}
            </Link>
          </div>
        )}

        {/* Decorative Shapes (Simulated with absolute divs if images missing) */}
        <div className="floating-item-left absolute left-0 bottom-0 -z-1 pointer-events-none w-[87px] lg:w-fit opacity-50">
          {/* Placeholder for shape 1 */}
          <div className="w-20 h-20 bg-gray-100 rounded-full blur-3xl"></div>
        </div>
        <div className="floating-item-right absolute right-[-45px] top-0 -z-1 pointer-events-none w-[118px] lg:w-fit opacity-50">
          {/* Placeholder for shape 2 */}
          <div className="w-32 h-32 bg-red-50 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}

// Simple Counter Component
function Counter({ value, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) {
      setCount(value);
      return;
    }

    const duration = 2000;
    const itemsPerStep = Math.ceil((end - start) / (duration / 16));

    let timer = setInterval(() => {
      start += itemsPerStep;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return <>{count}</>;
}
