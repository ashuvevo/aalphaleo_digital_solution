import Link from "next/link";
import { AdminSignOutButton } from "@/components/admin/AdminSignOutButton";

const links = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Website Content", href: "/admin/content" },
  { label: "Images / Media", href: "/admin/media" },
  { label: "Blog Posts", href: "/admin/blog" },
  { label: "Website Settings", href: "/admin/settings" },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="section-shell py-8">
      <header className="surface-card mb-6 flex flex-wrap items-center justify-between gap-4 p-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Aalphaleo Admin CMS</h1>
          <p className="text-sm text-slate-600">Manage website content, media, and blogs.</p>
        </div>
        <AdminSignOutButton />
      </header>

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="surface-card h-fit p-4">
          <nav className="space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div>{children}</div>
      </div>
    </div>
  );
}
