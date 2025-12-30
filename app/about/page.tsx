"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      title: "Authenticity",
      description: "Genuine storytelling that captures real emotions and moments",
    },
    {
      title: "Clarity",
      description: "Crystal-clear visuals and communication in every frame",
    },
    {
      title: "Excellence",
      description: "Unwavering commitment to quality in all our work",
    },
    {
      title: "Creativity",
      description: "Innovative approaches to every project we undertake",
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen w-full overflow-hidden bg-foreground pt-20">
        <Image
          src="/bg4.jpeg"
          alt="About DamzyPictures"
          fill
          className="object-cover opacity-20"
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
              Our <span className="text-accent">Story</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A journey of capturing authentic moments with clarity and class
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-accent font-semibold text-sm tracking-wider mb-4">WHO WE ARE</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Damzy Pictures: Creative Visual Storytelling
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Damzy Pictures is a creative media and visual storytelling brand dedicated to capturing moments with
                authenticity, clarity, and class. We specialize in photography, videography, live
                streaming/broadcasting, event documentation, and digital content creation.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded with a passion for visual excellence, we believe that every moment deserves to be captured with
                intention and artistry. Our team combines technical expertise with creative vision to deliver content
                that tells your story in the most compelling way possible.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're planning a wedding, launching a brand, hosting a corporate event, or creating digital
                content, we bring professionalism, creativity, and dedication to every project.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-accent">Mission, Vision & Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <motion.div
              className="p-8 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver visually compelling stories that connect emotionally and leave lasting impressions on
                audiences through professional, creative, and reliable media services.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="p-8 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the preferred creative media partner for individuals and brands seeking to tell their stories with
                authenticity, clarity, and class.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              className="p-8 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Authenticity in storytelling</li>
                <li>✓ Clarity in execution</li>
                <li>✓ Excellence in quality</li>
                <li>✓ Creativity & innovation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Details */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold text-sm tracking-wider mb-2">WHAT GUIDES US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Core Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative h-96 md:h-full min-h-96 rounded overflow-hidden order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/team-collaboration-creative-workspace.jpg"
                alt="Team at work"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="space-y-6 order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-accent font-semibold text-sm tracking-wider mb-2">OUR TEAM</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Creative Professionals Dedicated to <span className="text-accent">Excellence</span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our team consists of experienced photographers, videographers, and content creators who are passionate
                about visual storytelling. With years of experience across various industries, we understand what it
                takes to deliver exceptional results.
              </p>

              <ul className="space-y-3">
                {[
                  "Professional photographers and videographers",
                  "Advanced editing and post-production team",
                  "Live streaming and broadcasting specialists",
                  "Content strategy and creative directors",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
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
              Ready to Tell Your <span className="text-accent">Story?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">Let's collaborate and create something extraordinary together.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity font-semibold"
              >
                Get in Touch
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 border-2 border-accent text-accent rounded hover:bg-accent hover:text-accent-foreground transition-all font-semibold"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
