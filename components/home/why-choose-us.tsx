"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const reasons = [
  {
    title: "Professionalism",
    description: "We bring professional expertise and dedication to every project",
  },
  {
    title: "Creativity",
    description: "Innovative visual storytelling that stands out",
  },
  {
    title: "Reliability",
    description: "Consistent delivery and dependable service you can count on",
  },
  {
    title: "Excellence",
    description: "High-quality output that exceeds expectations",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold text-sm tracking-wider mb-2">WHY CHOOSE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">DamzyPictures</h2>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-96 md:h-full min-h-96 rounded overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src="/creative-team-collaboration-photography.jpg" alt="Why choose us" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
