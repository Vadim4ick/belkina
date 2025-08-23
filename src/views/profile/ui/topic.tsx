'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { GetRecomendationsQuery } from '@/shared/graphql/__generated__'
import { ArrowLeft } from 'lucide-react'
import RichText from '@/shared/ui/rich-text'

import AutoHeight from 'embla-carousel-auto-height'

type TopicProps = {
  recomendations: GetRecomendationsQuery['GetUserRecommendations']
  autoplayDelay?: number
}

/* ===== Styles Helpers (можешь заменить на tailwind classes) ===== */
const cardBaseClasses =
  'w-full bg-[#f4f4f4] rounded-xl px-6 py-8 flex flex-col gap-6 min-h-[210px] h-full'

/* ===== Single Recommendation (no carousel) ===== */
const SingleRecommendation: React.FC<{
  rec: GetRecomendationsQuery['GetUserRecommendations'][number]
}> = ({ rec }) => {
  return (
    <div className="w-full">
      <div className={cardBaseClasses}>
        <h2 className="text-3xl font-bold text-black">{rec.recommendation.title}</h2>
        {rec.recommendation?.description ? (
          <RichText
            className="m-0 flex flex-col"
            data={JSON.parse(rec.recommendation.description)}
            enableGutter={false}
          />
        ) : (
          <p className="text-base text-[#626262]">Нет подробного описания.</p>
        )}
      </div>
    </div>
  )
}

/* ===== Multiple Recommendations (carousel) ===== */
const CarouselRecommendations: React.FC<{
  recs: GetRecomendationsQuery['GetUserRecommendations']
  autoplayDelay: number
}> = ({ recs, autoplayDelay }) => {
  const plugins =
    recs.length > 1
      ? [
          Autoplay({
            delay: autoplayDelay,
            stopOnInteraction: false,
            playOnInit: true,
          }),
          AutoHeight(),
        ]
      : [AutoHeight()]

  // Embla – viewportRef вешаем на контейнер дорожки
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      skipSnaps: false,
    },
    plugins,
  )

  return (
    <div className="relative w-full">
      {/* Viewport */}
      <div ref={viewportRef} className="overflow-hidden">
        {/* Container */}
        <div className="-ml-4 flex">
          {recs.map((rec, idx) => {
            return (
              <div
                key={`${rec.title}-${idx}`}
                className="flex-[0_0_100%] pl-4 md:flex-[0_0_100%] lg:flex-[0_0_100%] xl:flex-[0_0_100%]"
              >
                <div className={cardBaseClasses}>
                  <h2 className="text-2xl font-bold text-black">{rec.recommendation.title}</h2>

                  <p className="text-base text-gray-600">❓ {rec.title}</p>

                  {rec.recommendation?.description ? (
                    <RichText
                      className="m-0 flex flex-col"
                      data={JSON.parse(rec.recommendation.description)}
                      enableGutter={false}
                    />
                  ) : (
                    <p className="text-base text-[#626262]">Нет описания.</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Навигация (кастомные кнопки) */}
      {recs.length > 1 && (
        <div className="absolut pointer-events-none inset-0 flex w-full items-center justify-between">
          <CarouselNavButton dir="prev" onClick={() => emblaApi?.scrollPrev()} />
          <CarouselNavButton dir="next" onClick={() => emblaApi?.scrollNext()} />
        </div>
      )}
    </div>
  )
}

const CarouselNavButton: React.FC<{ dir: 'prev' | 'next'; onClick: () => void }> = ({
  dir,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`pointer-events-auto m-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-black shadow transition hover:bg-white ${
      dir === 'prev' ? '' : ''
    }`}
    aria-label={dir === 'prev' ? 'Предыдущая рекомендация' : 'Следующая рекомендация'}
  >
    {dir === 'prev' ? (
      <ArrowLeft className="size-4" />
    ) : (
      <ArrowLeft className="size-4 rotate-180" />
    )}
  </button>
)

export const Topic: React.FC<TopicProps> = ({ recomendations, autoplayDelay = 7500 }) => {
  const list = recomendations || []
  if (!list.length) {
    return null
  }

  if (list.length === 1) {
    return (
      <div className="mx-auto mt-6">
        <SingleRecommendation rec={list[0]} />
      </div>
    )
  }

  return (
    <div className="mx-auto mt-6">
      <CarouselRecommendations recs={list} autoplayDelay={autoplayDelay} />
    </div>
  )
}
