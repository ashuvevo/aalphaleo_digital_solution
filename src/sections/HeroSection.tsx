import { Hero } from "@/components/Hero";
import { WebsiteContentData } from "@/types/cms";

type HeroSectionProps = {
  content?: WebsiteContentData["hero"];
  phone?: string;
};

export function HeroSection({ content, phone }: HeroSectionProps) {
  return <Hero content={content} phone={phone} />;
}
