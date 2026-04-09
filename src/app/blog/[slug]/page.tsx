import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SitePageShell } from "@/components/SitePageShell";
import { blogPosts, getBlogBySlug } from "@/lib/blogData";

export const revalidate = 180;

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog | Aalphaleo Digital Solution",
      description: "Blog post not found.",
    };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || "Read this article from Aalphaleo Digital Solution.";
  const url = `https://www.aalphaleo.com/blog/${post.slug}`;

  return {
    title,
    description,
    keywords: post.keywords,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: post.featuredImage ? [{ url: post.featuredImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.featuredImage ? [post.featuredImage] : undefined,
    datePublished: new Date(post.publishedAt || post.createdAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Aalphaleo Digital Solution",
      url: "https://www.aalphaleo.com",
    },
    description: post.metaDescription || "Aalphaleo Digital Solution blog post",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.aalphaleo.com/blog/${post.slug}`,
    },
  };

  return (
    <SitePageShell>
      <section className="section-shell py-16 sm:py-20">
        <article className="surface-card p-6 sm:p-10">
          <p className="text-sm font-medium text-slate-500">
            {new Date(post.createdAt).toLocaleDateString()} · {post.author}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-5xl">{post.title}</h1>
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={1280}
              height={720}
              className="mt-6 h-auto w-full rounded-2xl object-cover"
            />
          ) : null}
          <div
            className="prose prose-slate mt-8 max-w-none prose-headings:text-slate-900 prose-a:text-orange-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </SitePageShell>
  );
}
