import { UserIcon } from '@/shared/icons/user-icon'
import { IsideBarItems } from '../_model/ISideBarItems'
import { getRouteProfile } from '@/shared/lib/routes'

export const PrivateMenuItems: IsideBarItems[] = [
  {
    title: 'Профиль',
    url: getRouteProfile(),
    icon: UserIcon,
  },

  // {
  //   title: 'Тесты',
  //   url: getRouteTests(),
  //   icon: CalendarIcon,
  // },
  // {
  //   title: 'Мои курсы',
  //   url: '#',
  //   icon: TagIcon,
  // },
  // {
  //   title: 'Онлайн чат',
  //   url: '#',
  //   icon: MessagesIcon,
  // },
]
