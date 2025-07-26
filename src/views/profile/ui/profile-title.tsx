'use client'

import { useProfileStore } from '@/entities/user/use-profile-store'
import { cn } from '@/shared/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip'
import { Typography } from '@/shared/ui/typography'

const ProfileTitle = () => {
  const { profile } = useProfileStore()

  return (
    <Typography variant="visuelt-bold-48" className="relative mb-6">
      Профиль{' '}
      {!profile?.isVerified && (
        <Tooltip>
          <TooltipTrigger
            className={cn(
              'absolute top-1 -right-3 flex size-4 items-center justify-center rounded-full bg-red-500 text-xs text-white',
            )}
          >
            !
          </TooltipTrigger>

          <TooltipContent side="top" sideOffset={6}>
            Почта не подтверждена. Пожалуйста подтвердите ее в профиле
          </TooltipContent>
        </Tooltip>
      )}
    </Typography>
  )
}

export { ProfileTitle }
