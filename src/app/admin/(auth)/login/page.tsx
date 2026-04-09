"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const callbackUrl =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("callbackUrl") ||
          "/admin/dashboard"
        : "/admin/dashboard";

    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid credentials.");
      return;
    }

    window.location.href = callbackUrl;
  }

  return (
    <main className="section-shell flex min-h-[80vh] items-center justify-center py-16">
      <form onSubmit={handleSubmit} className="surface-card w-full max-w-md space-y-5 p-7">
        <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
        <p className="text-sm text-slate-600">Sign in to manage website content and blogs.</p>

        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            required
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            required
          />
        </label>

        <button type="submit" className="gradient-btn w-full">
          Sign In
        </button>

        {error ? <p className="text-sm text-rose-600">{error}</p> : null}

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          <p>Email: admin@example.com</p>
          <p>Password: admin123</p>
        </div>
      </form>
    </main>
  );
}
