'use client'

import { authService } from '@/shared/services/auth.service'
import { Button } from '@/shared/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog'
import { Input } from '@/shared/ui/input'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

type Props = {
  token: string | null
  isOpen: boolean
  onClose: () => void
}

export function VerifyEmailModal({ token, isOpen, onClose }: Props) {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [pending, setPending] = useState(false)

  const queryClient = useQueryClient()

  const handleConfirm = async () => {
    setPending(true)
    setError('')
    setSuccess('')

    if (!token) {
      return toast.error('Токен не найден. Пожалуйста, повторите попытку отправки кода.')
    }

    try {
      const res = await authService.confirm(token, code)
      toast.success(res?.message ?? 'Подтверждение прошло успешно')
      queryClient.invalidateQueries({ queryKey: ['me'] })
      onClose()
      setCode('')
    } catch (error) {
      toast.error((error as Error).message ?? 'Неизвестная ошибка')
    } finally {
      setPending(false)
    }
  }

  const handleResend = async () => {
    setPending(true)
    setError('')
    setSuccess('')

    try {
      await authService.resendCode({
        token: token as string,
      })

      setSuccess('Новый код отправлен на почту')
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col gap-4 rounded-[8px] bg-white p-6 sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Подтверждение Email</DialogTitle>
          <DialogDescription>Введите код из письма. Он действует 10 минут.</DialogDescription>
        </DialogHeader>

        <Input placeholder="Введите код" value={code} onChange={(e) => setCode(e.target.value)} />

        {error && <p className="text-sm text-red-500">{error}</p>}
        {success && <p className="text-sm text-green-500">{success}</p>}

        <DialogFooter className="flex flex-col items-stretch gap-2">
          <Button onClick={handleConfirm} disabled={pending}>
            {pending ? 'Проверка...' : 'Подтвердить'}
          </Button>
          <Button variant="ghost" onClick={handleResend} disabled={pending}>
            Отправить новый код
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
