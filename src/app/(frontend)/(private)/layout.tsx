'use client'

import { AuthProviders } from '@/shared/providers/auth-providers'
import { SidebarInset, SidebarProvider } from '@/shared/ui/sidebar'
import { AppHeader } from '@/widgets/app-header'
import { AppSidebar } from '@/widgets/app-sidebar'
import { SiteBarHeader } from '@/widgets/app-sidebar/_ui/site-bar-header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProviders loading={true}>
      <AppHeader className="" />

      {/* Сайдбар закоментирован до момента появления видеокурсов и связанных с ними вкладок */}
      {/* <SidebarProvider
        style={
          {
            '--sidebar-width': 'calc(var(--spacing) * 72)',
          } as React.CSSProperties
        }
        className="lg:pt-[calc(var(--header-height)_+_15px)]"
      >
        <AppSidebar
          variant="inset"
          collapsible="icon"
          className="lg:pt-[calc(var(--header-height)_+_15px)]"
        />
        <SidebarInset>
          <SiteBarHeader />
          <div className="max-tablet:px-4 flex flex-1 flex-col px-6">{children}</div>
        </SidebarInset>
      </SidebarProvider> */}

      <main className="mt-[var(--header-height)] w-full flex-1">{children}</main>
    </AuthProviders>
  )
}
