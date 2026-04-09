import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-session";
import { prisma } from "@/lib/prisma";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function GET() {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    title: string;
    slug?: string;
    featuredImage?: string;
    content: string;
    author: string;
    isPublished?: boolean;
    metaTitle?: string;
    metaDescription?: string;
  };

  const post = await prisma.blogPost.create({
    data: {
      title: body.title,
      slug: toSlug(body.slug || body.title),
      featuredImage: body.featuredImage || null,
      content: body.content,
      author: body.author || "Aalphaleo Team",
      isPublished: Boolean(body.isPublished),
      publishedAt: body.isPublished ? new Date() : null,
      metaTitle: body.metaTitle || body.title,
      metaDescription: body.metaDescription || null,
    },
  });

  return NextResponse.json(post, { status: 201 });
}
