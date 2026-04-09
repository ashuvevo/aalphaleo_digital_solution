"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type MediaItem = {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  size: number;
  createdAt: string;
};

export function MediaManager() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  async function loadItems() {
    const response = await fetch("/api/admin/media");
    if (!response.ok) return;
    const data = (await response.json()) as MediaItem[];
    setItems(data);
  }

  useEffect(() => {
    loadItems();
  }, []);

  async function handleUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!file) {
      setStatus("Select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/admin/media", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      setStatus("Upload failed.");
      return;
    }

    setStatus("Upload successful.");
    setFile(null);
    await loadItems();
  }

  return (
    <section className="space-y-6">
      <form onSubmit={handleUpload} className="surface-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Upload Media</h2>
        <input
          type="file"
          aria-label="Upload media file"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          className="block w-full rounded-lg border border-slate-300 p-2 text-sm"
        />
        <button type="submit" className="gradient-btn">
          Upload
        </button>
        {status ? <p className="text-sm text-slate-600">{status}</p> : null}
      </form>

      <div className="surface-card p-6">
        <h2 className="text-xl font-semibold text-slate-900">Media Library</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-3">
              <Image
                src={item.url}
                alt={item.filename}
                width={400}
                height={220}
                className="h-32 w-full rounded-lg object-cover"
              />
              <p className="mt-2 truncate text-xs text-slate-600">{item.filename}</p>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(item.url)}
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-orange-300"
              >
                Copy URL
              </button>
            </article>
          ))}
          {items.length === 0 ? <p className="text-sm text-slate-600">No media uploaded yet.</p> : null}
        </div>
      </div>
    </section>
  );
}
