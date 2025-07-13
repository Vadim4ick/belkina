import { PrivateMenuItems } from './_vm/privite-menu-items'
import { Sidebar, SidebarContent, SidebarFooter } from '@/shared/ui/sidebar'
import { NavMain } from './_ui/nav-main'
import { Logo } from '@/shared/ui/logo'
import { FC, SVGProps } from 'react'
import { NavUser } from './_ui/nav-user'

export interface IsideBarItems {
  title: string
  url: string
  icon?: FC<SVGProps<SVGSVGElement>>
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* <SidebarHeader></SidebarHeader> */}
      <SidebarContent>
        <Logo />
        <NavMain items={PrivateMenuItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
