
"use client";

import { motion } from "framer-motion";
import { Mic2, Users, Lightbulb } from "lucide-react";

export default function ExpertiseSection() {
    const services = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Executive Coaching",
            description: "Empowering leaders to unlock their full potential, drive organizational growth, and build high-performance teams through personalized coaching strategies."
        },
        {
            icon: <Mic2 className="w-8 h-8" />,
            title: "Keynote Speaking",
            description: "Inspiring audiences with powerful narratives and actionable insights on leadership, resilience, and personal transformation at global conferences and corporate events."
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Life Mastery",
            description: "Guiding individuals to achieve balance, clarity, and purpose in both personal and professional spheres through proven mindfulness and mastery techniques."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        className="inline-block mb-3 text-sm font-semibold tracking-[0.2em] text-[#CE1117] uppercase"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        What I Do
                    </motion.span>
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        My Expertise
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Helping you navigate the complexities of leadership and life with clarity, confidence, and purpose.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group"
                        >
                            <div className="w-16 h-16 rounded-xl bg-red-50 dark:bg-red-900/20 text-[#CE1117] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
