import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SitePageShell } from "@/components/SitePageShell";
import { publishedBlogPosts } from "@/lib/blog";

export const revalidate = 180;

export const metadata: Metadata = {
  title: "Blog | Aalphaleo Digital Solution",
  description: "Insights on Shopify development, digital marketing, and business growth.",
};

export default function BlogPage() {
  const posts = publishedBlogPosts;

  return (
    <SitePageShell>
      <section className="section-shell py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">Blog</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">Latest Articles</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Learn practical strategies for eCommerce growth, Shopify customization, and digital performance.
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
              <p className="mt-2 text-sm text-slate-600">By {post.author}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-orange-600"
              >
                Read article
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
