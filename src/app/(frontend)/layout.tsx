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
  title: 'Подготовка к ЕГЭ по русскому языку | BELKINA.ONLINE',
  description:
    'Эффективно готовьтесь к ЕГЭ по русскому с персональной программой на платформе BELKINA.ONLINE',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: 'Подготовка к ОГЭ, Подготовка к ЕГЭ',
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
