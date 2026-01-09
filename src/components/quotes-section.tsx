"use client";

import { motion } from "framer-motion";

export default function QuotesSection() {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative group overflow-hidden rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 px-6 py-8 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        {/* Top Accent */}
                        <div className="absolute top-0 w-12 h-1 bg-[#CE1117] transition-all duration-300 group-hover:w-full" />

                        <h3 className="text-xl font-bold tracking-widest text-gray-900 dark:text-white mb-2 uppercase">
                            WASH YOUR HANDS
                        </h3>

                        <p className="text-gray-500 dark:text-gray-400 font-serif italic text-base tracking-wide">
                            "Itni Shakti Hamein Dena Data"
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative group overflow-hidden rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 px-6 py-8 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        {/* Bottom Accent */}
                        <div className="absolute bottom-0 w-12 h-1 bg-[#CE1117] transition-all duration-300 group-hover:w-full" />

                        <h3 className="text-xl font-bold tracking-widest text-gray-900 dark:text-white mb-2 uppercase">
                            YES I CAN
                        </h3>

                        <p className="text-gray-500 dark:text-gray-400 font-serif italic text-base tracking-wide">
                            "Believe. Act. Achieve."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
