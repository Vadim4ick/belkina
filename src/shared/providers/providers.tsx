'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { Toaster } from '../ui/sonner'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 3 * 60 * 1000,
          },
        },
      }),
  )

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      <QueryClientProvider client={queryClient}>
        {children}

        <Toaster richColors />
      </QueryClientProvider>
    </GoogleReCaptchaProvider>
  )
}

export { Providers }
