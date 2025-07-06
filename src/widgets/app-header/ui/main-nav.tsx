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
import { Button } from '@/shared/ui/button'
import { useSession } from 'next-auth/react'

interface MainNavProps {
  headerItems: IHeaderItems[]
  className?: string
}

const MainNav = memo(({ headerItems, className }: MainNavProps) => {
  const { data: session, status } = useSession()
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
        'bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 flex h-[var(--header-height)] w-full items-center border-b backdrop-blur transition-transform duration-300',
        !visible && '-translate-y-full',
        className,
      )}
    >
      <Container>
        <div className="mx-auto my-auto flex h-full items-center justify-end gap-12 md:justify-between">
          <div className="ml-12 hidden md:flex lg:ml-4">
            <Logo />
          </div>
          <div className="hidden flex-1 items-center gap-7 lg:flex">
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

          <div className="flex items-center space-x-4">
            <UserProfile session={session} status={status} />
            {!session && (
              <Button
                className=""
                variant="secondary"
                onClick={() => console.log('Записаться на урок clicked')}
              >
                Записаться на урок
              </Button>
            )}
          </div>
        </div>
      </Container>
    </header>
  )
})

export { MainNav }
