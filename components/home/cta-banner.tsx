import Link from "next/link"
import { ArrowRight, Instagram, Mail, MessageCircle, Phone } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import { contact } from "@/lib/site"

export default function CTABanner() {
  const channels = [
    { label: "Call", value: contact.phones[0].display, href: contact.phones[0].href, icon: Phone, external: false },
    { label: "Email", value: contact.email, href: contact.emailHref, icon: Mail, external: false },
    { label: "WhatsApp", value: "Chat with us", href: contact.whatsapp, icon: MessageCircle, external: true },
    {
      label: "Instagram",
      value: contact.instagram[0].handle,
      href: contact.instagram[0].href,
      icon: Instagram,
      external: true,
    },
  ]

  return (
    <section className="section-y bg-ivory" aria-labelledby="book-heading">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow text-gold-deep">Bookings &amp; inquiries</p>
            <h2 id="book-heading" className="display-xl mt-6 text-ink">
              Let&apos;s create something <em className="italic text-gold-deep">worth keeping.</em>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={0.1}>
            <p className="text-base leading-relaxed text-stone md:text-lg">
              Weddings, portraits, corporate events, live broadcasts or brand content. Tell us what you&apos;re
              planning and we&apos;ll take it from there.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/contact" className="btn btn-ink">
                Book a Session
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <ul className="mt-20 grid border-t border-line-light sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <li key={c.label} className="border-b border-line-light sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full flex-col gap-6 px-1 py-8 transition-colors hover:bg-paper sm:px-6"
              >
                <span className="flex items-center justify-between">
                  <span className="eyebrow text-stone">{c.label}</span>
                  <c.icon aria-hidden="true" className="size-4 text-gold-deep" />
                </span>
                <span className="break-words font-display text-xl text-ink md:text-2xl">{c.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
