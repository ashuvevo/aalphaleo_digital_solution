import Link from "next/link";
import { Globe } from "lucide-react";
import { serviceLinks } from "@/lib/services";
import { defaultSiteSettings, SiteSettingsData } from "@/types/cms";

type FooterProps = {
  settings?: SiteSettingsData;
  blogLinks?: Array<{ title: string; slug: string }>;
};

function toTel(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function Footer({ settings, blogLinks = [] }: FooterProps) {
  const activeSettings = settings ?? defaultSiteSettings;

  return (
    <footer className="border-t border-slate-200 bg-white/70 py-12">
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          <p className="text-lg font-bold text-slate-900">Aalphaleo Digital Solution</p>
          <p className="text-sm text-slate-600">{activeSettings.footerText}</p>
          <div className="space-y-2 pt-1">
            <a href={toTel(activeSettings.phone)} className="block text-sm text-slate-600 hover:text-slate-900">
              Phone: {activeSettings.phone}
            </a>
            <a
              href={activeSettings.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-slate-600 hover:text-slate-900"
            >
              Website: {activeSettings.website}
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {activeSettings.socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-orange-200 hover:text-orange-600"
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-800">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            {activeSettings.navItems.map((link) => (
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

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-800">Blog</p>
          <ul className="mt-4 space-y-2">
            {blogLinks.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="text-sm text-slate-600 hover:text-slate-900">
                  {post.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="text-sm font-medium text-orange-600 hover:text-orange-700">
                View all blog posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
