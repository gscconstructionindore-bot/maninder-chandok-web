
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    coverImage: any;
    publishedAt: string;
}

interface HomeBlogSectionProps {
    posts: BlogPost[];
}

export default function HomeBlogSection({ posts }: HomeBlogSectionProps) {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <motion.span
                            className="inline-block mb-3 text-sm font-semibold tracking-[0.2em] text-[#CE1117] uppercase"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Blog
                        </motion.span>
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Latest Insights
                        </motion.h2>
                    </div>

                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-sm font-semibold text-[#CE1117] hover:text-[#a80e13] transition-colors"
                    >
                        View All Articles
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <Link href={`/blog/${post.slug.current}`} className="relative aspect-[16/10] overflow-hidden">
                                {post.coverImage && (
                                    <Image
                                        src={urlFor(post.coverImage).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>

                            {/* Content */}
                            <div className="flex flex-col flex-grow p-6">
                                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {new Date(post.publishedAt).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" />
                                        Maninder Chandok
                                    </div>
                                </div>

                                <Link href={`/blog/${post.slug.current}`} className="block mb-3">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#CE1117] transition-colors">
                                        {post.title}
                                    </h3>
                                </Link>

                                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.slug.current}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#CE1117] hover:text-[#a80e13] transition-colors"
                                >
                                    Read Article
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
