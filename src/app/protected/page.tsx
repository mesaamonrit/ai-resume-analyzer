import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import SignOutButton from "@/app/protected/SignOutButton";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login?callbackUrl=/protected");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-900">
      <main className="flex w-full max-w-md flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-semibold">Protected</h1>
        <p className="text-sm text-zinc-600">
          You are signed in as{" "}
          <span className="font-medium">{session.user.email}</span>.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <SignOutButton />
          <Link
            className="rounded-lg border border-zinc-300 px-4 py-2 text-center text-sm font-medium"
            href="/"
          >
            Go Home
          </Link>
        </div>
      </main>
    </div>
  );
}
