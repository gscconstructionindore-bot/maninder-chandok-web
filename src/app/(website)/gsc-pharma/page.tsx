"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FlaskConical, Bell } from "lucide-react";

export default function GscPharmaPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleNotify = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail("");
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/8 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-600/8 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-full blur-3xl" />

                {/* Subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(206,17,23,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(206,17,23,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Geometric accents */}
                <div className="absolute top-24 left-16 w-16 h-16 border-2 border-red-500/15 rotate-45" />
                <div className="absolute bottom-24 right-16 w-12 h-12 border-2 border-red-500/15 rotate-12 rounded-full" />
                <div className="absolute top-1/3 right-20 w-2.5 h-2.5 bg-red-400/30 rounded-full animate-pulse" style={{ animationDuration: "3s" }} />
                <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-red-400/25 rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

                {/* Logo / Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex justify-center mb-8"
                >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#CE1117] to-red-700 flex items-center justify-center shadow-xl shadow-red-500/25">
                        <FlaskConical className="w-10 h-10 text-white" />
                    </div>
                </motion.div>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-900/20 mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CE1117] animate-pulse" />
                    <span className="text-xs font-semibold text-[#CE1117] tracking-widest uppercase">Coming Soon</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
                >
                    GSC Pharma
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.22 }}
                    className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed"
                >
                    Something big is in the making. Our pharmaceutical venture is launching soon — stay tuned for innovations in health and wellness.
                </motion.p>

                {/* Notify form */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50"
                        >
                            <span className="text-xl">✓</span>
                            <p className="text-green-700 dark:text-green-400 font-medium">
                                You&apos;re on the list! We&apos;ll notify you when we launch.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CE1117] focus:border-transparent transition-all text-sm"
                            />
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#CE1117] text-white font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:bg-red-700 transition-colors text-sm whitespace-nowrap"
                            >
                                <Bell className="w-4 h-4" />
                                Notify Me
                            </motion.button>
                        </form>
                    )}
                </motion.div>

                {/* Footer note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="mt-10 text-sm text-gray-400 dark:text-gray-600"
                >
                    Part of the{" "}
                    <span className="font-semibold text-gray-500 dark:text-gray-500">Maninder Singh Chandok</span>{" "}
                    group of ventures
                </motion.p>
            </div>
        </div>
    );
}
