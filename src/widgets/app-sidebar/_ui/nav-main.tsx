'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/sidebar'
import Link from 'next/link'
import { FC, SVGProps } from 'react'
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
                <SidebarMenuButton
                  tooltip={item.title}
                  size="lg"
                  variant={pathname === item.url ? 'secondary' : 'outline'}
                  className="cursor-pointer"
                >
                  {item.icon && <item.icon className="h-6 w-6" />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
