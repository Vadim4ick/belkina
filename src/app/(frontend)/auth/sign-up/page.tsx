'use client'

import { getRouteHome } from '@/shared/lib/routes'
import { authService } from '@/shared/services/auth.service'
import { AuthForm } from '@/widgets/auth-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [agreed, setAgreed] = useState(false)

  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

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
      const res = await authService.register(email, password)

      if (res) {
        await authService.login(email, password)

        router.push(getRouteHome())
      }
    } catch (error) {
      console.error(error)
      setError((error as Error).message ?? 'Неизвестная ошибка')
    } finally {
      setPending(false)
    }
  }

  return (
    <AuthForm
      mode="sign-up"
      email={email}
      password={password}
      onEmailChange={setEmail}
      onCodeChange={setCode}
      code={code}
      onPasswordChange={setPassword}
      onSubmit={register}
      pending={pending}
      error={error}
      onToggleAgree={() => setAgreed(!agreed)}
      onVerify={() => {}}
      agreed={agreed}
    />
  )
}
