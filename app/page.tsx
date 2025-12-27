"use client"
import HeroSection from "@/components/home/hero-section"
import AboutSnapshot from "@/components/home/about-snapshot"
import ServicesOverview from "@/components/home/services-overview"
import FeaturedPortfolio from "@/components/home/featured-portfolio"
import WhyChooseUs from "@/components/home/why-choose-us"
import TestimonialsSection from "@/components/home/testimonials-section"
import CTABanner from "@/components/home/cta-banner"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSnapshot />
      <ServicesOverview />
      <FeaturedPortfolio />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTABanner />
    </main>
  )
}
