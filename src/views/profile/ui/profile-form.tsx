'use client'

import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/shared/ui/dialog'
import { useProfileStore } from '@/entities/user/use-profile-store'
import { useState } from 'react'
import { toast } from 'sonner'
import { useUpdateUser } from '@/shared/services/profile.service'
import { Skeleton } from '@/shared/ui/skeleton'

export const ProfileForm = () => {
  const profile = useProfileStore((el) => el.profile)

  const [isOpen, setIsOpen] = useState<'email' | 'password' | null>(null)
  const [email, setEmail] = useState(profile?.email || '')
  const [password, setPassword] = useState('')

  const { mutate, isPending } = useUpdateUser()

  const handleUpdate = async () => {
    if (!isOpen) return

    mutate(
      {
        gqlFn: async (data) => {
          const res = await fetch('/api/profile/update', {
            method: 'POST',
            body: JSON.stringify(data),
          })

          const json = await res.json()

          if (!res.ok) {
            throw new Error(json.error ?? 'Произошла ошибка при обновлении')
          }

          return json
        },
        variables: isOpen === 'email' ? { type: 'email', email } : { type: 'password', password },
      },
      {
        onSuccess: () => {
          toast.success('Данные успешно обновлены')
          setIsOpen(null)
        },
        onError: (err) => {
          toast.error(err.message || 'Ошибка при обновлении')
        },
      },
    )
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <Button className="w-full" onClick={() => setIsOpen('email')}>
        Изменить почту
      </Button>

      <Button className="w-full" onClick={() => setIsOpen('password')}>
        Изменить пароль
      </Button>

      <Dialog open={!!isOpen} onOpenChange={() => setIsOpen(null)}>
        <DialogContent className="flex max-w-[300px] flex-col gap-4 rounded-[8px] bg-white p-6">
          <DialogHeader>
            <DialogTitle>{isOpen === 'email' ? 'Изменение почты' : 'Изменение пароля'}</DialogTitle>
          </DialogHeader>

          {isPending ? (
            <Skeleton className="bg-muted h-10 w-full rounded-md" />
          ) : (
            <Input
              value={isOpen === 'email' ? email : password}
              onChange={(e) =>
                isOpen === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)
              }
              type={isOpen === 'email' ? 'email' : 'password'}
              placeholder={isOpen === 'email' ? 'Новая почта' : 'Новый пароль'}
            />
          )}

          <div className="mt-4 flex justify-end gap-2">
            <DialogClose className="w-full" asChild>
              <Button variant="ghost" disabled={isPending}>
                Отмена
              </Button>
            </DialogClose>
            <Button className="w-full" onClick={handleUpdate} disabled={isPending}>
              {isPending ? 'Сохраняем...' : 'Сохранить'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
