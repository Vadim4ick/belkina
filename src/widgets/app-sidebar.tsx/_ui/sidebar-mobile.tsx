import Link from "next/link";
import { IsideBarItems } from "../app-sidebar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Button } from "@/shared/ui/button";
import { SidebarButtonSheet as SidebarButton } from "./sidebar-button";
import { usePathname } from "next/navigation";
import { MenuIcon } from "@/shared/icons/menu-icon";
import { XIcon } from "@/shared/icons/x-icon";
import { UserProfile } from "@/widgets/app-header/ui/user-profile";

interface SidebarMobileProps {
  sideBarItems: IsideBarItems[];
}

const SidebarMobile = ({ sideBarItems }: SidebarMobileProps) => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed z-50 w-full py-3 pl-3 backdrop-blur">
          <Button size="sm" variant="ghost" className="">
            <MenuIcon />
          </Button>
        </div>
      </SheetTrigger>

      <SheetContent side="left" hideClose className="max-w-[80%] px-3 py-4">
        <SheetHeader className="flex flex-row items-center justify-between">
          <div className="mb-3 ml-4">
            {/* <h1 className="">Личный кабинет</h1> */}
            <div className="flex items-center gap-3">
              <UserProfile />
            </div>
          </div>
          <SheetClose>
            <Button className="h-7 w-7 p-0" variant="ghost">
              <XIcon />
            </Button>
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
