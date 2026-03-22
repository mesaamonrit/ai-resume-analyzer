"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
    >
      Sign out
    </button>
  );
}
