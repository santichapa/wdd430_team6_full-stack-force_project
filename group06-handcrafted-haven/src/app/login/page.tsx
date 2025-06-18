"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-mango1">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-mango4">Sign in</h1>
        <button
          onClick={() => signIn("google")}
          className="w-full py-2 px-4 bg-mango4 text-white rounded hover:bg-mango3 transition font-semibold"
        >
          Sign in with Google
        </button>
      </div>
    </main>
  );
}