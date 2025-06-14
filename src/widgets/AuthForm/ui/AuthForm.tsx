"use client";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import { GoogleIcon } from "@/shared/icons/google";
import Link from "next/link";
import {
  FORM_MODE,
  MAPPING_FORM_AUTH_MODE,
  SOCIAL_PROVIDER,
} from "@/entities/auth";
import { Checkbox } from "@/shared/ui/checkbox";

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
  onOAuth: (provider: SOCIAL_PROVIDER) => void;
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
  onOAuth,
}: AuthFormProps) {
  const isSignUp = mode === MAPPING_FORM_AUTH_MODE["sign-up"];

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

            {/* <button
            onClick={() => handleOAuth("oauth_custom_yandex")}
            className="flex items-center gap-2 rounded border bg-white px-4 py-2"
          >
            <span>Войти через Яндекс</span>
          </button>  */}
            <Button
              className="w-full"
              onClick={() => onOAuth("oauth_google")}
              variant="ghost"
            >
              <GoogleIcon className="size-3" />
            </Button>

            <Typography
              className="text-dark-grey flex w-full items-center justify-center gap-1"
              variant="poppins-reg-14"
            >
              {isSignUp ? "Уже есть аккаунт?" : "Нет аккаунта?"}
              <Link href={isSignUp ? "/sign-in" : "/sign-up"}>
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
