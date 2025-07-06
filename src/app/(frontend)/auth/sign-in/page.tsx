'use client'

import { getRouteProfile } from '@/shared/lib/routes'
import { AuthForm } from '@/widgets/auth-form'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    await signIn('credentials', {
      email,
      password,
      callbackUrl: getRouteProfile(),
    })
  }

  return (
    <AuthForm
      mode="sign-in"
      email={email}
      password={password}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleLogin}
      pending={false}
      error=""
    />
  )
}
