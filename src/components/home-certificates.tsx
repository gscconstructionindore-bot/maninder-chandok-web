"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HomeCertificatesProps {
    images: string[];
}

export default function HomeCertificates({ images }: HomeCertificatesProps) {
    if (!images || images.length === 0) return null;

    return (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Certifications & Achievements
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xl">
                            Recognised for excellence in leadership and coaching.
                        </p>
                    </div>

                    <Link
                        href="/about"
                        className="group flex items-center gap-2 text-sm font-semibold text-[#CE1117] hover:text-[#a80e13] transition-colors"
                    >
                        View All
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group aspect-[4/3] rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <Image
                                src={src}
                                alt={`Certificate ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Premium Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
