'use client'

import { YandexIcon } from '../icons/yandex'
import { Button } from './button'

export default function LoginBtn() {
  const loginUrl = new URL('https://oauth.yandex.ru/authorize')
  loginUrl.searchParams.set('response_type', 'code')
  loginUrl.searchParams.set('client_id', process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID!)
  loginUrl.searchParams.set('redirect_uri', process.env.NEXT_PUBLIC_YANDEX_REDIRECT_URI!)

  return (
    <a className="w-full" href={loginUrl.toString()}>
      <Button className="w-full" variant="ghost">
        <YandexIcon className="size-6" />
      </Button>
    </a>
  )
}
