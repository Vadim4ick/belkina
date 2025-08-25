'use client'

import { MediaFragmentFragment } from '@/shared/graphql/__generated__'
import Image from 'next/image'
import { useRef, useState } from 'react'

function isVideo(m?: string | null) {
  return !!m?.startsWith('video/')
}
function isLikelyVideoByName(name?: string | null) {
  return !!name?.match(/\.(mp4|webm|ogg|mov|m4v)$/i)
}

export function MediaBlock({
  media,
  className = '',
  aspect = 'aspect-[570/612]', // фиксация размеров (570x612 из твоего примера)
}: {
  media?: MediaFragmentFragment | null
  className?: string
  aspect?: string
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setPlaying] = useState(false)

  const url = media?.url
  const alt = media?.alt || 'media'
  const mimeType = media?.mimeType
  const isVideoMedia = isVideo(mimeType) || (!mimeType && isLikelyVideoByName(url || ''))

  // Фоллбек: статика-заглушка, но с тем же аспектом, чтобы не дёргало вёрстку
  if (!url) {
    return (
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-[16px] bg-[#E9ECF1] ${className}`}
      >
        <Image src="/img/about.png" alt="about" fill unoptimized className="object-cover" />
      </div>
    )
  }

  if (isVideoMedia) {
    const togglePlay = async () => {
      const v = videoRef.current
      if (!v) return
      try {
        if (v.paused) {
          await v.play()
          setPlaying(true)
        } else {
          v.pause()
          setPlaying(false)
        }
      } catch {
        // no-op
      }
    }

    return (
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-[16px] bg-[#E9ECF1] ${className}`}
      >
        {/* Видео растягиваем по контейнеру, чтобы не схлопывалось до загрузки */}
        <video
          ref={videoRef}
          src={url!}
          className="absolute inset-0 block h-full w-full object-cover"
          playsInline
          controls={false}
          preload="metadata"
        />

        {/* Кастомная кнопка Play по центру — показываем, пока не идёт воспроизведение */}
        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            className="group absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-5 backdrop-blur-sm transition hover:bg-black/70 focus:outline-none"
            aria-label="Воспроизвести видео"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="transition group-hover:scale-110"
              fill="white"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}

        {/* Клик по поверхности — тоже play/pause */}
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0"
          aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
          // прозрачная «крышка» для клика по всему видео
        />
      </div>
    )
  }

  // Изображение
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-[16px] bg-[#E9ECF1] ${className}`}
    >
      <Image src={url} alt={alt} fill unoptimized className="object-cover" />
    </div>
  )
}
