'use client'

import { useState, useEffect, memo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { cn } from '@/shared/lib/utils'
import { Logo } from '@/shared/ui/logo'
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
// import { MenuIcon, XIcon } from '@/shared/icons'
import { getRouteHome, getRouteCourses, getRoutePosts } from '@/shared/lib/routes'
import { GraduationCapIcon } from '@/shared/icons/graduation-cap'
import { BookOpennCapIcon } from '@/shared/icons/book-open-text'
import { FAQIcon } from '@/shared/icons/file-question-mark'
import { Newspaper } from '@/shared/icons/newspaper'
import { MenuIcon, XIcon } from 'lucide-react'
import { UserProfile } from './ui/user-profile'
import { MobileNavButton } from './ui/mobile-nav-button'

interface NavItem {
  title: string
  url: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
}

const navItems: NavItem[] = [
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

interface AppHeaderProps {
  route: 'PUBLIC' | 'PRIVATE'
}

export const AppHeader = ({ route }: AppHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { data: session, status } = useSession()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Закрываем меню при изменении маршрута
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full bg-white/95 px-4 backdrop-blur transition-all duration-300',
        isScrolled ? 'py-2 shadow-sm' : 'py-4',
      )}
    >
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-8">
          {/* Мобильное меню (бургер) */}
          <button
            className="z-50 p-2 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
          >
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
          {/* Логотип */}
          <Logo className="hidden sm:flex" />
        </div>

        {/* Десктопное меню */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={cn(
                `hover:text-blue-hover font-medium transition-colors`,
                pathname === item.url ? 'text-blue' : 'text-dark-grey',
              )}
            >
              <Typography variant="poppins-md-16" tag="p">
                {item.title}
              </Typography>
            </Link>
          ))}
        </nav>

        {/* Кнопки авторизации/профиля */}
        <div className="flex items-center gap-4">
          {!session && (
            <Button variant="secondary" onClick={() => console.log('Записаться')}>
              Записаться на урок
            </Button>
          )}
          <UserProfile session={session} status={status} />
        </div>

        {/* Мобильное меню (контент) */}
        <div
          className={cn(
            'bg-background fixed inset-0 z-40 max-w-[90%] transform pt-20 transition-all duration-500 md:w-[550px]',
            'lg:hidden',
            isOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="bg-background flex h-dvh w-full flex-col space-y-2 px-4">
            <Logo className="mb-5" />
            {navItems.map((item) => (
              <Link key={item.url} href={item.url}>
                <MobileNavButton
                  variant={pathname === item.url ? 'secondary' : 'ghostWhite'}
                  icon={item.icon}
                >
                  <span>{item.title}</span>
                </MobileNavButton>
              </Link>
            ))}

            <div className="space-y-5 border-t pt-4">
              {!session && (
                <Button className="h-12 w-full" onClick={() => console.log('Записаться')}>
                  Записаться на урок
                </Button>
              )}
              <UserProfile session={session} status={status} className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
