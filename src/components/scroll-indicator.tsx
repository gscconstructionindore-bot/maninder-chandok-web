"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Hide the scroll indicator after scrolling down 400px (roughly past hero section)
                    const scrollPosition = window.scrollY;
                    setIsVisible(scrollPosition < 400);
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Add scroll event listener with passive option for better performance
        window.addEventListener("scroll", handleScroll, { passive: true });

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
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    onClick={scrollToContent}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <motion.div
                            animate={{ y: [0, 4, 0] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1],
                                repeatType: "loop"
                            }}
                            className="flex flex-col items-center"
                            style={{ willChange: 'transform' }}
                        >
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                                Scroll
                            </span>
                            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: [0.45, 0, 0.55, 1],
                                        repeatType: "loop"
                                    }}
                                    className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mx-auto"
                                    style={{ willChange: 'transform' }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

