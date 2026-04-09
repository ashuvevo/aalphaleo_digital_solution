export type StaticBlogPost = {
  id: string;
  slug: string;
  title: string;
  author: string;
  featuredImage?: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
  metaTitle?: string;
  metaDescription?: string;
  content: string;
};

export const publishedBlogPosts: StaticBlogPost[] = [
  {
    id: "1",
    slug: "shopify-speed-optimization-checklist",
    title: "Shopify Speed Optimization Checklist for 2026",
    author: "Aalphaleo Team",
    featuredImage: "/shopify.png",
    createdAt: "2026-03-10T00:00:00.000Z",
    publishedAt: "2026-03-12T00:00:00.000Z",
    updatedAt: "2026-03-12T00:00:00.000Z",
    metaTitle: "Shopify Speed Optimization Checklist | Aalphaleo",
    metaDescription: "A practical checklist to make Shopify stores load faster and convert better.",
    content:
      "<h2>Why speed matters</h2><p>Store speed directly impacts conversion, ad efficiency, and customer trust.</p><h2>Core actions</h2><ul><li>Compress and serve modern image formats.</li><li>Remove unused apps and scripts.</li><li>Use clean theme code and lazy loading.</li><li>Audit third-party tracking snippets monthly.</li></ul><p>If your store is slow, start with image payload and unused JavaScript.</p>",
  },
  {
    id: "2",
    slug: "how-to-plan-a-converting-shopify-homepage",
    title: "How to Plan a Converting Shopify Homepage",
    author: "Aalphaleo Team",
    featuredImage: "/hero1.jpg",
    createdAt: "2026-02-01T00:00:00.000Z",
    publishedAt: "2026-02-03T00:00:00.000Z",
    updatedAt: "2026-02-03T00:00:00.000Z",
    metaTitle: "Converting Shopify Homepage Strategy",
    metaDescription: "Homepage structure ideas that improve trust and drive first purchases.",
    content:
      "<h2>Start with a clear promise</h2><p>Your hero should state the value in one line.</p><h2>Use conversion blocks</h2><ul><li>Trust badges and testimonials</li><li>Best sellers section</li><li>Clear shipping and return policy</li><li>Focused call-to-action buttons</li></ul><p>A good homepage removes hesitation quickly.</p>",
  },
  {
    id: "3",
    slug: "whatsapp-sales-funnel-for-small-ecommerce-brands",
    title: "WhatsApp Sales Funnel for Small eCommerce Brands",
    author: "Aalphaleo Team",
    createdAt: "2026-01-15T00:00:00.000Z",
    publishedAt: "2026-01-17T00:00:00.000Z",
    updatedAt: "2026-01-17T00:00:00.000Z",
    metaTitle: "WhatsApp Funnel for eCommerce",
    metaDescription: "Use WhatsApp automation and human follow-ups to increase checkout completion.",
    content:
      "<h2>Capture intent early</h2><p>Offer WhatsApp support on product and cart pages.</p><h2>Follow-up sequence</h2><ul><li>Instant FAQ response</li><li>Human handoff for objections</li><li>Discount reminder for abandoned carts</li></ul><p>Keep responses short, fast, and specific to the product.</p>",
  },
];

export function getPublishedBlogBySlug(slug: string) {
  return publishedBlogPosts.find((post) => post.slug === slug) ?? null;
}
