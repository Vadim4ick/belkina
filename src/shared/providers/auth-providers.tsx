import { Loader2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useAuthStore } from '../hooks/use-auth-store'
import { useEffect } from 'react'

const AuthProviders = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession()

  const setSession = useAuthStore((state) => state.setSession)

  useEffect(() => {
    if (status === 'authenticated') {
      setSession(session)
    } else if (status === 'unauthenticated') {
      setSession(null)
    }
  }, [status, session, setSession])

  if (status === 'loading') {
    return (
      <div className="fixed top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <Loader2 className="size-8 animate-spin" />
      </div>
    )
  }
  return <>{children}</>
}

export { AuthProviders }
