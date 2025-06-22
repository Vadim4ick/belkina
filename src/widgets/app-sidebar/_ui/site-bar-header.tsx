import { CartIcon } from '@/shared/icons/cart-icon'
import { Separator } from '@/shared/ui/separator'
import { SidebarTrigger } from '@/shared/ui/sidebar'
import { UserProfile } from '@/widgets/app-header/ui/user-profile'
import { Bell, PanelLeft } from 'lucide-react'

export function SiteBarHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1">
          <PanelLeft />
        </SidebarTrigger>
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />

        <div className="ml-auto flex items-center gap-4">
          <Bell fill="black" />
          <CartIcon />
          <UserProfile />
        </div>
      </div>
    </header>
  )
}
