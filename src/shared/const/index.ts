import { GraduationCapIcon } from '@/shared/icons/graduation-cap'
import { BookOpennCapIcon } from '@/shared/icons/book-open-text'
import { FAQIcon } from '@/shared/icons/file-question-mark'
import { Newspaper } from '@/shared/icons/newspaper'
import { getRouteHome, getRouteCourses, getRoutePosts } from '@/shared/lib/routes'

export const RUS_LETTERS = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('')

export function getSymbolLabel(count: number): string {
  const plural = new Intl.PluralRules('ru-RU').select(count)

  switch (plural) {
    case 'one':
      return `${count} символ`
    case 'few':
      return `${count} символа`
    default:
      return `${count} символов`
  }
}

export interface NavItemsProps {
  title: string
  url: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
}

export const navItems: NavItemsProps[] = [
  {
    title: 'Главная',
    url: getRouteHome(),
    icon: GraduationCapIcon,
  },
  {
    title: 'Курсы',
    url: getRouteCourses(),
    icon: BookOpennCapIcon,
  },
  {
    title: 'FAQ',
    url: '#',
    icon: FAQIcon,
  },
  {
    title: 'Блог',
    url: getRoutePosts(),
    icon: Newspaper,
  },
]
