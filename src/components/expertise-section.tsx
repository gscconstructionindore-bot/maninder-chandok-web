
"use client";

import { motion } from "framer-motion";
import { Mic2, Users, Lightbulb, Target, Clock, Zap } from "lucide-react";

export default function ExpertiseSection() {
    const services = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Executive Coaching"
        },
        {
            icon: <Mic2 className="w-8 h-8" />,
            title: "Keynote Speaking"
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Life Mastery"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Habit Formation"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Time Management"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Discipline"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
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
                    {/* <motion.p
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Helping you navigate the complexities of leadership and life with clarity, confidence, and purpose.
                    </motion.p> */}
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100/50 dark:border-gray-700/50 group text-center relative overflow-hidden flex-shrink-0 w-32"
                        >
                            {/* Subtle background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/20 text-[#CE1117] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500 shadow-sm group-hover:shadow-lg">
                                {service.icon}
                            </div>
                            <h3 className="relative text-sm font-semibold text-gray-900 dark:text-white tracking-tight leading-tight">
                                {service.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
