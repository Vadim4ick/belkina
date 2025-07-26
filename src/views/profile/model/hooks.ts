import { useState } from 'react'
import { useProfileStore } from '@/entities/user/use-profile-store'
import { useUpdateUser } from '@/shared/services/profile.service'
import { authService } from '@/shared/services/auth.service'
import { toast } from 'sonner'
import { useQueryClient } from '@tanstack/react-query'

export const useProfileForm = () => {
  const profile = useProfileStore((s) => s.profile)
  const [isOpen, setIsOpen] = useState<'email' | 'password' | 'name' | null>(null)
  const [verifyOpen, setVerifyOpen] = useState(false)
  const [email, setEmail] = useState(profile?.email || '')
  const [password, setPassword] = useState('')
  const [name, setName] = useState(profile?.name || '')
  const [code, setCode] = useState('')
  const [token, setToken] = useState<string | null>(null)
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
  ]

  const handleUpdate = async () => {
    if (!isOpen) return
    const field = profileFields.find((f) => f.key === isOpen)
    if (!field) return

    mutate(
      {
        gqlFn: async (data) => {
          const res = await fetch('/api/profile/update', {
            method: 'POST',
            body: JSON.stringify(data),
          })

          const json = await res.json()
          if (!res.ok) throw new Error(json.error ?? 'Ошибка при обновлении')
          return json
        },
        variables: { type: field.key, [field.key]: field.value },
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

  return {
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
  }
}
