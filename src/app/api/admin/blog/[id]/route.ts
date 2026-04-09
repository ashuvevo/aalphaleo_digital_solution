import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-session";
import { revalidatePublishedBlogsCache } from "@/lib/cms";
import { prisma } from "@/lib/prisma";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: Params) {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const post = await prisma.blogPost.findUnique({ where: { id: params.id } });

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(request: Request, { params }: Params) {
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

  const post = await prisma.blogPost.update({
    where: { id: params.id },
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

  revalidatePublishedBlogsCache();

  return NextResponse.json(post);
}

export async function DELETE(_: Request, { params }: Params) {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await prisma.blogPost.delete({ where: { id: params.id } });
  revalidatePublishedBlogsCache();
  return NextResponse.json({ success: true });
}
