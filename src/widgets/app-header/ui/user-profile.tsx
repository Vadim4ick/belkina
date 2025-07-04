'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { UserIcon } from '@/shared/icons/user-icon'
import { LogOutIcon } from '@/shared/icons/log-out-icon'
import { ProfileAvatar } from '@/shared/ui/profile-avatar'
import { Typography } from '@/shared/ui/typography'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@/shared/ui/skeleton'
import { memo } from 'react'
import { cn } from '@/shared/lib/utils'
import { Session } from 'next-auth'
import { getRouteAuth, getRouteHome } from '@/shared/lib/routes'

interface UserProfileProps {
  session: Session | null
  className?: string
  status: 'authenticated' | 'loading' | 'unauthenticated'
}

export const UserProfile = memo(({ className, session, status }: UserProfileProps) => {
  const router = useRouter()

  if (status === 'loading') {
    return <Skeleton className="h-[48px] w-[100px]" />
  }

  if (status !== 'authenticated') {
    return (
      <Button onClick={() => router.push(getRouteAuth())} variant="ghostWhite">
        Войти
      </Button>
    )
  }

  return (
    <div className={cn('flex items-center justify-end gap-4', className)}>
      <Typography variant="poppins-md-16">{session?.user && session.user?.name}</Typography>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-12 w-12 self-center rounded-full p-px">
            <ProfileAvatar path={session?.user?.image || ''} className="h-12 w-12" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 w-56">
          <DropdownMenuLabel>
            <p>Мой аккаунт</p>
            <p className="text-muted-foreground overflow-hidden text-xs text-ellipsis">
              {session?.user && session?.user?.email}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuGroup></DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link className="cursor-pointer" href={`/profile`}>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Личный кабинет</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button
                className="h-[32px] w-full cursor-pointer justify-start"
                variant="ghostWhite"
                onClick={() =>
                  signOut({
                    callbackUrl: getRouteHome(),
                  })
                }
              >
                <LogOutIcon className="mr-2 h-4 w-4" />
                Выйти
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
})
