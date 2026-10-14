import Link from "next/link"
import Image from "next/image"
import { Instagram, MessageCircle, Mail, Phone, ArrowUp } from "lucide-react"
import { contact, navItems, services } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-x pb-10 pt-20 md:pt-24">
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-12 lg:col-span-4">
            <Image src="/logo1.PNG" alt="DamzyPictures" width={500} height={500} sizes="96px" className="-ml-2 h-24 w-24" />
            <p className="mt-6 max-w-xs font-display text-2xl leading-snug text-white/90">
              Capturing moments with authenticity, clarity &amp; class.
            </p>
            <p className="eyebrow mt-6 text-gold-soft">Available for travels</p>
          </div>

          {/* Explore */}
          <div className="md:col-span-4 lg:col-span-2">
            <h2 className="eyebrow text-mist">Explore</h2>
            <ul className="mt-6 space-y-1 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-line inline-block py-1.5 text-white/80 hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="eyebrow text-mist">Services</h2>
            <ul className="mt-6 space-y-1 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="link-line inline-block py-1.5 text-white/80 hover:text-paper">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <h2 className="eyebrow text-mist">Contact</h2>
            <ul className="mt-6 space-y-1 text-sm">
              {contact.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="inline-flex items-center gap-3 py-1.5 text-white/80 hover:text-gold-soft">
                    <Phone aria-hidden="true" className="size-4 text-gold" />
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contact.emailHref}
                  className="inline-flex items-center gap-3 break-all py-1.5 text-white/80 hover:text-gold-soft"
                >
                  <Mail aria-hidden="true" className="size-4 shrink-0 text-gold" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 py-1.5 text-white/80 hover:text-gold-soft"
                >
                  <MessageCircle aria-hidden="true" className="size-4 text-gold" />
                  WhatsApp
                </a>
              </li>
              {contact.instagram.map((ig) => (
                <li key={ig.href}>
                  <a
                    href={ig.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 py-1.5 text-white/80 hover:text-gold-soft"
                  >
                    <Instagram aria-hidden="true" className="size-4 text-gold" />
                    {ig.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse gap-6 border-t border-line-dark pt-8 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DamzyPictures. All rights reserved.</p>
          <p className="sm:text-center">Lagos, Nigeria · Nationwide &amp; international</p>
          <a href="#main" className="inline-flex min-h-11 items-center gap-2 uppercase tracking-[0.2em] hover:text-paper">
            Back to top <ArrowUp aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
