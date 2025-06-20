"use client";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/lib/utils";
import { FeedbackFormData } from "../model/type";
import { feedbackSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function FeedbackForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
  });
  const onSubmit = (data: FeedbackFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "max-tablet:justify-center max-tablet:items-center flex w-full flex-col items-end justify-end gap-6",
        className,
      )}
    >
      <div className="border-stroke max-mobile:px-4 flex w-full max-w-[350px] flex-col gap-4 rounded-md border bg-white px-8 py-[20px]">
        <Typography className="text-center" tag="p" variant="poppins-md-16">
          Заполняй форму, чтобы получить бесплатную консультацию
        </Typography>

        <Input
          type="email"
          label="Ваша почта"
          placeholder="name@flowbite.com"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          type="tel"
          label="Ваш номер"
          placeholder="+7 (999) 999-99-99"
          {...register("number")}
          error={errors.number?.message}
        />

        <Button size={"xl"}>Отправить</Button>
      </div>
    </form>
  );
}
