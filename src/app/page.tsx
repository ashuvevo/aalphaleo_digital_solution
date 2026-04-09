import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Industries } from "@/components/Industries";
import { Process } from "@/components/Process";
import { SitePageShell } from "@/components/SitePageShell";
import { ShopifySection } from "@/components/ShopifySection";
import { WhyChoose } from "@/components/WhyChoose";
import { getWebsiteContent } from "@/lib/cms";
import { HeroSection } from "@/sections/HeroSection";
import { PricingSection } from "@/sections/PricingSection";
import { ServicesSection } from "@/sections/ServicesSection";

export default async function Home() {
  const content = await getWebsiteContent();

  return (
    <SitePageShell>
      <HeroSection content={content.hero} phone={content.contact.phone} />
      <ServicesSection
        heading={content.services.heading}
        subheading={content.services.subheading}
        items={content.services.items}
      />
        <ShopifySection />
      <PricingSection
        heading={content.pricing.heading}
        subheading={content.pricing.subheading}
        packages={content.pricing.packages}
      />
      <WhyChoose heading={content.about.heading} items={content.about.items} />
        <Process />
        <Industries />
      <CTA content={content.cta} />
      <Contact content={content.contact} />
    </SitePageShell>
  );
}
