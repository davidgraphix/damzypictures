import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import PageHero from "@/components/ui/page-hero"
import Reveal from "@/components/ui/reveal"
import CTASection from "@/components/ui/cta-section"
import { services, pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Photography, videography, live streaming and broadcasting, content creation, drone services and multimedia production by DamzyPictures.",
  path: "/services",
  shareDescription: "Comprehensive creative solutions for all your visual storytelling needs.",
})

const process = [
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
]

const packages = [
  {
    name: "Starter",
    description: "Perfect for small projects",
    features: ["Basic package", "1-2 hours", "Standard editing", "Digital delivery"],
  },
  {
    name: "Professional",
    description: "Most popular choice",
    features: ["Full day coverage", "Advanced editing", "Multiple angles", "Fast turnaround"],
    featured: true,
  },
  {
    name: "Premium",
    description: "Complete solution",
    features: ["Full event coverage", "4K production", "Drone footage", "Premium editing"],
  },
]

const reasons = [
  "Professional team with years of experience",
  "State-of-the-art equipment and technology",
  "Custom solutions tailored to your needs",
  "Fast turnaround without compromising quality",
  "Transparent pricing and clear communication",
  "Dedicated support throughout your project",
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Six disciplines. <em className="italic text-gold-soft">One standard of craft.</em>
          </>
        }
        intro="Comprehensive creative solutions for all your visual storytelling needs, from a single portrait to a fully broadcast event."
        image="/drone-service-showcase.jpeg"
        imageAlt="Aerial drone view of a crowded beach meeting turquoise water"
      >
        <nav aria-label="Services on this page">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex min-h-10 items-center border border-white/25 px-4 text-[0.7rem] uppercase tracking-[0.18em] text-white/80 transition-colors hover:border-gold hover:text-gold-soft"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {/* Service chapters */}
      <section className="bg-ivory" aria-label="Our services">
        {services.map((s, i) => {
          const flip = i % 2 === 1
          return (
            <article
              key={s.slug}
              id={s.slug}
              className="border-b border-line-light last:border-b-0"
              aria-labelledby={`${s.slug}-title`}
            >
              <div className="container-x grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-16">
                <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink lg:aspect-[5/4]">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-cinematic)] hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>

                <Reveal className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`} delay={0.1}>
                  <p className="eyebrow text-gold-deep">
                    {String(i + 1).padStart(2, "0")} — Service
                  </p>
                  <h2 id={`${s.slug}-title`} className="display-md mt-5 text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-stone md:text-lg">{s.description}.</p>
                  <ul className="mt-8 grid border-t border-line-light sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 border-b border-line-light py-3.5 text-[0.95rem] text-ink sm:odd:pr-4"
                      >
                        <span aria-hidden="true" className="size-1.5 shrink-0 bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?service=${encodeURIComponent(s.formValue)}`}
                    className="btn btn-ink mt-10"
                  >
                    Enquire about {s.title.split(" &")[0]}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </Reveal>
              </div>
            </article>
          )
        })}
      </section>

      {/* Process */}
      <section className="section-y bg-ink text-paper" aria-labelledby="process-heading">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold-soft">How we work</p>
            <h2 id="process-heading" className="display-lg mt-5">
              From first conversation to final frame.
            </h2>
          </Reveal>
          <ol className="mt-16 grid gap-px bg-line-dark sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 0.08} className="bg-ink p-0 pb-10 pt-8 sm:p-8 lg:p-10">
                <span className="font-display text-6xl leading-none text-gold/80">{p.step}</span>
                <h3 className="mt-8 font-display text-3xl">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/65">{p.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Packages */}
      <section className="section-y bg-paper" aria-labelledby="packages-heading">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow text-gold-deep">Packages</p>
              <h2 id="packages-heading" className="display-lg mt-5 text-ink">
                Flexible packages, tailored to you.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={0.1}>
              <p className="text-base leading-relaxed text-stone md:text-lg">
                Custom pricing available for all services. Tell us about your project and we&apos;ll send a quote
                that fits.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <Reveal
                key={pkg.name}
                delay={i * 0.08}
                className={`flex min-w-0 flex-col p-6 sm:p-8 md:p-10 ${
                  pkg.featured ? "bg-ink text-paper" : "border border-line-light bg-ivory text-ink"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <h3 className="font-display text-4xl">{pkg.name}</h3>
                  {pkg.featured && <span className="eyebrow mt-2 bg-gold px-3 py-1.5 text-ink">Recommended</span>}
                </div>
                <p className={`mt-2 text-sm ${pkg.featured ? "text-white/65" : "text-stone"}`}>{pkg.description}</p>
                <p className={`eyebrow mt-8 ${pkg.featured ? "text-gold-soft" : "text-gold-deep"}`}>Price on request</p>
                <ul className={`mt-6 flex-1 border-t ${pkg.featured ? "border-line-dark" : "border-line-light"}`}>
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-3 border-b py-3.5 text-[0.95rem] ${
                        pkg.featured ? "border-line-dark" : "border-line-light"
                      }`}
                    >
                      <Check aria-hidden="true" className={`size-4 ${pkg.featured ? "text-gold" : "text-gold-deep"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn mt-10 ${pkg.featured ? "btn-gold" : "btn-ink"}`}>
                  Get Started
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Why our services */}
          <div className="mt-24 grid gap-10 border-t border-line-light pt-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="display-sm text-ink">Why choose our services?</h2>
            </Reveal>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {reasons.map((r, i) => (
                <Reveal
                  as="li"
                  key={r}
                  delay={(i % 2) * 0.06}
                  className="flex items-start gap-4 border-b border-line-light py-5 text-base text-ink"
                >
                  <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                  {r}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Ready to start your <em className="italic text-gold-soft">project?</em>
          </>
        }
        text="Contact us today for a consultation and let's bring your vision to life."
        primary={{ label: "Get in Touch", href: "/contact" }}
      />
    </main>
  )
}
