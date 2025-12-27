"use client"

import { motion } from "framer-motion"
import { Camera, Video, Radio, Sparkles, Bone as Drone, Layers } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography for events, studios, corporate, lifestyle, and special moments",
  },
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic video production capturing your story with visual excellence",
  },
  {
    icon: Radio,
    title: "Live Streaming",
    description: "Professional live streaming and broadcasting for events and online content",
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    description: "Digital content production tailored to your brand and platform",
  },
  {
    icon: Drone,
    title: "Drone Services",
    description: "Aerial photography and videography for unique perspectives",
  },
  {
    icon: Layers,
    title: "Multimedia",
    description: "Comprehensive multimedia solutions for all your creative needs",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-semibold text-sm tracking-wider mb-2">WHAT WE DO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-8 bg-background rounded border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <service.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity font-semibold"
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
