"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X, ZoomIn } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Elegant Wedding Ceremony",
    category: "Weddings",
    image: "/elegant-wedding.jpeg",
    description: "Capturing the most important day with cinematic perfection",
  },
  {
    id: 2,
    title: "Corporate Summit ",
    category: "Corporate",
    image: "/cooperate-summit.jpeg",
    description: "Professional event coverage for 500+ attendees",
  },
  {
    id: 3,
    title: "Fashion Brand Lookbook",
    category: "Studio Shoots",
    image: "/portfolio-fashion-lookbook.jpg",
    description: "High-end fashion photography and styling",
  },
  {
    id: 4,
    title: "Sports and Entertainment Documentary",
    category: "Documentaries",
    image: "/portfolio-documentary-sports.jpg",
    description: "In-depth storytelling of athletes and entertainers",
  },
  {
    id: 5,
    title: "Lifestyle Campaign",
    category: "Lifestyle",
    image: "/portfolio-lifestyle-campaign.jpg",
    description: "Authentic moments captured with artistic vision",
  },
  {
    id: 6,
    title: "Product Photography Series",
    category: "Studio Shoots",
    image: "/portfolio-product-photography.jpg",
    description: "Professional product showcase for e-commerce",
  },
  {
    id: 7,
    title: "Wedding Reception Dance",
    category: "Weddings",
    image: "/portfolio-wedding-reception.jpg",
    description: "Candid moments of joy and celebration",
  },

    {
    id: 8,
    title: "Social event coverage",
    category: "Social Events",
    image: "/portfolio-social-event.jpg",
    description: "Vibrant coverage of social gatherings and parties",
  },
  {
    id: 9,
    title: "Brand Commercial Video",
    category: "Documentaries",
    image: "/portfolio-brand-commercial.jpg",
    description: "Compelling visual narrative for brand promotion",
  },
  {
    id: 10,
    title: "Educational Event Shoot",
    category: "Corporate",
    image: "/portfolio-educational-event.jpg",
    description: "Capturing key moments from seminars and Educational insights",
  },
  {
    id: 11,
    title: "Festival Live Coverage",
    category: "Lifestyle",
    image: "/portfolio-festival-live.jpg",
    description: "Energetic coverage of cultural events",
  },
  {
    id: 12,
    title: "Studio Portrait Session",
    category: "Studio Shoots",
    image: "/portfolio-studio-portrait.jpg",
    description: "Professional headshots and portraits",
  },
  {
    id: 13,
    title: "Concert Live Streaming",
    category: "Documentaries",
    image: "/portfolio-concert-live.jpeg",
    description: "Professional live streaming and production",
  },
    {
    id: 14,
    title: "Portrait wedding Photography",
    category: "Weddings",
    image: "/portfolio-wedding-portrait.jpg",
    description: "Timeless portraits capturing love and connection",
  },
  {
    id: 15,
    title: "Convocation",
    category: "Studio Shoots",
    image: "/convocation.jpeg",
    description: "Professional Convocation Portrait",
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null)

  const categories = ["All", "Weddings", "Corporate", "Studio Shoots", "Documentaries", "Lifestyle"]

  const filteredItems =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 md:h-96 w-full overflow-hidden bg-foreground">
        <Image
          src="/bg5.jpg" 
          alt="Our Portfolio"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/50 to-transparent" />

        <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Our <span className="text-accent">Portfolio</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our collection of creative works and visual stories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 md:px-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-background text-foreground border border-border hover:border-accent"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative h-72 overflow-hidden rounded cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 group-hover:from-black/20 group-hover:via-black/40 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transform group-hover:scale-105 transition-transform duration-300">
                    <p className="text-accent text-sm font-semibold mb-2">{item.category}</p>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-200 text-sm line-clamp-2 mb-4">{item.description}</p>

                    <motion.div
                      className="flex items-center justify-center w-10 h-10 bg-accent rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ZoomIn className="w-5 h-5 text-accent-foreground" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] rounded overflow-hidden"
            >
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/75 rounded-full transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <p className="text-accent text-sm font-semibold mb-2">{selectedImage.category}</p>
                <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "500+", label: "Happy Clients" },
              { number: "7+", label: "Years Experience" },
              { number: "10+", label: "Awards Won" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</h3>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Impressed by Our <span className="text-accent">Work?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's create something amazing together. Book a session or consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity font-semibold"
              >
                Book a Session
              </Link>
              <a
                href="https://wa.me/2347084036843"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-accent text-accent rounded hover:bg-accent hover:text-accent-foreground transition-all font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
