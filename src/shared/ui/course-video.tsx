'use client'

import { useEffect, useRef, useState } from 'react'
import { Skeleton } from '@/shared/ui/skeleton'
import { PlayIcon } from '@/shared/icons/play-icon'
import { cn } from '../lib/utils'

type Props = {
  videoId: string
  poster: string
  className?: string
}

export const CourseVideo = ({ videoId, poster, className }: Props) => {
  const [showPlayer, setShowPlayer] = useState(false)
  const [loading, setLoading] = useState(false) // true только после клика
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const src = `https://kinescope.io/embed/${videoId}?autoplay=1&controls=1`

  const handleLoad = () => setLoading(false)

  useEffect(() => {
    if (!showPlayer) return
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
  }, [showPlayer])

  useEffect(() => {
    if (!loading) return
    const t = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(t)
  }, [loading])

  return (
    <div
      className={cn(
        'relative mx-auto aspect-[18.5/12] w-full max-w-[1250px] overflow-hidden rounded-[16px] bg-black',
        className,
      )}
    >
      {!showPlayer && (
        <button
          className="group absolute inset-0 flex cursor-pointer items-center justify-center"
          onClick={() => {
            setShowPlayer(true)
            setLoading(true)
          }}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${poster}`}
            alt="Постер видео"
            className="h-full w-full object-cover"
          />

          <span className="absolute flex size-14 items-center justify-center rounded-full bg-white/70 transition group-hover:scale-110">
            <PlayIcon className="size-8 text-black" />
          </span>
        </button>
      )}

      {showPlayer && loading && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="h-full w-full animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent" />
          </div>
        </div>
      )}

      {showPlayer && (
        <iframe
          key={src}
          ref={iframeRef}
          src={src}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope; clipboard-write"
          allowFullScreen
          frameBorder="0"
          className="absolute inset-0 h-full w-full"
          onLoad={handleLoad}
        />
      )}
    </div>
  )
}
