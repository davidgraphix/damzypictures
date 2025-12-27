"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function AboutSnapshot() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative h-96 md:h-full min-h-96 rounded overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src="/professional-photographer-at-work.jpg" alt="DamzyPictures team" fill className="object-cover" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-accent font-semibold text-sm tracking-wider mb-2">ABOUT US</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Creative Visual <span className="text-accent">Storytelling</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Damzy Pictures is a creative media and visual storytelling brand dedicated to capturing moments with
              authenticity, clarity, and class. We specialize in photography, videography, live streaming/broadcasting,
              event documentation, and digital content creation.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Our mission is to deliver visually compelling stories that connect emotionally and leave lasting
              impressions on your audience.
            </p>

            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-foreground text-white rounded hover:opacity-90 transition-opacity font-semibold mt-4"
            >
              Learn Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
