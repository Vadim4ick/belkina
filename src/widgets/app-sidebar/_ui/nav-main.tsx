'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from '@/shared/ui/sidebar'
import Link from 'next/link'
import { FC, SVGProps } from 'react'
import { SidebarButton } from './sidebar-button'
import { usePathname } from 'next/navigation'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: FC<SVGProps<SVGSVGElement>>
  }[]
}) {
  const pathname = usePathname()
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item, idx) => (
            <SidebarMenuItem key={item.title}>
              <Link key={idx} href={item.url}>
                <SidebarButton
                  variant={pathname === item.url ? 'secondary' : 'ghostWhite'}
                  icon={item.icon}
                >
                  <span>{item.title}</span>
                </SidebarButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
