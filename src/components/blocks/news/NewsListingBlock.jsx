"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import BlogCard from "@/components/news/BlogCard";
import BlogCardSkeleton from "@/components/news/BlogCardSkeleton";
import FilterDropdown from "@/components/news/FilterDropdown";

/**
 * News Listing Block
 * Highly functional listing with search, filtering, and pagination.
 */
export default function NewsListingBlock({
  data,
  initialPosts = [],
  initialCategories = [],
  initialHasMore = false,
  initialTotal = 0,
}) {
  const {
    hide_block,
    section_title = data?.section_title || "All News",
    posts_per_page = data?.posts_per_page || 6,
    show_filters = data?.show_filters !== undefined ? data.show_filters : true,
    show_search = data?.show_search !== undefined ? data.show_search : true,
  } = data || {};

  const [posts, setPosts] = useState(initialPosts);
  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [totalResults, setTotalResults] = useState(initialTotal);
  const searchTimeoutRef = useRef(null);

  // Initial fetch for categories if not provided
  useEffect(() => {
    if (categories.length === 0) {
      const fetchCats = async () => {
        try {
          const res = await fetch("/api/news/categories");
          const data = await res.json();
          setCategories(data || []);
        } catch (e) {
          console.error("Failed to fetch categories:", e);
        }
      };
      fetchCats();
    }
  }, [categories]);

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
          per_page: posts_per_page.toString(),
        });

        if (search) {
          params.append("search", search);
        }

        const response = await fetch(`/api/news?${params.toString()}`);
        const data = await response.json();

        if (append) {
          setPosts((prev) => [...prev, ...data.posts]);
        } else {
          setPosts(data.posts || []);
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
    [posts_per_page]
  );

  // Initial fetch for posts if not provided
  useEffect(() => {
    if (posts.length === 0 && !hide_block) {
      fetchPosts(1, selectedCategory, sortOrder, searchQuery, false);
    }
  }, [
    posts.length,
    hide_block,
    fetchPosts,
    selectedCategory,
    sortOrder,
    searchQuery,
  ]);

  // Debounced search effect (only run if search is active or filters changed after initial load)
  useEffect(() => {
    if (searchQuery || selectedCategory !== "all" || sortOrder !== "newest") {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }

      searchTimeoutRef.current = setTimeout(() => {
        setPage(1);
        fetchPosts(1, selectedCategory, sortOrder, searchQuery, false);
      }, 500);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery, selectedCategory, sortOrder, fetchPosts]);

  if (hide_block) return null;

  return (
    <section className="news_listing_block py-12">
      <div className="container-fluid relative overflow-hidden">
        {/* Section Heading */}
        <div className="section-heading text-center mb-8">
          {section_title && (
            <h2 className="mb-1 fade-text text-3xl font-bold">
              {section_title}
            </h2>
          )}
        </div>

        {/* Search Bar */}
        {show_search && (
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
            </div>
          </div>
        )}

        {/* Filters Row */}
        {show_filters && (
          <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
            <span className="text-sm text-black font-semibold">
              Found {totalResults} result{totalResults !== 1 ? "s" : ""}
            </span>

            <div className="flex items-center gap-3 flex-wrap">
              <FilterDropdown
                label={
                  categoryOptions.find((o) => o.value === selectedCategory)
                    ?.label || "Category"
                }
                value={selectedCategory}
                options={categoryOptions}
                onChange={setSelectedCategory}
              />
              <FilterDropdown
                label={
                  sortOptions.find((o) => o.value === sortOrder)?.label ||
                  "Sort"
                }
                value={sortOrder}
                options={sortOptions}
                onChange={setSortOrder}
              />
            </div>
          </div>
        )}

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
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.map((post) => <BlogCard key={post.id} post={post} />)
            ) : (
              <div className="col-span-full text-center text-gray-500 py-10">
                No news found.
              </div>
            )}
          </div>
        )}

        {/* View More Button */}
        {!loading && hasMore && posts.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => {
                const nextPage = page + 1;
                setPage(nextPage);
                fetchPosts(
                  nextPage,
                  selectedCategory,
                  sortOrder,
                  searchQuery,
                  true
                );
              }}
              disabled={loadingMore}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-red-600 px-6 py-2 text-sm font-medium hover:bg-red-600 hover:text-white transition"
            >
              {loadingMore ? "Loading..." : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
