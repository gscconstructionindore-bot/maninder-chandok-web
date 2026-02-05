"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    MapPin, Wifi, Car, Utensils, Coffee, Home, User, CheckCircle,
    Refrigerator, Microwave, Luggage, Ticket, Shirt, Flower2,
    UtensilsCrossed, Bath
} from "lucide-react";

export default function HomestayPage() {
    const amenities = [
        {
            category: "Kitchen & Dining",
            items: [
                { icon: UtensilsCrossed, label: "Shared Kitchen", description: "Fully equipped for your cooking needs." },
                { icon: Refrigerator, label: "Mini Fridge", description: "Keep your beverages and snacks cool." },
                { icon: Microwave, label: "Microwave", description: "Quickly heat up your meals." },
                { icon: Coffee, label: "Cookware & Utensils", description: "Pots, pans, and dishes provided." },
            ]
        },
        {
            category: "Comfort & Convenience",
            items: [
                { icon: Bath, label: "Private Bathroom", description: "Personal space for your comfort." },
                { icon: Shirt, label: "Laundry Facilities", description: "Self-serve laundry available." },
                { icon: Luggage, label: "Luggage Storage", description: "Secure storage for your bags." },
                { icon: Ticket, label: "Tour Assistance", description: "Help with booking tickets and tours." },
            ]
        },
        {
            category: "Outdoor & Connectivity",
            items: [
                { icon: Home, label: "Rooftop Terrace", description: "Relax and enjoy the panoramic views." },
                { icon: Flower2, label: "Garden", description: "A peaceful green space to unwind." },
                { icon: Car, label: "Free Parking", description: "Safe and complimentary parking." },
                { icon: Wifi, label: "Free Wi-Fi", description: "Stay connected throughout your stay." },
            ]
        }
    ];

    const galleryImages = [
        "/homestay/imgi_100_62c27ff3.jpg",
        "/homestay/imgi_101_3d05fdcd.jpg",
        "/homestay/imgi_97_e6637b86.jpg",
        "/homestay/imgi_98_17a8be66.jpg",
        "/homestay/imgi_99_5678d76d.jpg",
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 pt-24 md:pt-32 pb-16 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-block mb-3 text-sm font-semibold tracking-[0.2em] text-[#CE1117] uppercase">
                        Villa Experience
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Maninder Home Stay
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                        Experience the comfort of a private villa with the warmth of a home. Located near the serene Devguradia Shiva Mandir in Indore.
                    </p>
                    <div className="flex flex-col items-center gap-8">
                        <Link
                            href="https://manindershomestay.com/"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-[#CE1117] hover:bg-[#a60d12] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Visit Official Website
                            <CheckCircle className="w-5 h-5" />
                        </Link>

                        <div className="space-y-4">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Or book via
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    {
                                        name: "MakeMyTrip",
                                        url: "https://www.makemytrip.com/hotels/maninder_s_home_stay-details-indore.html",
                                        icon: "https://www.google.com/s2/favicons?domain=makemytrip.com&sz=64"
                                    },
                                    {
                                        name: "Hotels.com",
                                        url: "https://in.hotels.com/ho3099746528/maninder-home-stay-indore-india/",
                                        icon: "https://www.google.com/s2/favicons?domain=hotels.com&sz=64"
                                    },
                                    {
                                        name: "Goibibo",
                                        url: "https://www.goibibo.com/hotels/maninders-home-stay-hotel-in-indore-7574679909884077105/",
                                        icon: "https://www.google.com/s2/favicons?domain=goibibo.com&sz=64"
                                    }
                                ].map((platform) => (
                                    <Link
                                        key={platform.name}
                                        href={platform.url}
                                        target="_blank"
                                        className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-5 py-2.5 rounded-xl hover:border-[#CE1117] hover:shadow-md transition-all group"
                                    >
                                        <Image
                                            src={platform.icon}
                                            alt={platform.name}
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 rounded-md"
                                            unoptimized
                                        />
                                        <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-[#CE1117]">
                                            {platform.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Overview & Image Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Your Home in Indore
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Maninder Home Stay is more than just a place to sleep; it's a villa designed for your comfort. Whether you're here to visit the famous Devguradia Shiva Mandir or exploring the vibrant city of Indore, our homestay offers a perfect base.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            We pride ourselves on providing essential amenities like a fully equipped shared kitchen, laundry facilities, and a beautiful rooftop terrace to make your stay memorable.
                        </p>
                        <div className="flex items-start gap-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                            <MapPin className="w-6 h-6 text-[#CE1117] mt-1 shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1">Excellent Location</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Strategic location with easy access to local attractions.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {galleryImages.map((src, index) => (
                            <div key={index} className={`relative rounded-2xl overflow-hidden ${index === 0 ? "col-span-2 row-span-2" : ""}`}>
                                <Image
                                    src={src}
                                    alt={`Homestay view ${index + 1}`}
                                    width={index === 0 ? 800 : 400}
                                    height={index === 0 ? 600 : 400}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Detailed Amenities */}
            <section className="bg-gray-50 dark:bg-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            All Amenities
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Everything you need for a comfortable and convenient stay.
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {amenities.map((category, catIndex) => (
                            <div key={catIndex}>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
                                    {category.category}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {category.items.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#CE1117]/30 hover:shadow-lg transition-all group"
                                        >
                                            <div className="w-10 h-10 bg-red-50 dark:bg-red-900/10 rounded-xl flex items-center justify-center text-[#CE1117] mb-4 group-hover:scale-110 transition-transform">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                                                {item.label}
                                            </h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
