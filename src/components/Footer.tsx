import Link from "next/link";
import { Globe, MessageCircle, Phone, Send } from "lucide-react";
import { serviceLinks } from "@/lib/services";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-12">
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3 lg:col-span-2">
          <p className="text-lg font-bold text-slate-900">Aalphaleo Digital Solution</p>
          <p className="text-sm text-slate-600">Solving Your Business Problem.</p>
          <div className="space-y-2 pt-1">
            <a href="tel:+919288621081" className="block text-sm text-slate-600 hover:text-slate-900">
              Phone: +91 9288621081
            </a>
            <a
              href="https://www.aalphaleo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-slate-600 hover:text-slate-900"
            >
              Website: https://www.aalphaleo.com
            </a>
          </div>
          <div className="flex gap-2 pt-2">
            {[Globe, MessageCircle, Send, Phone].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-orange-200 hover:text-orange-600"
                aria-label="social-icon"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-800">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-800">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            {serviceLinks.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="text-sm text-slate-600 hover:text-slate-900">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
