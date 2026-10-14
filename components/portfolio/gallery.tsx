"use client"

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import { portfolioCategories, portfolioItems, type PortfolioItem } from "@/lib/site"

const noopSubscribe = () => () => {}

export default function Gallery() {
  // Deep links such as /portfolio?category=Weddings set the initial filter.
  // The server snapshot is "" so the static HTML always renders "All" and hydrates cleanly.
  const search = useSyncExternalStore(
    noopSubscribe,
    () => window.location.search,
    () => "",
  )
  const requested = new URLSearchParams(search).get("category")
  const [picked, setPicked] = useState<string | null>(null)
  const category = picked ?? (requested && portfolioCategories.includes(requested) ? requested : "All")

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduce = useReducedMotion()
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const items = useMemo(
    () => (category === "All" ? portfolioItems : portfolioItems.filter((i) => i.category === category)),
    [category],
  )

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: portfolioItems.length }
    for (const item of portfolioItems) map[item.category] = (map[item.category] ?? 0) + 1
    return map
  }, [])

  const selectCategory = (c: string) => {
    setPicked(c)
    const url = new URL(window.location.href)
    if (c === "All") url.searchParams.delete("category")
    else url.searchParams.set("category", c)
    window.history.replaceState(null, "", url)
  }

  const open = (index: number, el: HTMLButtonElement) => {
    triggerRef.current = el
    setOpenIndex(index)
  }

  const close = () => {
    setOpenIndex(null)
    // Return focus to the thumbnail that opened the lightbox.
    requestAnimationFrame(() => triggerRef.current?.focus())
  }

  return (
    <>
      {/* Filters */}
      <div className="sticky top-[var(--nav-height)] z-30 border-y border-line-dark bg-ink/90 backdrop-blur-md">
        <div className="container-x">
          <div
            role="group"
            aria-label="Filter portfolio by category"
            className="-mx-4 flex gap-1 overflow-x-auto px-4 py-3 [scrollbar-width:none] max-sm:pr-12 max-sm:[mask-image:linear-gradient(to_right,#000_calc(100%-3rem),transparent)] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {portfolioCategories.map((c) => {
              const selected = c === category
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => selectCategory(c)}
                  aria-pressed={selected}
                  className={`inline-flex min-h-11 shrink-0 items-center gap-2 px-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                    selected ? "bg-paper text-ink" : "text-white/65 hover:text-paper"
                  }`}
                >
                  {c}
                  <span className={`tabular-nums ${selected ? "text-gold-deep" : "text-white/35"}`}>{counts[c] ?? 0}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section aria-label={`${category} — ${items.length} ${items.length === 1 ? "project" : "projects"}`} className="py-12 md:py-20">
        <p className="sr-only" aria-live="polite">
          Showing {items.length} {items.length === 1 ? "project" : "projects"} in {category}
        </p>
        <div className="container-x">
          <ul key={category} className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
            {items.map((item, index) => (
              <motion.li
                key={item.id}
                className="mb-5 break-inside-avoid lg:mb-6"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: reduce ? 0 : Math.min(index, 8) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <GalleryTile item={item} onOpen={(el) => open(index, el)} eager={index < 3} />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox items={items} index={openIndex} onIndexChange={setOpenIndex} onClose={close} />
        )}
      </AnimatePresence>
    </>
  )
}

function GalleryTile({
  item,
  onOpen,
  eager,
}: {
  item: PortfolioItem
  onOpen: (el: HTMLButtonElement) => void
  eager: boolean
}) {
  return (
    <figure>
      <button
        type="button"
        onClick={(e) => onOpen(e.currentTarget)}
        className="group relative block w-full overflow-hidden bg-ink-2 text-left"
        aria-label={`Open ${item.title} in full screen`}
      >
        <Image
          src={item.image}
          alt={`${item.title} — ${item.description}`}
          width={item.width}
          height={item.height}
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
          loading={eager ? "eager" : "lazy"}
          className="h-auto w-full transition-transform duration-[1.4s] ease-[var(--ease-cinematic)] group-hover:scale-[1.035]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 flex size-10 items-center justify-center bg-ink/60 text-paper opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <Expand className="size-4" />
        </span>
      </button>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4">
        <span className="font-display text-lg leading-tight text-paper md:text-xl">{item.title}</span>
        <span className="eyebrow shrink-0 text-mist">{item.category}</span>
      </figcaption>
    </figure>
  )
}

function Lightbox({
  items,
  index,
  onIndexChange,
  onClose,
}: {
  items: PortfolioItem[]
  index: number
  onIndexChange: (i: number) => void
  onClose: () => void
}) {
  const item = items[index]
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchX = useRef<number | null>(null)

  const prev = useCallback(() => onIndexChange((index - 1 + items.length) % items.length), [index, items.length, onIndexChange])
  const next = useCallback(() => onIndexChange((index + 1) % items.length), [index, items.length, onIndexChange])

  useEffect(() => {
    closeRef.current?.focus()
    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = overflow
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowLeft") prev()
      else if (e.key === "ArrowRight") next()
      else if (e.key === "Tab" && dialogRef.current) {
        const f = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button"))
        if (f.length === 0) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [next, prev, onClose])

  if (!item) return null

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}, image ${index + 1} of ${items.length}`}
      className="fixed inset-0 z-[60] flex flex-col bg-ink/[0.97] text-paper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)()
        touchX.current = null
      }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p className="eyebrow tabular-nums text-mist">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex size-12 items-center justify-center text-paper transition-colors hover:text-gold-soft"
          aria-label="Close full-screen view"
        >
          <X aria-hidden="true" className="size-6" />
        </button>
      </div>

      <div className="relative min-h-0 flex-1" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.id}
            className="pointer-events-none absolute inset-0 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={item.image}
              alt={`${item.title} — ${item.description}`}
              fill
              sizes="100vw"
              className="object-contain px-2 sm:px-20"
            />
          </motion.div>
        </AnimatePresence>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-1 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center bg-ink/50 text-paper transition-colors hover:text-gold-soft sm:left-4"
              aria-label="Previous image"
            >
              <ChevronLeft aria-hidden="true" className="size-6" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-1 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center bg-ink/50 text-paper transition-colors hover:text-gold-soft sm:right-4"
              aria-label="Next image"
            >
              <ChevronRight aria-hidden="true" className="size-6" />
            </button>
          </>
        )}
      </div>

      <div className="container-x flex flex-col gap-2 py-5 sm:flex-row sm:items-end sm:justify-between sm:py-6">
        <div>
          <p className="eyebrow text-gold-soft">{item.category}</p>
          <h2 className="mt-2 font-display text-2xl leading-tight md:text-3xl">{item.title}</h2>
        </div>
        <p className="max-w-md text-sm text-white/65 sm:text-right">{item.description}</p>
      </div>
    </motion.div>
  )
}
