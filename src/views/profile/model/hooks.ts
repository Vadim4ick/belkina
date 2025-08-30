/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react'
import { useProfileStore } from '@/entities/user/use-profile-store'
import { useUpdateUser } from '@/shared/services/profile.service'
import { authService } from '@/shared/services/auth.service'
import { toast } from 'sonner'
import { useQueryClient } from '@tanstack/react-query'
import type { ProfileVariantField } from './type'

export const useProfileForm = () => {
  const profile = useProfileStore((s) => s.profile)

  // ── UI state
  const [isOpen, setIsOpen] = useState<ProfileVariantField | null>(null)
  const [verifyOpenOld, setVerifyOpenOld] = useState(false)
  const [verifyOpenNew, setVerifyOpenNew] = useState(false)

  // ── form fields
  const [email, setEmail] = useState(profile?.email || '')
  const [password, setPassword] = useState('')
  const [name, setName] = useState(profile?.name || '')

  // ── codes & tokens
  const [oldCode, setOldCode] = useState('')
  const [newCode, setNewCode] = useState('')
  const [oldToken, setOldToken] = useState<string | null>(null) // token for current email
  const [newToken, setNewToken] = useState<string | null>(null) // token for NEW email
  const [oldVerified, setOldVerified] = useState(false)
  const [pendingField, setPendingField] = useState<Exclude<ProfileVariantField, 'name'> | null>(
    null,
  )

  // ── loading
  const [pending, setPending] = useState(false)
  const { mutate, isPending } = useUpdateUser()
  const queryClient = useQueryClient()

  const profileFields = [
    {
      key: 'email',
      label: 'Изменить почту',
      type: 'email',
      value: email,
      setValue: setEmail,
      placeholder: 'Новая почта',
    },
    {
      key: 'password',
      label: 'Изменить пароль',
      type: 'password',
      value: password,
      setValue: setPassword,
      placeholder: 'Новый пароль',
    },
    {
      key: 'name',
      label: 'Изменить имя',
      type: 'text',
      value: name,
      setValue: setName,
      placeholder: 'Новое имя',
    },
  ] as const

  // 1) Начало изменения: сначала подтверждаем текущую почту
  const startChange = async (field: ProfileVariantField) => {
    if (field === 'name') {
      setIsOpen('name')
      return
    }
    try {
      setPendingField(field as Exclude<ProfileVariantField, 'name'>)
      setPending(true)
      const res = await authService.resendCode({ email: profile?.email })
      setOldToken(res.token)
      setVerifyOpenOld(true)
      toast.success('Код подтверждения отправлен на текущую почту')
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  // 1.2) Подтверждаем код с текущей почты
  const verifyOldEmail = async () => {
    if (!oldToken || !oldCode) return toast.error('Введите код из письма')
    try {
      setPending(true)
      await authService.confirm(oldToken, oldCode, true) // сервер помечает «old verified»
      setOldVerified(true)
      setVerifyOpenOld(false)
      setOldCode('')
      // открываем нужный диалог
      pendingField ? setIsOpen(pendingField) : setIsOpen('email')
      toast.success('Текущая почта подтверждена')
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  // 2) Пользователь ввёл НОВУЮ почту и нажал «Сохранить» → шлём код на новую почту
  const handleUpdate = async () => {
    if (!isOpen) return
    const field = profileFields.find((f) => f.key === isOpen)
    if (!field) return

    // имя и пароль сохраняем как раньше
    if (isOpen !== 'email') {
      if (isOpen === 'password' && !oldVerified) {
        toast.error('Сначала подтвердите доступ к текущей почте')
        return
      }
      mutate(
        { variables: { type: field.key, [field.key]: field.value } },
        {
          onSuccess: () => {
            setTimeout(() => setIsOpen(null), 200)
            if (isOpen === 'password') setOldVerified(false)
            setPendingField(null)
          },
        },
      )
      return
    }

    // Для email — двухэтапная верификация
    if (!oldVerified) return toast.error('Сначала подтвердите доступ к текущей почте')

    const nextEmail = String(field.value).trim().toLowerCase()
    if (!nextEmail) return toast.error('Введите новую почту')
    if (nextEmail === profile?.email) return toast.error('Новая почта совпадает с текущей')

    try {
      setPending(true)
      // Рекомендуется: сервер ДОЛЖЕН проверить, что oldToken прошёл верификацию и email свободен
      // Здесь используем выделенный endpoint; если его пока нет — можно временно вызвать resendCode({ email: nextEmail })
      const res = await authService.resendCodeToNewEmail({ newEmail: nextEmail, oldToken })
      setNewToken(res.token)
      setVerifyOpenNew(true)
      toast.success('Код отправлен на новую почту')
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  // 3) Подтверждение НОВОЙ почты → только затем выполняем мутацию смены email
  const verifyNewAndSave = async () => {
    if (!newToken || !newCode) return toast.error('Введите код, отправленный на новую почту')
    try {
      setPending(true)
      await authService.confirm(newToken, newCode, true) // сервер проверяет код новой почты

      mutate(
        { variables: { type: 'email', email } },
        {
          onSuccess: async () => {
            toast.success('Email обновлён')
            setIsOpen(null)
            setVerifyOpenNew(false)
            setOldVerified(false)
            setNewCode('')
            setOldCode('')
            setNewToken(null)
            setPendingField(null)
            // Перечитать профиль
            await queryClient.invalidateQueries({ queryKey: ['me'] })
          },
        },
      )
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  // Повторная отправка кода на текущую почту (шаг 1)
  const resendOld = async () => {
    try {
      setPending(true)
      const res = await authService.resendCode({
        email: profile?.email,
        token: oldToken || undefined,
      })
      setOldToken(res.token)
      toast.success('Код отправлен повторно')
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  // Повторная отправка кода на НОВУЮ почту (шаг 3)
  const resendNew = async () => {
    if (!email) return toast.error('Введите новую почту')
    try {
      setPending(true)
      const res = await authService.resendCodeToNewEmail({ newEmail: email, oldToken })
      setNewToken(res.token)
      toast.success('Код отправлен повторно на новую почту')
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  return {
    profile,
    profileFields,
    isOpen,
    setIsOpen,

    // old verify
    verifyOpenOld,
    setVerifyOpenOld,
    oldCode,
    setOldCode,
    verifyOldEmail,
    resendOld,

    // new verify
    verifyOpenNew,
    setVerifyOpenNew,
    newCode,
    setNewCode,
    verifyNewAndSave,
    resendNew,

    // form
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,

    // misc
    pending,
    isPending,
    startChange,
    handleUpdate,
  }
}
