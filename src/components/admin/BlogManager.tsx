"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type BlogListItem = {
  id: string;
  title: string;
  slug: string;
  author: string;
  isPublished: boolean;
  createdAt: string;
};

export function BlogManager() {
  const [posts, setPosts] = useState<BlogListItem[]>([]);
  const [status, setStatus] = useState("");

  async function loadPosts() {
    const response = await fetch("/api/admin/blog");
    if (!response.ok) return;
    const data = (await response.json()) as BlogListItem[];
    setPosts(data);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function deletePost(id: string) {
    const confirmed = window.confirm("Delete this post?");
    if (!confirmed) return;

    const response = await fetch(`/api/admin/blog/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      setStatus("Failed to delete post.");
      return;
    }

    setStatus("Post deleted.");
    await loadPosts();
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Blog Posts</h1>
        <Link href="/admin/blog/new" className="gradient-btn">
          Create New Blog
        </Link>
      </div>

      <div className="surface-card overflow-hidden">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-slate-100">
                <td className="px-4 py-3 text-slate-800">{post.title}</td>
                <td className="px-4 py-3 text-slate-600">/{post.slug}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      post.isPublished
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {post.isPublished ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deletePost(post.id)}
                      className="rounded-lg border border-rose-200 px-3 py-1 text-xs font-medium text-rose-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 ? (
              <tr>
                <td className="px-4 py-8 text-slate-600" colSpan={4}>
                  No blog posts yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </section>
  );
}
