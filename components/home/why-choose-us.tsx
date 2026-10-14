import Image from "next/image"
import Reveal from "@/components/ui/reveal"

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
    <section className="relative overflow-hidden bg-navy text-paper" aria-labelledby="why-heading">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-full">
          <Image
            src="/portfolio-wedding-reception.jpg"
            alt="Guest in a flowing gold gown dancing at a wedding reception"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[35%_15%]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent lg:bg-gradient-to-l" />
        </div>

        <div className="section-y px-4 sm:px-6 lg:px-16 xl:px-24">
          <Reveal>
            <p className="eyebrow text-gold-soft">Why DamzyPictures</p>
            <h2 id="why-heading" className="display-lg mt-5 max-w-xl">
              Trusted with the moments that only happen once.
            </h2>
          </Reveal>

          <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08} className="border-t border-gold/40 pt-6">
                <dt className="flex items-baseline gap-4">
                  <span className="eyebrow text-gold-soft">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl md:text-[1.75rem]">{r.title}</span>
                </dt>
                <dd className="mt-3 text-[0.95rem] leading-relaxed text-white/70">{r.description}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
