'use client'
import { navItems } from '@/shared/const'
import { TelegramIcon } from '@/shared/icons/telegram-icon'
import { Logo } from '@/shared/ui/logo'
import { Typography } from '@/shared/ui/typography'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
      <div className="pt-[50px] pb-6">
        <div className="container mx-auto">
          <div className="flex flex-col justify-around gap-y-20 px-[26px] pt-12 pb-9 md:flex-row md:items-center">
            <div className="flex flex-col items-start gap-7">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  className={` ${pathname === item.url ? 'text-orange-500' : 'text-white'} font-medium transition-colors hover:text-orange-500`}
                  href={item.url}
                >
                  <Typography variant="poppins-md-16" tag="p">
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-7">
              <Link
                target="_blank"
                href="https://t.me/Belkina_online2025"
                className="flex items-center gap-x-2.5 transition-colors hover:text-orange-500"
              >
                <TelegramIcon />
                <Typography variant="poppins-md-16" tag="p">
                  Поддержка пользователей
                </Typography>
              </Link>

              <a href="/publichnaya_oferta.docx" download>
                <Typography
                  variant="poppins-md-16"
                  tag="p"
                  className="cursor-pointer font-medium transition-colors hover:text-orange-500"
                >
                  Публичная оферта
                </Typography>
              </a>
            </div>
          </div>

          {/* блок с реквизитами */}
          <div className="mt-12 border-t border-[#2E2E2E] pt-6 text-center">
            <Typography variant="poppins-md-16" tag="p" className="leading-relaxed text-gray-400">
              ИП: Белкина Любовь Андреевна
              <br />
              ОГРНИП: 319774600484485
              <br />
              ИНН: 501207890901
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { AppFooter }
