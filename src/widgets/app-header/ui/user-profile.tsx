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

import { useRouter } from 'next/navigation'
import { memo } from 'react'
import { cn } from '@/shared/lib/utils'
import { getRouteAuth } from '@/shared/lib/routes'
import { useProfileStore } from '@/entities/user/use-profile-store'

import { useLogout, useProfile } from '@/shared/hooks/use-profile'
import { Skeleton } from '@/shared/ui/skeleton'

interface UserProfileProps {
  className?: string
  reverse?: boolean
}

/**
 * @reverse меняет местами аватар и имя
 * @status принимает состояние loading' и пока true, отображает Skeleton
 */
export const UserProfile = memo(({ className, reverse }: UserProfileProps) => {
  const router = useRouter()

  const { profile } = useProfileStore()

  const { isLoading } = useProfile()

  const { mutate: logout } = useLogout()

  if (isLoading) {
    return <Skeleton className="h-[48px] w-[100px]" />
  }

  if (!profile?.id) {
    return (
      <Button
        className={cn('', className)}
        onClick={() => router.push(getRouteAuth())}
        variant="ghost"
      >
        Войти
      </Button>
    )
  }

  return (
    <div className={`flex items-center justify-end gap-4 ${reverse ? 'flex-row-reverse' : ''}`}>
      <Typography variant="poppins-md-16">{profile?.name}</Typography>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-12 w-12 self-center rounded-full p-px">
            <ProfileAvatar path={profile?.avatar?.url ?? ''} className="h-12 w-12" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 w-56">
          <DropdownMenuLabel>
            <p>Мой аккаунт</p>
            <p className="text-muted-foreground overflow-hidden text-xs text-ellipsis">
              {profile.email}
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
                onClick={() => logout()}
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
