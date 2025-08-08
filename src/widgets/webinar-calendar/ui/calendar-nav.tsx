'use client'

import { Views } from 'react-big-calendar'
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group'
import { useMediaQuery } from 'usehooks-ts'
import { VIEWS_OPTIONS } from '../_vm/views-options'

interface CalendarNavProps {
  view: (typeof Views)[keyof typeof Views]
  onViewChange: (view: (typeof Views)[keyof typeof Views]) => void
}

export const CalendarNav = ({ view, onViewChange }: CalendarNavProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const filteredViews = isMobile
    ? VIEWS_OPTIONS.filter((option) => option.id !== Views.WEEK)
    : VIEWS_OPTIONS

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
      {filteredViews.map(({ id, label }) => (
        <ToggleGroupItem
          key={id}
          value={id}
          aria-label={label}
          variant="outline"
          className="w-full"
        >
          {label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
