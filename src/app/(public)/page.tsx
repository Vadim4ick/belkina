"use client";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <Button>Poppins Medium 16px caption</Button>

      <Typography tag="h1" variant="visuelt-bold-32">
        test
      </Typography>
      <Button variant={"ghost"}>Click</Button>
      <Button variant={"ghostWhite"}>Click</Button>
      <Button variant={"secondary"} disabled>
        Click
      </Button>
      <Button variant={"primary-inverted"} disabled>
        Click
      </Button>

      <Input />
    </div>
  );
}
