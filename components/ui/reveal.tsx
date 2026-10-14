"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  /** Vertical travel in px. */
  y?: number
  as?: "div" | "li" | "figure" | "article"
}

/** Subtle fade-and-rise on first scroll into view. Static when the user prefers reduced motion. */
export default function Reveal({ children, className, delay = 0, y = 28, as = "div" }: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  if (reduce) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
