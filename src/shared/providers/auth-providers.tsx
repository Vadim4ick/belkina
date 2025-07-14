'use client'

import { Loader2 } from 'lucide-react'
import { useProfile } from '../hooks/use-profile'

const AuthProviders = ({ children, loading }: { children: React.ReactNode; loading?: boolean }) => {
  const { isLoading } = useProfile()

  if (isLoading && loading) {
    return (
      <div className="fixed top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white">
        <Loader2 className="size-8 animate-spin" />
      </div>
    )
  }
  return <>{children}</>
}

export { AuthProviders }
