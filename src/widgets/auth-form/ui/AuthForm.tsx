"use client";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import { GoogleIcon } from "@/shared/icons/google";
import Link from "next/link";
import { Checkbox } from "@/shared/ui/checkbox";
import { AuthProviders, FORM_MODE } from "../model/types";
import { MAPPING_FORM_AUTH_MODE } from "../model/const";
import { signIn } from "next-auth/react";
import { YandexIcon } from "@/shared/icons/yandex";

type AuthFormProps = {
  mode: FORM_MODE;
  email: string;
  password: string;
  code?: string;
  pending: boolean;
  agreed?: boolean;
  error: string;
  onEmailChange: (v: string) => void;
  onPasswordChange: (v: string) => void;
  onCodeChange?: (v: string) => void;
  onToggleAgree?: () => void;
  onSubmit: () => void;
  onVerify?: () => void;
};

export function AuthForm({
  mode,
  email,
  password,
  code = "",
  pending,
  agreed = true,
  error,
  onEmailChange,
  onPasswordChange,
  onCodeChange,
  onToggleAgree,
  onSubmit,
  onVerify,
}: AuthFormProps) {
  const isSignUp = mode === MAPPING_FORM_AUTH_MODE["sign-up"];

  const oauth = async (provider: AuthProviders) => {
    await signIn(provider, {
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-4">
      <Typography tag="h1" variant="visuelt-bold-48">
        {isSignUp ? "Регистрация" : "Вход"}
      </Typography>

      <div className="border-stroke flex w-full max-w-[350px] flex-col gap-4 rounded-md border bg-white px-8 py-[20px]">
        {!pending ? (
          <>
            <Input
              type="email"
              onChange={(e) => onEmailChange(e.target.value)}
              value={email}
              label="Ваша почта"
              placeholder="name@flowbite.com"
            />

            <Input
              onChange={(e) => onPasswordChange(e.target.value)}
              value={password}
              label={isSignUp ? "Придумайте пароль" : "Пароль"}
              type="password"
              placeholder="********"
            />

            {isSignUp && (
              <label className="flex cursor-pointer items-center gap-2">
                <Checkbox checked={agreed} onCheckedChange={onToggleAgree} />
                <Typography tag="p" variant="poppins-md-16">
                  Даю согласие на обработку персональных данных
                </Typography>
              </label>
            )}

            <Button disabled={isSignUp && !agreed} size="xl" onClick={onSubmit}>
              {isSignUp ? "Регистрация" : "Войти"}
            </Button>

            <div className="flex items-center">
              <hr className="flex-1 border-gray-300" />
              <span className="mx-3 text-sm text-gray-500">Или</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <div className="flex gap-2">
              <Button
                className="w-full"
                variant="ghost"
                onClick={() => oauth?.("yandex")}
              >
                <YandexIcon className="size-6" />
              </Button>
              <Button className="w-full" variant="ghost">
                <GoogleIcon className="size-4" />
              </Button>
            </div>

            <Typography
              className="text-dark-grey flex w-full items-center justify-center gap-1"
              variant="poppins-reg-14"
            >
              {isSignUp ? "Уже есть аккаунт?" : "Нет аккаунта?"}
              <Link href={isSignUp ? "auth/sign-in" : "auth/sign-up"}>
                <Typography
                  className="text-blue"
                  tag="p"
                  variant="poppins-reg-14"
                >
                  {isSignUp ? "Войти" : "Регистрация"}
                </Typography>
              </Link>
            </Typography>
          </>
        ) : (
          <>
            <Input
              type="text"
              placeholder="Код подтверждения"
              value={code}
              onChange={(e) => onCodeChange?.(e.target.value)}
            />
            <Button size="xl" onClick={onVerify}>
              Подтвердить
            </Button>
          </>
        )}

        {error && (
          <Typography
            tag="p"
            variant="poppins-reg-14"
            className="text-red text-center"
          >
            {error}
          </Typography>
        )}
      </div>
    </div>
  );
}
