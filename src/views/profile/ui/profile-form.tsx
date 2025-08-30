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
import type { ProfileVariantField } from '../model/type'

export const ProfileForm = () => {
  const {
    profile,
    profileFields,
    isOpen,
    setIsOpen,

    // old step
    verifyOpenOld,
    setVerifyOpenOld,
    oldCode,
    setOldCode,
    verifyOldEmail,
    resendOld,

    // new step
    verifyOpenNew,
    setVerifyOpenNew,
    newCode,
    setNewCode,
    verifyNewAndSave,
    resendNew,

    // generic
    pending,
    isPending,
    startChange,
    handleUpdate,
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
          <Button className="col-span-full" onClick={resendOld} disabled={pending}>
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
              {isPending ? 'Сохраняем…' : 'Сохранить'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Диалог #1 — подтверждение ТЕКУЩЕЙ почты */}
      <Dialog
        open={verifyOpenOld}
        onOpenChange={() => {
          setVerifyOpenOld(false)
          setOldCode('')
        }}
      >
        <DialogContent className="flex max-w-[450px] flex-col gap-4 rounded-[10px] bg-white p-6">
          <DialogHeader>
            <DialogTitle>Подтверждение основной почты</DialogTitle>
            <DialogDescription>
              Прежде чем изменить email/пароль, подтвердите доступ к текущей почте ({profile?.email}
              ).
            </DialogDescription>
          </DialogHeader>

          <Input
            placeholder="Код из письма"
            value={oldCode}
            onChange={(e) => setOldCode(e.target.value)}
            maxLength={4}
          />

          <div className="flex flex-col gap-2">
            <Button onClick={verifyOldEmail} disabled={pending}>
              {pending ? 'Проверка…' : 'Подтвердить'}
            </Button>
            <Button variant="ghost" onClick={resendOld} disabled={pending}>
              Отправить код повторно
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Диалог #2 — подтверждение НОВОЙ почты */}
      <Dialog
        open={verifyOpenNew}
        onOpenChange={() => {
          setVerifyOpenNew(false)
          setNewCode('')
        }}
      >
        <DialogContent className="flex max-w-[450px] flex-col gap-4 rounded-[10px] bg-white p-6">
          <DialogHeader>
            <DialogTitle>Подтверждение новой почты</DialogTitle>
            <DialogDescription>
              Введите код, который мы отправили на новую почту (
              {profileFields.find((f) => f.key === 'email')?.value || '—'}).
            </DialogDescription>
          </DialogHeader>

          <Input
            placeholder="Код из письма"
            value={newCode}
            onChange={(e) => setNewCode(e.target.value)}
            maxLength={4}
          />

          <div className="flex flex-col gap-2">
            <Button onClick={verifyNewAndSave} disabled={pending}>
              {pending ? 'Проверка…' : 'Подтвердить и сохранить'}
            </Button>
            <Button variant="ghost" onClick={resendNew} disabled={pending}>
              Отправить код повторно
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
