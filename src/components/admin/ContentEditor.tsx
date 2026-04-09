"use client";

import { useEffect, useState } from "react";
import { defaultWebsiteContent, WebsiteContentData } from "@/types/cms";

function parseJsonSafe<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function ContentEditor() {
  const [content, setContent] = useState<WebsiteContentData>(defaultWebsiteContent);
  const [servicesJson, setServicesJson] = useState(
    JSON.stringify(defaultWebsiteContent.services.items, null, 2),
  );
  const [packagesJson, setPackagesJson] = useState(
    JSON.stringify(defaultWebsiteContent.pricing.packages, null, 2),
  );
  const [aboutItems, setAboutItems] = useState(defaultWebsiteContent.about.items.join("\n"));
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function loadContent() {
      const response = await fetch("/api/admin/content");
      if (!response.ok) return;
      const data = (await response.json()) as WebsiteContentData;
      setContent(data);
      setServicesJson(JSON.stringify(data.services.items, null, 2));
      setPackagesJson(JSON.stringify(data.pricing.packages, null, 2));
      setAboutItems(data.about.items.join("\n"));
    }

    loadContent();
  }, []);

  async function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload: WebsiteContentData = {
      ...content,
      services: {
        ...content.services,
        items: parseJsonSafe(servicesJson, content.services.items),
      },
      pricing: {
        ...content.pricing,
        packages: parseJsonSafe(packagesJson, content.pricing.packages),
      },
      about: {
        ...content.about,
        items: aboutItems.split("\n").map((line) => line.trim()).filter(Boolean),
      },
    };

    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(response.ok ? "Content saved." : "Failed to save content.");
  }

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <section className="surface-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Homepage Hero</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            value={content.hero.badge}
            onChange={(event) =>
              setContent((prev) => ({ ...prev, hero: { ...prev.hero, badge: event.target.value } }))
            }
            className="rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Badge"
          />
          <input
            value={content.hero.title}
            onChange={(event) =>
              setContent((prev) => ({ ...prev, hero: { ...prev.hero, title: event.target.value } }))
            }
            className="rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Hero title"
          />
        </div>
        <textarea
          value={content.hero.description}
          onChange={(event) =>
            setContent((prev) => ({ ...prev, hero: { ...prev.hero, description: event.target.value } }))
          }
          rows={3}
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Hero description"
        />
      </section>

      <section className="surface-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Services Section</h2>
        <input
          value={content.services.subheading}
          onChange={(event) =>
            setContent((prev) => ({
              ...prev,
              services: { ...prev.services, subheading: event.target.value },
            }))
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Services subheading"
        />
        <input
          value={content.services.heading}
          onChange={(event) =>
            setContent((prev) => ({
              ...prev,
              services: { ...prev.services, heading: event.target.value },
            }))
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Services heading"
        />
        <textarea
          value={servicesJson}
          onChange={(event) => setServicesJson(event.target.value)}
          rows={8}
          placeholder="Service items JSON"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs"
        />
      </section>

      <section className="surface-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Shopify Pricing Packages</h2>
        <input
          value={content.pricing.subheading}
          onChange={(event) =>
            setContent((prev) => ({
              ...prev,
              pricing: { ...prev.pricing, subheading: event.target.value },
            }))
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Pricing subheading"
        />
        <input
          value={content.pricing.heading}
          onChange={(event) =>
            setContent((prev) => ({
              ...prev,
              pricing: { ...prev.pricing, heading: event.target.value },
            }))
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Pricing heading"
        />
        <textarea
          value={packagesJson}
          onChange={(event) => setPackagesJson(event.target.value)}
          rows={12}
          placeholder="Pricing packages JSON"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs"
        />
      </section>

      <section className="surface-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-slate-900">About Section</h2>
        <input
          value={content.about.heading}
          onChange={(event) =>
            setContent((prev) => ({ ...prev, about: { ...prev.about, heading: event.target.value } }))
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="About heading"
        />
        <textarea
          value={aboutItems}
          onChange={(event) => setAboutItems(event.target.value)}
          rows={6}
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="One item per line"
        />
      </section>

      <section className="surface-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Contact + CTA</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            value={content.contact.phone}
            onChange={(event) =>
              setContent((prev) => ({
                ...prev,
                contact: { ...prev.contact, phone: event.target.value },
              }))
            }
            className="rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Phone"
          />
          <input
            value={content.contact.website}
            onChange={(event) =>
              setContent((prev) => ({
                ...prev,
                contact: { ...prev.contact, website: event.target.value },
              }))
            }
            className="rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Website"
          />
        </div>
        <input
          value={content.contact.email}
          onChange={(event) =>
            setContent((prev) => ({
              ...prev,
              contact: { ...prev.contact, email: event.target.value },
            }))
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Email"
        />
        <input
          value={content.cta.title}
          onChange={(event) =>
            setContent((prev) => ({ ...prev, cta: { ...prev.cta, title: event.target.value } }))
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="CTA title"
        />
        <textarea
          value={content.cta.description}
          onChange={(event) =>
            setContent((prev) => ({ ...prev, cta: { ...prev.cta, description: event.target.value } }))
          }
          rows={3}
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="CTA description"
        />
      </section>

      <button type="submit" className="gradient-btn">
        Save Website Content
      </button>
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}
