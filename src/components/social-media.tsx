"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ReelData {
    id: number;
    platform: "instagram" | "facebook" | "youtube";
    embedUrl: string;
    title: string;
}

const reels: ReelData[] = [
    {
        id: 1,
        platform: "instagram",
        embedUrl: "https://www.instagram.com/reel/DSywh9AEcBi/embed",
        title: "Leadership Training Insights",
    },
    {
        id: 2,
        platform: "youtube",
        embedUrl: "https://www.youtube.com/embed/tBm302qL4hA",
        title: "Corporate Excellence Series",
    },
    {
        id: 3,
        platform: "instagram",
        embedUrl: "https://www.instagram.com/reel/DRyg7NyAioG/embed",
        title: "Professional Development Tips",
    },
    {
        id: 4,
        platform: "youtube",
        embedUrl: "https://www.youtube.com/embed/yV9YJ2XFiVw",
        title: "Leadership Masterclass",
    },
];

const platformBadgeColors = {
    instagram: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
    facebook: "bg-[#1877F2]",
    youtube: "bg-[#FF0000]",
};

const platformIcons = {
    instagram: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
            <defs>
                <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#833AB4' }} />
                    <stop offset="50%" style={{ stopColor: '#E1306C' }} />
                    <stop offset="100%" style={{ stopColor: '#FCAF45' }} />
                </linearGradient>
            </defs>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    ),
    facebook: (
        <svg className="w-full h-full" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    ),
    youtube: (
        <svg className="w-full h-full" fill="#FF0000" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    ),
    twitter: (
        <svg className="w-full h-full" fill="#000000" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
};

const platformIconsWhite = {
    instagram: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    ),
    facebook: (
        <svg className="w-full h-full" fill="white" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    ),
    youtube: (
        <svg className="w-full h-full" fill="white" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    ),
};

export default function SocialMedia() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative overflow-hidden w-full bg-gray-50 dark:bg-gray-900">
            {/* Rich vibrant background elements */}
            <div className="absolute inset-0 -z-10">
                {/* Rich colorful gradient orbs */}
                <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-rose-400/25 via-fuchsia-400/20 to-transparent dark:from-rose-600/18 dark:via-fuchsia-600/14 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-[650px] h-[650px] bg-gradient-to-tl from-violet-400/20 via-purple-400/15 to-transparent dark:from-violet-600/15 dark:via-purple-600/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-pink-400/15 to-transparent dark:from-pink-600/12 rounded-full blur-2xl" />
                
                {/* Rich wave pattern */}
                <div className="absolute inset-0 opacity-40 dark:opacity-25" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(236, 72, 153, 0.12) 35px, rgba(236, 72, 153, 0.12) 70px)'
                }} />
                
                {/* Social media inspired shapes */}
                <div className="absolute top-40 right-1/4 w-16 h-16 border-[3px] border-fuchsia-400/45 dark:border-fuchsia-500/35 rounded-xl rotate-12 shadow-lg shadow-fuchsia-500/10" />
                <div className="absolute bottom-40 left-1/4 w-20 h-20 border-[3px] border-rose-400/45 dark:border-rose-500/35 rounded-full shadow-lg shadow-rose-500/10" />
                <div className="absolute top-1/2 right-1/3 w-12 h-12 border-[3px] border-violet-400/45 dark:border-violet-500/35 rounded-lg -rotate-12 shadow-lg shadow-violet-500/10" />
                
                {/* Rich accent lines */}
                <div className="absolute top-0 left-1/3 w-1.5 h-56 bg-gradient-to-b from-fuchsia-500/35 dark:from-fuchsia-400/25 to-transparent rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-1.5 h-48 bg-gradient-to-t from-rose-500/35 dark:from-rose-400/25 to-transparent rounded-full" />
                
                {/* Small vibrant accent elements */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-fuchsia-500/50 dark:bg-fuchsia-400/40 rounded-full animate-pulse" style={{ animationDuration: '2.5s' }} />
                <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-rose-500/45 dark:bg-rose-400/35 rounded-full" />
                <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-violet-500/45 dark:bg-violet-400/35 rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                <div className="absolute bottom-1/2 left-1/3 w-2 h-2 bg-pink-500/40 dark:bg-pink-400/30 rounded-full" />
                
                {/* Hashtag-inspired elements */}
                <div className="absolute top-1/3 right-1/5 w-6 h-1 bg-fuchsia-500/20 dark:bg-fuchsia-400/15 rotate-12" />
                <div className="absolute top-1/3 right-1/5 w-6 h-1 bg-fuchsia-500/20 dark:bg-fuchsia-400/15 rotate-12 translate-y-2" />
            </div>
            
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:px-8">
                <div className="relative z-10">
                    {/* Section Header */}
                    <motion.div 
                        className="text-center space-y-4 mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.span 
                            className="inline-block text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                        >
                            Social Media Presence
                        </motion.span>
                        <motion.h2 
                            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            Connect With Us
                        </motion.h2>
                    </motion.div>

                    {/* Platform Links - Minimalist */}
                    <motion.div 
                        className="flex flex-wrap items-center justify-center gap-4 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                    >
                        {[
                            { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/maninderchandok/" },
                            { platform: "youtube", label: "YouTube", href: "https://www.youtube.com/channel/UCfW56czzEdxsc3HnvYTIExw" },
                            { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/ManinderSChandok" },
                            { platform: "twitter", label: "Twitter", href: "https://x.com/ManinderChandok" },
                        ].map((item, index) => (
                            <motion.a
                                key={item.platform}
                                href={item.href}
                                target="_blank"
                                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="w-5 h-5">
                                    {platformIcons[item.platform as keyof typeof platformIcons]}
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                                    {item.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Reels Showcase - Bento Grid */}
                    <div className="relative">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                Featured Content
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Explore our latest insights and training moments
                            </p>
                        </motion.div>

                        {/* Bento Grid Layout - Symmetric & Balanced */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                            {/* Row 1: Instagram + YouTube */}

                            {/* Instagram Reel 1 - 4:5 ratio */}
                            <motion.div
                                className="group relative col-span-1 md:col-span-1 aspect-4/5 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg shadow-fuchsia-500/10 hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-300 ring-1 ring-fuchsia-200/50 dark:ring-fuchsia-900/30"
                                onMouseEnter={() => setActiveIndex(0)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.05 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`absolute top-2 right-2 z-10 w-7 h-7 ${platformBadgeColors[reels[0].platform]} rounded-full flex items-center justify-center shadow-md`}>
                                    <div className="w-3.5 h-3.5">
                                        {platformIconsWhite[reels[0].platform]}
                                    </div>
                                </div>
                                <iframe
                                    src={reels[0].embedUrl}
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    allow="encrypted-media"
                                    title={reels[0].title}
                                />
                            </motion.div>

                            {/* YouTube Video 1 - 16:9 ratio */}
                            <motion.div
                                className="group relative col-span-1 md:col-span-2 aspect-video rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg shadow-rose-500/10 hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 ring-1 ring-rose-200/50 dark:ring-rose-900/30"
                                onMouseEnter={() => setActiveIndex(1)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`absolute top-2 right-2 z-10 w-7 h-7 ${platformBadgeColors[reels[1].platform]} rounded-full flex items-center justify-center shadow-md`}>
                                    <div className="w-3.5 h-3.5">
                                        {platformIconsWhite[reels[1].platform]}
                                    </div>
                                </div>
                                <iframe
                                    src={reels[1].embedUrl}
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    title={reels[1].title}
                                />
                            </motion.div>

                            {/* Instagram Reel 2 - 4:5 ratio */}
                            <motion.div
                                className="group relative col-span-1 md:col-span-1 aspect-4/5 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg shadow-violet-500/10 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 ring-1 ring-violet-200/50 dark:ring-violet-900/30"
                                onMouseEnter={() => setActiveIndex(2)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.15 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`absolute top-2 right-2 z-10 w-7 h-7 ${platformBadgeColors[reels[2].platform]} rounded-full flex items-center justify-center shadow-md`}>
                                    <div className="w-3.5 h-3.5">
                                        {platformIconsWhite[reels[2].platform]}
                                    </div>
                                </div>
                                <iframe
                                    src={reels[2].embedUrl}
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    allow="encrypted-media"
                                    title={reels[2].title}
                                />
                            </motion.div>

                            {/* Row 2: YouTube Wide (full width) - 16:9 ratio */}

                            {/* YouTube Video 2 - Full Width */}
                            <motion.div
                                className="group relative col-span-2 md:col-span-4 aspect-video rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg shadow-pink-500/10 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 ring-1 ring-pink-200/50 dark:ring-pink-900/30"
                                onMouseEnter={() => setActiveIndex(3)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`absolute top-2 right-2 z-10 w-7 h-7 ${platformBadgeColors[reels[3].platform]} rounded-full flex items-center justify-center shadow-md`}>
                                    <div className="w-3.5 h-3.5">
                                        {platformIconsWhite[reels[3].platform]}
                                    </div>
                                </div>
                                <iframe
                                    src={reels[3].embedUrl}
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    title={reels[3].title}
                                />
                            </motion.div>
                        </div>

                        {/* Call to Action */}
                        <motion.div 
                            className="mt-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.25 }}
                        >
                            <motion.button 
                                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:from-fuchsia-600 hover:to-violet-700 text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg shadow-fuchsia-500/30 hover:shadow-2xl hover:shadow-fuchsia-500/40"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Follow Our Journey</span>
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.button>
                            <motion.p 
                                className="mt-4 text-sm text-gray-600 dark:text-gray-400"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.35 }}
                            >
                                Join our community and stay updated with the latest insights
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

