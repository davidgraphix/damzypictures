"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Camera, Video, Radio, Sparkles, Bone as Drone, Layers, Check } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Camera,
    title: "Photography",
    description: "Capture life's most beautiful moments with professional photography services",
    features: ["Event Photography", "Studio Portraits", "Product Photography", "Lifestyle Photography"],
    image: "/photography-service-showcase.jpg",
  },
  {
    id: 2,
    icon: Video,
    title: "Videography",
    description: "Cinematic video production that brings your story to life",
    features: ["Event Videography", "Commercial Videos", "Promotional Content", "Music Videos"],
    image: "/videography-service-showcase.jpg",
  },
  {
    id: 3,
    icon: Radio,
    title: "Live Streaming & Broadcasting",
    description: "Professional live streaming for events, conferences, and online content",
    features: ["Event Live Streaming", "Online Broadcasting", "Multi-camera Setup", "Real-time Editing"],
    image: "/live-streaming-service-showcase.jpg",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Content Creation",
    description: "Digital content tailored for your brand and social media platforms",
    features: ["Social Media Content", "Blog Photography", "Brand Storytelling", "Behind-the-scenes"],
    image: "/content-creation-service-showcase.jpg",
  },
  {
    id: 5,
    icon: Drone,
    title: "Drone Services",
    description: "Aerial photography and videography for unique perspectives",
    features: ["Aerial Photography", "Drone Videography", "Property Tours", "Event Coverage"],
    image: "/drone-service-showcase.jpg",
  },
  {
    id: 6,
    icon: Layers,
    title: "General Multimedia",
    description: "Comprehensive multimedia solutions for all your creative needs",
    features: ["3D Rendering", "Animation", "Graphic Design", "Post-production"],
    image: "/multimedia-service-showcase.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 md:h-96 w-full overflow-hidden bg-foreground">
        <Image src="/bg3.jpeg" alt="Our Services" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/50 to-transparent" />

        <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive creative solutions for all your visual storytelling needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group bg-white rounded overflow-hidden border border-border hover:border-accent hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-8 h-8 text-accent" />
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity text-sm font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold text-sm tracking-wider mb-2">HOW WE WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-accent">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your vision, goals, and requirements to understand your project",
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed planning and strategy to ensure every detail is covered",
              },
              {
                step: "03",
                title: "Production",
                description: "Professional execution with cutting-edge equipment and techniques",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Polished final product delivered on time with post-production excellence",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full border-2 border-accent">
                  <span className="text-2xl font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold text-sm tracking-wider mb-2">PRICING</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Flexible <span className="text-accent">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4">Custom pricing available for all services</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                description: "Perfect for small projects",
                price: "Contact",
                features: ["Basic package", "1-2 hours", "Standard editing", "Digital delivery"],
              },
              {
                name: "Professional",
                description: "Most popular choice",
                price: "Contact",
                features: ["Full day coverage", "Advanced editing", "Multiple angles", "Fast turnaround"],
                featured: true,
              },
              {
                name: "Premium",
                description: "Complete solution",
                price: "Contact",
                features: ["Full event coverage", "4K production", "Drone footage", "Premium editing"],
              },
            ].map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`p-8 rounded border-2 transition-all duration-300 ${
                  pkg.featured
                    ? "border-accent bg-gradient-to-br from-accent/10 to-transparent scale-105"
                    : "border-border hover:border-accent"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {pkg.featured && (
                  <div className="mb-4 inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                    RECOMMENDED
                  </div>
                )}

                <h3 className="text-2xl font-bold text-foreground mb-1">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <p className="text-3xl font-bold text-accent mb-6">{pkg.price}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-600 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded font-semibold transition-all ${
                    pkg.featured
                      ? "bg-accent text-accent-foreground hover:opacity-90"
                      : "bg-foreground text-white hover:opacity-90"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Services */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose Our <span className="text-accent">Services?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Professional team with years of experience",
              "State-of-the-art equipment and technology",
              "Custom solutions tailored to your needs",
              "Fast turnaround without compromising quality",
              "Transparent pricing and clear communication",
              "Dedicated support throughout your project",
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-gray-600">{reason}</p>
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
              Ready to Start Your <span className="text-accent">Project?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a consultation and let's bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity font-semibold"
              >
                Get in Touch
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
