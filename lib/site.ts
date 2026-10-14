// Shared site content and contact details. Presentation only — no secrets here.

import type { Metadata } from "next"

export const SITE_URL = "https://www.damzypictures.com"

export const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Guests celebrating at a wedding reception, photographed by DamzyPictures",
}

/**
 * Per-page metadata. Next.js replaces (rather than merges) a parent's openGraph/twitter
 * objects, so every page rebuilds the full set here to keep the share image and site name.
 */
export function pageMetadata({
  title,
  description,
  path,
  shareDescription = description,
}: {
  title: string
  description: string
  path: string
  shareDescription?: string
}): Metadata {
  const fullTitle = `${title} | DamzyPictures`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description: shareDescription,
      url: path,
      siteName: "DamzyPictures",
      locale: "en_NG",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: shareDescription,
      images: [ogImage.url],
    },
  }
}

export const contact = {
  phones: [
    { display: "+234 708 403 6843", href: "tel:+2347084036843" },
    { display: "+234 811 807 2288", href: "tel:+2348118072288" },
  ],
  email: "damzypictures@gmail.com",
  emailHref: "mailto:damzypictures@gmail.com",
  whatsapp: "https://wa.me/2347084036843",
  instagram: [
    { handle: "@damzy_pictures", href: "https://www.instagram.com/damzy_pictures" },
    { handle: "@damzyshotit", href: "https://www.instagram.com/damzyshotit" },
  ],
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
]

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  features: string[]
  image: string
  imageAlt: string
  /** Must match an <option> value in the contact form's service select. */
  formValue: string
}

export const services: Service[] = [
  {
    slug: "photography",
    title: "Photography",
    short: "Events, studio portraits, corporate, lifestyle and the moments in between.",
    description: "Capture life's most beautiful moments with professional photography services",
    features: ["Event Photography", "Studio Portraits", "Product Photography", "Lifestyle Photography"],
    image: "/portfolio-fashion-lookbook.jpg",
    imageAlt: "Studio portrait of a woman in yellow and blue traditional attire seated on a carved chair",
    formValue: "Photography",
  },
  {
    slug: "videography",
    title: "Videography",
    short: "Cinematic film that brings your story to life, from first frame to final cut.",
    description: "Cinematic video production that brings your story to life",
    features: ["Event Videography", "Commercial Videos", "Promotional Content", "Music Videos"],
    image: "/videography-service-showcase.jpg.jpg",
    imageAlt: "Outdoor event with a DJ stage and crowd, filmed by DamzyPictures",
    formValue: "Videography",
  },
  {
    slug: "live-streaming",
    title: "Live Streaming & Broadcasting",
    short: "Multi-camera live streams for events, conferences and online audiences.",
    description: "Professional live streaming for events, conferences, and online content",
    features: ["Event Live Streaming", "Online Broadcasting", "Multi-camera Setup", "Real-time Editing"],
    image: "/portfolio-festival-live.jpg",
    imageAlt: "Guests dressed in white and red at a celebration, with cameras on stage behind",
    formValue: "Live Streaming",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    short: "Digital content tailored to your brand and the platforms your audience lives on.",
    description: "Digital content tailored for your brand and social media platforms",
    features: ["Social Media Content", "Blog Photography", "Brand Storytelling", "Behind-the-scenes"],
    image: "/content-creation-service-showcase.jpg",
    imageAlt: "Content creation kit: ring light, phone tripod, microphones and accessories",
    formValue: "Content Creation",
  },
  {
    slug: "drone",
    title: "Drone Services",
    short: "Aerial photography and video for perspectives the ground can't offer.",
    description: "Aerial photography and videography for unique perspectives",
    features: ["Aerial Photography", "Drone Videography", "Property Tours", "Event Coverage"],
    image: "/drone-service-showcase.jpeg",
    imageAlt: "Aerial drone view of a crowded beach meeting turquoise water",
    formValue: "Drone Services",
  },
  {
    slug: "multimedia",
    title: "General Multimedia",
    short: "Post-production, design and multimedia solutions for every creative need.",
    description: "Comprehensive multimedia solutions for all your creative needs",
    features: ["3D Rendering", "Animation", "Graphic Design", "Post-production"],
    image: "/portfolio-concert-live.jpeg",
    imageAlt: "Editor working at a multi-screen post-production and streaming desk",
    formValue: "Other",
  },
]

export type PortfolioItem = {
  id: number
  title: string
  category: string
  image: string
  description: string
  width: number
  height: number
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Elegant Wedding Ceremony",
    category: "Weddings",
    image: "/elegant-wedding.jpeg",
    description: "Capturing the most important day with cinematic perfection",
    width: 864,
    height: 1080,
  },
  {
    id: 2,
    title: "Corporate Summit",
    category: "Corporate",
    image: "/cooperate-summit.jpeg",
    description: "Professional event coverage for 500+ attendees",
    width: 1080,
    height: 720,
  },
  {
    id: 3,
    title: "Fashion Brand Lookbook",
    category: "Studio Shoots",
    image: "/portfolio-fashion-lookbook.jpg",
    description: "High-end fashion photography and styling",
    width: 3558,
    height: 4447,
  },
  {
    id: 4,
    title: "Sports and Entertainment Documentary",
    category: "Documentaries",
    image: "/portfolio-documentary-sports.jpg",
    description: "In-depth storytelling of athletes and entertainers",
    width: 3600,
    height: 2400,
  },
  {
    id: 5,
    title: "Lifestyle Campaign",
    category: "Lifestyle",
    image: "/portfolio-lifestyle-campaign.jpg",
    description: "Authentic moments captured with artistic vision",
    width: 3600,
    height: 2400,
  },
  {
    id: 6,
    title: "Product Photography Series",
    category: "Studio Shoots",
    image: "/portfolio-product-photography.jpg",
    description: "Professional product showcase for e-commerce",
    width: 2880,
    height: 3600,
  },
  {
    id: 7,
    title: "Wedding Reception Dance",
    category: "Weddings",
    image: "/portfolio-wedding-reception.jpg",
    description: "Candid moments of joy and celebration",
    width: 3600,
    height: 2400,
  },
  {
    id: 8,
    title: "Social event coverage",
    category: "Social Events",
    image: "/portfolio-social-event.jpg",
    description: "Vibrant coverage of social gatherings and parties",
    width: 3600,
    height: 2400,
  },
  {
    id: 9,
    title: "Brand Commercial Video",
    category: "Documentaries",
    image: "/portfolio-brand-commercial.jpg",
    description: "Compelling visual narrative for brand promotion",
    width: 2880,
    height: 3600,
  },
  {
    id: 10,
    title: "Educational Event Shoot",
    category: "Corporate",
    image: "/portfolio-educational-event.jpg",
    description: "Capturing key moments from seminars and Educational insights",
    width: 4942,
    height: 3469,
  },
  {
    id: 11,
    title: "Festival Live Coverage",
    category: "Lifestyle",
    image: "/portfolio-festival-live.jpg",
    description: "Energetic coverage of cultural events",
    width: 6240,
    height: 4160,
  },
  {
    id: 12,
    title: "Studio Portrait Session",
    category: "Studio Shoots",
    image: "/portfolio-studio-portrait.jpg",
    description: "Professional headshots and portraits",
    width: 3648,
    height: 4560,
  },
  {
    id: 13,
    title: "Concert Live Streaming",
    category: "Documentaries",
    image: "/portfolio-concert-live.jpeg",
    description: "Professional live streaming and production",
    width: 1170,
    height: 770,
  },
  {
    id: 14,
    title: "Portrait wedding Photography",
    category: "Weddings",
    image: "/portfolio-wedding-portrait.jpg",
    description: "Timeless portraits capturing love and connection",
    width: 3648,
    height: 5472,
  },
  {
    id: 15,
    title: "Convocation",
    category: "Studio Shoots",
    image: "/convocation.jpeg",
    description: "Professional Convocation Portrait",
    width: 3373,
    height: 4216,
  },
  {
    id: 16,
    title: "Wedding Portrait",
    category: "Weddings",
    image: "/wedding2.jpeg",
    description: "Professional Wedding Portrait",
    width: 3690,
    height: 4612,
  },
]

export const portfolioCategories = [
  "All",
  "Weddings",
  "Corporate",
  "Studio Shoots",
  "Documentaries",
  "Lifestyle",
  "Social Events",
]

export const coreValues = [
  {
    title: "Professionalism",
    description: "Clear communication, punctuality and care from the first conversation to final delivery.",
  },
  {
    title: "Creativity",
    description: "Fresh, intentional visual ideas that make every story feel like its own.",
  },
  {
    title: "Reliability",
    description: "Consistent delivery and dependable service you can count on.",
  },
  {
    title: "Excellence",
    description: "High-quality output, refined in post-production until every frame is right.",
  },
  {
    title: "Customer Satisfaction",
    description: "We listen closely and work with you until the result feels right.",
  },
]

export type Client = {
  name: string
  logo: string
  /** Intrinsic pixel size of the logo file. */
  width: number
  height: number
  /** Optional optical-weight adjustment (solid tiles read heavier than outline marks). */
  weight?: number
}

// Brands and organisations DamzyPictures has worked with, as supplied by the business.
// Ordered so similar-looking logos are not next to each other.
export const clients: Client[] = [
  { name: "Schneider Electric", logo: "/clients/schneider-electric.png", width: 544, height: 169 },
  { name: "Seplat Energy", logo: "/clients/seplat.png", width: 328, height: 207 },
  { name: "Dentons ACAS-Law", logo: "/clients/dentons-acas-law.png", width: 511, height: 74 },
  { name: "FXTM", logo: "/clients/fxtm.png", width: 598, height: 189 },
  { name: "Association of International Energy Negotiators (AIEN)", logo: "/clients/aien.png", width: 600, height: 517 },
  { name: "Vertiv", logo: "/clients/vertiv.png", width: 957, height: 247 },
  { name: "Haemophilia Hand of Hope Foundation Nigeria", logo: "/clients/haemophilia-hand-of-hope.png", width: 185, height: 222 },
  { name: "APC by Schneider Electric", logo: "/clients/apc.png", width: 820, height: 398 },
  { name: "Lauritz Knudsen Electrical & Automation", logo: "/clients/lauritz-knudsen.png", width: 417, height: 222 },
  { name: "Bolamark Engineering Limited", logo: "/clients/bolamark.png", width: 308, height: 108 },
  { name: "EventGo2Guys", logo: "/clients/eventgo2guys.png", width: 183, height: 98 },
]

export const faqs = [
  {
    q: "What is your turnaround time?",
    a: "Standard turnaround is 2-3 weeks. We also deliver 24-48hrs after event, Terms and conditions applied. Rush orders available upon request with additional fees.",
  },
  {
    q: "Do you offer post-event editing?",
    a: "Yes, we provide professional editing, color grading, and post-production for all services.",
  },
  {
    q: "What are your payment terms?",
    a: "We require a 70% deposit to confirm booking, with the balance due within 24-48hrs after event.",
  },
  {
    q: "Can you travel for events?",
    a: "We travel nationwide and internationally. Travel costs are calculated separately.",
  },
  {
    q: "Do you provide raw files?",
    a: "Raw files are available as an add-on. Standard packages include edited, color-graded final images.",
  },
  {
    q: "What happens if we're not satisfied?",
    a: "We offer revisions until you're satisfied. Your happiness is our priority.",
  },
]
