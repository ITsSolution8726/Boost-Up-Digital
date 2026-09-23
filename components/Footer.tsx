import Link from "next/link";
import Image from "next/image";

import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

const services = [
  { to: "/services#seo", label: "SEO" },
  { to: "/services#google-ads", label: "Google Ads" },
  { to: "/services#meta-ads", label: "Meta Ads" },
  { to: "/services#social-media", label: "Social Media" },
  {
    to: "/services#web-development",
    label: "Web Design & Development",
  },
  {
    to: "/services#ad-films",
    label: "Ad Films & TVC",
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border/40 glass">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* COLUMN 1 - Logo & Social */}
          <div>
            <Link href="/" className="inline-flex flex-col -mt-10">
              <Image
                src="/logo.svg"
                alt="Boost Up Digital"
                width={180}
                height={55}
                priority
                className="h-auto w-[180px] sm:w-[180px] object-contain"
              />

              <div className="mt-2 text-xs tracking-[0.3em] text-muted-foreground">
                GROW · RANK · CONVERT
              </div>
            </Link>

            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-7">
              A new-age digital marketing studio helping brands generate
              leads, scale fast, and create unforgettable content.
            </p>

            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="h-10 w-10 grid place-items-center rounded-full glass border border-border/40 hover:bg-gradient-brand hover:scale-110 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2 - Explore */}
          <div>
            <h4 className="font-semibold mb-5 text-sm tracking-widest uppercase text-muted-foreground">
              Explore
            </h4>

            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    className="text-foreground/80 hover:text-brand-cyan transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 - Services */}
          <div>
            <h4 className="font-semibold mb-5 text-sm tracking-widest uppercase text-muted-foreground">
              Services
            </h4>

            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.to}>
                  <Link
                    href={service.to}
                    className="text-foreground/80 hover:text-brand-magenta transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 - Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-sm tracking-widest uppercase text-muted-foreground">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand-cyan" />

                <a
                  href="mailto:boostupdigital.official03@gmail.com"
                  className="hover:text-foreground transition-colors break-all"
                >
                  boostupdigital.official03@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand-magenta" />

                <a
                  href="tel:8509121389"
                  className="hover:text-foreground transition-colors"
                >
                  8509121389
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                Kolkata, West Bengal
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="mx-auto max-w-7xl border-t border-border px-4 pt-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 text-center text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p>
              © {new Date().getFullYear()} Boost Up Digital. Crafted with
              passion.
            </p>

            <p>
              Designed & Developed by{" "}
              <a
                href="https://itssolution.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-brand-yellow transition-colors"
              >
                IT&apos;s Solution
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}