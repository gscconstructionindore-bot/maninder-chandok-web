
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        "All",
        "Lions",
        "Family",
        "National Travel",
        "International Travel",
        "Podcast",
        "Incredible Moment",
        "Homestay"
    ];

    // Placeholder data with categories
    const galleryItems = [
        { id: 1, src: "https://placehold.co/600x400/CE1117/FFFFFF/png?text=Lions+Club+Meet", alt: "Lions Club Meeting", width: 600, height: 400, category: "Lions" },
        { id: 2, src: "https://placehold.co/600x800/222222/FFFFFF/png?text=Family+Vacation", alt: "Family Vacation", width: 600, height: 800, category: "Family" },
        { id: 3, src: "https://placehold.co/600x600/CE1117/FFFFFF/png?text=Jaipur+Trip", alt: "Jaipur Trip", width: 600, height: 600, category: "National Travel" },
        { id: 4, src: "https://placehold.co/800x600/222222/FFFFFF/png?text=Europe+Tour", alt: "Europe Tour", width: 800, height: 600, category: "International Travel" },
        { id: 5, src: "https://placehold.co/600x400/CE1117/FFFFFF/png?text=Podcast+Ep+1", alt: "Podcast Recording", width: 600, height: 400, category: "Podcast" },
        { id: 6, src: "https://placehold.co/600x600/222222/FFFFFF/png?text=Award+Moment", alt: "Winning Award", width: 600, height: 600, category: "Incredible Moment" },
        { id: 7, src: "https://placehold.co/400x600/CE1117/FFFFFF/png?text=Homestay+Experience", alt: "Homestay Guest", width: 400, height: 600, category: "Homestay" },
        { id: 8, src: "https://placehold.co/800x400/222222/FFFFFF/png?text=Lions+Service", alt: "Community Service", width: 800, height: 400, category: "Lions" },
        { id: 9, src: "https://placehold.co/600x800/222222/FFFFFF/png?text=Goa+Trip", alt: "Goa Beach", width: 600, height: 800, category: "National Travel" },
        { id: 10, src: "https://placehold.co/600x400/CE1117/FFFFFF/png?text=Dubai+Skyline", alt: "Dubai Visit", width: 600, height: 400, category: "International Travel" },
        { id: 12, src: "https://placehold.co/600x600/CE1117/FFFFFF/png?text=Family+Dinner", alt: "Family Dinner", width: 600, height: 600, category: "Family" },
        { id: 13, src: "https://placehold.co/800x600/222222/FFFFFF/png?text=Podcast+Guest", alt: "Interview Session", width: 800, height: 600, category: "Podcast" },
    ];

    const filteredItems = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 pt-24 md:pt-32 pb-16 overflow-x-hidden">
            {/* Header Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block mb-3 text-sm font-semibold tracking-[0.2em] text-[#CE1117] uppercase">
                        Portfolio
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Visual Journey
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Capturing moments of transformation, leadership, and impact across the globe.
                    </p>
                </motion.div>
            </section>

            {/* Category Filter */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-5xl mx-auto">
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-[#CE1117] text-white shadow-lg scale-105"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                className="break-inside-avoid rounded-2xl overflow-hidden group w-full"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={item.width}
                                        height={item.height}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                        unoptimized
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <span className="text-[#CE1117] text-xs font-bold uppercase tracking-wider mb-1">
                                            {item.category}
                                        </span>
                                        <h3 className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {item.alt}
                                        </h3>
                                        <div className="w-12 h-1 bg-[#CE1117] mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                        No images found for this category.
                    </div>
                )}
            </section>
        </main>
    );
}
