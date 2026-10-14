"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import { services } from "@/lib/site"

export default function ServicesOverview() {
  const [active, setActive] = useState(0)

  return (
    <section className="section-y bg-paper" aria-labelledby="services-heading">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold-deep">What we do</p>
          <h2 id="services-heading" className="display-lg mt-5 text-ink">
            Six disciplines, one standard of craft.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          {/* Sticky preview (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-[calc(var(--nav-height)+2rem)] aspect-[4/5] overflow-hidden bg-ink">
              {services.map((s, i) => (
                <Image
                  key={s.slug}
                  src={s.image}
                  alt={i === active ? s.imageAlt : ""}
                  aria-hidden={i !== active}
                  fill
                  sizes="(min-width: 1024px) 38vw, 1px"
                  className={`object-cover transition-[opacity,transform] duration-700 ease-[var(--ease-cinematic)] ${
                    i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                />
              ))}
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
              <p className="eyebrow absolute bottom-5 left-5 text-paper">
                {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* Index */}
          <ol className="border-t border-line-light lg:col-span-7">
            {services.map((s, i) => (
              <li key={s.slug} className="border-b border-line-light">
                <Link
                  href={`/services#${s.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-3 py-7 sm:gap-x-8 md:py-9"
                >
                  <span className="eyebrow pt-2 text-stone md:pt-3">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span
                      className={`block font-display text-[1.9rem] leading-[1.05] transition-colors duration-300 md:text-[2.6rem] ${
                        active === i ? "lg:text-ink" : "lg:text-ink/55"
                      } text-ink group-hover:text-ink`}
                    >
                      {s.title}
                    </span>
                    <span className="mt-3 block max-w-md text-[0.95rem] leading-relaxed text-stone">{s.short}</span>
                  </span>
                  <span className="relative mt-1 size-16 shrink-0 overflow-hidden sm:size-20 lg:size-auto lg:overflow-visible">
                    <Image src={s.image} alt="" fill sizes="80px" className="object-cover lg:hidden" />
                    <ArrowUpRight
                      aria-hidden="true"
                      className="hidden size-6 text-gold-deep transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:block"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
