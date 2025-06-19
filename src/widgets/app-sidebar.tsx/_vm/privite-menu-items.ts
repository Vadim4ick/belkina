import { UserIcon } from "@/shared/icons/user-icon"
import { IsideBarItems } from "../_model/ISideBarItems"
import { CartIcon } from "@/shared/icons/cart-icon"
import { TagIcon } from "@/shared/icons/tag-icon"
import { CalendarIcon } from "@/shared/icons/calendar-icon"
import { MessagesIcon } from "@/shared/icons/messages-icon"
import { TariffsIcon } from "@/shared/icons/tariffs-icon"


export const PrivateMenuItems: IsideBarItems[] = [
  {
    title: "Главная",
    url: "/profile",
    icon: UserIcon,
  },
  {
    title: "Каталог",
    url: "/catalog",
    icon: CartIcon,
  },
  {
    title: "Тесты",
    url: "/#",
    icon: CalendarIcon,
  },
  {
    title: "Мои курсы",
    url: "/#",
    icon: TagIcon,
  },
  {
    title: "Онлайн чат",
    url: "/#",
    icon: MessagesIcon,
  },
  {
    title: "Тарифы",
    url: "/#",
    icon: TariffsIcon,
  }
]
