"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const platformIcons = {
    instagram: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    ),
    facebook: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    ),
    youtube: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    ),
    twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    email: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
};

const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "#programs", label: "Programs" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
    { 
        platform: "instagram", 
        label: "Instagram", 
        href: "https://www.instagram.com/maninderchandok/",
        username: "@maninderchandok"
    },
    { 
        platform: "youtube", 
        label: "YouTube", 
        href: "https://www.youtube.com/channel/UCfW56czzEdxsc3HnvYTIExw",
        username: "Maninder Chandok"
    },
    { 
        platform: "facebook", 
        label: "Facebook", 
        href: "https://www.facebook.com/ManinderSChandok",
        username: "ManinderSChandok"
    },
    { 
        platform: "twitter", 
        label: "Twitter", 
        href: "https://x.com/ManinderChandok",
        username: "@ManinderChandok"
    },
];

const quickLinks = [
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blog", label: "Blog" },
    { href: "#careers", label: "Careers" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-b from-slate-900 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-black text-white">
            {/* Rich sophisticated dark background */}
            <div className="absolute inset-0 -z-10">
                {/* Rich subtle gradient rays from top */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-gradient-to-b from-indigo-800/12 via-slate-700/8 to-transparent rounded-full blur-3xl" />
                <div className="absolute top-0 right-1/3 w-[450px] h-[350px] bg-gradient-to-b from-purple-800/10 via-gray-700/6 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] bg-gradient-to-t from-blue-900/8 to-transparent rounded-full blur-3xl" />
                
                {/* Refined dot matrix pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(199_210_254/0.08)_1px,transparent_0)] bg-[length:40px_40px]" />
                
                {/* Elegant border accents with color */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/25 to-transparent" />
                
                {/* Professional geometric elements */}
                <div className="absolute top-32 right-24 w-36 h-36 border-[2px] border-indigo-400/15 rounded-full shadow-lg shadow-indigo-500/5" />
                <div className="absolute bottom-32 left-32 w-28 h-28 border-[2px] border-purple-400/12 rotate-45 rounded-lg shadow-lg shadow-purple-500/5" />
                
                {/* Accent elements with subtle color */}
                <div className="absolute top-1/2 left-1/5 w-20 h-20 border-[2px] border-blue-400/10 rounded-full" />
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-[2px] border-indigo-400/12 rotate-12 rounded-lg" />
                
                {/* Small professional dots */}
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-400/20 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-1/2 left-1/4 w-2.5 h-2.5 bg-purple-400/18 rounded-full" />
                <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-blue-400/15 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
                <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-indigo-400/15 rounded-full" />
                
                {/* Corner accent lines */}
                <div className="absolute top-20 left-20 w-12 h-12 border-l-2 border-t-2 border-indigo-400/15 rounded-tl-lg" />
                <div className="absolute bottom-20 right-20 w-12 h-12 border-r-2 border-b-2 border-purple-400/15 rounded-br-lg" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-white">
                            Maninder Singh Chandok
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Transforming leaders and organizations through innovative training programs and consultancy services.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            {platformIcons.email}
                            <a href="mailto:maninder.chandok@gmail.com" className="hover:text-white transition-colors duration-200">
                                maninder.chandok@gmail.com
                            </a>
                        </div>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {navigationLinks.map((link, index) => (
                                <motion.li 
                                    key={link.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-white transition-all duration-200 mr-0 group-hover:mr-2" />
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li 
                                    key={link.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-white transition-all duration-200 mr-0 group-hover:mr-2" />
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Connect With Us
                        </h4>
                        <ul className="space-y-3">
                            {socialLinks.map((social, index) => (
                                <motion.li 
                                    key={social.platform}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
                                >
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200"
                                    >
                                        <motion.div 
                                            className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/40 group-hover:shadow-md transition-all duration-200"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {platformIcons[social.platform as keyof typeof platformIcons]}
                                        </motion.div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">{social.label}</span>
                                            <span className="text-xs text-gray-400">{social.username}</span>
                                        </div>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div 
                    className="border-t border-white/10 my-8"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                />

                {/* Bottom Footer */}
                <motion.div 
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                >
                    <p className="text-sm text-gray-400 text-center md:text-left">
                        © {currentYear} Maninder Singh Chandok. All rights reserved.
                    </p>
                    
                    <div className="flex items-center gap-6">
                        <Link 
                            href="/privacy" 
                            className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                        <Link 
                            href="/terms" 
                            className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>

                {/* Scroll to Top Button */}
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-50"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.button>
            </div>
        </footer>
    );
}

