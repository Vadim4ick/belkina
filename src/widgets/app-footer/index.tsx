'use client'
import { TelegramIcon } from '@/shared/icons/telegram-icon'
import { getRouteHome, getRouteCourses } from '@/shared/lib/routes'
import { Logo } from '@/shared/ui/logo'
import { Typography } from '@/shared/ui/typography'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface IFooterNavItems {
  title: string
  url: string
}

const footerNavItems = [
  {
    title: 'Главная',
    url: getRouteHome(),
  },
  {
    title: 'Курсы',
    url: getRouteCourses(),
  },
  {
    title: 'FAQ',
    url: '#',
  },
  {
    title: 'Блог',
    url: '#',
  },
]

const AppFooter = () => {
  const pathname = usePathname()
  return (
    <footer className="bg-black text-white">
      <div className="border-b-[1px] border-[#F4F4F4] py-6">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <Logo />
          </div>
        </div>
      </div>
      <div className="pt-[50px] pb-[36px] md:pb-[98px]">
        <div className="container mx-auto">
          <div className="flex flex-col justify-around gap-y-20 px-[26px] pt-12 pb-9 md:flex-row md:items-center">
            <div className="flex flex-col items-start gap-7">
              {footerNavItems.map((item, idx) => (
                <Link
                  key={idx}
                  className={` ${pathname === item.url ? 'text-blue' : 'text-white'} hover:text-blue-hover font-medium transition-colors`}
                  href={item.url}
                >
                  <Typography variant="poppins-md-16" tag="p">
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-7">
              <Link href="#" className="hover:text-blue-hover flex items-center gap-x-2.5">
                <TelegramIcon />
                <Typography variant="poppins-md-16" tag="p">
                  Поддержка пользователей
                </Typography>
              </Link>
              <Typography
                variant="poppins-md-16"
                tag="p"
                className="hover:text-blue-hover cursor-pointer font-medium transition-colors"
              >
                Политика конфиденциальности
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { AppFooter }
