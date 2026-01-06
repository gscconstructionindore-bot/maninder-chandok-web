"use client";

import { motion } from "framer-motion";

export default function OurMission() {
    return (
        <section className="relative w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
            {/* Rich nature-inspired, empowering background elements */}
            <div className="absolute inset-0 -z-10">
                {/* Rich energizing gradient orbs */}
                <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/28 via-teal-400/20 to-transparent dark:from-emerald-600/18 dark:via-teal-600/14 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-[550px] h-[550px] bg-gradient-to-tl from-cyan-400/22 via-teal-400/16 to-transparent dark:from-cyan-600/16 dark:via-teal-600/12 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-green-400/15 to-transparent dark:from-green-600/12 rounded-full blur-2xl" />
                
                {/* Hexagon pattern (strength & structure) with richer colors */}
                <div className="absolute top-40 right-1/4 w-40 h-40 border-[3px] border-emerald-500/40 dark:border-emerald-500/32 rounded-lg rotate-45 shadow-lg shadow-emerald-500/10" />
                <div className="absolute bottom-40 left-1/4 w-36 h-36 border-[3px] border-teal-500/35 dark:border-teal-500/28 rounded-full shadow-lg shadow-teal-500/10" />
                
                {/* Upward arrow motif (growth & progress) - stronger */}
                <div className="absolute top-1/3 right-1/3 w-2.5 h-32 bg-gradient-to-t from-transparent via-emerald-500/40 dark:via-emerald-500/28 to-emerald-500/60 dark:to-emerald-500/40 rounded-full" />
                <div className="absolute bottom-1/3 left-1/3 w-2.5 h-40 bg-gradient-to-t from-transparent via-teal-500/35 dark:via-teal-500/26 to-teal-500/55 dark:to-teal-500/38 rounded-full" />
                
                {/* Diamond pattern (excellence) */}
                <div className="absolute top-1/2 left-20 w-24 h-24 border-[3px] border-emerald-500/30 dark:border-emerald-500/22 rotate-45" />
                <div className="absolute bottom-1/3 right-24 w-28 h-28 border-[3px] border-cyan-500/28 dark:border-cyan-500/20 rotate-12" />
                
                {/* Circular pattern for unity */}
                <div className="absolute top-20 left-1/4 w-20 h-20 border-[3px] border-teal-500/35 dark:border-teal-500/26 rounded-full" />
                <div className="absolute bottom-20 right-1/3 w-16 h-16 border-[3px] border-cyan-500/30 dark:border-cyan-500/22 rounded-full" />
                
                {/* Small empowering accent elements */}
                <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-500/50 dark:bg-emerald-500/40 rounded-full animate-pulse" style={{ animationDuration: '2.8s' }} />
                <div className="absolute bottom-1/3 left-1/3 w-3.5 h-3.5 bg-teal-500/45 dark:bg-teal-500/35 rounded-full" />
                <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-cyan-500/45 dark:bg-cyan-500/35 rounded-full animate-pulse" style={{ animationDuration: '3.2s', animationDelay: '0.6s' }} />
                <div className="absolute bottom-1/2 left-1/4 w-2.5 h-2.5 bg-green-500/40 dark:bg-green-500/30 rounded-full" />
                
                {/* Growth arrow accents */}
                <div className="absolute top-1/3 left-1/5 w-1 h-8 bg-gradient-to-t from-transparent to-emerald-500/40 dark:to-emerald-500/30 rounded-full" />
                <div className="absolute bottom-1/4 right-1/5 w-1 h-10 bg-gradient-to-t from-transparent to-teal-500/35 dark:to-teal-500/28 rounded-full" />
                
                {/* Star-like motivation elements */}
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-500/40 dark:bg-cyan-500/30 rounded-full" />
                <div className="absolute bottom-2/3 left-1/5 w-1.5 h-1.5 bg-emerald-500/35 dark:bg-emerald-500/25 rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.span 
                        className="inline-block text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                    >
                        Our Mission
                    </motion.span>
                    <motion.h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        Transforming Lives,<br />Creating Impact
                    </motion.h2>
                </motion.div>

                {/* Mission Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mission 1: YES I CAN */}
                    <motion.div
                        className="group relative"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl border border-emerald-200/50 dark:border-emerald-900/30 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-300 dark:hover:border-emerald-800">
                            {/* Content */}
                            <div className="relative p-8 md:p-10">
                                {/* Icon/Badge */}
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 rounded-xl mb-6 shadow-lg shadow-emerald-500/30">
                                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>

                                {/* Title - Creative Typography */}
                                <div className="mb-6">
                                    <h3 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
                                        <span className="block text-gray-900 dark:text-white">YES</span>
                                        <span className="block text-gray-900 dark:text-white">I CAN</span>
                                    </h3>
                                    <div className="w-16 h-1 bg-black dark:bg-white rounded-full mt-3" />
                                </div>

                                {/* Description */}
                                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    Empowering individuals to unlock their true potential and achieve greatness through self-belief and determination.
                                </p>

                                {/* Learn More Link */}
                                <motion.button
                                    className="group/btn inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span>Learn More</span>
                                    <svg 
                                        className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mission 2: WASH YOUR HANDS */}
                    <motion.div
                        className="group relative"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl border border-teal-200/50 dark:border-teal-900/30 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 hover:border-teal-300 dark:hover:border-teal-800">
                            {/* Content */}
                            <div className="relative p-8 md:p-10">
                                {/* Icon/Badge */}
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 dark:from-teal-600 dark:to-cyan-700 rounded-xl mb-6 shadow-lg shadow-teal-500/30">
                                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                    </svg>
                                </div>

                                {/* Title */}
                                <div className="mb-6">
                                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                                        WASH YOUR HANDS
                                    </h3>
                                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400 italic">
                                        "ITNI SHAKTI Hamein dena data...."
                                    </p>
                                    <div className="w-16 h-1 bg-black dark:bg-white rounded-full mt-3" />
                                </div>

                                {/* Description */}
                                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    Building awareness and promoting hygiene practices for a healthier society through education and inspiration.
                                </p>

                                {/* Learn More Link */}
                                <motion.button
                                    className="group/btn inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span>Learn More</span>
                                    <svg 
                                        className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <motion.button
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Join Our Mission</span>
                        <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

