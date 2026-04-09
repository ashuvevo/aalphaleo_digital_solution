import { BlogPost } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  defaultSiteSettings,
  defaultWebsiteContent,
  SiteSettingsData,
  WebsiteContentData,
} from "@/types/cms";

function mergeWebsiteContent(data?: Partial<WebsiteContentData>): WebsiteContentData {
  return {
    hero: {
      ...defaultWebsiteContent.hero,
      ...data?.hero,
    },
    services: {
      ...defaultWebsiteContent.services,
      ...data?.services,
      items: data?.services?.items ?? defaultWebsiteContent.services.items,
    },
    pricing: {
      ...defaultWebsiteContent.pricing,
      ...data?.pricing,
      packages: data?.pricing?.packages ?? defaultWebsiteContent.pricing.packages,
    },
    about: {
      ...defaultWebsiteContent.about,
      ...data?.about,
      items: data?.about?.items ?? defaultWebsiteContent.about.items,
    },
    contact: {
      ...defaultWebsiteContent.contact,
      ...data?.contact,
    },
    cta: {
      ...defaultWebsiteContent.cta,
      ...data?.cta,
    },
  };
}

function mergeSiteSettings(data?: Partial<SiteSettingsData>): SiteSettingsData {
  return {
    ...defaultSiteSettings,
    ...data,
    navItems: data?.navItems ?? defaultSiteSettings.navItems,
    socialLinks: data?.socialLinks ?? defaultSiteSettings.socialLinks,
  };
}

async function upsertDefaults() {
  try {
    await prisma.content.upsert({
      where: { key: "website" },
      create: { key: "website", data: defaultWebsiteContent },
      update: {},
    });
    await prisma.content.upsert({
      where: { key: "settings" },
      create: { key: "settings", data: defaultSiteSettings },
      update: {},
    });
  } catch {
    // DB not ready yet — silently skip, defaults will be used
  }
}

export async function getWebsiteContent(): Promise<WebsiteContentData> {
  try {
    await upsertDefaults();
    const row = await prisma.content.findUnique({ where: { key: "website" } });
    return mergeWebsiteContent((row?.data as Partial<WebsiteContentData>) ?? undefined);
  } catch {
    return mergeWebsiteContent(undefined);
  }
}

export async function updateWebsiteContent(data: WebsiteContentData) {
  await prisma.content.upsert({
    where: { key: "website" },
    create: {
      key: "website",
      data,
    },
    update: {
      data,
    },
  });
}

export async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    await upsertDefaults();
    const row = await prisma.content.findUnique({ where: { key: "settings" } });
    return mergeSiteSettings((row?.data as Partial<SiteSettingsData>) ?? undefined);
  } catch {
    return mergeSiteSettings(undefined);
  }
}

export async function updateSiteSettings(data: SiteSettingsData) {
  await prisma.content.upsert({
    where: { key: "settings" },
    create: {
      key: "settings",
      data,
    },
    update: {
      data,
    },
  });
}

export async function getPublishedBlogs(limit?: number): Promise<BlogPost[]> {
  try {
    return await prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
      ...(typeof limit === "number" ? { take: limit } : {}),
    });
  } catch {
    return [];
  }
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    return await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    return [];
  }
}
