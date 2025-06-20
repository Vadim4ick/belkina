"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/shared/lib/utils";
import { Typography } from "./typography";

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <div className="flex w-full flex-col items-end gap-1">
      <Typography
        tag="span"
        className="text-dark-grey text-[12px]"
        variant="poppins-reg-14"
      >
        33%
      </Typography>

      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          "bg-light-grey relative h-1.5 w-full overflow-hidden rounded-full",
          className,
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="bg-blue h-full w-full flex-1 transition-all"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
}

export { Progress };
