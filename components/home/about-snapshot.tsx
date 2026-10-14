import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Reveal from "@/components/ui/reveal"

export default function AboutSnapshot() {
  return (
    <section className="section-y bg-ivory">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-3">
          <p className="eyebrow text-gold-deep">About DamzyPictures</p>
        </Reveal>

        <div className="lg:col-span-9">
          <Reveal>
            <h2 className="display-md text-ink">
              A creative media and visual storytelling brand dedicated to capturing moments with{" "}
              <em className="italic text-gold-deep">authenticity, clarity and class.</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-8 lg:mt-20">
            <Reveal className="relative aspect-[4/5] overflow-hidden md:col-span-5" delay={0.1}>
              <Image
                src="/damzy.jpeg"
                alt="Ayeni Damilare Joshua (Damzy), Creative Director of DamzyPictures"
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, 100vw"
                className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-cinematic)] hover:scale-[1.03]"
              />
            </Reveal>

            <Reveal className="flex flex-col justify-end md:col-span-7 md:pl-6" delay={0.2}>
              <p className="text-base leading-relaxed text-stone md:text-lg">
                We specialize in photography, videography, live streaming and broadcasting, event documentation and
                digital content creation, for couples, families, brands and organisations.
              </p>
              <p className="mt-5 text-base leading-relaxed text-stone md:text-lg">
                Our mission is to deliver high-quality visual content that preserves memories, elevates brands and
                tells powerful stories with creativity and precision.
              </p>
              <Link
                href="/about"
                className="group mt-10 inline-flex min-h-11 items-center gap-3 self-start text-sm font-medium uppercase tracking-[0.18em] text-ink"
              >
                <span className="link-line">Our story</span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 text-gold-deep transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
