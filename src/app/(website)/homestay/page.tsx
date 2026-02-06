"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    MapPin, Wifi, Car, Utensils, Coffee, Home, User, CheckCircle,
    Refrigerator, Microwave, Luggage, Ticket, Shirt, Flower2,
    UtensilsCrossed, Bath, Phone, Mail, Facebook, Youtube, Instagram
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
        <main className="min-h-screen bg-white dark:bg-gray-950 pt-24 md:pt-24 pb-16 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[650px] flex items-center justify-center mb-24 overflow-hidden mx-4 rounded-2xl shadow-2xl">

                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/homestay/imgi_97_e6637b86.jpg"
                        alt="Maninder's Home Stay"
                        fill
                        className="object-cover scale-105"
                        priority
                    />

                    {/* Luxury Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
                </div>


                {/* Content */}
                <div className="relative z-10 px-6 lg:px-12 w-full max-w-7xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >

                        {/* Heading */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide drop-shadow-2xl">
                            Maninder’s Home Stay
                        </h1>


                        {/* Subtitle */}
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto mb-14 font-light leading-relaxed">
                            A private luxury villa experience near
                            <span className="text-[#D4AF37] font-medium"> Devguradia Shiva Mandir</span>, Indore
                        </p>


                        {/* CTA Section */}
                        <div className="flex flex-col items-center gap-12">


                            {/* Main Button */}
                            <Link
                                href="https://manindershomestay.com/"
                                target="_blank"
                                className="group inline-flex items-center gap-3 bg-[#CE1117]/90 hover:bg-[#CE1117] text-white px-12 py-3 rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-lg backdrop-blur-md"
                            >
                                Visit Official Website

                                <CheckCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
                            </Link>


                            {/* Contact Section */}
                            <div className="flex flex-col items-center gap-4">

                                <span className="text-sm font-semibold text-gray-300 uppercase tracking-[0.2em] flex items-center gap-2">
                                    {/* <Phone className="w-4 h-4 text-[#CE1117]" /> */}
                                    Instant Reservations
                                </span>


                                <div className="flex flex-wrap justify-center gap-4 mt-2">

                                    {[
                                        "+919425311458",
                                        "+918827085298",
                                        "+919229875776",
                                    ].map((num) => (
                                        <a
                                            key={num}
                                            href={`tel:${num}`}
                                            className="px-6 py-2.5 bg-white/10 hover:bg-[#CE1117]/90 backdrop-blur-lg text-white rounded-full text-sm font-medium transition-all border border-white/20 hover:border-[#CE1117] hover:scale-105 shadow-lg"
                                        >
                                            {num.replace("+91", "+91 ")}
                                        </a>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </section>

            <section>
                <motion.div>
                    <div className="space-y-4 mb-24">
                        {/* Platform Slider */}
                        <div className="w-full relative overflow-hidden mask-gradient-x">
                            <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none" />

                            <div className="flex overflow-hidden">
                                <motion.div
                                    className="flex"
                                    animate={{
                                        x: ["0%", "-50%"]
                                    }}
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 40,
                                            ease: "linear",
                                        },
                                    }}
                                >
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex gap-6 pr-6 shrink-0">
                                            {[
                                                {
                                                    name: "MakeMyTrip",
                                                    icon: "https://www.google.com/s2/favicons?domain=makemytrip.com&sz=64"
                                                },
                                                {
                                                    name: "Hotels.com",
                                                    icon: "https://www.google.com/s2/favicons?domain=hotels.com&sz=64"
                                                },
                                                {
                                                    name: "Goibibo",
                                                    icon: "https://www.google.com/s2/favicons?domain=goibibo.com&sz=64"
                                                },
                                                {
                                                    name: "Airbnb",
                                                    icon: "https://www.google.com/s2/favicons?domain=airbnb.com&sz=64"
                                                },
                                                {
                                                    name: "Booking.com",
                                                    icon: "https://www.google.com/s2/favicons?domain=booking.com&sz=64"
                                                },
                                                {
                                                    name: "Agoda",
                                                    icon: "https://www.google.com/s2/favicons?domain=agoda.com&sz=64"
                                                }
                                            ].map((platform, idx) => (
                                                <div
                                                    key={`${i}-${idx}`}
                                                    className="flex items-center gap-3 bg-white px-6 py-3 whitespace-nowrap"
                                                >
                                                    <Image
                                                        src={platform.icon}
                                                        alt={platform.name}
                                                        width={40}
                                                        height={40}
                                                        className="w-10 h-10 rounded-md"
                                                        unoptimized
                                                    />
                                                    <span className="font-medium text-gray-700 dark:text-gray-200">
                                                        {platform.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section >

            {/* Overview & Image Grid */}
            < section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" >
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
                            Maninder's Home Stay is more than just a place to sleep; it's a villa designed for your comfort. Whether you're here to visit the famous Devguradia Shiva Mandir or exploring the vibrant city of Indore, our homestay offers a perfect base.
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
            </section >

            {/* Distances Section */}
            < section className="bg-white dark:bg-gray-950 py-12 border-t border-gray-100 dark:border-gray-900" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <MapPin className="w-6 h-6 text-[#CE1117]" />
                            Key Distances
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Access key locations easily from our homestay.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[
                            { name: "Railway Station", dist: "5 Km" },
                            { name: "Airport", dist: "15 Km" },
                            { name: "Bus Stand", dist: "6 Km" },
                            { name: "Khajrana Ganesh Mandir", dist: "5 Km" },
                            { name: "Chappan Dukan", dist: "4 km" },
                            { name: "Sarafa Choupati", dist: "7 km" },
                            { name: "Ralamandal", dist: "6 km" },
                            { name: "Mayank Blue Water Park", dist: "300 Metres" },
                            { name: "PitrParvat", dist: "20 Km" },
                            { name: "Pithampur Industrial Area", dist: "40 km" },
                            { name: "Mhow", dist: "30 km" },
                            { name: "Lotus Valley", dist: "31 km" },
                            { name: "Patalpani Water Falls", dist: "37 km" },
                            { name: "Janapaw", dist: "50 km" },
                            { name: "Jam Gate", dist: "57 km" },
                            { name: "Ujjain", dist: "62 km" },
                            { name: "Omkareshwar", dist: "77 km" },
                            { name: "Maheshwar", dist: "95 Km" },
                            { name: "Mandav", dist: "101 km" },
                        ].map((place, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.02 }}
                                className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex flex-col justify-center"
                            >
                                <span className="text-xl font-bold text-[#CE1117] mb-1">
                                    {place.dist}
                                </span>
                                <span className="font-medium text-gray-700 dark:text-gray-300 text-sm leading-tight">
                                    {place.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Detailed Amenities */}
            < section className="bg-gray-50 dark:bg-gray-900 py-20" >
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
            </section >

            {/* Contact Section */}
            < section className="bg-white dark:bg-gray-950 py-20 border-t border-gray-100 dark:border-gray-900" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                    Contact Us
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                                    For reservations and more details, please reach out to us.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/10 flex items-center justify-center text-[#CE1117] shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Call Us</h3>
                                        <div className="flex flex-col gap-1">
                                            <a href="tel:+919425311458" className="text-gray-600 dark:text-gray-400 hover:text-[#CE1117] transition-colors">
                                                +91 942 531 1458
                                            </a>
                                            <a href="tel:+918827085298" className="text-gray-600 dark:text-gray-400 hover:text-[#CE1117] transition-colors">
                                                +91 882 708 5298
                                            </a>
                                            <a href="tel:+919229875776" className="text-gray-600 dark:text-gray-400 hover:text-[#CE1117] transition-colors">
                                                +91 922 987 5776
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/10 flex items-center justify-center text-[#CE1117] shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Us</h3>
                                        <a href="mailto:manindershomestay@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-[#CE1117] transition-colors">
                                            manindershomestay@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a href="https://www.facebook.com/ManinderSChandok" target="_blank" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCfW56czzEdxsc3HnvYTIExw" target="_blank" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#FF0000] hover:text-white transition-all">
                                            <Youtube className="w-5 h-5" />
                                        </a>
                                        <a href="https://www.instagram.com/maninderchandok/" target="_blank" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#E4405F] hover:text-white transition-all">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-100 dark:border-gray-800"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-[#CE1117]" />
                                Homestay Location
                            </h3>

                            <address className="not-italic text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                10 C, 3rd Cross, Sampat Farms,<br />
                                Opp Agarwal Public School,<br />
                                Bicholi Mardana, Near Piplyahana,<br />
                                Indore, M.P 452016
                            </address>

                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.66212169996!2d75.9064!3d22.7035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0d8c0b5e2d%3A0x1d4d823467b7d7a!2sManinder&#39;s%20Home%20Stay!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >
        </main >
    );
}
