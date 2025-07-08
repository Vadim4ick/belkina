'use client'

import { MainNav } from './ui/main-nav'
import { MobileNav } from './ui/mobile-nav'
import { FC, memo, SVGProps } from 'react'

export interface IHeaderItems {
  title: string
  url: string
  icon?: FC<SVGProps<SVGSVGElement>> | null
}

interface AppHeaderProps {
  route: 'PUBLIC' | 'PRIVATE'
}

export const AppHeader = memo(({ route }: AppHeaderProps) => {
  return (
    <>
      <MainNav className="z-50 md:flex" />

      {route !== 'PRIVATE' && <MobileNav />}
    </>
  )
})
