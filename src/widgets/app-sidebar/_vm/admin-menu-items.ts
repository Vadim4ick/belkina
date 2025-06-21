import { UserIcon } from "@/shared/icons/user-icon";
import { IsideBarItems } from "../_model/ISideBarItems";
import { getRouteHome } from "@/shared/lib/routes";

export const AdminMenuItems: IsideBarItems[] = [
  {
    title: "На главную",
    url: getRouteHome(),
    icon: UserIcon,
  },
];
