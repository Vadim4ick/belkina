"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) {
  const router = useRouter();

  const onClick = () => {
    // Временно отменен редирект пока не появится страница входа!
    // router.push("/auth/login");
    router.push("/");
  };

  if (mode === "modal") {
    return <span>TODO: Modal component</span>;
  }

  if (asChild) {
    return <>{children}</>;
  }

  return (
    <span onClick={onClick} className="coursor-pointer">
      {children}
    </span>
  );
}
