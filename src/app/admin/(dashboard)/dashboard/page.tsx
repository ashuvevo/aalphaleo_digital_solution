import Link from "next/link";

const cards = [
  {
    title: "Website Content",
    description: "Edit hero, services, pricing, contact, and CTA content.",
    href: "/admin/content",
  },
  {
    title: "Services Content",
    description: "Manage service card titles and descriptions used on the homepage.",
    href: "/admin/content",
  },
  {
    title: "Images / Media",
    description: "Upload logo, icons, and blog images to the media library.",
    href: "/admin/media",
  },
  {
    title: "Blog Posts",
    description: "Create, edit, publish, and delete blog articles.",
    href: "/admin/blog",
  },
  {
    title: "Website Settings",
    description: "Manage logo path, navigation, footer and social links.",
    href: "/admin/settings",
  },
];

export default function AdminDashboardPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="surface-card p-5">
            <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{card.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
