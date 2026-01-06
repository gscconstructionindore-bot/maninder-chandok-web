"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* Name - Primary Focus */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="space-y-3"
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <motion.a
                            href="mailto:maninder.chandok@gmail.com"
                            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-500 cursor-pointer shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
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
                        </motion.a>

                        <motion.button 
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium text-indigo-700 dark:text-indigo-300 border-2 border-indigo-400/50 dark:border-indigo-600/50 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Work
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                    className="flex-1 relative w-full max-w-sm md:max-w-md aspect-[3/4]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
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
