"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call - replace with actual newsletter service
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background elements matching the theme */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-32 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-red-400/30 via-red-300/20 to-transparent dark:from-red-600/20 dark:via-red-700/15 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-1/4 w-[550px] h-[550px] bg-gradient-to-tl from-red-400/25 via-red-300/18 to-transparent dark:from-red-600/18 dark:via-red-700/12 rounded-full blur-3xl" />
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-1/2 left-10 w-32 h-32 border-[3px] border-red-500/40 dark:border-red-500/30 rotate-12 rounded-full shadow-lg shadow-red-500/10" />
        <div className="absolute top-20 right-16 w-24 h-24 border-[3px] border-red-500/35 dark:border-red-500/28 -rotate-6 rounded-full shadow-lg shadow-red-500/10" />
        
        {/* Diagonal stripes pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-15" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(206, 17, 23, 0.18) 50px, rgba(206, 17, 23, 0.18) 51px)'
        }} />
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 right-1/3 w-2.5 h-64 bg-gradient-to-b from-transparent via-red-500/30 dark:via-red-500/25 to-transparent rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-2.5 h-56 bg-gradient-to-t from-transparent via-red-500/28 dark:via-red-500/22 to-transparent rounded-full" />
        
        {/* Small accent elements */}
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500/45 dark:bg-red-500/35 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/2 left-1/3 w-3 h-3 bg-red-500/40 dark:bg-red-500/30 rounded-full" />
        <div className="absolute top-2/3 left-1/4 w-2.5 h-2.5 bg-red-500/40 dark:bg-red-500/30 rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.8s' }} />
        
        {/* Corner elements */}
        <div className="absolute top-40 left-1/5 w-8 h-8 border-l-2 border-t-2 border-red-500/25 dark:border-red-500/18 rotate-45" />
        <div className="absolute bottom-40 right-1/5 w-6 h-6 border-r-2 border-b-2 border-red-500/25 dark:border-red-500/18 -rotate-12" />
      </div>
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/40 dark:via-red-600/30 to-transparent" />
      
      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px", amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Eyebrow */}
          <motion.span 
            className="inline-block mb-4 text-sm font-semibold tracking-widest text-red-600 dark:text-red-400 uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Stay Connected
          </motion.span>

          {/* Title */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Join Our Newsletter
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Get exclusive insights, motivational content, and updates on upcoming events delivered straight to your inbox.
          </motion.p>

          {/* Newsletter Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading" || status === "success"}
                className="flex-1 px-6 py-4 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-600 hover:from-red-700 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg shadow-red-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: status === "idle" || status === "error" ? 1.02 : 1 }}
                whileTap={{ scale: status === "idle" || status === "error" ? 0.98 : 1 }}
              >
                {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
              </motion.button>
            </div>
            
            {status === "success" && (
              <motion.p 
                className="mt-4 text-green-600 dark:text-green-400 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                ✓ Thank you for subscribing!
              </motion.p>
            )}
            
            {status === "error" && (
              <motion.p 
                className="mt-4 text-red-600 dark:text-red-400 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>

          {/* Privacy note */}
          <motion.p 
            className="mt-6 text-sm text-gray-500 dark:text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/40 dark:via-red-600/30 to-transparent" />
    </section>
  );
}
