'use client'

import { createPortal } from 'react-dom'

export const Portal = ({
  element = document.body,
  children,
}: {
  element?: HTMLElement
  children: React.ReactNode
}) => {
  return createPortal(children, element)
}
