import Link from "next/link";
import { IsideBarItems } from "../app-sidebar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Button } from "@/shared/ui/button";
import { SidebarButtonSheet as SidebarButton } from "./sidebar-button";
import { usePathname } from "next/navigation";
import { MenuIcon } from "@/shared/icons/menu-icon";
import { XIcon } from "@/shared/icons/x-icon";
import { cn } from "@/shared/lib/utils";

interface SidebarMobileProps {
  sideBarItems: IsideBarItems[];
  className?: string;
}

const SidebarMobile = ({ sideBarItems, className }: SidebarMobileProps) => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className={cn("w-fit", className)} asChild>
        {/* <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed z-50 w-full py-3 pl-3 backdrop-blur"> */}
        <div className="fixed z-50 w-full py-3 pl-3">
          <Button size="sm" variant="ghost" className="">
            <MenuIcon />
          </Button>
        </div>
      </SheetTrigger>

      <SheetContent side="left" hideClose className="max-w-[80%] px-3 py-4">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle></SheetTitle>
          <SheetClose>
            <XIcon />
          </SheetClose>
        </SheetHeader>
        <div>
          {sideBarItems.map((item, idx) => (
            <Link key={idx} href={item.url}>
              <SidebarButton
                variant={pathname === item.url ? "secondary" : "ghost"}
                icon={item.icon}
              >
                <span>{item.title}</span>
              </SidebarButton>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { SidebarMobile };
