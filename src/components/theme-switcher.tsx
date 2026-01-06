"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "light" | "dark" | "system";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Get saved theme or default to light
        const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (newTheme: Theme) => {
        const root = document.documentElement;
        
        // First, always remove dark class
        root.classList.remove("dark");
        
        // Then add it back if needed
        if (newTheme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (systemTheme) {
                root.classList.add("dark");
            }
        } else if (newTheme === "dark") {
            root.classList.add("dark");
        }
        // If light, dark class stays removed
        
        localStorage.setItem("theme", newTheme);
    };

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        applyTheme(newTheme);
        setShowMenu(false);
    };

    if (!mounted) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="relative">
                {/* Theme Button */}
                <motion.button
                    onClick={() => setShowMenu(!showMenu)}
                    className="p-3 bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-full shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                >
                    {theme === "light" && (
                        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    )}
                    {theme === "dark" && (
                        <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                    {theme === "system" && (
                        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    )}
                </motion.button>

                {/* Theme Menu */}
                <AnimatePresence>
                    {showMenu && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-full right-0 mb-2 bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-2xl shadow-xl p-2 min-w-[140px]"
                        >
                            {[
                                { value: "light", label: "Light", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
                                { value: "dark", label: "Dark", icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" },
                                { value: "system", label: "System", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
                            ].map((option) => (
                                <motion.button
                                    key={option.value}
                                    onClick={() => handleThemeChange(option.value as Theme)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                                        theme === option.value
                                            ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={option.icon} />
                                    </svg>
                                    <span className="text-sm font-medium">{option.label}</span>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

