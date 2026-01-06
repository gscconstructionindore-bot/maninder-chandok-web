"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Hide the scroll indicator after scrolling down 400px (roughly past hero section)
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition < 400);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Initial check
        handleScroll();

        // Cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 cursor-pointer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    onClick={scrollToContent}
                >
                    <div className="flex flex-col items-center gap-2">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                                Scroll
                            </span>
                            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mx-auto"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

