'use client'

import { AuthProviders } from '@/shared/providers/auth-providers'
import { Container } from '@/shared/ui/container'
import { SidebarInset, SidebarProvider } from '@/shared/ui/sidebar'
import { AppSidebar } from '@/widgets/app-sidebar'
import { SiteBarHeader } from '@/widgets/app-sidebar/_ui/site-bar-header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProviders>
      <SidebarProvider
        style={
          {
            '--sidebar-width': 'calc(var(--spacing) * 72)',
            '--header-height': 'calc(var(--spacing) * 14)',
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" collapsible="icon" />
        <SidebarInset>
          <SiteBarHeader />
          <div className="flex flex-1 flex-col">
            <Container>{children}</Container>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AuthProviders>
  )
}
