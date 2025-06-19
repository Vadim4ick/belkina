"use client";

import { useMediaQuery } from "usehooks-ts";
import { FC, SVGProps } from "react";
import { SidebarDesktop } from "./_ui/sidebar-desktop";
import { SidebarMobile } from "./_ui/sidebar-mobile";
import { PrivateMenuItems } from "./_vm/privite-menu-items";

export interface IsideBarItems {
  title: string;
  url: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
}

export function AppSidebar() {
  return (
    <>
      <SidebarDesktop
        sideBarItems={PrivateMenuItems}
        className="hidden md:flex"
      />
      <SidebarMobile
        sideBarItems={PrivateMenuItems}
        className="flex md:hidden"
      />
    </>
  );
}
