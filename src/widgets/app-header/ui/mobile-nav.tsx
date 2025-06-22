'use client'

import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui/sheet'
import { Button, ButtonProps } from '@/shared/ui/button'
import { IHeaderItems } from '..'
import { MenuIcon } from '@/shared/icons/menu-icon'
import { XIcon } from '@/shared/icons/x-icon'
import { UserProfile } from './user-profile'
import { Logo } from '@/shared/ui/logo'
import { cn } from '@/shared/lib/utils'
import { memo, useState } from 'react'

interface MobileNavProps extends ButtonProps {
  headerItems: IHeaderItems[]
}

const MobileNav = memo(({ headerItems, className }: MobileNavProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        className={cn(
          'border-dark-grey fixed top-4 left-4 w-full justify-between border px-3 py-4',
          className,
        )}
        aria-label="Open menu"
      >
        <MenuIcon className="h-6 w-6" />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" hideClose className="z-[51] w-[90%] px-5 py-4">
          <SheetHeader className="mb-3 p-0">
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription></SheetDescription>
            <div className="flex flex-row-reverse items-center justify-end gap-x-4">
              <UserProfile />
            </div>
            <SheetClose className="absolute right-5">
              <XIcon />
            </SheetClose>
          </SheetHeader>
          <ul className="space-y-4">
            {headerItems.map((item, idx) => (
              <li key={idx}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  )
})

export { MobileNav }
