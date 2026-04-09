import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { publishedBlogPosts } from "@/lib/blog";
import { defaultSiteSettings } from "@/types/cms";

type SitePageShellProps = {
  children: React.ReactNode;
};

export function SitePageShell({ children }: SitePageShellProps) {
  const settings = defaultSiteSettings;
  const blogs = publishedBlogPosts.slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-80 h-[320px] w-[320px] rounded-full bg-gradient-to-r from-amber-300/25 to-orange-400/20 blur-3xl" />

      <Navbar settings={settings} />
      <main>{children}</main>
      <Footer
        settings={settings}
        blogLinks={blogs.map((post) => ({ title: post.title, slug: post.slug }))}
      />
    </div>
  );
}
