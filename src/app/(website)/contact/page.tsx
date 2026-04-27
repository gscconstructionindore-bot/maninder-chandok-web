"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                PUBLIC_KEY
            );

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 4000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-950">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-full blur-3xl" />
                <div className="absolute top-40 left-20 w-20 h-20 border-2 border-red-500/20 rotate-45 dark:border-red-400/20" />
                <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-red-600/20 rotate-12 dark:border-red-500/20" />
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-400/30 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-red-400/25 rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block mb-3 text-sm font-semibold tracking-[0.2em] text-[#CE1117] uppercase">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a question or want to collaborate? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact Information</h2>

                            {[
                                {
                                    icon: <Mail className="w-5 h-5 text-[#CE1117]" />,
                                    label: "Email",
                                    value: "maninder.chandok@gmail.com",
                                    href: "mailto:maninder.chandok@gmail.com",
                                },
                                {
                                    icon: <Phone className="w-5 h-5 text-[#CE1117]" />,
                                    label: "Phone",
                                    value: "+91 98765 43210",
                                    href: "tel:+919876543210",
                                },
                                {
                                    icon: <MapPin className="w-5 h-5 text-[#CE1117]" />,
                                    label: "Location",
                                    value: "India",
                                    href: null,
                                },
                            ].map((item) => (
                                <div key={item.label} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-gray-800 dark:text-gray-200 font-medium hover:text-[#CE1117] transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="text-gray-800 dark:text-gray-200 font-medium">
                                                {item.value}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative gradient card */}
                        <div className="bg-gradient-to-br from-[#CE1117] to-red-700 rounded-2xl shadow-xl p-8 text-white">
                            <h3 className="text-lg font-bold mb-2">Let&apos;s Connect</h3>
                            <p className="text-red-100 text-sm leading-relaxed">
                                Whether you&apos;re looking for leadership training, personal development resources, or a motivating conversation — I&apos;m here to help.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                Send a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Name */}
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        disabled={status === "loading" || status === "success"}
                                        className="px-6 py-4 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                                    />
                                    {/* Email */}
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                        disabled={status === "loading" || status === "success"}
                                        className="px-6 py-4 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                                    />
                                </div>

                                {/* Subject */}
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full px-6 py-4 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                                />

                                {/* Message */}
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    rows={6}
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full px-6 py-4 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 resize-none"
                                />

                                <motion.button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    whileHover={{ scale: status === "idle" || status === "error" ? 1.02 : 1 }}
                                    whileTap={{ scale: status === "idle" || status === "error" ? 0.98 : 1 }}
                                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-600 hover:from-red-700 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg shadow-red-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : status === "success" ? (
                                        "Message Sent!"
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                {status === "success" && (
                                    <motion.p
                                        className="text-green-600 dark:text-green-400 font-medium text-center"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        ✓ Thank you for your message! We&apos;ll get back to you soon.
                                    </motion.p>
                                )}

                                {status === "error" && (
                                    <motion.p
                                        className="text-red-600 dark:text-red-400 font-medium text-center"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Something went wrong. Please try again.
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
