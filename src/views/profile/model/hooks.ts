// useProfileForm.ts — two‑step email change flow with resend cooldown
import { useState, useEffect } from 'react'
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
  const [oldToken, setOldToken] = useState<string | null>(null)
  const [newToken, setNewToken] = useState<string | null>(null)
  const [oldVerified, setOldVerified] = useState(false)
  const [pendingField, setPendingField] = useState<Exclude<ProfileVariantField, 'name'> | null>(
    null,
  )

  // ── loading
  const [pending, setPending] = useState(false)
  const { mutate, isPending } = useUpdateUser()
  const queryClient = useQueryClient()

  // ── resend cooldowns
  const [cooldownOld, setCooldownOld] = useState(0)
  const [cooldownNew, setCooldownNew] = useState(0)

  useEffect(() => {
    if (cooldownOld > 0) {
      const timer = setTimeout(() => setCooldownOld((c) => c - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [cooldownOld])

  useEffect(() => {
    if (cooldownNew > 0) {
      const timer = setTimeout(() => setCooldownNew((c) => c - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [cooldownNew])

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

  // 1) Начало изменения
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
      setCooldownOld(30)
      toast.success('Код подтверждения отправлен на текущую почту')
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  const verifyOldEmail = async () => {
    if (!oldToken || !oldCode) return toast.error('Введите код из письма')
    try {
      setPending(true)
      await authService.confirm(oldToken, oldCode, true)
      setOldVerified(true)
      setVerifyOpenOld(false)
      setOldCode('')
      if (pendingField) setIsOpen(pendingField)
      toast.success('Текущая почта подтверждена')
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  const handleUpdate = async () => {
    if (!isOpen) return
    const field = profileFields.find((f) => f.key === isOpen)
    if (!field) return

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

    if (!oldVerified) return toast.error('Сначала подтвердите доступ к текущей почте')

    const nextEmail = String(field.value).trim().toLowerCase()
    if (!nextEmail) return toast.error('Введите новую почту')
    if (nextEmail === profile?.email) return toast.error('Новая почта совпадает с текущей')

    try {
      setPending(true)
      const res = await authService.resendCodeToNewEmail({ newEmail: nextEmail, oldToken })
      setNewToken(res.token)
      setVerifyOpenNew(true)
      setCooldownNew(30)
      toast.success('Код отправлен на новую почту')
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  const verifyNewAndSave = async () => {
    if (!newToken || !newCode) return toast.error('Введите код, отправленный на новую почту')
    try {
      setPending(true)
      await authService.confirm(newToken, newCode, true)
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

  const resendOld = async () => {
    if (cooldownOld > 0) return
    try {
      setPending(true)
      const res = await authService.resendCode({
        email: profile?.email,
        token: oldToken || undefined,
      })
      setOldToken(res.token)
      setCooldownOld(30)
      toast.success('Код отправлен повторно')
    } catch (e) {
      toast.error((e as Error).message)
    } finally {
      setPending(false)
    }
  }

  const resendNew = async () => {
    if (cooldownNew > 0) return
    if (!email) return toast.error('Введите новую почту')
    try {
      setPending(true)
      const res = await authService.resendCodeToNewEmail({ newEmail: email, oldToken })
      setNewToken(res.token)
      setCooldownNew(30)
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
    cooldownOld,

    // new verify
    verifyOpenNew,
    setVerifyOpenNew,
    newCode,
    setNewCode,
    verifyNewAndSave,
    resendNew,
    cooldownNew,

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
