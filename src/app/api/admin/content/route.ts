import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-session";
import { getWebsiteContent, updateWebsiteContent } from "@/lib/cms";
import { WebsiteContentData } from "@/types/cms";

export async function GET() {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const content = await getWebsiteContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = (await request.json()) as WebsiteContentData;
  await updateWebsiteContent(payload);

  return NextResponse.json({ success: true });
}
