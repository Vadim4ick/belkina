"use client";

import { MAPPING_FORM_AUTH_MODE, SOCIAL_PROVIDER } from "@/entities/auth";
import { AuthForm } from "@/widgets/AuthForm";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CustomSignIn() {
  const { signIn, isLoaded, setActive } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleOAuth = (provider: SOCIAL_PROVIDER) => {
    signIn?.authenticateWithRedirect({
      strategy: provider,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  const handleSignIn = async () => {
    setError("");

    if (!email || !password) {
      setError("Заполните email и пароль");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Неверный формат email");
      return;
    }

    if (password.length < 8) {
      setError("Пароль должен содержать минимум 8 символов");
      return;
    }

    try {
      const result = await signIn?.create({ identifier: email, password });
      if (result?.status === "complete" && setActive) {
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        setPending(true);
        setError("Требуется дополнительная аутентификация");
      }
    } catch {
      setError("Неверный email или пароль");
    }
  };

  if (!isLoaded) return null;

  return (
    <AuthForm
      mode={MAPPING_FORM_AUTH_MODE["sign-in"]}
      email={email}
      password={password}
      pending={pending}
      error={error}
      onEmailChange={(v) => setEmail(v)}
      onPasswordChange={(v) => setPassword(v)}
      onSubmit={handleSignIn}
      onOAuth={handleOAuth}
    />
  );
}
