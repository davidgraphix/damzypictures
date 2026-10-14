"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react"
import { contact, navItems } from "@/lib/site"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  // Lock page scroll, trap focus and support Escape while the mobile menu is open.
  useEffect(() => {
    if (!isOpen) return
    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== "Tab" || !headerRef.current) return
      const focusables = Array.from(
        headerRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ).filter((el) => el.offsetParent !== null)
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen])

  // Close the menu if the viewport grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)")
    const onChange = () => mq.matches && setIsOpen(false)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href))
  const solid = isScrolled || isOpen

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      {/* Soft scrim keeps the transparent bar legible over hero imagery */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 z-0 h-36 bg-gradient-to-b from-ink/65 via-ink/25 to-transparent transition-opacity duration-500 ${
          solid ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`relative z-20 border-b transition-[background-color,border-color] duration-500 ${
          solid ? "border-line-dark bg-ink/90 backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        <nav aria-label="Main" className="container-x flex h-[var(--nav-height)] items-center justify-between gap-6">
          <Link href="/" className="relative -ml-1 flex shrink-0 items-center p-1" aria-label="DamzyPictures home" onClick={close}>
            <Image
              src="/logo1.PNG"
              alt="DamzyPictures"
              width={500}
              height={500}
              loading="eager"
              sizes="80px"
              className="h-14 w-14 object-contain md:h-16 md:w-16"
            />
          </Link>

          {/* Desktop */}
          <ul className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-500 ${
                      active
                        ? "text-paper after:scale-x-100"
                        : "text-white/70 after:scale-x-0 hover:text-paper hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 px-3 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-gold-soft"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              WhatsApp
            </a>
            <Link href="/contact" className="btn btn-gold min-h-11 px-5 py-2.5">
              Book a Session
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="-mr-2 inline-flex size-12 items-center justify-center text-paper lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-10 flex flex-col overflow-y-auto bg-ink pt-[var(--nav-height)] text-paper transition-[opacity,visibility] duration-500 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="container-x flex flex-1 flex-col justify-between gap-12 py-10">
          <ul className="flex flex-col">
            {navItems.map((item, i) => {
              const active = isActive(item.href)
              return (
                <li
                  key={item.href}
                  className={`border-b border-line-dark transition-[opacity,transform] duration-700 ease-[var(--ease-cinematic)] ${
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: isOpen ? `${80 + i * 50}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    tabIndex={isOpen ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    className="flex items-baseline justify-between gap-4 py-4"
                  >
                    <span className={`font-display text-[2.4rem] leading-none ${active ? "text-gold-soft" : ""}`}>
                      {item.label}
                    </span>
                    <span className="eyebrow text-mist">0{i + 1}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" onClick={close} tabIndex={isOpen ? 0 : -1} className="btn btn-gold flex-1">
                Book a Session
              </Link>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
                className="btn btn-outline-light flex-1"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist">
              <a href={contact.emailHref} tabIndex={isOpen ? 0 : -1} className="py-1 hover:text-paper">
                {contact.email}
              </a>
              <a
                href={contact.instagram[0].href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
                className="inline-flex items-center gap-1 py-1 hover:text-paper"
              >
                Instagram <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
