import { UserIcon } from '@/shared/icons/user-icon'
import { IsideBarItems } from '../_model/ISideBarItems'
import { CartIcon } from '@/shared/icons/cart-icon'
import { TagIcon } from '@/shared/icons/tag-icon'
import { CalendarIcon } from '@/shared/icons/calendar-icon'
import { MessagesIcon } from '@/shared/icons/messages-icon'
import { TariffsIcon } from '@/shared/icons/tariffs-icon'
import {
  getRouteHome,
  getRouteCourses,
  getRouteProfile,
  getRouteTariffs,
  getRouteTests,
} from '@/shared/lib/routes'
import { GraduationCapIcon } from '@/shared/icons/graduation-cap'

export const PrivateMenuItems: IsideBarItems[] = [
  {
    title: 'Главная',
    url: getRouteHome(),
    icon: GraduationCapIcon,
  },
  {
    title: 'Профиль',
    url: getRouteProfile(),
    icon: UserIcon,
  },
  {
    title: 'Курсы',
    url: getRouteCourses(),
    icon: CartIcon,
  },
  {
    title: 'Тесты',
    url: getRouteTests(),
    icon: CalendarIcon,
  },
  {
    title: 'Мои курсы',
    url: '#',
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
