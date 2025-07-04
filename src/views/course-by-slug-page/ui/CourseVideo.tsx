'use client'

import { useEffect, useRef, useState } from 'react'
import { Skeleton } from '@/shared/ui/skeleton'

type Props = { videoId: string; poster?: string }

export const CourseVideo = ({ videoId }: Props) => {
  const [loading, setLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const src = `https://kinescope.io/embed/${videoId}?autoplay=0&controls=1`

  const handleLoad = () => setLoading(false)

  // 2) слушаем postMessage от Kinescope
  useEffect(() => {
    const fn = (e: MessageEvent) => {
      if (
        typeof e.data === 'object' &&
        e.origin.includes('kinescope') &&
        e.data?.type === 'ready'
      ) {
        setLoading(false)
      }
    }
    window.addEventListener('message', fn)
    return () => window.removeEventListener('message', fn)
  }, [])

  // 3) фолбэк — уберём через 5 с даже если события не пришли
  useEffect(() => {
    if (!loading) return
    const t = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(t)
  }, [loading])

  return (
    <div className="relative mx-auto aspect-[18.5/12] w-full max-w-[1250px] overflow-hidden rounded-[16px] bg-black">
      {loading && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="h-full w-full animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent" />
          </div>
        </div>
      )}

      <iframe
        key={src} // <-- заставляет React создать новый узел при смене id
        ref={iframeRef}
        src={src}
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope; clipboard-write"
        allowFullScreen
        frameBorder="0"
        className="absolute inset-0 h-full w-full"
        onLoad={handleLoad}
      />
    </div>
  )
}
