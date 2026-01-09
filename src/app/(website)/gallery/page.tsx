
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryPage() {
    // Placeholder data with varying aspect ratios to simulate a masonry layout
    const galleryItems = [
        { id: 1, src: "https://placehold.co/600x400/CE1117/FFFFFF/png?text=Event+Highlight+1", alt: "Event Highlight", width: 600, height: 400 },
        { id: 2, src: "https://placehold.co/600x800/222222/FFFFFF/png?text=Keynote+Speech", alt: "Keynote Speech", width: 600, height: 800 },
        { id: 3, src: "https://placehold.co/600x600/CE1117/FFFFFF/png?text=Workshop+Session", alt: "Workshop Session", width: 600, height: 600 },
        { id: 4, src: "https://placehold.co/800x600/222222/FFFFFF/png?text=Award+Ceremony", alt: "Award Ceremony", width: 800, height: 600 },
        { id: 5, src: "https://placehold.co/600x400/CE1117/FFFFFF/png?text=Team+Building", alt: "Team Building", width: 600, height: 400 },
        { id: 6, src: "https://placehold.co/600x600/222222/FFFFFF/png?text=Networking", alt: "Networking", width: 600, height: 600 },
        { id: 7, src: "https://placehold.co/400x600/CE1117/FFFFFF/png?text=Portrait", alt: "Portrait", width: 400, height: 600 },
        { id: 8, src: "https://placehold.co/800x400/222222/FFFFFF/png?text=Conference+Hall", alt: "Conference Hall", width: 800, height: 400 },
        { id: 9, src: "https://placehold.co/600x800/222222/FFFFFF/png?text=Training", alt: "Training", width: 600, height: 800 },
        { id: 10, src: "https://placehold.co/600x400/CE1117/FFFFFF/png?text=Seminar", alt: "Seminar", width: 600, height: 400 },
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 pt-24 md:pt-32 pb-16 overflow-x-hidden">
            {/* Header Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 mb-16 text-center">
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

            {/* Gallery Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:block md:columns-2 lg:columns-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="relative break-inside-avoid rounded-2xl overflow-hidden group w-full mb-0 md:mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={item.width}
                                height={item.height}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                unoptimized // Needed for some external placeholder services
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.alt}
                                </h3>
                                <div className="w-12 h-1 bg-[#CE1117] mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
