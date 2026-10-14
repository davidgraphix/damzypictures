import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, Instagram, Mail, MessageCircle, Phone, Plus } from "lucide-react"
import ContactForm from "@/components/contact/contact-form"
import Reveal from "@/components/ui/reveal"
import { contact, faqs, pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Contact & Bookings",
  description:
    "Book DamzyPictures for photography, videography, live streaming and content creation. Call, WhatsApp, email or send us a message.",
  path: "/contact",
  shareDescription: "Get in touch with us to discuss your next project.",
})

const hours = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
  { day: "Sunday", time: "By Appointment" },
]

const areas = ["Lagos, Nigeria", "Nationwide Available", "International Travel"]

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <Image
          src="/portfolio-social-event.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover opacity-30"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        <div className="container-x pb-16 pt-[calc(var(--nav-height)+5rem)] md:pb-20 md:pt-[calc(var(--nav-height)+7rem)]">
          <p className="eyebrow animate-rise text-gold-soft">Contact &amp; bookings</p>
          <h1 className="display-xl animate-rise mt-6 max-w-4xl [animation-delay:120ms]">
            Let&apos;s <em className="italic text-gold-soft">connect.</em>
          </h1>
          <p className="lede animate-rise mt-6 text-white/75 [animation-delay:240ms]">
            Get in touch with us to discuss your next project. Send a message below, or reach us directly. We&apos;re
            quickest on WhatsApp.
          </p>

          <ul className="animate-rise mt-14 grid border-t border-line-dark [animation-delay:360ms] sm:grid-cols-2 lg:grid-cols-4">
            <li className="border-b border-line-dark py-6 sm:pr-6 lg:border-b-0 lg:border-r">
              <p className="eyebrow flex items-center gap-2 text-mist">
                <Phone aria-hidden="true" className="size-3.5 text-gold" /> Call
              </p>
              <div className="mt-3 flex flex-col">
                {contact.phones.map((p) => (
                  <a key={p.href} href={p.href} className="py-1 font-display text-xl hover:text-gold-soft md:text-2xl">
                    {p.display}
                  </a>
                ))}
              </div>
            </li>
            <li className="border-b border-line-dark py-6 sm:pl-6 lg:border-b-0 lg:border-r lg:px-6">
              <p className="eyebrow flex items-center gap-2 text-mist">
                <Mail aria-hidden="true" className="size-3.5 text-gold" /> Email
              </p>
              <a
                href={contact.emailHref}
                className="mt-3 block break-all py-1 font-display text-xl hover:text-gold-soft md:text-2xl"
              >
                {contact.email}
              </a>
            </li>
            <li className="border-b border-line-dark py-6 sm:border-b-0 sm:pr-6 lg:border-r lg:px-6">
              <p className="eyebrow flex items-center gap-2 text-mist">
                <MessageCircle aria-hidden="true" className="size-3.5 text-gold" /> WhatsApp
              </p>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 py-1 font-display text-xl hover:text-gold-soft md:text-2xl"
              >
                Chat Now <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </li>
            <li className="py-6 sm:pl-6">
              <p className="eyebrow flex items-center gap-2 text-mist">
                <Instagram aria-hidden="true" className="size-3.5 text-gold" /> Instagram
              </p>
              <div className="mt-3 flex flex-col">
                {contact.instagram.map((ig) => (
                  <a
                    key={ig.href}
                    href={ig.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 font-display text-xl hover:text-gold-soft md:text-2xl"
                  >
                    {ig.handle}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Form + details */}
      <section className="section-y bg-ivory" aria-labelledby="form-heading">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-gold-deep">Send us a message</p>
              <h2 id="form-heading" className="display-md mt-5 text-ink">
                Tell us about your project.
              </h2>
              <p className="mt-4 text-base text-stone">
                Fields marked <span className="text-gold-deep">*</span> are required.
              </p>
            </Reveal>
            <div className="mt-12 bg-paper p-6 sm:p-10 lg:p-12">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5 lg:pt-28" aria-label="Contact details">
            <Reveal className="bg-navy p-8 text-paper sm:p-10">
              <p className="eyebrow text-gold-soft">Quick response</p>
              <p className="display-sm mt-5">Prefer faster communication?</p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70">
                Chat with us on WhatsApp for instant responses.
              </p>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold mt-8 w-full sm:w-auto"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Chat on WhatsApp
              </a>
            </Reveal>

            <Reveal className="border border-line-light bg-paper p-8 sm:p-10" delay={0.08}>
              <h3 className="eyebrow text-gold-deep">Business hours</h3>
              <dl className="mt-6">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between gap-4 border-b border-line-light py-3.5 text-[0.95rem] last:border-b-0"
                  >
                    <dt className="text-stone">{h.day}</dt>
                    <dd className="text-right font-medium text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="border border-line-light bg-paper p-8 sm:p-10" delay={0.16}>
              <h3 className="eyebrow text-gold-deep">Service areas</h3>
              <ul className="mt-6 space-y-3">
                {areas.map((a) => (
                  <li key={a} className="flex items-center gap-4 text-[0.95rem] text-ink">
                    <span aria-hidden="true" className="size-1.5 shrink-0 bg-gold" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-paper" aria-labelledby="faq-heading">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-gold-deep">FAQ</p>
            <h2 id="faq-heading" className="display-lg mt-5 text-ink">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="border-t border-line-light lg:col-span-8">
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-line-light">
                <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-6 py-6 text-left">
                  <span className="font-display text-xl leading-snug text-ink md:text-2xl">{item.q}</span>
                  <Plus
                    aria-hidden="true"
                    className="size-5 shrink-0 text-gold-deep transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-2xl pb-7 pr-10 text-base leading-relaxed text-stone">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
