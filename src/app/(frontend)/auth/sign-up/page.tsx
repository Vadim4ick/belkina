'use client'

import { getRouteHome } from '@/shared/lib/routes'
import { authService } from '@/shared/services/auth.service'
import { AuthForm } from '@/widgets/auth-form'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [token, setToken] = useState('')

  const queryClient = useQueryClient()

  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  const [step, setStep] = useState<'register' | 'confirm'>('register')
  const router = useRouter()

  const register = async () => {
    setPending(true)
    setError('')

    if (!agreed) {
      setError('Подтвердите согласие с условиями')
      setPending(false)
      return
    }

    try {
      const token = await authService.register(email, password)
      setToken(token)
      setStep('confirm') // переходим на ввод кода
    } catch (error) {
      console.error(error)
      setError((error as Error).message ?? 'Неизвестная ошибка')
    } finally {
      setPending(false)
    }
  }

  const confirm = async () => {
    setPending(true)
    setError('')

    try {
      const res = await authService.confirm(token, code)
      queryClient.invalidateQueries({ queryKey: ['me'] })
      router.push(getRouteHome()) // подтверждение прошло, вход выполнен

      toast.success(res?.message ?? 'Подтверждение прошло успешно')
    } catch (error) {
      console.error(error)
      setError((error as Error).message ?? 'Неверный код')
    } finally {
      setPending(false)
    }
  }
  return (
    <AuthForm
      mode="sign-up"
      email={email}
      password={password}
      code={code}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onCodeChange={setCode}
      onSubmit={register}
      onVerify={confirm}
      pending={pending}
      error={error}
      agreed={agreed}
      onToggleAgree={() => setAgreed(!agreed)}
      isCode={step === 'confirm'}
    />
  )
}
