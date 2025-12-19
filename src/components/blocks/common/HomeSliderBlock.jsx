"use client";

/**
 * Home Slider Block
 * Displays a grid of slider items with titles
 */
export default function HomeSliderBlock({ data }) {
  const { slider_items } = data || {};

  if (data?.hide_block) return null;

  if (!slider_items || slider_items.length === 0) {
    return null;
  }

  return (
    <section className="home_slider_block py-12 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-fluid mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {slider_items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300"
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-red-600 to-red-400 rounded-tl-2xl rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                {item.title || `Slide ${index + 1}`}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
