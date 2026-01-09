"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function FeaturedVideo() {
    // START: REPLACE THIS WITH YOUR VIDEO ID
    // Example: For https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ
    const VIDEO_ID = "zZevi2ugqj8";
    // END: REPLACE THIS WITH YOUR VIDEO ID

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#CE1117]/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Latest <span className="text-[#CE1117]">Insights</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Explore my latest talks, sessions, and thoughts on life appreciation.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-black group"
                >
                    {/* Iframe */}
                    <iframe
                        className="w-full h-full object-cover"
                        src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />

                    {/* Decorative Shine (only visible when loading or on edges) */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                </motion.div>

                {/* CTA / Subtext */}
                <div className="mt-8 text-center">
                    <a
                        href="https://www.youtube.com/@ManinderSinghChandok"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-[#CE1117] transition-colors"
                    >
                        <Play className="w-4 h-4 fill-current" />
                        Visit YouTube Channel
                    </a>
                </div>
            </div>
        </section>
    );
}
