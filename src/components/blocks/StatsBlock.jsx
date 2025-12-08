"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";

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
    <section className="home_stats_block py-12" data-component="StatsBlock">
      <div className="container-fluid mx-auto">
        {(title || description) && (
          <div className="section-heading text-center">
            {title && (
              <h2 className="fade-text text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <div
                className="anim-uni-in-up text-lg text-gray-600 max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        )}

        {stats_items && stats_items.length > 0 && (
          <div className="stats_items-grid grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats_items.map((item, index) => (
              <div
                key={index}
                className="stats_items-item text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-center items-center gap-1 mb-2">
                  {item.stats_number && (
                    <div className="stats_number text-4xl md:text-5xl font-bold text-primary stats-counter">
                      {item.stats_number}
                    </div>
                  )}
                  {item.stats_sign && (
                    <div className="stats_sign text-2xl md:text-4xl font-bold text-primary">
                      {item.stats_sign}
                    </div>
                  )}
                </div>
                {item.stats_title && (
                  <div className="stats_title text-gray-800 font-medium text-lg uppercase tracking-wide">
                    {item.stats_title}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {stats_cta && stats_cta.url && (
          <div className="text-center mt-12">
            <Link
              href={stats_cta.url}
              target={stats_cta.target || "_self"}
              className="btn btn-primary inline-flex items-center justify-center px-8 py-3 text-white bg-primary hover:bg-red-700 rounded-full transition-colors"
            >
              {stats_cta.title || "View More Details"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
