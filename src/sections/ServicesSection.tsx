import { Services } from "@/components/Services";
import { ServiceContentItem } from "@/types/cms";

type ServicesSectionProps = {
  heading?: string;
  subheading?: string;
  items?: ServiceContentItem[];
};

export function ServicesSection({ heading, subheading, items }: ServicesSectionProps) {
  return <Services heading={heading} subheading={subheading} items={items} />;
}
