import type { Metadata } from "next"
import { pageMetadata } from "@/lib/site"
import Gallery from "@/components/portfolio/gallery"
import CTASection from "@/components/ui/cta-section"

export const metadata: Metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Explore DamzyPictures' portfolio of weddings, studio portraits, corporate events, documentaries and lifestyle photography.",
  path: "/portfolio",
  shareDescription: "Explore our collection of creative works and visual stories.",
})

export default function PortfolioPage() {
  return (
    <main className="bg-ink text-paper">
      <header className="container-x pb-14 pt-[calc(var(--nav-height)+5rem)] md:pb-20 md:pt-[calc(var(--nav-height)+7rem)]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow animate-rise text-gold-soft">Portfolio</p>
            <h1 className="display-xl animate-rise mt-6 [animation-delay:120ms]">
              A collection of stories, <em className="italic text-gold-soft">told frame by frame.</em>
            </h1>
          </div>
          <p className="lede animate-rise text-white/70 [animation-delay:240ms] lg:col-span-4">
            Explore our collection of creative works and visual stories, from weddings and studio portraits to
            corporate summits and live events.
          </p>
        </div>
      </header>

      <Gallery />

      <CTASection
        eyebrow="Impressed by our work?"
        title={
          <>
            Your story could be <em className="italic text-gold-soft">next.</em>
          </>
        }
        text="Let's create something amazing together. Book a session or consultation today."
        image="/portfolio-wedding-portrait.jpg"
      />
    </main>
  )
}
