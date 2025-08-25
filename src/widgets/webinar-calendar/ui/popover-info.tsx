'use client'

import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/shared/ui/dialog' // Предполагается, что у вас есть компонент Dialog из shadcn/ui
import { Button } from '@/shared/ui/button'
import { getRouteWebinarsBySlug } from '@/shared/lib/routes'
import type { CalendarEvent } from './webinar-calendar' // Импортируем тип из главного компонента

interface WebinarInfoPopUpProps {
  event: CalendarEvent | null
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function WebinarInfoPopUp({ event, isOpen, onOpenChange }: WebinarInfoPopUpProps) {
  const router = useRouter()

  if (!event) {
    return null
  }

  const handleNavigate = () => {
    router.push(getRouteWebinarsBySlug({ slug: event.slug }))
  }

  // Форматируем даты для более чистого вывода
  const formattedStartDate =
    event.start &&
    new Date(event.start).toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

  const formattedEndDate =
    event.end &&
    event.end.toLocaleString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    })

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card rounded-lg px-6 py-8 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg leading-tight">{event.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col space-y-2 text-sm">
            <p>
              <span className="font-semibold">Начало: </span>
              {formattedStartDate}
            </p>
            <p>
              <span className="font-semibold">Окончание: </span>
              {formattedEndDate}
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Закрыть
          </Button>
          <Button onClick={handleNavigate} className="w-full grow sm:w-auto">
            Перейти к вебинару
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
