import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './../../shared/assets/css/globals.css'
import { Providers } from '@/shared/providers/providers'
import YandexMetrikaContainer from '@/shared/lib/YandexMetrika'

const geistSans = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Подготовка к ОГЭ и ЕГЭ по русскому 2025 | Сдай на 90+ без стресса.',
  description:
    'ОГЭ и ЕГЭ по русскому в 2025 году: пройди тест, и получи бесплатный урок по подготовке ОГЭ и ЕГЭ по русскому языку',
  icons: {
    icon: '/favicon.ico',
  },
  keywords:
    'егэ по русскому, огэ по русскому, подготовка к егэ по русскому, подготовка к огэ по русскому, егэ русский 2025, огэ русский 2025',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const analyticsEnabled = !!(process.env.NODE_ENV === 'production')
  return (
    <html lang="ru" className="h-full">
      <body className={`${geistSans.variable} flex min-h-screen flex-col antialiased`}>
        <Providers>{children}</Providers>

        <YandexMetrikaContainer enabled={analyticsEnabled} />
      </body>
    </html>
  )
}
