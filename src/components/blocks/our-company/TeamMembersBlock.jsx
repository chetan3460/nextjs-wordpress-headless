'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchTeamCategories, fetchTeamMembersByCategory } from '@/lib/wordpress/client';
import TeamCard from './TeamCard';
import SafeHTML from '@/components/common/SafeHTML';

// Swiper styles are imported in globals.css/style.css

export default function TeamMembersBlock({ data }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);
  const {
    hide_block,
    title,
    description,
    show_categories = true,
    selected_categories = [],
  } = data || {};

  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [members, setMembers] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const selected_cats_json = JSON.stringify(selected_categories);

  // Fetch categories on mount
  useEffect(() => {
    let isMounted = true;
    async function loadCategories() {
      try {
        let cats = [];
        if (selected_categories && selected_categories.length > 0) {
          // Normalize selected_categories (it might be objects from ACF)
          cats = selected_categories.map(cat => ({
            id: cat.term_id || cat.id,
            name: cat.name,
            slug: cat.slug,
          }));
        } else {
          cats = await fetchTeamCategories();
        }

        if (isMounted) {
          setCategories(cats);
          if (cats.length > 0 && !activeCategory) {
            setActiveCategory(cats[0].slug);
          }
        }
      } catch (error) {
        console.error('Error loading team categories:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadCategories();
    return () => {
      isMounted = false;
    };
  }, [selected_cats_json, activeCategory, selected_categories]); // Fixed missing dependencies

  // Fetch members when active category changes
  useEffect(() => {
    if (!activeCategory || (members && members[activeCategory])) return;

    async function loadMembers() {
      try {
        const categoryMembers = await fetchTeamMembersByCategory(activeCategory);
        setMembers(prev => ({ ...prev, [activeCategory]: categoryMembers }));
      } catch (error) {
        console.error(`Error loading members for ${activeCategory}:`, error);
      }
    }

    loadMembers();
  }, [activeCategory, members]); // Fixed missing members dependency

  if (hide_block) return null;

  const handleTabClick = (slug, index) => {
    setActiveCategory(slug);
    setActiveIndex(index);
  };

  const currentMembers = members[activeCategory] || [];

  return (
    <section className="team_members_block  relative overflow-hidden ">
      <div className="container-fluid mx-auto">
        {/* Header Section */}
        <div className="section-heading text-center mb-6 md:mb-8">
          {title && (
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-grey-1 tracking-tight">
              {title}
            </h2>
          )}

          {description && (
            <div className="description-content prose max-w-none anim-uni-in-up">
              <SafeHTML html={description} />
            </div>
          )}
        </div>

        {/* Category Tab Buttons - Sliding Toggle Style */}
        {show_categories && categories.length > 1 && (
          <div className="team-tabs flex justify-center mb-10 lg:mb-16">
            <div className="relative inline-flex border-primary border rounded-full w-full max-w-[410px] mx-auto p-1 bg-white">
              {/* Active state background that slides */}
              <div
                className="team-tab-slider absolute top-1 bottom-1 bg-primary rounded-full transition-all duration-300 ease-out z-0"
                style={{
                  width: `calc(${100 / categories.length}% - 4px)`,
                  left: `calc(${(activeIndex * 100) / categories.length}% + ${
                    activeIndex === 0 ? '2px' : '2px'
                  })`,
                }}
              />

              {categories.map((category, index) => (
                <button
                  key={category.id || category.slug}
                  onClick={() => handleTabClick(category.slug, index)}
                  className={`relative z-10 text-sm md:text-base font-medium px-4 py-3 rounded-full transition-all duration-300 flex-1 text-center ${
                    activeCategory === category.slug ? 'text-white' : 'text-primary hover:bg-red-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Team Members Layout */}
        <div className="team-members-wrapper min-h-[400px]">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="team-category-active">
              <div className="team-mobile-layout">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  watchOverflow={true}
                  onUpdate={swiper => {
                    // This checks if arrows should be visible (swiper is locked if slides <= slidesPerView)
                    setShowNav(!swiper.isLocked);
                  }}
                  pagination={{
                    clickable: true,
                    el: paginationEl,
                    type: 'custom',
                    renderCustom: (swiper, current, total) => {
                      return `${current}/${total}`;
                    },
                  }}
                  navigation={{
                    nextEl,
                    prevEl,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                  }}
                  className="overflow-visible!"
                >
                  {currentMembers.length > 0 ? (
                    currentMembers.map(member => (
                      <SwiperSlide key={member.id}>
                        <TeamCard member={member} />
                      </SwiperSlide>
                    ))
                  ) : (
                    <div className="text-center py-20 w-full">
                      <p className="text-grey-3 text-lg">No team members found in this category.</p>
                    </div>
                  )}
                </Swiper>
              </div>

              {/* Slider Navigation & Pagination - Only show if there's enough slides */}
              <div
                className={`mt-8 pagination-wrapper flex justify-center items-center gap-6 transition-opacity duration-300 ${
                  showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <button
                  ref={setPrevEl}
                  className="swiper-btn-prev-pagination w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                </button>

                <div
                  ref={setPaginationEl}
                  className="swiper-pagination-custom text-primary text-sm font-semibold w-auto! flex gap-1"
                ></div>

                <button
                  ref={setNextEl}
                  className="swiper-btn-next-pagination w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
