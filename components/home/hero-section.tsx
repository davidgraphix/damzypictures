import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/site"

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      {/* Mobile / tablet: full-bleed portrait behind the copy */}
      <div className="absolute inset-0 -z-10 lg:hidden">
        {/* Lifted so the couple sits above the copy; the uncovered bottom strip falls in the dark gradient */}
        <div className="absolute inset-x-0 -top-[16%] h-full [@media(max-height:700px)]:-top-[24%]">
          <Image
            src="/hero-couple-gold.jpg"
            alt="Couple in coordinated gold and wine traditional attire, the bride in a gold gele"
            fill
            preload
            sizes="(max-width: 1023px) 100vw, 1px"
            className="animate-slow-zoom object-cover object-[55%_center]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0.35)_0%,rgba(10,10,11,0.05)_22%,rgba(10,10,11,0.72)_48%,rgba(10,10,11,0.94)_70%,#0a0a0b_100%)]"
        />
      </div>

      <div className="container-x grid min-h-[100svh] items-end gap-12 pb-12 pt-[calc(var(--nav-height)+3rem)] lg:min-h-[max(100svh,46rem)] lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-16">
        {/* Copy */}
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="eyebrow animate-rise text-gold-soft">Photography · Film · Live Broadcast</p>
          <h1 className="display-xl animate-rise mt-6 [animation-delay:120ms]">
            We capture <em className="font-display italic text-gold-soft">more</em> than moments.
          </h1>
          <p className="lede animate-rise mt-7 text-white/80 [animation-delay:240ms]">
            DamzyPictures is a creative media and visual storytelling studio. We photograph, film and broadcast the
            moments that matter, with authenticity, clarity and class.
          </p>
          <div className="animate-rise mt-10 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <Link href="/portfolio" className="btn btn-gold">
              Explore Our Work
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link href="/contact" className="btn btn-outline-light">
              Book a Session
            </Link>
          </div>
        </div>

        {/* Desktop: editorial mosaic of real work */}
        <div className="relative hidden h-[min(78svh,44rem)] lg:col-span-6 lg:block">
          <figure className="animate-fade absolute right-0 top-0 h-[88%] w-[58%] overflow-hidden">
            <Image
              src="/portfolio-wedding-portrait.jpg"
              alt="Bride and groom in matching royal-blue traditional attire"
              fill
              preload
              sizes="(min-width: 1024px) 30vw, 1px"
              className="animate-slow-zoom object-cover object-[center_20%]"
            />
          </figure>
          <figure className="animate-fade absolute bottom-0 left-0 h-[58%] w-[44%] overflow-hidden border-[6px] border-ink [animation-delay:250ms]">
            <Image
              src="/portfolio-fashion-lookbook.jpg"
              alt="Studio portrait of a woman in yellow and blue attire seated on a carved chair"
              fill
              sizes="(min-width: 1024px) 22vw, 1px"
              className="object-cover"
            />
          </figure>
          <figure className="animate-fade absolute left-[8%] top-[6%] h-[30%] w-[30%] overflow-hidden [animation-delay:450ms]">
            <Image
              src="/wedding2.jpeg"
              alt="Couple seated together in a warm, minimal living room"
              fill
              sizes="(min-width: 1024px) 15vw, 1px"
              className="object-cover object-[center_60%]"
            />
          </figure>
          <p className="eyebrow absolute bottom-2 right-0 max-w-[54%] text-right text-mist">Selected work — Weddings &amp; Portraits</p>
        </div>
      </div>

      {/* Discipline strip */}
      <div className="border-t border-line-dark">
        <ul className="container-x flex flex-wrap gap-x-8 py-3 text-[0.7rem] uppercase tracking-[0.24em] text-mist">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services#${s.slug}`} className="inline-block py-2 transition-colors hover:text-gold-soft">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
