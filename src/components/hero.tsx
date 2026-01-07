"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const platformIcons = {
    instagram: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="url(#instagram-gradient-hero)">
            <defs>
                <linearGradient id="instagram-gradient-hero" x1="0%" y1="0%" x2="100%" y2="100%">
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

export default function Hero() {
    return (
        <section className="relative overflow-hidden w-full max-w-7xl mx-auto px-6 pt-28 pb-12 md:pt-36 md:pb-16 lg:px-8 bg-white dark:bg-gray-950">
            {/* Rich gradient background with premium feel */}
            <div className="absolute inset-0 -z-20">
                {/* Rich gradient orbs with professional colors */}
                <div className="absolute top-20 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/40 via-blue-100/30 to-transparent dark:from-indigo-900/30 dark:via-blue-950/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -right-32 w-[700px] h-[700px] bg-gradient-to-tl from-purple-200/35 via-violet-100/25 to-transparent dark:from-purple-900/25 dark:via-violet-950/15 rounded-full blur-3xl" />
                
                {/* Accent orbs for depth */}
                <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-gradient-to-br from-cyan-200/20 to-transparent dark:from-cyan-900/15 rounded-full blur-2xl" />
                
                {/* Fine grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#818cf820_1px,transparent_1px),linear-gradient(to_bottom,#818cf820_1px,transparent_1px)] bg-[size:80px_80px]" />
                
                {/* Professional accent lines with color */}
                <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/30 dark:via-indigo-400/20 to-transparent" />
                <div className="absolute bottom-1/3 right-0 w-3/4 h-0.5 bg-gradient-to-l from-transparent via-purple-500/25 dark:via-purple-400/18 to-transparent" />
                
                {/* Large statement geometric shapes with color */}
                <div className="absolute top-32 right-24 w-48 h-48 border-[4px] border-indigo-500/30 dark:border-indigo-400/25 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-32 left-28 w-40 h-40 border-[4px] border-purple-500/25 dark:border-purple-400/20 rotate-45 rounded-lg" />
                
                {/* Accent decorative shapes */}
                <div className="absolute top-1/2 left-12 w-20 h-20 border-[3px] border-cyan-500/20 dark:border-cyan-400/15 rounded-full" />
                <div className="absolute bottom-1/4 right-44 w-24 h-24 border-[3px] border-blue-500/22 dark:border-blue-400/18 rotate-12 rounded-lg" />
                
                {/* Small professional accent dots */}
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-500/40 dark:bg-indigo-400/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-1/2 left-1/4 w-2.5 h-2.5 bg-purple-500/35 dark:bg-purple-400/25 rounded-full" />
                <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-cyan-500/30 dark:bg-cyan-400/20 rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
                <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-blue-500/30 dark:bg-blue-400/20 rounded-full" />
                
                {/* Floating accent squares */}
                <div className="absolute top-40 left-1/4 w-4 h-4 border-2 border-indigo-500/25 dark:border-indigo-400/20 rotate-45" />
                <div className="absolute bottom-40 right-1/3 w-3 h-3 border-2 border-purple-500/25 dark:border-purple-400/20 rotate-12" />
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center gap-20 md:gap-32">
                {/* Text Content */}
                <motion.div 
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    {/* Name - Primary Focus */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-3"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            Maninder Singh
                            <br />
                            Chandok
                        </h1>
                        <div className="w-20 h-1 bg-black dark:bg-white rounded-full" />
                    </motion.div>

                    {/* Roles */}
                    <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        {["Author", "Poet", "Motivational Speaker", "Life Coach"].map((role, index) => (
                            <span 
                                key={index}
                                className="px-4 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                            >
                                {role}
                            </span>
                        ))}
                    </motion.div>

                    {/* Tagline */}
                    <motion.div 
                        className="space-y-3 pt-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                            Inspiring minds, transforming lives
                        </p>

                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                            Empowering individuals through words, wisdom, and life appreciation. 
                            Discover the path to personal growth and meaningful living.
                        </p>
                    </motion.div>

                    {/* CTA */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 items-start pt-4"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <a
                            href="mailto:maninder.chandok@gmail.com"
                            className="group relative inline-flex items-center justify-center gap-2 bg-[#CE1117] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer"
                        >
                            Get in Touch
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <button 
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-indigo-700 dark:text-indigo-300 border-2 border-indigo-400/50 dark:border-indigo-600/50 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all cursor-pointer"
                        >
                            Explore Work
                        </button>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div 
                        className="flex items-center gap-3 pt-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        {[
                            { platform: "instagram", href: "https://www.instagram.com/maninderchandok/", label: "Instagram" },
                            { platform: "youtube", href: "https://www.youtube.com/channel/UCfW56czzEdxsc3HnvYTIExw", label: "YouTube" },
                            { platform: "facebook", href: "https://www.facebook.com/ManinderSChandok", label: "Facebook" },
                            { platform: "twitter", href: "https://x.com/ManinderChandok", label: "Twitter" },
                        ].map((item) => (
                            <a
                                key={item.platform}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="group w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                            >
                                <div className="w-5 h-5 transition-transform duration-300">
                                    {platformIcons[item.platform as keyof typeof platformIcons]}
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                    className="flex-1 relative w-full max-w-sm md:max-w-md aspect-[3/4]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ willChange: 'opacity' }}
                >
                    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-gray-900">
                        <Image
                            src="/hero.png"
                            alt="Professional Corporate Trainer"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Precision frame */}
                    <div className="absolute inset-0 rounded-[2.5rem] border border-black/10 dark:border-white/10 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
