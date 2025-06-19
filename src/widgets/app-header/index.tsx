"use client";

import { getRouteHome } from "@/shared/lib/routes";
import { MainNav } from "./ui/main-nav";
import { MobileNav } from "./ui/mobile-nav";
import { FC, SVGProps } from "react";

export interface IHeaderItems {
  title: string;
  url: string;
  icon?: FC<SVGProps<SVGSVGElement>> | null;
}

const headerItems = [
  {
    title: "Тестирование ЕГЭ",
    url: getRouteHome(),
    icon: null,
  },
  {
    title: "Курсы",
    url: "#",
    icon: null,
  },
  {
    title: "FAQ",
    url: "#",
    icon: null,
  },
  {
    title: "Блог",
    url: "#",
    icon: null,
  },
];

interface AppHeaderProps {
  route: "PUBLIC" | "PRIVATE";
}

export function AppHeader({ route }: AppHeaderProps) {
  return (
    <>
      <MainNav headerItems={headerItems} className="hidden md:flex" />
      {route !== "PRIVATE" && (
        <MobileNav
          headerItems={headerItems}
          className="flex !w-fit md:hidden"
        />
      )}
    </>
  );
}
