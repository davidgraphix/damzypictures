"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, Mail, MessageCircle, Send } from "lucide-react"
import emailjs from "@emailjs/browser"

// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Use a generic template that works with any form structure
      const templateParams = {
        to_email: "damzypictures@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      }

      // Using emailjs with template ID
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_damzy",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_damzy",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )

      if (result.status === 200) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })

        // Reset submitted state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (err) {
      console.error("Error sending email:", err)
      setError("Failed to send message. Please try again or contact us via WhatsApp.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 md:h-96 w-full overflow-hidden bg-foreground">
        <Image
          src="/contact-hero-damzy-pictures.jpg"
          alt="Contact Us"
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
              Let's <span className="text-accent">Connect</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Get in touch with us to discuss your next project</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Phone */}
            <motion.div
              className="p-8 border border-border rounded hover:border-accent hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <Phone className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Phone</h3>
              <div className="space-y-3">
                <a href="tel:+2347084036843" className="block text-gray-600 hover:text-accent transition-colors">
                  +234 708 403 6843
                </a>
                <a href="tel:+2348118072288" className="block text-gray-600 hover:text-accent transition-colors">
                  +234 811 807 2288
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="p-8 border border-border rounded hover:border-accent hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Mail className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Email</h3>
              <a
                href="mailto:damzypictures@gmail.com"
                className="text-gray-600 hover:text-accent transition-colors block"
              >
                damzypictures@gmail.com
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              className="p-8 border border-border rounded hover:border-accent hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">WhatsApp</h3>
              <a
                href="https://wa.me/2347084036843"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors block"
              >
                Chat Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <p className="text-accent font-semibold text-sm tracking-wider mb-2">SEND US A MESSAGE</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Get <span className="text-accent">In Touch</span>
                </h2>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                    >
                      <option value="">Select a service</option>
                      <option value="Photography">Photography</option>
                      <option value="Videography">Videography</option>
                      <option value="Live Streaming">Live Streaming</option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="Drone Services">Drone Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm"
                  >
                    Thank you for your message! We'll be in touch soon.
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-3 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  {isLoading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Business Hours */}
              <div className="p-8 bg-white rounded border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Business Hours</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">By Appointment</span>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="p-8 bg-white rounded border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Service Areas</h3>
                <div className="space-y-2 text-gray-600">
                  <p>✓ Lagos, Nigeria</p>
                  <p>✓ Nationwide Available</p>
                  <p>✓ International Travel</p>
                </div>
              </div>

              {/* Quick Response */}
              <div className="p-8 bg-gradient-to-br from-accent/10 to-transparent rounded border border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Quick Response</h3>
                <p className="text-gray-600 mb-4">
                  Prefer faster communication? Chat with us on WhatsApp for instant responses.
                </p>
                <a
                  href="https://wa.me/2347084036843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity font-semibold"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold text-sm tracking-wider mb-2">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What is your turnaround time?",
                a: "Standard turnaround is 2-3 weeks. Rush orders available upon request with additional fees.",
              },
              {
                q: "Do you offer post-event editing?",
                a: "Yes, we provide professional editing, color grading, and post-production for all services.",
              },
              {
                q: "What are your payment terms?",
                a: "We require a 50% deposit to confirm booking, with the balance due upon delivery.",
              },
              {
                q: "Can you travel for events?",
                a: "We travel nationwide and internationally. Travel costs are calculated separately.",
              },
              {
                q: "Do you provide raw files?",
                a: "Raw files are available as an add-on. Standard packages include edited, color-graded final images.",
              },
              {
                q: "What happens if we're not satisfied?",
                a: "We offer revisions until you're satisfied. Your happiness is our priority.",
              },
            ].map((item, index) => (
              <motion.details
                key={index}
                className="group p-6 bg-background rounded border border-border cursor-pointer hover:border-accent transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <summary className="font-bold text-foreground flex justify-between items-center select-none">
                  {item.q}
                  <span className="text-accent ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-8 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your <span className="text-accent">Vision?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get started today with a free consultation. Choose your preferred contact method.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2347084036843"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <a
                href="mailto:damzypictures@gmail.com"
                className="px-8 py-3 border-2 border-accent text-accent rounded hover:bg-accent hover:text-accent-foreground transition-all font-semibold"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
