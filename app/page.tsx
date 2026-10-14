import HeroSection from "@/components/home/hero-section"
import AboutSnapshot from "@/components/home/about-snapshot"
import ServicesOverview from "@/components/home/services-overview"
import FeaturedPortfolio from "@/components/home/featured-portfolio"
import ClientLogos from "@/components/home/client-logos"
import WhyChooseUs from "@/components/home/why-choose-us"
import CTABanner from "@/components/home/cta-banner"

// TestimonialsSection (components/home/testimonials-section.tsx) is intentionally not rendered:
// its quotes and names could not be verified as real clients. Re-add it here once they are.

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSnapshot />
      <FeaturedPortfolio />
      <ClientLogos />
      <ServicesOverview />
      <WhyChooseUs />
      <CTABanner />
    </main>
  )
}
