export type ServiceContentItem = {
  title: string;
  description: string;
};

export type PricingPackage = {
  name: string;
  price: string;
  features: string[];
};

export type WebsiteContentData = {
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  services: {
    heading: string;
    subheading: string;
    items: ServiceContentItem[];
  };
  pricing: {
    heading: string;
    subheading: string;
    packages: PricingPackage[];
  };
  about: {
    heading: string;
    items: string[];
  };
  contact: {
    heading: string;
    description: string;
    phone: string;
    website: string;
    email: string;
  };
  cta: {
    title: string;
    description: string;
    primaryText: string;
    secondaryText: string;
  };
};

export type SiteSettingsData = {
  logoUrl: string;
  phone: string;
  email: string;
  website: string;
  footerText: string;
  navItems: Array<{ label: string; href: string }>;
  socialLinks: Array<{ label: string; href: string }>;
};

export const defaultWebsiteContent: WebsiteContentData = {
  hero: {
    badge: "Solving Your Business Problem.",
    title: "Build a Powerful Shopify Store for Your Business",
    description:
      "Launch your eCommerce business with a high-performance custom Shopify website designed for conversions and scalability.",
    primaryCta: "Start Your Shopify Store",
    secondaryCta: "Chat on WhatsApp",
  },
  services: {
    heading: "Our Digital Services",
    subheading: "Services",
    items: [
      {
        title: "Shopify Development",
        description:
          "Custom-coded Shopify websites built to convert and scale your eCommerce business.",
      },
      {
        title: "Website Development",
        description:
          "Modern business websites designed for speed, trust, and lead generation.",
      },
      {
        title: "WooCommerce Development",
        description:
          "Flexible WooCommerce stores with secure checkout and optimized product journeys.",
      },
      {
        title: "Mobile App Development",
        description:
          "Scalable mobile applications crafted for seamless customer experiences.",
      },
      {
        title: "Digital Marketing",
        description:
          "Growth-focused digital marketing to attract quality traffic and increase revenue.",
      },
    ],
  },
  pricing: {
    heading: "Shopify Website Packages",
    subheading: "Pricing",
    packages: [
      {
        name: "Starter Package",
        price: "₹10,000",
        features: [
          "Shopify store setup",
          "Custom homepage design",
          "Mobile responsive layout",
          "Product upload (10 products)",
          "Payment gateway integration",
          "Shipping setup",
          "WhatsApp chat integration",
          "Basic SEO setup",
        ],
      },
      {
        name: "Premium Package",
        price: "₹20,000",
        features: [
          "Fully custom coded Shopify website",
          "Premium homepage design",
          "Mobile + desktop responsive design",
          "Product upload (30 products)",
          "Payment gateway integration",
          "Shipping partner integration",
          "One click checkout integration",
          "WhatsApp integration",
          "Conversion optimized product pages",
          "Speed optimized store",
        ],
      },
    ],
  },
  about: {
    heading: "Why Choose Aalphaleo Digital Solution",
    items: [
      "Experienced developers",
      "Custom coded solutions",
      "Affordable pricing",
      "Fast project delivery",
      "Dedicated support",
    ],
  },
  contact: {
    heading: "Contact Us",
    description:
      "Tell us about your business goals and we will suggest the best Shopify package for your growth.",
    phone: "+91 9288621081",
    website: "https://www.aalphaleo.com",
    email: "admin@example.com",
  },
  cta: {
    title: "Launch Your Shopify Store Today",
    description:
      "Start selling online with a professional Shopify website designed to increase your sales.",
    primaryText: "Start Your Shopify Website",
    secondaryText: "Contact Us",
  },
};

export const defaultSiteSettings: SiteSettingsData = {
  logoUrl: "/logo.png",
  phone: "+91 9288621081",
  email: "admin@example.com",
  website: "https://www.aalphaleo.com",
  footerText: "Solving Your Business Problem.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Shopify Development", href: "/services/shopify-development" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ],
  socialLinks: [
    { label: "Website", href: "https://www.aalphaleo.com" },
    { label: "WhatsApp", href: "https://wa.me/919288621081" },
  ],
};
