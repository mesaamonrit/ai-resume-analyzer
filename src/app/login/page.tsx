"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("demo@demo.com");
  const [password, setPassword] = useState("demo1234");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const callbackUrl = params.get("callbackUrl") || "/protected";
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    setLoading(false);

    if (!result?.ok) {
      setError("Invalid email or password.");
      return;
    }

    router.push(result.url ?? callbackUrl);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-900">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm space-y-4 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
      >
        <h1 className="text-xl font-semibold">Login</h1>
        <p className="text-sm text-zinc-600">
          Demo account: <span className="font-medium">demo@demo.com</span> /{" "}
          <span className="font-medium">demo1234</span>
        </p>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <button
          className="w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-70"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
