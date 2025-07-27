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
import { Skeleton } from '@/shared/ui/skeleton'
import { useProfileForm } from '../model/hooks'
import { ProfileVariantField } from '../model/type'

export const ProfileForm = () => {
  const {
    profile,
    profileFields,
    isOpen,
    setIsOpen,
    verifyOpen,
    setVerifyOpen,
    code,
    setCode,
    pending,
    isPending,
    handleUpdate,
    handleConfirm,
    handleVerify,
    startChange,
  } = useProfileForm()

  return (
    <div className="border-border w-full rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">Персональные данные</h2>

      <div className="mb-6 space-y-2 text-sm">
        <p>
          <span className="text-muted-foreground">Имя:</span>{' '}
          <span className="font-medium">{profile?.name || '—'}</span>
        </p>
        <p>
          <span className="text-muted-foreground">Email:</span>{' '}
          <span className="font-medium">{profile?.email || '—'}</span>
        </p>
        <p>
          <span className="text-muted-foreground">Статус:</span>{' '}
          <span
            className={
              profile?.isVerified ? 'font-medium text-green-600' : 'font-medium text-red-600'
            }
          >
            {profile?.isVerified ? 'Подтверждён' : 'Не подтверждён'}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {profile?.isVerified ? (
          profileFields.map((field) => (
            <Button
              key={field.key}
              variant="secondary"
              className="w-full"
              onClick={() => startChange(field.key as ProfileVariantField)}
            >
              {field.label}
            </Button>
          ))
        ) : (
          <Button className="col-span-full" onClick={handleConfirm} disabled={pending}>
            Подтвердить почту
          </Button>
        )}
      </div>

      {/* Диалог изменения email / пароля / имени */}
      <Dialog open={!!isOpen} onOpenChange={() => setIsOpen(null)}>
        <DialogContent className="flex max-w-[360px] flex-col gap-4 rounded-[10px] bg-white p-6">
          <DialogHeader>
            <DialogTitle>
              {profileFields.find((f) => f.key === isOpen)?.label || 'Изменение'}
            </DialogTitle>
          </DialogHeader>

          {isPending ? (
            <Skeleton className="bg-muted h-10 w-full rounded-md" />
          ) : (
            <Input
              value={profileFields.find((f) => f.key === isOpen)?.value || ''}
              onChange={(e) => {
                const setter = profileFields.find((f) => f.key === isOpen)?.setValue
                if (setter) setter(e.target.value)
              }}
              type={profileFields.find((f) => f.key === isOpen)?.type || 'text'}
              placeholder={profileFields.find((f) => f.key === isOpen)?.placeholder}
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
      <Dialog
        open={verifyOpen}
        onOpenChange={() => {
          setVerifyOpen(false)
          setCode('')
        }}
      >
        <DialogContent className="flex max-w-[360px] flex-col gap-4 rounded-[10px] bg-white p-6">
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
