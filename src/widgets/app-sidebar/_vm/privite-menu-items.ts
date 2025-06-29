import { UserIcon } from '@/shared/icons/user-icon'
import { IsideBarItems } from '../_model/ISideBarItems'
import { CartIcon } from '@/shared/icons/cart-icon'
import { TagIcon } from '@/shared/icons/tag-icon'
import { CalendarIcon } from '@/shared/icons/calendar-icon'
import { MessagesIcon } from '@/shared/icons/messages-icon'
import { TariffsIcon } from '@/shared/icons/tariffs-icon'
import {
  getRouteCatalog,
  getRouteMyCourses,
  getRouteProfile,
  getRouteTariffs,
  getRouteTests,
} from '@/shared/lib/routes'

export const PrivateMenuItems: IsideBarItems[] = [
  {
    title: 'Профиль',
    url: getRouteProfile(),
    icon: UserIcon,
  },
  {
    title: 'Каталог',
    url: getRouteCatalog(),
    icon: CartIcon,
  },
  {
    title: 'Тесты',
    url: getRouteTests(),
    icon: CalendarIcon,
  },
  {
    title: 'Мои курсы',
    url: getRouteMyCourses(),
    icon: TagIcon,
  },
  {
    title: 'Онлайн чат',
    url: '#',
    icon: MessagesIcon,
  },
  {
    title: 'Тарифы',
    url: getRouteTariffs(),
    icon: TariffsIcon,
  },
]
