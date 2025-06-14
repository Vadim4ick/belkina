"use client";

import { SignUp, useSignUp } from "@clerk/nextjs";

export default function CustomSignUp() {
  const { isLoaded } = useSignUp();

  if (!isLoaded) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-4">
      <SignUp signInUrl="/" />
    </div>
  );
}
