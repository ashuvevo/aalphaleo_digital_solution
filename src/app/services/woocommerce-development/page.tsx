import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { SitePageShell } from "@/components/SitePageShell";

export const metadata: Metadata = {
  title: "WooCommerce Development | Aalphaleo Digital Solution",
  description:
    "Custom WooCommerce development services with secure checkout, smooth catalog setup, and conversion-focused user journeys.",
};

export default function WooCommerceDevelopmentPage() {
  return (
    <SitePageShell>
      <ServicePageTemplate
        title="WooCommerce Development"
        description="From store architecture to checkout flow, we build WooCommerce websites that are easy to manage and optimized to sell."
        features={[
          "Custom WooCommerce store setup",
          "Theme customization and custom sections",
          "Payment gateway configuration",
          "Shipping rule and tax configuration",
          "Product catalog and category optimization",
          "Security, backup, and performance tuning",
        ]}
        benefits={[
          "Own a flexible store built on WordPress",
          "Deliver a seamless shopping experience",
          "Reduce cart abandonment with better checkout flow",
          "Manage products and content from one platform",
        ]}
        ctaTitle="Launch a Sales-Ready WooCommerce Store"
        ctaDescription="Build a WooCommerce storefront tailored to your products, audience, and growth goals."
        primaryAction={{ href: "/#contact", label: "Start WooCommerce Project" }}
        secondaryAction={{ href: "tel:+919288621081", label: "Call +91 9288621081" }}
      />
    </SitePageShell>
  );
}
