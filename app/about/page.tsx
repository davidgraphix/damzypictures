import type { Metadata } from "next"
import Image from "next/image"
import PageHero from "@/components/ui/page-hero"
import Reveal from "@/components/ui/reveal"
import CTASection from "@/components/ui/cta-section"
import DirectorBio from "@/components/about/director-bio"
import { coreValues, pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Damzy Pictures is a creative media and visual storytelling brand dedicated to capturing moments with authenticity, clarity, and class.",
  path: "/about",
  shareDescription: "A journey of capturing authentic moments with clarity and class.",
})

const team = [
  "Professional photographers and videographers",
  "Advanced editing and post-production team",
  "Live streaming and broadcasting specialists",
  "Content strategy and creative directors",
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Every moment has a story <em className="italic text-gold-soft">worth preserving.</em>
          </>
        }
        intro="A journey of capturing authentic moments with clarity and class."
        image="/portfolio-wedding-elegant.jpg"
        imageAlt="Bride in a lace gown and groom in a tan suit posing against a painted backdrop"
        position="center 28%"
      />

      {/* Who we are */}
      <section className="section-y bg-ivory" aria-labelledby="who-heading">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow text-gold-deep">Who we are</p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 id="who-heading" className="display-md text-ink">
                Damzy Pictures is a creative media and visual storytelling brand dedicated to capturing moments with{" "}
                <em className="italic text-gold-deep">authenticity, clarity, and class.</em>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-stone md:text-lg">
                  The brand specializes in photography, videography, live streaming, broadcasting, event documentation,
                  and digital content creation. We believe that every moment deserves to be captured with intention and
                  artistry.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base leading-relaxed text-stone md:text-lg">
                  Whether you&apos;re planning a wedding, launching a brand, hosting a corporate event, or creating
                  digital content, we bring professionalism, creativity, and dedication to every project.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-ink text-paper" aria-label="Mission and vision">
        <div className="container-x grid md:grid-cols-2">
          <Reveal className="border-b border-line-dark py-16 md:border-b-0 md:border-r md:py-24 md:pr-12 lg:py-32 lg:pr-20">
            <p className="eyebrow text-gold-soft">Our mission</p>
            <p className="display-sm mt-8">
              To deliver high-quality visual content that preserves memories, elevates brands, and tells powerful
              stories with creativity and precision.
            </p>
          </Reveal>
          <Reveal className="py-16 md:py-24 md:pl-12 lg:py-32 lg:pl-20" delay={0.1}>
            <p className="eyebrow text-gold-soft">Our vision</p>
            <p className="display-sm mt-8">
              To become a leading creative media brand recognized for excellence, innovation, and impactful storytelling
              across Africa and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="section-y bg-paper" aria-labelledby="values-heading">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-gold-deep">What guides us</p>
            <h2 id="values-heading" className="display-lg mt-5 text-ink">
              Our core values
            </h2>
          </Reveal>
          <ol className="border-t border-line-light lg:col-span-8">
            {coreValues.map((v, i) => (
              <Reveal
                as="li"
                key={v.title}
                delay={i * 0.05}
                className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-2 border-b border-line-light py-8 md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-x-8"
              >
                <span className="eyebrow text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-3xl leading-tight text-ink md:text-4xl">{v.title}</h3>
                <p className="col-start-2 text-base leading-relaxed text-stone md:col-start-3">{v.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Creative director */}
      <section className="section-y bg-ivory" aria-labelledby="director-heading">
        <div className="container-x grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink md:sticky md:top-[calc(var(--nav-height)+2rem)]">
              <Image
                src="/damzy.jpeg"
                alt="Ayeni Damilare Joshua (Damzy), Creative Director of DamzyPictures"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-7 md:pt-8" delay={0.1}>
            <p className="eyebrow text-gold-deep">Damzy Pictures Creative Director</p>
            <h2 id="director-heading" className="display-md mt-5 text-ink">
              Visionary creative and passionate <em className="italic text-gold-deep">storyteller.</em>
            </h2>
            <div className="mt-8">
              <DirectorBio />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="section-y bg-paper" aria-labelledby="team-heading">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center md:gap-10 lg:gap-16">
          <Reveal className="md:order-2 md:col-span-6 lg:col-span-7">
            <div className="relative aspect-[15/8] overflow-hidden bg-paper">
              <Image
                src="/damzy-team.png"
                alt="Three members of the DamzyPictures team"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[center_53%]"
              />
            </div>
          </Reveal>
          <Reveal className="md:order-1 md:col-span-6 lg:col-span-5" delay={0.1}>
            <p className="eyebrow text-gold-deep">Our team</p>
            <h2 id="team-heading" className="display-md mt-5 text-ink">
              Creative professionals dedicated to excellence.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone md:text-lg">
              Our team consists of experienced photographers, videographers, and content creators who are passionate
              about visual storytelling. With years of experience across various industries, we understand what it
              takes to deliver exceptional results.
            </p>
            <ul className="mt-8 border-t border-line-light">
              {team.map((t) => (
                <li key={t} className="flex items-center gap-4 border-b border-line-light py-4 text-ink">
                  <span aria-hidden="true" className="size-1.5 shrink-0 bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={
          <>
            Ready to tell your <em className="italic text-gold-soft">story?</em>
          </>
        }
        text="Let's collaborate and create something extraordinary together."
        primary={{ label: "Get in Touch", href: "/contact" }}
        image="/portfolio-wedding-reception.jpg"
      />
    </main>
  )
}
