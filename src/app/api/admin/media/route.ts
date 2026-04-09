import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-session";
import { prisma } from "@/lib/prisma";

const uploadsDir = path.join(process.cwd(), "public", "uploads");

export async function GET() {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const media = await prisma.media.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(media);
}

export async function POST(request: Request) {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required" }, { status: 400 });
  }

  await mkdir(uploadsDir, { recursive: true });

  const extension = file.name.includes(".") ? file.name.split(".").pop() : "bin";
  const filename = `${Date.now()}-${randomUUID()}.${extension}`;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const targetPath = path.join(uploadsDir, filename);

  await writeFile(targetPath, buffer);

  const media = await prisma.media.create({
    data: {
      filename,
      url: `/uploads/${filename}`,
      mimeType: file.type || "application/octet-stream",
      size: file.size,
    },
  });

  return NextResponse.json(media, { status: 201 });
}
