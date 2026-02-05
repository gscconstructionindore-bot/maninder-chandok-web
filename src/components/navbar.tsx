"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";
import AuthModal from "@/components/auth-modal";
import UserMenu from "@/components/user-menu";

type Theme = "light" | "dark" | "system";

export default function Navbar() {
    const { user, isLoading } = useAuth();
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (newTheme: Theme) => {
        const root = document.documentElement;
        root.classList.remove("dark");

        if (newTheme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (systemTheme) {
                root.classList.add("dark");
            }
        } else if (newTheme === "dark") {
            root.classList.add("dark");
        }

        localStorage.setItem("theme", newTheme);
    };

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        applyTheme(newTheme);
        setShowThemeMenu(false);
    };
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
            <motion.nav
                className="bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-full shadow-lg shadow-black/5 dark:shadow-black/20"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: 'transform, opacity' }}
            >
                <div className="flex items-center gap-2 px-4 py-2.5">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/products", label: "Ebooks" },
                            { href: "/gallery", label: "Gallery" },
                            { href: "/about", label: "About" },
                            { href: "/blog", label: "Blog" },
                            { href: "/journey", label: "Journey" },
                            { href: "/homestay", label: "Homestay" },
                            // ...(user ? [
                            //     { href: "/profile", label: "Profile" },
                            //     { href: "/orders", label: "Orders" }
                            // ] : [])
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Divider */}
                    {/* <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2" /> */}

                    {/* Theme Switcher */}
                    {/* {mounted && (
                        <motion.div 
                            className="relative flex items-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <motion.button
                                onClick={() => setShowThemeMenu(!showThemeMenu)}
                                className="p-2 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {theme === "light" && (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )}
                                {theme === "dark" && (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                                {theme === "system" && (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )}
                            </motion.button>

                            <AnimatePresence>
                                {showThemeMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full right-0 mt-2 bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-2xl shadow-xl p-2 min-w-[140px]"
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
                        </motion.div>
                    )} */}
                    {/* Divider */}
                    {/* <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2" /> */}

                    {/* CTA Button / User Menu */}
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.25 }}
                    >
                        {isLoading ? (
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                        ) : user ? (
                            <UserMenu />
                        ) : (
                            <motion.button
                                onClick={() => setShowAuthModal(true)}
                                className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full font-medium text-sm transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Sign In
                            </motion.button>
                        )}
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden fixed top-20 left-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-3xl shadow-xl shadow-black/10 dark:shadow-black/30 overflow-hidden"
                    >
                        <div className="p-4 space-y-1">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/products", label: "Ebooks" },
                                { href: "/gallery", label: "Gallery" },
                                { href: "/about", label: "About" },
                                { href: "/blog", label: "Blog" },
                                { href: "/journey", label: "Journey" },
                                { href: "/homestay", label: "Homestay" },
                            ].map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 rounded-2xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Auth Modal */}
            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
            />
        </div>
    );
}
