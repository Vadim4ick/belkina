"use client";

import { AuthForm } from "@/widgets/auth-form";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <AuthForm
      mode="sign-up"
      email={email}
      password={password}
      onEmailChange={setEmail}
      onCodeChange={setCode}
      code={code}
      onPasswordChange={setPassword}
      onSubmit={handleLogin}
      pending={false}
      error=""
      onToggleAgree={() => setAgreed(!agreed)}
      onVerify={() => {}}
      agreed={agreed}
    />
  );
}
