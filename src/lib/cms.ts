import { BlogPost } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";
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

const CMS_CONTENT_TAG = "cms-content";
const CMS_SETTINGS_TAG = "cms-settings";
const CMS_BLOG_TAG = "cms-blog";

const getWebsiteContentCached = unstable_cache(
  async (): Promise<WebsiteContentData> => {
    const row = await prisma.content.findUnique({ where: { key: "website" } });
    return mergeWebsiteContent((row?.data as Partial<WebsiteContentData>) ?? undefined);
  },
  ["cms-website-content"],
  { revalidate: 300, tags: [CMS_CONTENT_TAG] },
);

const getSiteSettingsCached = unstable_cache(
  async (): Promise<SiteSettingsData> => {
    const row = await prisma.content.findUnique({ where: { key: "settings" } });
    return mergeSiteSettings((row?.data as Partial<SiteSettingsData>) ?? undefined);
  },
  ["cms-site-settings"],
  { revalidate: 300, tags: [CMS_SETTINGS_TAG] },
);

const getPublishedBlogsCached = unstable_cache(
  async (limit?: number): Promise<BlogPost[]> =>
    prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
      ...(typeof limit === "number" ? { take: limit } : {}),
    }),
  ["cms-published-blogs"],
  { revalidate: 180, tags: [CMS_BLOG_TAG] },
);

const getPublishedBlogBySlugCached = unstable_cache(
  async (slug: string): Promise<BlogPost | null> =>
    prisma.blogPost.findFirst({
      where: {
        slug,
        isPublished: true,
      },
    }),
  ["cms-published-blog-by-slug"],
  { revalidate: 180, tags: [CMS_BLOG_TAG] },
);

export async function getWebsiteContent(): Promise<WebsiteContentData> {
  try {
    return await getWebsiteContentCached();
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

  revalidateTag(CMS_CONTENT_TAG);
}

export async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    return await getSiteSettingsCached();
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

  revalidateTag(CMS_SETTINGS_TAG);
}

export async function getPublishedBlogs(limit?: number): Promise<BlogPost[]> {
  try {
    return await getPublishedBlogsCached(limit);
  } catch {
    return [];
  }
}

export async function getPublishedBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return await getPublishedBlogBySlugCached(slug);
  } catch {
    return null;
  }
}

export function revalidatePublishedBlogsCache() {
  revalidateTag(CMS_BLOG_TAG);
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    return await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    return [];
  }
}
