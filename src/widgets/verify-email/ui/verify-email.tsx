'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { VerifyEmailModal } from './verify-email-modal'

export function VerifyEmail() {
  const params = useSearchParams()
  const token = params.get('token')

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (token) setIsOpen(true)
  }, [token])

  return <VerifyEmailModal token={token} isOpen={isOpen} onClose={() => setIsOpen(false)} />
}
