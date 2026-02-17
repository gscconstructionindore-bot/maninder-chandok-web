"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type GalleryCategoryData = {
  _id: string;
  title: string;
  photos: {
    _id: string;
    title: string;
    alt: string;
    image: SanityImageSource;
  }[];
};

type GalleryPhoto = {
  _id: string;
  title: string;
  alt: string;
  image: SanityImageSource;
  category: string;
};

export default function GalleryLightbox({ categories }: { categories: GalleryCategoryData[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const allPhotos = useMemo<GalleryPhoto[]>(() => {
    return categories.flatMap((category) =>
      category.photos.map((photo) => ({
        ...photo,
        category: category.title,
      }))
    );
  }, [categories]);

  const photoIndexById = useMemo(() => {
    const lookup = new Map<string, number>();
    allPhotos.forEach((photo, index) => lookup.set(photo._id, index));
    return lookup;
  }, [allPhotos]);

  const closeLightbox = () => setSelectedIndex(null);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null || allPhotos.length === 0) return;
    setSelectedIndex((prev) => (prev === null || prev === allPhotos.length - 1 ? 0 : prev + 1));
  }, [selectedIndex, allPhotos.length]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null || allPhotos.length === 0) return;
    setSelectedIndex((prev) => (prev === null || prev === 0 ? allPhotos.length - 1 : prev - 1));
  }, [selectedIndex, allPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  if (categories.length === 0) {
    return (
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Gallery is empty. Upload your photos in Sanity to show them here.
        </p>
      </section>
    );
  }

  return (
    <>
      <div className="space-y-24">
        {categories.map((category) => {
          if (category.photos.length === 0) {
            return null;
          }

          return (
            <section key={category._id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow max-w-[50px]" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow" />
              </div>

              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {category.photos.map((photo) => {
                  const globalIndex = photoIndexById.get(photo._id);
                  if (globalIndex === undefined) return null;

                  return (
                    <motion.button
                      key={photo._id}
                      layoutId={`gallery-${photo._id}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedIndex(globalIndex)}
                      className="w-full text-left break-inside-avoid rounded-2xl overflow-hidden group relative cursor-pointer"
                    >
                      <Image
                        src={urlFor(photo.image).width(1000).quality(85).url()}
                        alt={photo.alt}
                        width={1000}
                        height={1300}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                    </motion.button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && allPhotos[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors"
            >
              <X size={32} />
            </button>

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

            <motion.div
              layoutId={`gallery-${allPhotos[selectedIndex]._id}`}
              className="relative w-full max-w-6xl max-h-[88vh] h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={urlFor(allPhotos[selectedIndex].image).width(2000).quality(90).url()}
                alt={allPhotos[selectedIndex].alt}
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <h3 className="text-white text-lg font-bold text-center px-4">
                {allPhotos[selectedIndex].title}
              </h3>
              <div className="text-white/80 font-medium px-4 py-1 bg-black/30 rounded-full backdrop-blur-sm">
                {allPhotos[selectedIndex].category} • {selectedIndex + 1} / {allPhotos.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
