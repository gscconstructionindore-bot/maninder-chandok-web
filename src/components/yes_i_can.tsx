"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function YesICanSection() {
  return (
    <section className="relative w-full overflow-hidden py-32 md:py-40 lg:py-48 bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/i_can.png"
          alt="Motivational Speaker"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center h-full">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-6">
            YES I CAN
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-light tracking-wide">
            Believe. Act. Achieve.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
