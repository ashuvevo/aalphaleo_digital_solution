import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Industries } from "@/components/Industries";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { ShopifySection } from "@/components/ShopifySection";
import { WhyChoose } from "@/components/WhyChoose";
import { HeroSection } from "@/sections/HeroSection";
import { PricingSection } from "@/sections/PricingSection";
import { ServicesSection } from "@/sections/ServicesSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-80 h-[320px] w-[320px] rounded-full bg-gradient-to-r from-amber-300/25 to-orange-400/20 blur-3xl" />

      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ShopifySection />
        <PricingSection />
        <WhyChoose />
        <Process />
        <Industries />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
