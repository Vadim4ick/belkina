import { getRouteProfile } from "@/shared/lib/routes";
import { IsideBarItems } from "../_model/ISideBarItems";

export const DocsMenuItems: IsideBarItems[] = [
  {
    title: "Вернутся в личный кабинет",
    url: getRouteProfile(),
  },
  {
    title: "Политика конфиденциальности",
    url: "/docs/policy",
  },
  {
    title: "Правила использования Сайта",
    url: "/docs/rules",
  },
  {
    title: "Пользовательское соглашение",
    url: "/docs/user-agreement",
  },
];
