"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RichTextEditor } from "@/components/admin/RichTextEditor";

type BlogEditorFormProps = {
  postId?: string;
};

type BlogPayload = {
  title: string;
  slug: string;
  featuredImage: string;
  content: string;
  author: string;
  isPublished: boolean;
  metaTitle: string;
  metaDescription: string;
};

const defaultPayload: BlogPayload = {
  title: "",
  slug: "",
  featuredImage: "",
  content: "",
  author: "Aalphaleo Team",
  isPublished: false,
  metaTitle: "",
  metaDescription: "",
};

export function BlogEditorForm({ postId }: BlogEditorFormProps) {
  const router = useRouter();
  const [payload, setPayload] = useState<BlogPayload>(defaultPayload);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!postId) {
      return;
    }

    async function loadPost() {
      const response = await fetch(`/api/admin/blog/${postId}`);
      if (!response.ok) return;
      const data = (await response.json()) as BlogPayload;
      setPayload({
        ...defaultPayload,
        ...data,
        featuredImage: data.featuredImage || "",
        metaTitle: data.metaTitle || data.title,
        metaDescription: data.metaDescription || "",
      });
    }

    loadPost();
  }, [postId]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Saving...");

    const response = await fetch(postId ? `/api/admin/blog/${postId}` : "/api/admin/blog", {
      method: postId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setStatus("Failed to save blog post.");
      return;
    }

    setStatus("Saved successfully.");
    router.push("/admin/blog");
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card space-y-5 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Title
          <input
            value={payload.title}
            onChange={(event) => setPayload((prev) => ({ ...prev, title: event.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            required
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Slug
          <input
            value={payload.slug}
            onChange={(event) => setPayload((prev) => ({ ...prev, slug: event.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="optional-auto-from-title"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Author
          <input
            value={payload.author}
            onChange={(event) => setPayload((prev) => ({ ...prev, author: event.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            required
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Featured Image URL
          <input
            value={payload.featuredImage}
            onChange={(event) =>
              setPayload((prev) => ({ ...prev, featuredImage: event.target.value }))
            }
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="/uploads/example.jpg"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Content
        <div className="mt-2">
          <RichTextEditor
            value={payload.content}
            onChange={(value) => setPayload((prev) => ({ ...prev, content: value }))}
          />
        </div>
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Meta Title
          <input
            value={payload.metaTitle}
            onChange={(event) =>
              setPayload((prev) => ({ ...prev, metaTitle: event.target.value }))
            }
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Meta Description
          <textarea
            value={payload.metaDescription}
            onChange={(event) =>
              setPayload((prev) => ({ ...prev, metaDescription: event.target.value }))
            }
            rows={3}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
      </div>

      <label className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
        <input
          type="checkbox"
          checked={payload.isPublished}
          onChange={(event) =>
            setPayload((prev) => ({ ...prev, isPublished: event.target.checked }))
          }
        />
        Publish this post
      </label>

      <div className="flex flex-wrap gap-3">
        <button type="submit" className="gradient-btn">
          Save Post
        </button>
        <Link
          href="/admin/media"
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
        >
          Open Media Library
        </Link>
      </div>

      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}
