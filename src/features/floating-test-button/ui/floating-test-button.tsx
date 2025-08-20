'use client'
import { memo, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { getRouteTests } from '@/shared/lib/routes'

export const FloatingTestButton = memo(() => {
  const [show, setShow] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // первый показ через 2 сек
    const start = setTimeout(() => {
      setShow(true)

      // скрыть через 2 сек
      const firstHide = setTimeout(() => setShow(false), 2000)

      // цикл: каждые 10 сек → показать на 2 сек
      const interval = setInterval(() => {
        setShow(true)
        setTimeout(() => setShow(false), 2000)
      }, 10000)

      return () => {
        clearTimeout(firstHide)
        clearInterval(interval)
      }
    }, 2000)

    return () => clearTimeout(start)
  }, [])

  return (
    <div className="fixed right-4 bottom-4 z-[9999] flex items-center gap-2">
      <AnimatePresence>
        {show && (
          <motion.div
            // key={hover ? 'hover' : 'auto'} // 👈 меняется при наведении → пересоздаёт элемент

            initial={{ opacity: 0, x: 50, zIndex: 0 }}
            animate={{ opacity: 1, x: 0, zIndex: 1000 }}
            exit={{ opacity: 0, x: 50, zIndex: 0 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-auto z-[1000] rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-lg"
          >
            Нажмите, чтобы пройти тест
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => router.push(getRouteTests())}
        className="relative z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border-2 border-orange-500 bg-white"
      >
        <img className="size-6" src="/logo.png" alt="logo" />
      </button>
    </div>
  )
})
