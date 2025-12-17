"use client";

import { useState, useCallback } from "react";
import BlogCard from "./BlogCard";
import FilterDropdown from "./FilterDropdown";

export default function NewsListing({
  initialPosts,
  initialCategories,
  initialHasMore,
  initialTotal,
  sectionTitle = "Driving what's next",
  sectionDescription = "A look at our innovations, research milestones, and events that keep us ahead in a changing world.",
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [categories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  // Category options for dropdown
  const categoryOptions = [
    { value: "all", label: "All Categories" },
    ...categories.map((cat) => ({
      value: cat.id.toString(),
      label: cat.name,
      count: cat.count,
    })),
  ];

  // Sort options
  const sortOptions = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
  ];

  // Get selected category label
  const selectedCategoryLabel =
    categoryOptions.find((opt) => opt.value === selectedCategory)?.label ||
    "All Categories";

  // Fetch posts function
  const fetchPosts = useCallback(
    async (pageNum, category, order, append = false) => {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      try {
        const params = new URLSearchParams({
          page: pageNum.toString(),
          category: category,
          order: order === "newest" ? "desc" : "asc",
        });

        const response = await fetch(`/api/news?${params.toString()}`);
        const data = await response.json();

        if (append) {
          setPosts((prev) => [...prev, ...data.posts]);
        } else {
          setPosts(data.posts);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        setHasMore(data.hasMore);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    []
  );

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(1);
    fetchPosts(1, category, sortOrder, false);
  };

  // Handle sort change
  const handleSortChange = (order) => {
    setSortOrder(order);
    setPage(1);
    fetchPosts(1, selectedCategory, order, false);
  };

  // Handle View More
  const handleViewMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage, selectedCategory, sortOrder, true);
  };

  return (
    <section className="news-list-block">
      <div className="container-fluid relative overflow-hidden">
        {/* Section Heading */}
        <div className="section-heading text-center mb-4 sm:mb-8">
          {sectionTitle && <h2 className="mb-1 fade-text">{sectionTitle}</h2>}
          {sectionDescription && <p>{sectionDescription}</p>}
        </div>

        {/* Filters Row */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <span className="text-sm text-black font-semibold">
            {selectedCategory !== "all" &&
            selectedCategoryLabel !== "All Categories"
              ? `Showing all results ${selectedCategoryLabel}`
              : "Showing all results"}
          </span>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Categories Dropdown */}
            <FilterDropdown
              label={selectedCategoryLabel}
              value={selectedCategory}
              options={categoryOptions}
              onChange={handleCategoryChange}
            />

            {/* Sort Dropdown */}
            <FilterDropdown
              label={
                sortOptions.find((opt) => opt.value === sortOrder)?.label ||
                "Sort"
              }
              value={sortOrder}
              options={sortOptions}
              onChange={handleSortChange}
            />
          </div>
        </div>

        {/* Loader (full page) */}
        {loading && (
          <div className="flex justify-center items-center py-6">
            <svg
              className="animate-spin h-10 w-10 text-red-600"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 fade-up-stagger-wrap">
            {posts.length > 0 ? (
              posts.map((post) => <BlogCard key={post.id} post={post} />)
            ) : (
              <div className="col-span-full text-center text-gray-500 py-10">
                No news found. Try adjusting your filters or search.
              </div>
            )}
          </div>
        )}

        {/* View More Button */}
        {!loading && hasMore && posts.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleViewMore}
              disabled={loadingMore}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-red-600 px-6 py-2 text-sm font-medium hover:bg-red-600 hover:text-white transition disabled:opacity-50"
            >
              {loadingMore && (
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              <span>{loadingMore ? "Loading..." : "View More"}</span>
            </button>
          </div>
        )}

        {/* End of list message */}
        {!loading && !hasMore && posts.length > 0 && (
          <div className="mt-6 text-center text-gray-500">
            You&apos;re all caught up
          </div>
        )}
      </div>
    </section>
  );
}
