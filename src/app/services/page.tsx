import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { SitePageShell } from "@/components/SitePageShell";
import { serviceLinks } from "@/lib/services";

export const metadata: Metadata = {
  title: "Digital Services | Aalphaleo Digital Solution",
  description:
    "Explore Aalphaleo Digital Solution services including Shopify development, website development, WooCommerce, mobile apps, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <SitePageShell>
      <ServicePageTemplate
        eyebrow="Our Services"
        title="Digital Solutions Built Around Your Business Goals"
        description="Aalphaleo Digital Solution helps brands launch, grow, and optimize their digital presence with practical solutions that solve real business problems."
        features={[
          "End-to-end website and store development",
          "Custom-coded Shopify experiences focused on conversion",
          "Performance-driven marketing and campaign support",
          "Mobile-first user experience and responsive delivery",
        ]}
        benefits={[
          "Get a tailored service roadmap for your business stage",
          "Launch faster with expert implementation support",
          "Improve conversions with UX and speed optimization",
          "Work with a team focused on measurable outcomes",
        ]}
        ctaTitle="Discuss the Right Service for Your Business"
        ctaDescription="Tell us your goal and we will recommend the best service package to move your business forward."
        primaryAction={{ href: "/#contact", label: "Book Free Consultation" }}
        secondaryAction={{ href: "tel:+919288621081", label: "Call +91 9288621081" }}
      >
        <section className="section-shell pb-16 sm:pb-20">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Service Categories</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-indigo-200"
                >
                  <p className="text-sm font-semibold text-slate-900">{service.label}</p>
                  <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ServicePageTemplate>
    </SitePageShell>
  );
}
