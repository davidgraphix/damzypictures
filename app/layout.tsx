import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { SITE_URL, contact, ogImage } from "@/lib/site"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const description =
  "Capturing moments with authenticity, clarity & class. Professional photography, videography, live streaming, and multimedia content creation."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DamzyPictures | Premium Photography & Videography",
    template: "%s | DamzyPictures",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "DamzyPictures | Premium Photography & Videography",
    description: "Capturing moments with authenticity, clarity & class.",
    type: "website",
    url: "/",
    siteName: "DamzyPictures",
    locale: "en_NG",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "DamzyPictures | Premium Photography & Videography",
    description: "Capturing moments with authenticity, clarity & class.",
    images: [ogImage.url],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DamzyPictures",
  url: SITE_URL,
  logo: `${SITE_URL}/logo1.PNG`,
  image: `${SITE_URL}${ogImage.url}`,
  description,
  email: contact.email,
  telephone: contact.phones.map((p) => p.href.replace("tel:", "")),
  areaServed: ["Lagos, Nigeria", "Nigeria"],
  sameAs: contact.instagram.map((i) => i.href),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${cormorant.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-3 focus:text-sm focus:text-ink"
        >
          Skip to content
        </a>
        <Navigation />
        <div id="main" tabIndex={-1} className="outline-none">
          {children}
        </div>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          // Static, trusted JSON — no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
