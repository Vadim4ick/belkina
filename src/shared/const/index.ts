import { GraduationCapIcon } from '@/shared/icons/graduation-cap'
import { BookOpennCapIcon } from '@/shared/icons/book-open-text'
import { FAQIcon } from '@/shared/icons/file-question-mark'
import { Newspaper } from '@/shared/icons/newspaper'
import {
  getRouteHome,
  getRouteCourses,
  getRoutePosts,
  getRouteWebinars,
  getRouteTests,
} from '@/shared/lib/routes'
import { TestResult_Status_All } from '../graphql/__generated__'
import { BrainIcon } from 'lucide-react'

export const RUS_LETTERS = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('')

export const MAPPING_TEST_HISTORY_MODE: Record<Exclude<TestResult_Status_All, 'all'>, string> = {
  completed: 'Пройден',
  in_progress: 'В процессе',
  not_started: 'Не начат',
}

export const TEST_STATUS_COLOR = {
  completed: 'text-green-600',
  in_progress: 'text-yellow-600',
  not_started: 'text-red-600',
}

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
  // {
  //   title: 'Курсы',
  //   url: getRouteCourses(),
  //   icon: BookOpennCapIcon,
  // },
  {
    title: 'Вебинары',
    url: getRouteWebinars(),
    icon: BookOpennCapIcon,
  },
  {
    title: 'FAQ',
    url: '#',
    icon: FAQIcon,
  },
  {
    title: 'Тесты',
    url: getRouteTests(),
    icon: BrainIcon,
  },
  // {
  //   title: 'FAQ',
  //   url: '#',
  //   icon: FAQIcon,
  // },
  {
    title: 'Блог',
    url: getRoutePosts(),
    icon: Newspaper,
  },
]
