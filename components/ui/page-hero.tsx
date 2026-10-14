import type React from "react"
import Image from "next/image"

type PageHeroProps = {
  eyebrow: string
  title: React.ReactNode
  intro?: string
  image: string
  imageAlt: string
  /** CSS object-position for the background image. */
  position?: string
  children?: React.ReactNode
}

/** Full-bleed cinematic header used by inner pages. */
export default function PageHero({ eyebrow, title, intro, image, imageAlt, position = "center", children }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-ink text-paper md:min-h-[86svh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className="animate-slow-zoom -z-20 object-cover"
        style={{ objectPosition: position }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,10,11,0.55)_0%,rgba(10,10,11,0.2)_35%,rgba(10,10,11,0.92)_100%),linear-gradient(90deg,rgba(10,10,11,0.7)_0%,rgba(10,10,11,0.25)_55%,rgba(10,10,11,0)_100%)]"
      />
      <div className="container-x pb-14 pt-[calc(var(--nav-height)+4rem)] md:pb-20">
        <p className="eyebrow animate-rise text-gold-soft">{eyebrow}</p>
        <h1 className="display-xl animate-rise mt-6 max-w-5xl [animation-delay:120ms]">{title}</h1>
        {intro && <p className="lede animate-rise mt-6 text-white/80 [animation-delay:240ms]">{intro}</p>}
        {children && <div className="animate-rise mt-10 [animation-delay:360ms]">{children}</div>}
      </div>
    </section>
  )
}
