import { UserIcon } from '@/shared/icons/user-icon'
import { IsideBarItems } from '../_model/ISideBarItems'
import { TagIcon } from '@/shared/icons/tag-icon'
import { CalendarIcon } from '@/shared/icons/calendar-icon'
import { getRouteProfile, getRouteTests } from '@/shared/lib/routes'

export const PrivateMenuItems: IsideBarItems[] = [
  {
    title: 'Профиль',
    url: getRouteProfile(),
    icon: UserIcon,
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
  // {
  //   title: 'Онлайн чат',
  //   url: '#',
  //   icon: MessagesIcon,
  // },
]
