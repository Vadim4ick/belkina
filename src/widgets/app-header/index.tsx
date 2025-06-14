"use client";

import { MainNav } from "./ui/main-nav";
import { MobileNav } from "./ui/mobile-nav";
import { useMediaQuery } from "usehooks-ts";
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
  const isDesktop = useMediaQuery("(min-width:768px)", {
    initializeWithValue: false,
  });

  if (isDesktop) return <MainNav headerItems={headerItems} />;
  return <MobileNav headerItems={headerItems} />;
}
