// src/widgets/EmptyDataMessage/ui/EmptyDataMessage.tsx
'use client'

import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import Image from 'next/image'
import Link from 'next/link'

interface EmptyDataMessageProps {
  title?: string
  message?: string
  showHomeButton?: boolean
}

export const EmptyDataMessage = ({
  title = 'Ничего не найдено',
  message = 'По вашему запросу данные отсутствуют.',
  showHomeButton = true,
}: EmptyDataMessageProps) => {
  return (
    <Container>
      <Card className="bg-linear-to-r from-blue-100 to-blue-50 py-12">
        <CardHeader>
          <CardTitle className="text-center">
            <Typography variant="poppins-md-24">{title}</Typography>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-5">
          <p className="text-center">{message}</p>
          {showHomeButton && (
            <Button variant="secondary" className="w-full sm:w-auto md:w-fit">
              <Link href="/">На главную</Link>
            </Button>
          )}
        </CardContent>
      </Card>
    </Container>
  )
}
