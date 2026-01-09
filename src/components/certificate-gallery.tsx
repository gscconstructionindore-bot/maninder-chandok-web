"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface CertificateGalleryProps {
    images: string[];
}

export default function CertificateGallery({ images }: CertificateGalleryProps) {
    const [selectedindex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const showNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedindex === null) return;
        setSelectedIndex((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
    }, [selectedindex, images.length]);

    const showPrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedindex === null) return;
        setSelectedIndex((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
    }, [selectedindex, images.length]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedindex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedindex, showNext, showPrev]);

    if (!images || images.length === 0) {
        return (
            <div className="text-center py-10 text-gray-500">
                No certificate images found.
            </div>
        );
    }

    return (
        <>
            {/* Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        layoutId={`certificate-${index}`}
                        onClick={() => openLightbox(index)}
                        className="relative group aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        whileHover={{ y: -4 }}
                    >
                        <Image
                            src={src}
                            alt={`Certificate ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="bg-black/50 text-white p-2 rounded-full backdrop-blur-sm">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedindex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors"
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={showPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 rounded-full transition-colors hidden sm:block"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={showNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 rounded-full transition-colors hidden sm:block"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            layoutId={`certificate-${selectedindex}`}
                            className="relative w-full max-w-5xl max-h-[90vh] aspect-[4/3] rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        >
                            <Image
                                src={images[selectedindex]}
                                alt="Certificate Preview"
                                fill
                                className="object-contain"
                                priority
                                quality={90}
                            />
                        </motion.div>

                        {/* Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-medium px-4 py-1 bg-black/30 rounded-full backdrop-blur-sm">
                            {selectedindex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
