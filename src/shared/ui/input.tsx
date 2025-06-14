import * as React from "react";

import { cn } from "@/shared/lib/utils";
import { Typography } from "./typography";

function Input({
  className,
  type,
  label,
  ...props
}: React.ComponentProps<"input"> & {
  label?: string;
}) {
  const inp = (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-dark-grey text-dark-grey focus:border-blue bg-light-grey border-stroke flex h-[44px] w-full min-w-0 rounded-[8px] border px-4 py-3 text-[14px] transition-[color] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );

  if (label) {
    return (
      <label className="flex cursor-pointer flex-col gap-2">
        <Typography
          className="text-dark-grey"
          tag="span"
          variant="poppins-md-16"
        >
          {label}
        </Typography>
        {inp}
      </label>
    );
  }

  return inp;
}

export { Input };
