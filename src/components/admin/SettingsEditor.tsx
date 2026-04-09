"use client";

import { useEffect, useState } from "react";
import { defaultSiteSettings, SiteSettingsData } from "@/types/cms";

function parseJsonSafe<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function SettingsEditor() {
  const [settings, setSettings] = useState<SiteSettingsData>(defaultSiteSettings);
  const [navJson, setNavJson] = useState(JSON.stringify(defaultSiteSettings.navItems, null, 2));
  const [socialJson, setSocialJson] = useState(
    JSON.stringify(defaultSiteSettings.socialLinks, null, 2),
  );
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function loadSettings() {
      const response = await fetch("/api/admin/settings");
      if (!response.ok) return;
      const data = (await response.json()) as SiteSettingsData;
      setSettings(data);
      setNavJson(JSON.stringify(data.navItems, null, 2));
      setSocialJson(JSON.stringify(data.socialLinks, null, 2));
    }

    loadSettings();
  }, []);

  async function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload: SiteSettingsData = {
      ...settings,
      navItems: parseJsonSafe(navJson, settings.navItems),
      socialLinks: parseJsonSafe(socialJson, settings.socialLinks),
    };

    const response = await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(response.ok ? "Settings saved." : "Failed to save settings.");
  }

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <section className="surface-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Website Settings</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            value={settings.logoUrl}
            onChange={(event) =>
              setSettings((prev) => ({ ...prev, logoUrl: event.target.value }))
            }
            className="rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Logo URL"
          />
          <input
            value={settings.phone}
            onChange={(event) => setSettings((prev) => ({ ...prev, phone: event.target.value }))}
            className="rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Phone"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            value={settings.email}
            onChange={(event) => setSettings((prev) => ({ ...prev, email: event.target.value }))}
            className="rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Email"
          />
          <input
            value={settings.website}
            onChange={(event) => setSettings((prev) => ({ ...prev, website: event.target.value }))}
            className="rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Website"
          />
        </div>
        <textarea
          value={settings.footerText}
          onChange={(event) =>
            setSettings((prev) => ({ ...prev, footerText: event.target.value }))
          }
          rows={2}
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Footer text"
        />
      </section>

      <section className="surface-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Navigation (JSON)</h2>
        <textarea
          value={navJson}
          onChange={(event) => setNavJson(event.target.value)}
          rows={8}
          placeholder="Navigation JSON"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs"
        />
      </section>

      <section className="surface-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Social Links (JSON)</h2>
        <textarea
          value={socialJson}
          onChange={(event) => setSocialJson(event.target.value)}
          rows={8}
          placeholder="Social links JSON"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs"
        />
      </section>

      <button type="submit" className="gradient-btn">
        Save Settings
      </button>
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}
