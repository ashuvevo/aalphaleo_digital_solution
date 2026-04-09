import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { SitePageShell } from "@/components/SitePageShell";

export const metadata: Metadata = {
  title: "Website Development | Aalphaleo Digital Solution",
  description:
    "Professional website development services that combine modern design, speed, and lead-focused user journeys.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <SitePageShell>
      <ServicePageTemplate
        title="Website Development"
        description="We build high-performing business websites that establish trust, communicate your value clearly, and turn visitors into leads."
        features={[
          "Custom website UI/UX design",
          "Responsive design across all devices",
          "SEO-friendly structure and clean code",
          "Fast-loading pages with optimized assets",
          "Lead capture forms and inquiry workflows",
          "CMS-ready architecture for easy updates",
        ]}
        benefits={[
          "Create a strong first impression for your brand",
          "Improve organic visibility and discoverability",
          "Generate more qualified inquiries",
          "Scale your website as your business grows",
        ]}
        ctaTitle="Build a Website That Works for Your Business"
        ctaDescription="Let us craft a professional website that supports your business goals and drives measurable growth."
        primaryAction={{ href: "/#contact", label: "Get Website Consultation" }}
        secondaryAction={{ href: "tel:+919288621081", label: "Call +91 9288621081" }}
      />
    </SitePageShell>
  );
}
