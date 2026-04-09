import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-session";
import { getSiteSettings, updateSiteSettings } from "@/lib/cms";
import { SiteSettingsData } from "@/types/cms";

export async function GET() {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const settings = await getSiteSettings();
  return NextResponse.json(settings);
}

export async function PUT(request: Request) {
  const session = await requireAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = (await request.json()) as SiteSettingsData;
  await updateSiteSettings(payload);

  return NextResponse.json({ success: true });
}
