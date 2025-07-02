'use client'

import { getRouteHome } from '@/shared/lib/routes'
import { MainNav } from './ui/main-nav'
import { MobileNav } from './ui/mobile-nav'
import { FC, memo, SVGProps } from 'react'
import { GraduationCapIcon } from '@/shared/icons/graduation-cap'
import { BookOpennCapIcon } from '@/shared/icons/book-open-text'
import { FAQIcon } from '@/shared/icons/file-question-mark'
import { Newspaper } from '@/shared/icons/newspaper'

export interface IHeaderItems {
  title: string
  url: string
  icon?: FC<SVGProps<SVGSVGElement>> | null
}
// GraduationCap, BookOpen, HelpCircle, ClipboardList

const headerItems: IHeaderItems[] = [
  {
    title: 'Тестирование ЕГЭ',
    url: getRouteHome(),
    icon: GraduationCapIcon,
  },
  {
    title: 'Курсы',
    url: '#',
    icon: BookOpennCapIcon,
  },
  {
    title: 'FAQ',
    url: '#',
    icon: FAQIcon,
  },
  {
    title: 'Блог',
    url: '/blog',
    icon: Newspaper,
  },
]

interface AppHeaderProps {
  route: 'PUBLIC' | 'PRIVATE'
}

export const AppHeader = memo(({ route }: AppHeaderProps) => {
  return (
    <>
      <MainNav headerItems={headerItems} className="z-50 md:flex" />

      {route !== 'PRIVATE' && (
        <MobileNav headerItems={headerItems} className="z-[500] flex !w-fit md:hidden" />
      )}
    </>
  )
})
