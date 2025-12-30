import Link from "next/link"
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-accent">Damzy</span>Pictures
            </h3>
            <p className="text-gray-400 text-sm mb-4">Capturing moments with authenticity, clarity & class</p>
            <p className="text-accent text-xs font-medium">Available for Travels</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:+2347084036843" className="hover:text-accent transition-colors">
                  +234 708 403 6843
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:+2348118072288" className="hover:text-accent transition-colors">
                  +234 811 807 2288
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:damzypictures@gmail.com" className="hover:text-accent transition-colors">
                  damzypictures@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/damzy_pictures?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-opacity-90 text-accent-foreground p-3 rounded transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/2347084036843"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-opacity-90 text-accent-foreground p-3 rounded transition-all"
              >
                <MessageCircle size={20} />
              </a>
               <a
                href="
2. https://www.instagram.com/damzyshotit?igsh=ZnlxYXFqNDluc3c2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-opacity-90 text-accent-foreground p-3 rounded transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} DamzyPictures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
