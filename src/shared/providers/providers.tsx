"use client";

import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader2 className="size-8 animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export { Providers };
