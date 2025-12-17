"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [totalResults, setTotalResults] = useState(initialTotal);
  const searchTimeoutRef = useRef(null);

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
    async (pageNum, category, order, search, append = false) => {
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

        if (search) {
          params.append("search", search);
        }

        const response = await fetch(`/api/news?${params.toString()}`);
        const data = await response.json();

        if (append) {
          setPosts((prev) => [...prev, ...data.posts]);
        } else {
          setPosts(data.posts);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        setHasMore(data.hasMore);
        setTotalResults(data.totalPosts || 0);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    []
  );

  // Debounced search effect
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      setPage(1);
      fetchPosts(1, selectedCategory, sortOrder, searchQuery, false);
    }, 500);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery, selectedCategory, sortOrder, fetchPosts]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(1);
    fetchPosts(1, category, sortOrder, searchQuery, false);
  };

  // Handle sort change
  const handleSortChange = (order) => {
    setSortOrder(order);
    setPage(1);
    fetchPosts(1, selectedCategory, order, searchQuery, false);
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  // Handle View More
  const handleViewMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage, selectedCategory, sortOrder, searchQuery, true);
  };

  return (
    <section className="news-list-block">
      <div className="container-fluid relative overflow-hidden">
        {/* Section Heading */}
        <div className="section-heading text-center mb-4 sm:mb-8">
          {sectionTitle && <h2 className="mb-1 fade-text">{sectionTitle}</h2>}
          {sectionDescription && <p>{sectionDescription}</p>}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 pl-11 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <span className="text-sm text-black font-semibold">
            {searchQuery
              ? `Found ${totalResults} result${
                  totalResults !== 1 ? "s" : ""
                } for "${searchQuery}"`
              : selectedCategory !== "all" &&
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

        {/* Loading Skeletons */}
        {loading && (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
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

        {/* Loading More Skeletons */}
        {loadingMore && (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {[...Array(3)].map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
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

        {/* End of list message - only show if user has loaded more pages */}
        {!loading && !hasMore && posts.length > 0 && page > 1 && (
          <div className="mt-6 text-center text-gray-500">
            You&apos;re all caught up
          </div>
        )}
      </div>
    </section>
  );
}
