'use client'

import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from '@/shared/ui/dialog'
import { useProfileStore } from '@/entities/user/use-profile-store'
import { useState } from 'react'
import { toast } from 'sonner'
import { useUpdateUser } from '@/shared/services/profile.service'
import { Skeleton } from '@/shared/ui/skeleton'
import { authService } from '@/shared/services/auth.service'
import { useQueryClient } from '@tanstack/react-query'

export const ProfileForm = () => {
  const profile = useProfileStore((el) => el.profile)

  const [isOpen, setIsOpen] = useState<'email' | 'password' | null>(null)
  const [verifyOpen, setVerifyOpen] = useState(false)
  const [email, setEmail] = useState(profile?.email || '')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  const { mutate, isPending } = useUpdateUser()
  const queryClient = useQueryClient()

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

  const handleConfirm = async () => {
    try {
      setPending(true)
      const res = await authService.resendCodeToEmail(profile?.email)
      setToken(res.token)
      setVerifyOpen(true)
      toast.success('Код подтверждения отправлен на почту')
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  const handleVerify = async () => {
    if (!token || !code) return toast.error('Введите код')

    try {
      setPending(true)
      await authService.confirm(token, code)
      toast.success('Email подтверждён')
      setVerifyOpen(false)
      queryClient.invalidateQueries({ queryKey: ['me'] })
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="flex items-center justify-between gap-4">
      {profile?.isVerified ? (
        <>
          <Button className="w-full" onClick={() => setIsOpen('email')}>
            Изменить почту
          </Button>
          <Button className="w-full" onClick={() => setIsOpen('password')}>
            Изменить пароль
          </Button>
        </>
      ) : (
        <Button className="w-full" onClick={handleConfirm} disabled={pending}>
          Подтвердить почту
        </Button>
      )}

      {/* Диалог изменения email / пароля */}
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

      {/* Диалог подтверждения email */}
      <Dialog open={verifyOpen} onOpenChange={setVerifyOpen}>
        <DialogContent className="flex max-w-[340px] flex-col gap-4 rounded-[8px] bg-white p-6">
          <DialogHeader>
            <DialogTitle>Подтверждение Email</DialogTitle>
            <DialogDescription>Введите код, полученный на вашу почту.</DialogDescription>
          </DialogHeader>

          <Input
            placeholder="Код из письма"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <div className="flex flex-col gap-2">
            <Button onClick={handleVerify} disabled={pending}>
              {pending ? 'Проверка...' : 'Подтвердить'}
            </Button>
            <Button variant="ghost" onClick={handleConfirm} disabled={pending}>
              Отправить код повторно
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
