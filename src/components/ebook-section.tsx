"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EbookSection() {
    return (
        <section className="relative w-full py-16 md:py-24 bg-white dark:bg-gray-950 overflow-hidden">
            {/* Rich warm-toned background elements */}
            <div className="absolute inset-0 -z-10">
                {/* Rich warm gradient orbs */}
                <div className="absolute top-32 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-amber-400/30 via-yellow-300/20 to-transparent dark:from-amber-600/20 dark:via-yellow-700/15 rounded-full blur-3xl" />
                <div className="absolute bottom-32 right-1/4 w-[550px] h-[550px] bg-gradient-to-tl from-orange-400/25 via-amber-300/18 to-transparent dark:from-orange-600/18 dark:via-amber-700/12 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-gradient-to-br from-yellow-400/15 to-transparent dark:from-yellow-600/12 rounded-full blur-2xl" />
                
                {/* Book-inspired geometric shapes with richer colors */}
                <div className="absolute top-1/2 left-10 w-32 h-40 border-[3px] border-amber-500/40 dark:border-amber-500/30 rotate-12 rounded shadow-lg shadow-amber-500/10" />
                <div className="absolute top-20 right-16 w-24 h-32 border-[3px] border-orange-500/35 dark:border-orange-500/28 -rotate-6 rounded shadow-lg shadow-orange-500/10" />
                
                {/* Refined diagonal stripes pattern */}
                <div className="absolute inset-0 opacity-30 dark:opacity-15" style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(245, 158, 11, 0.18) 50px, rgba(245, 158, 11, 0.18) 51px)'
                }} />
                
                {/* Page-like decorative elements with richer colors */}
                <div className="absolute top-1/4 right-1/3 w-2.5 h-64 bg-gradient-to-b from-transparent via-amber-500/30 dark:via-amber-500/25 to-transparent rounded-full" />
                <div className="absolute bottom-1/4 left-1/4 w-2.5 h-56 bg-gradient-to-t from-transparent via-orange-500/28 dark:via-orange-500/22 to-transparent rounded-full" />
                
                {/* Book-inspired shapes */}
                <div className="absolute bottom-1/3 right-1/4 w-16 h-20 border-[2px] border-amber-500/30 dark:border-amber-500/22 rotate-45 rounded" />
                <div className="absolute top-1/3 left-1/3 w-20 h-28 border-[2px] border-yellow-500/28 dark:border-yellow-600/20 -rotate-12 rounded" />
                
                {/* Small golden accent elements */}
                <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-amber-500/45 dark:bg-amber-500/35 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-1/2 left-1/3 w-3 h-3 bg-orange-500/40 dark:bg-orange-500/30 rounded-full" />
                <div className="absolute top-2/3 left-1/4 w-2.5 h-2.5 bg-yellow-500/40 dark:bg-yellow-500/30 rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.8s' }} />
                <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-amber-500/35 dark:bg-amber-500/25 rounded-full" />
                
                {/* Book page corner elements */}
                <div className="absolute top-40 left-1/5 w-8 h-8 border-l-2 border-t-2 border-amber-500/25 dark:border-amber-500/18 rotate-45" />
                <div className="absolute bottom-40 right-1/5 w-6 h-6 border-r-2 border-b-2 border-orange-500/25 dark:border-orange-500/18 -rotate-12" />
            </div>
            
            {/* Decorative top border with warm gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 dark:via-amber-600/30 to-transparent" />
            
            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* E-Book Visual */}
                <motion.div 
                    className="flex-1 relative w-full max-w-md lg:max-w-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px", amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <div className="relative">
                        {/* Book image with simple shadow */}
                        <motion.div 
                            className="relative aspect-[4/3] w-full"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            style={{ willChange: 'transform' }}
                        >
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/book.png"
                                    alt="Leadership Excellence E-Book"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                        
                        {/* Small badge */}
                        <motion.div 
                            className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full shadow-lg shadow-amber-500/40 text-xs font-semibold uppercase tracking-wider"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{ willChange: 'transform' }}
                        >
                            Free
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                    className="flex-1 space-y-6 max-w-xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px", amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    {/* Eyebrow */}
                    <span className="inline-block text-sm uppercase tracking-[0.25em] font-medium text-gray-500 dark:text-gray-400">
                        Exclusive E-Book
                    </span>

                    {/* Headline */}
                    <div className="space-y-3">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            Golden Words
                        </h2>

                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Discover profound wisdom and life-changing insights that inspire personal growth 
                            and meaningful living through powerful words and timeless lessons.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 py-4">
                        {[
                            { value: "120+", label: "Pages" },
                            { value: "8", label: "Chapters" },
                            { value: "10K+", label: "Downloads" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 pt-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <motion.button 
                            className="group inline-flex items-center justify-center gap-3 text-white px-8 py-3 rounded-full font-medium transition-all cursor-pointer bg-[#CE1117]"
                        >
                            Download E-Book
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-4-4m4 4l4-4" />
                            </svg>
                        </motion.button>

                        <motion.button 
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium text-amber-700 dark:text-amber-300 border-2 border-[#CE1117] dark:border-amber-600/50 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-all cursor-pointer"
                        >
                            Preview Sample
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
            </div>
            
            {/* Decorative bottom border with warm gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 dark:via-amber-600/30 to-transparent" />
        </section>
    );
}

