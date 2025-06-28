import { PrivateMenuItems } from './_vm/privite-menu-items'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/shared/ui/sidebar'
import { NavMain } from './_ui/nav-main'
import { Logo } from '@/shared/ui/logo'
import { FC, SVGProps } from 'react'
import { NavUser } from './_ui/nav-user'
import { useAuthStore } from '@/shared/hooks/use-auth-store'

export interface IsideBarItems {
  title: string
  url: string
  icon?: FC<SVGProps<SVGSVGElement>>
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const session = useAuthStore((state) => state.session)

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <Logo />
        <NavMain items={PrivateMenuItems} />
      </SidebarContent>
      <SidebarFooter>{session?.user && <NavUser user={session.user} />}</SidebarFooter>
    </Sidebar>
  )
}
