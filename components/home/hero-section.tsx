"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-foreground pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/cinematic-photography-studio-hero-image.jpg"
          alt="Cinematic photography hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Capturing Moments with
            <br />
            <span className="text-accent">Authenticity, Clarity & Class</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional photography, videography, live streaming, and multimedia content creation that tells your story
            with visual excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity font-semibold"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-accent text-accent rounded hover:bg-accent hover:text-accent-foreground transition-all font-semibold"
            >
              Book a Session
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-accent rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
