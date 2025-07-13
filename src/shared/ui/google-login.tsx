'use client'

import { GoogleIcon } from '../icons/google'
import { Button } from './button'

export default function GoogleLoginBtn() {
  const loginUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth')

  loginUrl.searchParams.set('client_id', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!)
  loginUrl.searchParams.set('redirect_uri', process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!)
  loginUrl.searchParams.set('response_type', 'code')
  loginUrl.searchParams.set('scope', 'email profile openid')
  loginUrl.searchParams.set('access_type', 'offline')
  loginUrl.searchParams.set('prompt', 'consent')

  return (
    <a className="w-full" href={loginUrl.toString()}>
      <Button className="w-full" variant="ghost">
        <GoogleIcon className="size-4" />
      </Button>
    </a>
  )
}
