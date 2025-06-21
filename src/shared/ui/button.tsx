/* eslint-disable react/display-name */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center px-4 justify-center cursor-pointer gap-2 rounded-lg font-medium transition-colors outline-none whitespace-nowrap select-none disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-blue disabled:bg-dark-grey",
        "primary-inverted":
          "bg-white text-black border border-black hover:bg-black hover:text-white disabled:bg-light-grey disabled:border-stroke disabled:text-dark-grey",

        secondary:
          "bg-blue text-white hover:bg-blue-hover disabled:bg-dark-grey",

        ghostWhite:
          "bg-white text-black hover:bg-light-grey disabled:text-dark-grey",

        ghost: "bg-light-grey text-black hover:bg-stroke disabled:opacity-50",
      },

      size: {
        /** 40px  */
        sm: "h-10",

        /** 44px  */
        md: "h-11",

        /** 48px  */
        xl: "h-12",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      addonLeft,
      addonRight,
      ...props
    }: React.ComponentProps<"button"> &
      VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
        addonLeft?: React.ReactNode;
        addonRight?: React.ReactNode;
      },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {addonLeft && addonLeft}

        {children}

        {addonRight && addonRight}
      </Comp>
    );
  },
);

export { Button, buttonVariants };
