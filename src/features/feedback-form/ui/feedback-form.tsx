"use client";

import { FormEvent, useState } from "react";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/lib/utils";

export function FeedbackForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "max-tablet:justify-center max-tablet:items-center flex w-full flex-col items-end justify-end gap-6",
        className,
      )}
    >
      <div className="border-stroke flex w-full max-w-[350px] flex-col gap-4 rounded-md border bg-white px-8 py-[20px]">
        <Typography className="text-center" tag="p" variant="poppins-md-16">
          Заполняй форму, чтобы получить бесплатную консультацию
        </Typography>

        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="Ваша почта"
          placeholder="name@flowbite.com"
        />
        <Input
          type="number"
          onChange={(e) => setPassword(e.target.value)}
          value={email}
          label="Ваш номер"
          placeholder="+7 (999) 999-99-99"
        />

        <Button size={"xl"}>Отправить</Button>
      </div>
    </form>
  );
}
