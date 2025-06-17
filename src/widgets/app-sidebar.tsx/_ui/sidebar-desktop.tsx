import Link from "next/link";
import { IsideBarItems } from "../app-sidebar";
import { SidebarButton } from "./sidebar-button";
import { usePathname } from "next/navigation";
import { UserProfile } from "@/widgets/app-header/ui/user-profile";
interface SidebarDesktopProps {
  sideBarItems: IsideBarItems[];
}

const SidebarDesktop = ({ sideBarItems }: SidebarDesktopProps) => {
  const pathname = usePathname();
  return (
    <aside className="bg-background h-screen w-[270px] max-w-xs border-r lg:min-w-[270px]">
      <div className="h-full px-3 py-4">
        <div className="ml-4">
          {/* <h1 className="">Личный кабинет</h1> */}
          <div className="flex items-center gap-3">
            <UserProfile />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex w-full flex-col gap-1">
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
        </div>
      </div>
    </aside>
  );
};

export { SidebarDesktop };
