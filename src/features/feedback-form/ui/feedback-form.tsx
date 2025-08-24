'use client'

import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import { cn } from '@/shared/lib/utils'
import { FeedbackFormData } from '../model/type'
import { feedbackSchema } from '../model/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useState } from 'react'

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export function FeedbackForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
  })

  const [loading, setLoading] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const onSubmit = async (data: FeedbackFormData) => {
    setLoading(true)

    if (!executeRecaptcha) {
      toast.error('Не удалось инициализировать капчу')
      return
    }

    try {
      const token = await executeRecaptcha('feedback_form')

      const res = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, token }),
      })

      const result = await res.json()

      if (result.success) {
        toast.success('Письмо отправлено! Проверьте почту 📩')
      } else {
        toast.error('Ошибка: ' + result.message)
      }
    } catch {
      toast.error('Не удалось отправить письмо. Повторите попытку позже.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        'max-tablet:justify-center max-tablet:items-center flex w-full flex-col items-end justify-end gap-6',
        className,
      )}
    >
      <div className="border-stroke max-mobile:px-4 flex w-full max-w-[350px] flex-col gap-4 rounded-md border bg-white px-8 py-[20px]">
        <Typography className="text-center" tag="p" variant="poppins-md-16">
          Заполняй форму, чтобы получить бесплатные рекомендации по тесту
        </Typography>

        <Input
          type="email"
          label="Ваша почта"
          placeholder="name@flowbite.com"
          {...register('email')}
          error={errors.email?.message}
        />

        <Button type="submit" disabled={loading} size={'xl'}>
          Отправить
        </Button>
      </div>
    </form>
  )
}
