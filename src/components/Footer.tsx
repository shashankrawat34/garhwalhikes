import Link from "next/link";
import { Mountain, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold font-heading">
                Garhwal<span className="text-accent"> Hikes</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Crafting unforgettable trekking adventures in the mystical Garhwal
              Himalayas since 2015. Your journey to the mountains starts here.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-accent transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-accent transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-accent transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-accent mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/treks", label: "All Treks" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h3 className="font-semibold text-accent mb-4 font-heading">Popular Treks</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/treks/kedarkantha", label: "Kedarkantha" },
                { href: "/treks/har-ki-dun", label: "Har Ki Dun" },
                { href: "/treks/roopkund", label: "Roopkund" },
                { href: "/treks/valley-of-flowers", label: "Valley of Flowers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-accent mb-4 font-heading">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>Rishikesh, Uttarakhand, India 249201</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>hello@garhwalhikes.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Garhwal Hikes. All rights reserved.</p>
          <p className="text-xs">Trek responsibly. Leave no trace. Respect the mountains.</p>
        </div>
      </div>
    </footer>
  );
}
