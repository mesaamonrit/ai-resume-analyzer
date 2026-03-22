import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-900">
      <main className="flex w-full max-w-xl flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-10 shadow-sm">
        <h1 className="text-2xl font-semibold">Simple Login (NextAuth)</h1>
        <p className="text-sm text-zinc-600">
          Use the demo credentials to sign in, then visit the protected page.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-lg bg-black px-4 py-2 text-center text-sm font-medium text-white"
            href="/login"
          >
            Go to Login
          </Link>
          <Link
            className="rounded-lg border border-zinc-300 px-4 py-2 text-center text-sm font-medium"
            href="/protected"
          >
            Protected Page
          </Link>
        </div>
      </main>
    </div>
  );
}
