import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Reveal from "@/components/ui/reveal"

const featured = [
  {
    title: "Elegant Wedding Ceremony",
    category: "Weddings",
    image: "/elegant-wedding.jpeg",
    alt: "Bride in coral beads and white lace beside her groom holding a cane in a hotel corridor",
    cell: "lg:col-span-5",
    aspect: "aspect-[4/5]",
    position: "center 20%",
    sizes: "(min-width: 1024px) 40vw, (min-width: 768px) 48vw, 100vw",
  },
  {
    title: "Corporate Summit",
    category: "Corporate",
    image: "/portfolio-corporate-summit.jpg",
    alt: "Five guests in formal and colourful suits posing at an evening corporate event",
    cell: "lg:col-span-6 lg:col-start-7 lg:mt-40",
    aspect: "aspect-[3/2]",
    position: "center",
    sizes: "(min-width: 1024px) 48vw, (min-width: 768px) 48vw, 100vw",
  },
  {
    title: "Convocation",
    category: "Studio Shoots",
    image: "/convocation.jpeg",
    alt: "Graduate in a navy suit seated beside a convocation gown and award plaques",
    cell: "lg:col-span-4",
    aspect: "aspect-[4/5]",
    position: "center 30%",
    sizes: "(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw",
  },
  {
    title: "Product Photography Series",
    category: "Studio Shoots",
    image: "/portfolio-product-photography.jpg",
    alt: "Man in navy agbada lounging in a blue armchair, on the phone",
    cell: "lg:col-span-4 lg:mt-24",
    aspect: "aspect-[4/5]",
    position: "center 55%",
    sizes: "(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw",
  },
  {
    title: "Studio Portrait Session",
    category: "Studio Shoots",
    image: "/portfolio-studio-portrait.jpg",
    alt: "Woman in a white fascinator and coral blazer posing in the studio",
    cell: "lg:col-span-4 lg:mt-48",
    aspect: "aspect-[4/5]",
    position: "center 30%",
    sizes: "(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw",
  },
  {
    title: "Sports and Entertainment Documentary",
    category: "Documentaries",
    image: "/portfolio-documentary-sports.jpg",
    alt: "Football match on an artificial pitch with spectators under a canopy",
    cell: "lg:col-span-8 lg:col-start-3",
    aspect: "aspect-[16/9]",
    position: "center",
    sizes: "(min-width: 1024px) 66vw, (min-width: 768px) 48vw, 100vw",
  },
]

export default function FeaturedPortfolio() {
  return (
    <section className="section-y bg-ink text-paper" aria-labelledby="featured-heading">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-gold-soft">Selected work</p>
            <h2 id="featured-heading" className="display-lg mt-5 max-w-2xl">
              Stories told frame by frame.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <Link href="/portfolio" className="btn btn-outline-light whitespace-nowrap">
              View Full Portfolio
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-6 gap-y-12 md:mt-24 md:grid-cols-2 md:gap-y-16 lg:grid-cols-12 lg:gap-y-20">
          {featured.map((item, i) => (
            <Reveal as="li" key={item.image} className={item.cell} delay={(i % 3) * 0.08}>
              <Link
                href={`/portfolio?category=${encodeURIComponent(item.category)}`}
                className="group block"
                aria-label={`${item.title}, ${item.category}. View in portfolio`}
              >
                <div className={`relative overflow-hidden bg-ink-2 ${item.aspect}`}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={item.sizes}
                    className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-cinematic)] group-hover:scale-[1.04]"
                    style={{ objectPosition: item.position }}
                  />
                </div>
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-line-dark pt-4">
                  <p className="font-display text-xl leading-tight text-paper md:text-2xl">{item.title}</p>
                  <p className="eyebrow shrink-0 text-mist transition-colors group-hover:text-gold-soft">
                    {item.category}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
