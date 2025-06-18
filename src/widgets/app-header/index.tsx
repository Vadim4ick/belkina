"use client";

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
    url: "/",
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

export function AppHeader() {
  return (
    <>
      <MainNav className="mobile:block hidden" headerItems={headerItems} />
      <MobileNav className="mobile:hidden flex" headerItems={headerItems} />
    </>
  );
}
