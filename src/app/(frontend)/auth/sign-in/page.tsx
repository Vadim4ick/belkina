'use client'

import { getRouteProfile } from '@/shared/lib/routes'
import { authService } from '@/shared/services/auth.service'
import { AuthForm } from '@/widgets/auth-form'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const queryClient = useQueryClient()

  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()

  const handleLogin = async () => {
    setPending(true)
    setError('')

    try {
      const res = await authService.login(email, password)

      if (res) {
        router.push(getRouteProfile())
      }

      queryClient.invalidateQueries({
        queryKey: ['me'],
      })
    } catch (error) {
      console.error(error)
      setError((error as Error).message ?? 'Неизвестная ошибка')
    } finally {
      setPending(false)
    }
  }

  return (
    <AuthForm
      mode="sign-in"
      email={email}
      password={password}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleLogin}
      pending={pending}
      error={error}
    />
  )
}
