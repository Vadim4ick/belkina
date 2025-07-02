import { AppFooter } from '@/widgets/app-footer'
import { AppHeader } from '@/widgets/app-header'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader route="PUBLIC" />

      <main className="mt-[var(--header-height)] w-full flex-1">{children}</main>

      <AppFooter />
    </>
  )
}
