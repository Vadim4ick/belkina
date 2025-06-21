'use client'

import { getRouteHome } from '@/shared/lib/routes'
import { AuthForm } from '@/widgets/auth-form'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('') // если потребуется e-mail-код
  const [agreed, setAgreed] = useState(false)

  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  /** шаг 1: создаём пользователя в Payload */
  async function register() {
    setPending(true)
    setError('')

    if (!agreed) {
      setError('Подтвердите согласие с условиями')
      setPending(false)
      return
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        const { error } = await res.json()
        throw new Error(error ?? 'Ошибка регистрации')
      }

      /** шаг 2: автологинимся */
      const signInRes = await signIn('credentials', {
        email,
        password,
        callbackUrl: getRouteHome(),
        redirect: false, // <— чтобы ловить ошибки логина
      })

      if (signInRes?.error) throw new Error(signInRes.error)

      // redirect вручную, чтобы Next 13 не руга­лся на «wrapped fetch»
      window.location.assign(getRouteHome())
    } catch (e: any) {
      setError(e.message ?? 'Неизвестная ошибка')
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
      pending={false}
      error=""
      onToggleAgree={() => setAgreed(!agreed)}
      onVerify={() => {}}
      agreed={agreed}
    />
  )
}
