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
import { usePathname } from "next/navigation";
import { HeaderSidebarButtonSheet as HeaderSidebarButton } from "./header-sidebar-button";
import { IHeaderItems } from "..";
import { MenuIcon } from "@/shared/icons/menu-icon";
import { XIcon } from "@/shared/icons/x-icon";

interface MobileNavProps extends ButtonProps {
  headerItems: IHeaderItems[];
}

function MobileNav({ headerItems }: MobileNavProps) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 z-50 w-full justify-between px-3 py-4 backdrop-blur"
          aria-label="Open menu"
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" hideClose className="max-w-[80%] px-3 py-4">
        <SheetHeader className="mb-3 ml-4">
          <SheetTitle>Личный кабинет</SheetTitle>
          <SheetDescription className="space-x-3">
            {/* <UserProfile /> */}
          </SheetDescription>
          <SheetClose className="absolute right-5">
            {/* <Button className="h-7 w-7 p-0" variant="ghost"> */}
            <XIcon />
            {/* </Button> */}
          </SheetClose>
        </SheetHeader>
        <div>
          {headerItems.map((item, idx) => (
            <Link key={idx} href={item.url}>
              <HeaderSidebarButton
                variant={pathname === item.url ? "secondary" : "ghost"}
                icon={item.icon}
              >
                <span>{item.title}</span>
              </HeaderSidebarButton>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
export { MobileNav };
