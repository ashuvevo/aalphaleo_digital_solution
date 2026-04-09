import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SitePageShell } from "@/components/SitePageShell";
import { blogPosts } from "@/lib/blogData";

export const revalidate = 180;

export const metadata: Metadata = {
  title: "Shopify Custom-Coded Website Blog | Aalphaleo Digital Solution",
  description:
    "Read 25 SEO-focused guides on Shopify custom-coded website development, Shopify store setup, speed, SEO, and conversion growth.",
  keywords: [
    "Shopify custom-coded website",
    "Shopify website development",
    "Shopify eCommerce development",
    "custom Shopify store",
    "Shopify store development",
    "Shopify website for business",
    "Shopify store setup",
    "Shopify development company",
  ],
};

export default function BlogPage() {
  const posts = blogPosts;

  return (
    <SitePageShell>
      <section className="section-shell py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">Blog</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
          Shopify Custom-Coded Website Blog
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Explore practical long-form guides on Shopify website development, Shopify eCommerce
          development, and conversion-focused store growth.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="surface-card overflow-hidden p-5">
              {post.featuredImage ? (
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={640}
                  height={360}
                  className="h-44 w-full rounded-xl object-cover"
                />
              ) : null}
              <p className="mt-4 text-xs text-slate-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex rounded-full border border-orange-300 px-4 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
              >
                Read more
              </Link>
            </article>
          ))}
          {posts.length === 0 ? (
            <p className="text-sm text-slate-600">No published posts yet.</p>
          ) : null}
        </div>
      </section>
    </SitePageShell>
  );
}
