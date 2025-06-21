/* eslint-disable react/display-name */
import { cn } from "@/shared/lib/utils";
import { Button, ButtonProps } from "@/shared/ui/button";
import { SheetClose } from "@/shared/ui/sheet";
import { FC, forwardRef, ReactNode, SVGProps } from "react";

interface HeaderSidebarButtonProps extends ButtonProps {
  icon?: FC<SVGProps<SVGSVGElement>> | null;
  className?: string;
  children: ReactNode;
}

const HeaderSidebarButton = forwardRef<
  HTMLButtonElement,
  HeaderSidebarButtonProps
>(({ icon: Icon, className, children, ...props }, ref) => {
  return (
    <Button
      variant="ghost"
      className={cn("w-full justify-start gap-2", className)}
      {...props}
      ref={ref} // ✅ Передаём ref дальше
    >
      {Icon && <Icon />}
      <span>{children}</span>
    </Button>
  );
});

export { HeaderSidebarButton };

const HeaderSidebarButtonSheet = (props: HeaderSidebarButtonProps) => {
  return (
    <SheetClose asChild>
      <HeaderSidebarButton {...props} />
    </SheetClose>
  );
};

export { HeaderSidebarButtonSheet };
