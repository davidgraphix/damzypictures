import type { CSSProperties } from "react"
import Image from "next/image"
import { clients, type Client } from "@/lib/site"

// Optical size balancing: wide wordmarks get shorter, compact marks taller,
// so every logo carries similar visual weight in the row.
const BASE_HEIGHT = 44 // px for a ~3.2:1 wordmark on desktop
const REF_RATIO = 3.2

function logoHeight(c: Client) {
  const ratio = c.width / c.height
  const h = BASE_HEIGHT * Math.sqrt(REF_RATIO / ratio) * (c.weight ?? 1)
  return Math.round(Math.min(62, Math.max(24, h)))
}

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="logo-row flex shrink-0 items-center gap-x-12 pr-12 md:gap-x-20 md:pr-20"
      aria-hidden={hidden || undefined}
    >
      {clients.map((c) => {
        const h = logoHeight(c)
        return (
          <li key={c.name} className="flex shrink-0 items-center" title={hidden ? undefined : c.name}>
            <Image
              src={c.logo}
              alt={hidden ? "" : c.name}
              width={c.width}
              height={c.height}
              loading="eager"
              sizes={`${Math.ceil((h * c.width) / c.height)}px`}
              className="h-[calc(var(--h)*0.8)] w-auto md:h-[var(--h)]"
              style={{ "--h": `${h}px` } as CSSProperties}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default function ClientLogos() {
  return (
    <section className="border-b border-line-light bg-paper py-16 md:py-20" aria-labelledby="clients-heading">
      <div className="container-x">
        <p className="eyebrow text-gold-deep">Trusted by</p>
        <h2 id="clients-heading" className="display-sm mt-4 max-w-xl text-ink">
          Brands and organisations we&apos;ve worked with
        </h2>
      </div>

      <div className="logo-marquee relative mt-10 overflow-hidden md:mt-14">
        <div className="logo-track flex w-max">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </section>
  )
}
