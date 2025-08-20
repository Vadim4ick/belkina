'use client'
import { memo, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { getRouteTests } from '@/shared/lib/routes'

export const FloatingTestButton = memo(() => {
  const [show, setShow] = useState(false) // таймер
  const [hover, setHover] = useState(false) // ховер
  const router = useRouter()

  useEffect(() => {
    const start = setTimeout(() => {
      setShow(true)

      const firstHide = setTimeout(() => setShow(false), 3500)

      const interval = setInterval(() => {
        setShow(true)
        setTimeout(() => setShow(false), 3500)
      }, 11500)

      return () => {
        clearTimeout(firstHide)
        clearInterval(interval)
      }
    }, 2000)

    return () => clearTimeout(start)
  }, [])

  // 👇 итоговое состояние тултипа
  const tooltipVisible = hover || show

  return (
    <div className="fixed right-4 bottom-4 z-[9999] flex items-center gap-2">
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-auto rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-lg"
          >
            Нажмите, чтобы пройти тест
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => router.push(getRouteTests())}
        className="relative z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border-2 border-orange-500 bg-white"
      >
        <img className="size-6" src="/logo.png" alt="logo" />
      </button>
    </div>
  )
})
