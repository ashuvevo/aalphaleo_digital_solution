import { Pricing } from "@/components/Pricing";
import { PricingPackage } from "@/types/cms";

type PricingSectionProps = {
  heading?: string;
  subheading?: string;
  packages?: PricingPackage[];
};

export function PricingSection({ heading, subheading, packages }: PricingSectionProps) {
  return <Pricing heading={heading} subheading={subheading} packages={packages} />;
}
