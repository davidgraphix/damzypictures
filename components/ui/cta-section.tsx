import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import { contact } from "@/lib/site"

type CTASectionProps = {
  eyebrow?: string
  title: React.ReactNode
  text: string
  image?: string
  primary?: { label: string; href: string }
}

/** Closing booking prompt shared by inner pages. */
export default function CTASection({
  eyebrow = "Start a project",
  title,
  text,
  image = "/portfolio-wedding-elegant.jpg",
  primary = { label: "Book a Session", href: "/contact" },
}: CTASectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-paper">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[center_30%] opacity-25 mix-blend-luminosity"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      <div className="container-x section-y">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold-soft">{eyebrow}</p>
          <h2 className="display-lg mt-6">{title}</h2>
          <p className="lede mt-6 text-white/75">{text}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={primary.href} className="btn btn-gold">
              {primary.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              <MessageCircle aria-hidden="true" className="size-4" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
