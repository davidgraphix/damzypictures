"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Event Manager",
    content: "DamzyPictures captured our event beautifully. Every moment was perfect, and the editing was exceptional.",
    rating: 5,
  },
  {
    name: "Chioma Okafor",
    role: "Wedding Bride",
    content: "Working with Damzy was a dream! The photos and videos are absolutely stunning. We couldn't be happier.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Corporate Director",
    content: "Professional, creative, and reliable. They delivered everything on time and exceeded our expectations.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-foreground text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-semibold text-sm tracking-wider mb-2">CLIENT LOVE</p>
          <h2 className="text-4xl md:text-5xl font-bold">What Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="p-8 bg-white/10 backdrop-blur border border-white/20 rounded hover:border-accent transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-gray-200 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
