import { PrivateMenuItems } from './_vm/privite-menu-items'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from '@/shared/ui/sidebar'
import { NavMain } from './_ui/nav-main'
import { UserProfile } from '../app-header/ui/user-profile'
import { Logo } from '@/shared/ui/logo'
import { FC, SVGProps } from 'react'

export interface IsideBarItems {
  title: string
  url: string
  icon?: FC<SVGProps<SVGSVGElement>>
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <Logo />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={PrivateMenuItems} />
      </SidebarContent>
      <SidebarFooter>
        <UserProfile className="flex-row-reverse" />
      </SidebarFooter>
    </Sidebar>
  )
}
