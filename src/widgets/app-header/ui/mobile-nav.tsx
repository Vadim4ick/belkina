'use client'

import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet'
import { ButtonProps } from '@/shared/ui/button'
import { IHeaderItems } from '..'
import { MenuIcon } from '@/shared/icons/menu-icon'
import { XIcon } from '@/shared/icons/x-icon'
import { UserProfile } from './user-profile'
import { Logo } from '@/shared/ui/logo'
import { MobileNavButtonSheet as MobileNavButton } from './mobile-nav-button'
import { usePathname } from 'next/navigation'

interface MobileNavProps extends ButtonProps {
  headerItems: IHeaderItems[]
}

const MobileNav = ({ headerItems }: MobileNavProps) => {
  const pathname = usePathname()

  return (
    <>
      <Sheet>
        <SheetTrigger className="absolute top-9 left-4 z-50 lg:hidden">
          <MenuIcon className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left" hideClose className="w-[90%] px-5 py-4">
          <SheetHeader className="mb-3 p-0">
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription></SheetDescription>
            {/* <UserProfile className="flex flex-row-reverse items-center justify-end gap-x-4" /> */}
            <SheetClose className="absolute right-5">
              <XIcon />
            </SheetClose>
          </SheetHeader>
          <ul className="flex flex-col gap-y-2">
            {headerItems.map((item, idx) => (
              <Link key={idx} href={item.url}>
                <MobileNavButton
                  variant={pathname === item.url ? 'secondary' : 'ghostWhite'}
                  icon={item.icon}
                >
                  <span>{item.title}</span>
                </MobileNavButton>
              </Link>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  )
}

export { MobileNav }
