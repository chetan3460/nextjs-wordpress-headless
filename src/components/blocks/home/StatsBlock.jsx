"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import SafeHTML from "@/components/common/SafeHTML";

function Counter({ value, duration = 2 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

export default function StatsBlock({ data }) {
  if (!data) return null;

  const { title, description, stats_items, stats_cta } = data;

  return (
    <section className="home_stats_block">
      <div className="container-fluid">
        {(title || description) && (
          <div className="section-heading text-center">
            {title && <h2 className="fade-text mb-2">{title}</h2>}
            {description && (
              <SafeHTML html={description} className="anim-uni-in-up" />
            )}
          </div>
        )}

        {stats_items && stats_items.length > 0 && (
          <div
            className="stats-grid-items w-full lg:w-7/12 mx-auto py-6 md:py-12
    grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-12"
          >
            {stats_items.map((item, index) => (
              <div key={index} className="stats-item text-center">
                {/* Number Display */}
                <div className="inline-flex items-center justify-center">
                  <div
                    className="stats-counter text-[38px] leading-[35px] tracking-[-0.76px] md:text-[80px] md:leading-[76px] font-normal text-primary tabular-nums"
                    data-target={item?.stats_number || ""}
                    data-duration="2000"
                  >
                    {item?.stats_number}
                  </div>

                  {item?.stats_sign && (
                    <span className="text-[38px] leading-[35px] md:text-[80px] md:leading-[75px] text-primary font-normal">
                      {item.stats_sign}
                    </span>
                  )}
                </div>

                {/* Stats Title */}
                {item?.stats_title && (
                  <div className="text-sm md:text-base text-grey-2">
                    {item.stats_title}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {stats_cta && stats_cta.url && (
          <div className="text-center">
            <Link
              href={stats_cta.url}
              target={stats_cta.target || "_self"}
              className="btn"
            >
              {stats_cta.title || "View More Details"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
