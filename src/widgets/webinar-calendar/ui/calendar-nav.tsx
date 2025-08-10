'use client'

import { useState, useEffect } from 'react'
import { Views } from 'react-big-calendar'
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group'

interface CalendarNavProps {
  view: (typeof Views)[keyof typeof Views]
  onViewChange: (view: (typeof Views)[keyof typeof Views]) => void
}

export const VIEWS_OPTIONS = [
  { id: Views.MONTH, label: 'Месяц' },
  { id: Views.WEEK, label: 'Неделя' },
  { id: Views.DAY, label: 'День' },
  { id: Views.AGENDA, label: 'Расписание' },
]

export const CalendarNav = ({ view, onViewChange }: CalendarNavProps) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <ToggleGroup
      type="single"
      className="w-full"
      value={view}
      onValueChange={(val) => {
        if (val && val !== view) {
          onViewChange(val as (typeof Views)[keyof typeof Views])
        }
      }}
    >
      {VIEWS_OPTIONS.map(({ id, label }) => {
        const disabled = isMobile && id === Views.WEEK
        return (
          <ToggleGroupItem
            key={id}
            value={id}
            aria-label={label}
            variant="outline"
            className="w-full text-xs md:text-sm"
            disabled={disabled}
          >
            {label}
          </ToggleGroupItem>
        )
      })}
    </ToggleGroup>
  )
}
