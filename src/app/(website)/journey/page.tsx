'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JourneyPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const timeline = [
        {
            year: '2020',
            title: 'The Beginning',
            description: 'Started my journey as a passionate speaker with a simple vision - to inspire people and help them achieve their greatest potential.',
            icon: '🎤',
            achievements: [
                'Delivered first keynote speech',
                'Started local speaking engagements',
                'Built confidence and stage presence'
            ]
        },
        {
            year: '2021',
            title: 'Finding My Voice',
            description: 'Developed my unique speaking style and started reaching larger audiences with powerful messages of transformation.',
            icon: '📣',
            achievements: [
                'Spoke at 20+ events',
                'Developed signature keynote topics',
                'Built social media following'
            ]
        },
        {
            year: '2022',
            title: 'Growing Impact',
            description: 'Expanded my reach nationally and began working with corporate clients and educational institutions.',
            icon: '🌟',
            achievements: [
                'Reached 10,000+ audience members',
                'Launched first online course',
                'Published motivational content'
            ]
        },
        {
            year: '2023',
            title: 'Breaking Barriers',
            description: 'Took the leap to international speaking, sharing my message across continents and cultures.',
            icon: '🌍',
            achievements: [
                'Spoke in 15+ countries',
                'Published bestselling book',
                'Started podcast and YouTube channel'
            ]
        },
        {
            year: '2024',
            title: 'Scaling Inspiration',
            description: 'Built a global community and started mentoring the next generation of speakers and leaders.',
            icon: '🚀',
            achievements: [
                'Reached 100,000+ followers',
                'Launched speaker training program',
                'Hosted first international summit'
            ]
        },
        {
            year: '2025',
            title: 'Legacy & Vision',
            description: 'Focused on creating lasting impact through books, courses, and building a movement of positive change.',
            icon: '💎',
            achievements: [
                'Published 3 bestselling books',
                'Built global online community',
                'Achieved 1M+ content views'
            ]
        },
        {
            year: '2026',
            title: 'The Future',
            description: 'Expanding globally with new platforms, live events, and a vision to inspire millions to live their best lives.',
            icon: '✨',
            achievements: [
                'Launching world tour',
                'Creating immersive learning experiences',
                'Building global movement of changemakers'
            ]
        }
    ];

    const values = [
        {
            title: 'Inspiring Action',
            description: 'Motivating people to take bold steps toward their dreams and aspirations.',
            icon: '🎯',
            color: 'from-blue-500 to-purple-600'
        },
        {
            title: 'Authentic Connection',
            description: 'Building genuine relationships and creating moments that truly resonate with audiences.',
            icon: '🤝',
            color: 'from-green-500 to-teal-600'
        },
        {
            title: 'Transformative Message',
            description: 'Crafting powerful stories and insights that create lasting positive change.',
            icon: '💫',
            color: 'from-yellow-500 to-orange-600'
        },
        {
            title: 'Global Impact',
            description: 'Reaching across borders and cultures to inspire millions worldwide.',
            icon: '🌍',
            color: 'from-indigo-500 to-purple-600'
        }
    ];

    const stats = [
        { number: '1M+', label: 'Lives Inspired' },
        { number: '50+', label: 'Keynote Speeches' },
        { number: '15+', label: 'Countries Visited' },
        { number: '3', label: 'Bestselling Books' }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden text-gray-900 pt-14">
                <div className="absolute inset-0"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            My Journey
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                            From a passionate beginner to a global motivational speaker - this is my story of inspiring millions to live their best lives.
                        </p>
                    </motion.div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* Timeline Section */}
            <div className="py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-red-500"></div>

                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`relative flex items-center mb-8 sm:mb-12 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12 md:text-right' : 'md:pl-8 lg:pl-12'}`}>
                                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                                        <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
                                            <span className="text-2xl sm:text-3xl">{item.icon}</span>
                                            <div className="text-center sm:text-left">
                                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-red-600 dark:text-red-400 font-semibold">
                                                    {item.year}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                                            {item.description}
                                        </p>
                                        <ul className="space-y-1 sm:space-y-2">
                                            {item.achievements.map((achievement, achIndex) => (
                                                <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-red-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg z-10">
                                    {item.year.slice(-2)}
                                </div>

                                {/* Spacer */}
                                <div className="flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            My Core Values
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            These principles guide everything I build and every decision I make.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                    {value.title}
                                </h3>
                                {/* <p className="text-gray-600 dark:text-gray-400">
                                    {value.description}
                                </p> */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
