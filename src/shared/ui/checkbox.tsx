"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "@/shared/lib/utils";
import { CheckArrow } from "../icons/check-arrow";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const checkbox = (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer size-4 shrink-0 rounded-[4px] border-[0.5px] border-gray-300 outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <CheckArrow className="size-2" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  return checkbox;
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
