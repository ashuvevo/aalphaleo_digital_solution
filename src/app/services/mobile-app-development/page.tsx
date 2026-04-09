import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { SitePageShell } from "@/components/SitePageShell";

export const metadata: Metadata = {
  title: "Mobile App Development | Aalphaleo Digital Solution",
  description:
    "Mobile app development services for Android and iOS with scalable architecture, modern UX, and performance-focused delivery.",
};

export default function MobileAppDevelopmentPage() {
  return (
    <SitePageShell>
      <ServicePageTemplate
        title="Mobile App Development"
        description="We design and build mobile applications that help brands engage users, simplify operations, and unlock new revenue channels."
        features={[
          "Android and iOS app development",
          "Custom app UI/UX and user flows",
          "API integration with business systems",
          "Secure authentication and data handling",
          "Performance testing and deployment support",
          "Post-launch enhancements and maintenance",
        ]}
        benefits={[
          "Increase customer engagement on mobile",
          "Improve service delivery with app-based workflows",
          "Create a scalable product foundation",
          "Deliver a consistent cross-device experience",
        ]}
        ctaTitle="Turn Your App Idea Into a Market-Ready Product"
        ctaDescription="Partner with us to build a reliable, user-friendly mobile app aligned with your business objectives."
        primaryAction={{ href: "/#contact", label: "Discuss App Development" }}
        secondaryAction={{ href: "tel:+919288621081", label: "Call +91 9288621081" }}
      />
    </SitePageShell>
  );
}
