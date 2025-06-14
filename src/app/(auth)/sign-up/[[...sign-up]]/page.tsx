"use client";

import { MAPPING_FORM_AUTH_MODE, SOCIAL_PROVIDER } from "@/entities/auth";
import { AuthForm } from "@/widgets/AuthForm";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CustomSignUp() {
  const { signUp, isLoaded, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [code, setCode] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleOAuth = (provider: SOCIAL_PROVIDER) => {
    signUp?.authenticateWithRedirect({
      strategy: provider,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  const handleSignUp = async () => {
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
      await signUp?.create({ emailAddress: email, password });
      await signUp?.prepareEmailAddressVerification({ strategy: "email_code" });
      setPending(true);
    } catch {
      setError("Ошибка при создании аккаунта");
    }
  };

  const handleVerifyCode = async () => {
    try {
      const result = await signUp?.attemptEmailAddressVerification({ code });
      if (result?.status === "complete" && setActive) {
        await setActive({ session: result.createdSessionId });
        router.push("/");
      }
    } catch {
      setError("Неверный код подтверждения");
    }
  };

  if (!isLoaded) return null;

  return (
    <AuthForm
      mode={MAPPING_FORM_AUTH_MODE["sign-up"]}
      email={email}
      password={password}
      agreed={agreed}
      pending={pending}
      code={code}
      error={error}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onCodeChange={setCode}
      onToggleAgree={() => setAgreed(!agreed)}
      onSubmit={handleSignUp}
      onVerify={handleVerifyCode}
      onOAuth={handleOAuth}
    />
  );
}
