'use client'

import Link from 'next/link'
import { IHeaderItems } from '..'
import { usePathname } from 'next/navigation'
import { Logo } from '@/shared/ui/logo'
import { UserProfile } from './user-profile'
import { Typography } from '@/shared/ui/typography'
import { Container } from '@/shared/ui/container'
import { cn } from '@/shared/lib/utils'
import { memo, useEffect, useState } from 'react'

interface MainNavProps {
  headerItems: IHeaderItems[]
  className?: string
}

const MainNav = memo(({ headerItems, className }: MainNavProps) => {
  const pathname = usePathname()

  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 65) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={cn(
        'bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 flex h-[65px] w-full items-center border-b backdrop-blur transition-transform duration-300',
        !visible && '-translate-y-full',
        className,
      )}
    >
      <Container>
        <div className="mx-auto flex h-14 items-center gap-12">
          <div className="mr-4 hidden md:flex">
            <Logo />
          </div>
          <div className="flex flex-1 items-center gap-7">
            {headerItems.map((item, idx) => (
              <Link
                key={idx}
                className={cn(
                  `hover:text-blue-hover font-medium transition-colors`,
                  pathname === item.url ? 'text-blue' : 'text-dark-grey',
                )}
                href={item.url}
              >
                <Typography variant="poppins-md-16" tag="p">
                  {item.title}
                </Typography>
              </Link>
            ))}
          </div>

          <div>
            <UserProfile />
          </div>
        </div>
      </Container>
    </header>
  )
})

export { MainNav }
