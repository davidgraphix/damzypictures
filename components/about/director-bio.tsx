"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function DirectorBio() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="space-y-5 text-base leading-relaxed text-stone md:text-lg">
      <p>
        Ayeni Damilare Joshua, fondly known as Damzy, is a visionary creative and passionate storyteller committed to
        capturing life as it happens real, emotional, meaningful, and unforgettable. As the Creative Director of
        DamzyPictures, he leads with purpose, excellence, and a deep belief that every moment has a story worth
        preserving.
      </p>

      <div id="director-bio-more" hidden={!expanded} className="space-y-5">
        <p>
          Driven by creativity and guided by discipline, Ayeni Damilare has built a brand that is committed to
          excellence, professionalism, and creativity in photography, videography, &amp; event documentation as well
          as trust reflects dedication, quality, and a brand. His work goes beyond holding a camera; it is about
          creating experiences, documenting journeys, celebrating people, and building memories that stand the test of
          time. From intimate celebrations to large events, lifestyle shoots, and corporate projects, he approaches
          every story with intention, creativity, and heart.
        </p>
        <p>
          Ayeni Damilare is a student of the University of Lagos, under the Department of Employment Relations and Human
          Resource Management, where his academic journey continues to shape his leadership, strategic thinking,
          professionalism, and strong understanding of business and brand excellence. These qualities reflect in how he
          manages projects, leads his team, and delivers value to every client.
        </p>
        <p>
          With a clear vision to inspire, impact, and redefine visual storytelling, Ayeni Damilare remains committed to
          growth, excellence, and creating timeless work through Damzy Pictures — one moment, one frame, one story at a
          time.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls="director-bio-more"
        className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-ink"
      >
        <span className="link-line">{expanded ? "Show less" : "Read more"}</span>
        <ChevronDown
          aria-hidden="true"
          className={`size-4 text-gold-deep transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  )
}
