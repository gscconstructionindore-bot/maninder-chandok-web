"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
import { ChevronDown, Filter, Check } from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
  coverImage?: any;
  publishedAt?: string;
  _createdAt: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract unique categories from posts, ignore undefined
  const categories = ["All", ...Array.from(new Set(posts.map(post => post.category).filter(Boolean)))];

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background elements matching the theme */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-red-400/30 via-red-300/20 to-transparent dark:from-red-600/20 dark:via-red-700/15 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-red-400/25 via-red-300/18 to-transparent dark:from-red-600/18 dark:via-red-700/12 rounded-full blur-3xl" />

        {/* Decorative geometric shapes */}
        <div className="absolute top-1/4 left-16 w-32 h-32 border-[3px] border-red-500/40 dark:border-red-500/30 rotate-12 rounded-full shadow-lg shadow-red-500/10" />
        <div className="absolute top-1/3 right-20 w-24 h-24 border-[3px] border-red-500/35 dark:border-red-500/28 -rotate-6 rounded-full shadow-lg shadow-red-500/10" />

        {/* Diagonal stripes pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-15" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(206, 17, 23, 0.18) 50px, rgba(206, 17, 23, 0.18) 51px)'
        }} />

        {/* Decorative lines */}
        <div className="absolute top-1/3 right-1/3 w-2.5 h-64 bg-gradient-to-b from-transparent via-red-500/30 dark:via-red-500/25 to-transparent rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-56 bg-gradient-to-t from-transparent via-red-500/28 dark:via-red-500/22 to-transparent rounded-full" />

        {/* Small accent elements */}
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-red-500/45 dark:bg-red-500/35 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-red-500/40 dark:bg-red-500/30 rounded-full" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <motion.span
            className="inline-block mb-4 text-sm font-semibold tracking-widest text-red-600 dark:text-red-400 uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Insights & Stories
          </motion.span>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Blog
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Explore our latest articles, insights, and stories on leadership, motivation, and personal growth.
          </motion.p>
        </motion.div>

        {/* Category Filter Dropdown */}
        {categories.length > 1 && (
          <div className="relative mb-12 flex justify-center z-20">
            <div className="relative">
              <motion.button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all text-gray-700 dark:text-gray-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Filter className="w-4 h-4 text-red-600" />
                <span className="font-medium">Filter: {activeCategory}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden p-2"
                  >
                    <div className="flex flex-col gap-1 max-h-64 overflow-y-auto custom-scrollbar">
                      {categories.map((category) => (
                        <button
                          key={category as string}
                          onClick={() => {
                            setActiveCategory(category as string);
                            setIsFilterOpen(false);
                          }}
                          className={`flex items-center justify-between w-full px-4 py-2.5 text-sm rounded-lg transition-colors ${activeCategory === category
                              ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                            }`}
                        >
                          <span>{category as string}</span>
                          {activeCategory === category && (
                            <Check className="w-4 h-4" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.article
                layout
                key={post._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link href={`/blog/${post.slug.current}`}>
                  <motion.div
                    className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 h-full flex flex-col"
                    whileHover={{ y: -8 }}
                  >
                    {/* Image */}
                    {post.coverImage ? (
                      <div className="relative w-full h-56 overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
                        <Image
                          src={urlFor(post.coverImage).width(800).height(450).url()}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {post.category && (
                          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                            {post.category}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="relative w-full h-56 bg-gradient-to-br from-red-500/20 to-red-600/20 dark:from-red-600/30 dark:to-red-700/30 flex items-center justify-center shrink-0">
                        <svg className="w-16 h-16 text-red-500/40 dark:text-red-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        {post.category && (
                          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                            {post.category}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col grow">
                      {/* Date and Category */}
                      <div className="mb-3 flex items-center gap-3 text-sm">
                        <time className="text-red-600 dark:text-red-400 font-medium">
                          {new Date(post.publishedAt || post._createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        {post.category && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                            <span className="font-medium text-gray-500 dark:text-gray-400">
                              {post.category}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 line-clamp-2 mb-3">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4 grow">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Read More Link */}
                      <div className="mt-auto flex items-center text-red-600 dark:text-red-400 font-semibold group-hover:gap-2 transition-all duration-300">
                        <span>Read More</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-500 dark:text-gray-400">
              {posts.length === 0 ? "No blog posts yet. Check back soon!" : "No posts found in this category."}
            </p>
          </motion.div>
        )}
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/40 dark:via-red-600/30 to-transparent" />
    </section>
  );
}
