import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { SitePageShell } from "@/components/SitePageShell";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Aalphaleo Digital Solution",
  description:
    "Digital marketing services designed to improve visibility, attract qualified traffic, and drive measurable business growth.",
};

export default function DigitalMarketingPage() {
  return (
    <SitePageShell>
      <ServicePageTemplate
        title="Digital Marketing"
        description="Our digital marketing services combine strategy, execution, and optimization to help your business reach the right audience and convert better."
        features={[
          "Search engine optimization (SEO)",
          "Paid advertising campaign management",
          "Social media marketing strategy",
          "Conversion-focused landing page optimization",
          "Analytics tracking and performance reports",
          "Content strategy aligned with business goals",
        ]}
        benefits={[
          "Increase brand visibility across key channels",
          "Generate high-intent traffic and better leads",
          "Improve return on ad spend with optimization",
          "Make growth decisions using real campaign data",
        ]}
        ctaTitle="Scale Faster With Smarter Digital Marketing"
        ctaDescription="Get a clear, performance-focused marketing plan that supports sustainable business growth."
        primaryAction={{ href: "/#contact", label: "Request Marketing Strategy" }}
        secondaryAction={{ href: "tel:+919288621081", label: "Call +91 9288621081" }}
      />
    </SitePageShell>
  );
}
