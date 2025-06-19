import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Button, ButtonProps } from "@/shared/ui/button";
import { IHeaderItems } from "..";
import { MenuIcon } from "@/shared/icons/menu-icon";
import { XIcon } from "@/shared/icons/x-icon";
import { UserProfile } from "./user-profile";
import { Logo } from "@/shared/ui/logo";
import { cn } from "@/shared/lib/utils";

interface MobileNavProps extends ButtonProps {
  headerItems: IHeaderItems[];
}

function MobileNav({ headerItems, className }: MobileNavProps) {
function MobileNav({ headerItems, className }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger className={cn("", className)} asChild>
        <Button
          variant="ghost"
          className="fixed top-4 left-4 z-50 w-full justify-between px-3 py-4"
          aria-label="Open menu"
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" hideClose className="w-[90%] px-5 py-4">
        <SheetHeader className="mb-3 p-0">
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="flex flex-row-reverse items-center justify-end gap-x-4">
            <UserProfile />
          </div>
          <SheetClose className="absolute right-5">
            <XIcon />
          </SheetClose>
        </SheetHeader>
        <ul className="space-y-4">
          {headerItems.map((item, idx) => (
            <li key={idx}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
export { MobileNav };
