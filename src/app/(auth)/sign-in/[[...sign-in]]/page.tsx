"use client";

import { SignIn, useSignIn } from "@clerk/nextjs";

export default function CustomSignIn() {
  const { isLoaded } = useSignIn();

  if (!isLoaded) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-4">
      <SignIn signInUrl="/" />
    </div>
  );
}
