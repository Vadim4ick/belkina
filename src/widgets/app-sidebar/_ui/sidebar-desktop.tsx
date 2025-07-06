import Link from "next/link";
import { IsideBarItems } from "../app-sidebar";
import { SidebarButton } from "./sidebar-button";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";

interface SidebarDesktopProps {
  sideBarItems: IsideBarItems[];
  className?: string;
}

const SidebarDesktop = ({ sideBarItems, className }: SidebarDesktopProps) => {
  const pathname = usePathname();
  return (
    <aside
      className={cn(
        "bg-background h-screen w-[270px] max-w-xs border-r lg:min-w-[270px]",
        className,
      )}
    >
      <div className="h-full px-3 py-4">
        <div className="ml-4"></div>
        <div className="mt-5">
          <div className="flex w-full flex-col gap-1">
            {sideBarItems.map((item, idx) => (
              <Link key={idx} href={item.url}>
                <SidebarButton
                  variant={pathname === item.url ? "secondary" : "ghostWhite"}
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
