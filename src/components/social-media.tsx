"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ReelData {
    id: number;
    platform: "instagram" | "facebook" | "youtube";
    embedUrl: string;
    title: string;
}

const reels: ReelData[] = [
    {
        id: 1,
        platform: "instagram",
        embedUrl: "https://www.instagram.com/reel/DSywh9AEcBi/embed",
        title: "Leadership Training Insights",
    },
    {
        id: 2,
        platform: "instagram",
        embedUrl: "https://www.instagram.com/reel/DRyg7NyAioG/embed",
        title: "Professional Development Tips"
    },
    {
        id: 3,
        platform: "instagram",
        embedUrl: "https://www.instagram.com/reel/DQHElafiecM/embed",
        title: "Leadership Training",
    },
    {
        id: 4,
        platform: "instagram",
        embedUrl: "https://www.instagram.com/reel/DSQLKOqAk0F/embed",
        title: "Life Coaching",
    },
    {
        id: 5,
        platform: "instagram",
        embedUrl: "https://www.instagram.com/reel/DRrVfNDCo1O/embed",
        title: "Daily Inspiration",
    },
];

const platformBadgeColors = {
    instagram: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
    facebook: "bg-[#1877F2]",
    youtube: "bg-[#FF0000]",
};

const platformIcons = {
    instagram: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
            <defs>
                <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#833AB4' }} />
                    <stop offset="50%" style={{ stopColor: '#E1306C' }} />
                    <stop offset="100%" style={{ stopColor: '#FCAF45' }} />
                </linearGradient>
            </defs>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    ),
    facebook: (
        <svg className="w-full h-full" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    ),
    youtube: (
        <svg className="w-full h-full" fill="#FF0000" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    ),
    twitter: (
        <svg className="w-full h-full" fill="#000000" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
};

const platformIconsWhite = {
    instagram: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    ),
    facebook: (
        <svg className="w-full h-full" fill="white" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    ),
    youtube: (
        <svg className="w-full h-full" fill="white" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    ),
};

export default function SocialMedia() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [windowWidth, setWindowWidth] = useState(768);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            if (width < 640) setItemsPerView(1);
            else if (width < 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        // Load Instagram embed script
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    const maxSlides = Math.max(0, reels.length - itemsPerView);

    const nextSlide = () => {
        setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    };

    // Ensure currentSlide is within bounds after resize
    useEffect(() => {
        if (currentSlide > maxSlides) {
            setCurrentSlide(maxSlides);
        }
    }, [itemsPerView, maxSlides, currentSlide]);

    return (
        <section className="relative overflow-hidden w-full bg-white dark:bg-gray-950">
            {/* Subtle premium background */}
            <div className="absolute inset-0 -z-10">
                {/* Minimal gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-500/8 to-transparent dark:from-fuchsia-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-violet-500/8 to-transparent dark:from-violet-500/5 rounded-full blur-3xl" />

                {/* Subtle top border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px", amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                        Latest from Instagram
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Watch my recent insights and motivational content
                    </p>
                </motion.div>

                {/* Instagram Slider */}
                <div className="max-w-6xl mx-auto px-4 md:px-0">
                    <div className="relative">
                        {/* Slider Container */}
                        <div className="overflow-hidden p-2">
                            <motion.div
                                className="flex gap-4 md:gap-6"
                                animate={{ x: `-${currentSlide * (100 / itemsPerView)}%` }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {reels.map((reel, index) => (
                                    <motion.div
                                        key={reel.id}
                                        className="group relative flex-shrink-0 aspect-[9/16] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-500"
                                        style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * (windowWidth < 768 ? 16 : 24) / itemsPerView}px)` }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                                        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        {/* Video Embed */}
                                        <iframe
                                            src={reel.embedUrl}
                                            className="absolute inset-0 w-full h-full"
                                            frameBorder="0"
                                            scrolling="no"
                                            allow="encrypted-media; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            title={reel.title}
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <p className="text-white font-medium text-xs">{reel.title}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Navigation Buttons */}
                        {reels.length > itemsPerView && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    disabled={currentSlide === 0}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group hover:scale-110"
                                    aria-label="Previous slide"
                                >
                                    <svg className="w-5 h-5 text-gray-900 dark:text-white transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={nextSlide}
                                    disabled={currentSlide === maxSlides}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group hover:scale-110"
                                    aria-label="Next slide"
                                >
                                    <svg className="w-5 h-5 text-gray-900 dark:text-white transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>

                    {/* Slider Indicators */}
                    {reels.length > itemsPerView && (
                        <div className="flex justify-center gap-2 mt-8">
                            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index
                                            ? 'w-8 bg-gray-900 dark:bg-white'
                                            : 'w-1.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px", amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <a
                        href="https://www.instagram.com/maninderchandok/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <div className="w-5 h-5">
                            {platformIconsWhite.instagram}
                        </div>
                        <span>Follow on Instagram</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

