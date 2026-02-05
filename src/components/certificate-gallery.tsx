"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Certificate } from "@/data/certificates";

interface CertificateGalleryProps {
    certificates: Certificate[];
}

export default function CertificateGallery({ certificates }: CertificateGalleryProps) {
    const [selectedindex, setSelectedIndex] = useState<number | null>(null);

    // Group certificates by category
    const groupedCertificates = useMemo(() => {
        const groups: Record<string, Certificate[]> = {};
        certificates.forEach(cert => {
            if (!groups[cert.category]) {
                groups[cert.category] = [];
            }
            groups[cert.category].push(cert);
        });
        return groups;
    }, [certificates]);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const showNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedindex === null) return;
        setSelectedIndex((prev) => (prev === null || prev === certificates.length - 1 ? 0 : prev + 1));
    }, [selectedindex, certificates.length]);

    const showPrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedindex === null) return;
        setSelectedIndex((prev) => (prev === null || prev === 0 ? certificates.length - 1 : prev - 1));
    }, [selectedindex, certificates.length]);

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

    if (!certificates || certificates.length === 0) {
        return (
            <div className="text-center py-10 text-gray-500">
                No certificate images found.
            </div>
        );
    }

    return (
        <>
            <div className="space-y-16">
                {Object.entries(groupedCertificates).map(([category, categoryCerts]) => (
                    <section key={category} className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white capitalize">
                                {category}
                            </h3>
                            <div className="h-px flex-grow bg-gray-200 dark:bg-gray-800" />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {categoryCerts.map((cert) => {
                                // Find the global index for the lightbox
                                const globalIndex = certificates.indexOf(cert);

                                return (
                                    <motion.div
                                        key={cert.id}
                                        layoutId={`certificate-${globalIndex}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        onClick={() => openLightbox(globalIndex)}
                                        className="relative group aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                        whileHover={{ y: -4 }}
                                    >
                                        <Image
                                            src={cert.src}
                                            alt={cert.title}
                                            fill
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <div className="bg-black/50 text-white p-2 rounded-full backdrop-blur-sm">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Numbering Badge */}
                                        <div className="absolute top-2 left-2 bg-[#CE1117] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md z-10">
                                            #{String(globalIndex + 1).padStart(2, '0')}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </section>
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
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
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
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={certificates[selectedindex].src}
                                alt={certificates[selectedindex].title}
                                fill
                                className="object-contain"
                                priority
                                quality={90}
                            />
                        </motion.div>

                        {/* Details */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                            <h3 className="text-white text-lg font-bold">
                                {certificates[selectedindex].title}
                            </h3>
                            <div className="text-white/80 font-medium px-4 py-1 bg-black/30 rounded-full backdrop-blur-sm">
                                {certificates[selectedindex].category} • {selectedindex + 1} / {certificates.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
