import Link from 'next/link'
import { cn } from '../lib/utils'

interface Props {
  className?: string
}

export function Logo({ className }: Props) {
  return (
    <Link className={cn('flex items-center space-x-2', className)} href="/">
      <img className="size-12" src="/logo.png" alt="logo" />

      <span className="inline-block">BELKINA.ONLINE</span>
    </Link>
  )
}
