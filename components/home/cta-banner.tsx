"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

export default function CTABanner() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-accent/10 to-accent/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ready to Work Together?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Let's create something extraordinary. Get in touch with us today to discuss your project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-foreground text-white rounded hover:opacity-90 transition-opacity font-semibold"
            >
              Start a Project
            </Link>
            <a
              href="https://wa.me/2347084036843"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-foreground text-foreground rounded hover:bg-foreground hover:text-white transition-all font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
