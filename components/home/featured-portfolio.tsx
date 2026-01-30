"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const featured = [
  {
    id: 1,
    title: "Wedding Ceremony",
    category: "Weddings",
    image: "/portfolio-wedding-portrait.jpg",
  },
  {
    id: 2,
    title: "Studio Portrait",
    category: "Studio Shoots",
    image: "/portfolio-studio-portrait.jpg",
  },
  {
    id: 3,
    title: "Corporate Event",
    category: "Corporate",
    image: "/portfolio-corporate-summit.jpg",
  },
  {
    id: 4,
    title: "Documentary",
    category: "Documentaries",
    image: "/portfolio-documentary-sports.jpg",
  },
]

export default function FeaturedPortfolio() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-semibold text-sm tracking-wider mb-2">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featured.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative h-64 md:h-80 overflow-hidden rounded"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 group-hover:from-black/30 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-accent text-sm font-semibold mb-1">{item.category}</p>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 bg-foreground text-white rounded hover:opacity-90 transition-opacity font-semibold"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
