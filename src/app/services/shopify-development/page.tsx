import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { SitePageShell } from "@/components/SitePageShell";

export const metadata: Metadata = {
  title: "Shopify Website Development | Aalphaleo Digital Solution",
  description:
    "Custom Shopify website development with payment gateway integration and conversion optimized design.",
};

const shopifyFeatures = [
  "Custom Shopify website design",
  "Shopify store setup",
  "Payment gateway integration",
  "Shipping partner integration",
  "Mobile responsive design",
  "Conversion optimized product pages",
  "Speed optimized store",
];

const shopifyBenefits = [
  "Launch a conversion-focused Shopify store faster",
  "Deliver a premium brand experience with custom-coded UI",
  "Increase customer trust with secure payment and shipping setup",
  "Improve checkout completion with optimized product journeys",
];

const packages = [
  {
    name: "Starter Package",
    price: "₹10,000",
    features: [
      "Shopify store setup",
      "Custom homepage design",
      "Product upload (10 products)",
      "Payment gateway integration",
      "Shipping setup",
      "WhatsApp chat integration",
    ],
  },
  {
    name: "Premium Package",
    price: "₹20,000",
    features: [
      "Fully custom coded Shopify website",
      "Premium homepage design",
      "Product upload (30 products)",
      "Payment gateway integration",
      "Shipping partner integration",
      "One click checkout integration",
      "Conversion optimized product pages",
    ],
  },
];

export default function ShopifyDevelopmentPage() {
  return (
    <SitePageShell>
      <ServicePageTemplate
        eyebrow="Primary Focus Service"
        title="Shopify Custom-Coded Website Development"
        description="Aalphaleo Digital Solution specializes in Shopify custom-coded website development for businesses that want premium design, fast performance, and better conversions."
        features={shopifyFeatures}
        benefits={shopifyBenefits}
        ctaTitle="Launch Your Shopify Store With Aalphaleo"
        ctaDescription="Get a Shopify store tailored to your products and customer journey with expert setup, design, and optimization."
        primaryAction={{ href: "/#contact", label: "Start Your Shopify Project" }}
        secondaryAction={{ href: "tel:+919288621081", label: "Call +91 9288621081" }}
      >
        <section className="section-shell pb-16 sm:pb-20">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Pricing Packages</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {packages.map((item) => (
                <article
                  key={item.name}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                    {item.name}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{item.price}</p>
                  <ul className="mt-5 space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-slate-600">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ServicePageTemplate>
    </SitePageShell>
  );
}
