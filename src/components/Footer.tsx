import { Globe, MessageCircle, Phone, Send } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Shopify Development",
  "Website Development",
  "WooCommerce",
  "Mobile App Development",
  "Digital Marketing",
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-12">
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3 lg:col-span-2">
          <p className="text-lg font-bold text-slate-900">Aalphaleo Digital Solution</p>
          <p className="text-sm text-slate-600">Solving Your Business Problem.</p>
          <div className="flex gap-2 pt-2">
            {[Globe, MessageCircle, Send, Phone].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-indigo-200 hover:text-indigo-600"
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
                <a href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                  {link.label}
                </a>
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
              <li key={service} className="text-sm text-slate-600">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
