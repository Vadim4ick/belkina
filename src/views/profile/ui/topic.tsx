'use client'

import { GetRecomendationByIdsQuery } from '@/shared/graphql/__generated__'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Typography } from '@/shared/ui/typography'
import { memo } from 'react'

type LexicalNode = {
  type: string
  text?: string
  tag?: string
  children?: LexicalNode[]
}

export const LexicalRenderer = ({ node }: { node: LexicalNode }) => {
  const renderNode = (node: LexicalNode, key?: number): React.ReactNode => {
    if (!node) return null

    switch (node.type) {
      case 'root':
        return <div key={key}>{node.children?.map((child, i) => renderNode(child, i))}</div>

      case 'list':
        return (
          <ul key={key} className="space-y-1 text-base text-[#626262]">
            {node.children?.map((child, i) => renderNode(child, i))}
          </ul>
        )

      case 'listitem':
        return (
          <Typography
            className="flex items-center gap-1"
            key={key}
            tag="li"
            variant="poppins-md-16"
          >
            - {node.children?.map((child, i) => renderNode(child, i))}
          </Typography>
        )

      case 'text':
        return (
          <Typography key={key} tag="p" variant="poppins-md-16">
            {node.text}
          </Typography>
        )

      default:
        return null
    }
  }

  return <div className="prose">{renderNode(node)}</div>
}

const Topic = memo(
  ({
    recomendations,
  }: {
    recomendations: GetRecomendationByIdsQuery['Recomendations']['docs']
  }) => {
    return (
      <>
        {recomendations?.map((el) => {
          return (
            <div
              key={el.id}
              className="bg-light-grey flex flex-col gap-12 rounded-xl px-4 py-6 md:px-6 md:py-8 lg:px-12"
            >
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-black">{el.title}</h2>
                {/* <ul className="space-y-1 text-base text-[#626262]">
                  <Typography tag="li" variant="poppins-md-16">
                    – Учи правила правописания приставок, корней, суффиксов и окончаний.
                  </Typography>
                  <Typography tag="li" variant="poppins-md-16">
                    – Практикуй задания на Н/НН, –ТСЯ/–ТЬСЯ, слитное/раздельное написание.
                  </Typography>
                  <Typography tag="li" variant="poppins-md-16">
                    – Рекомендация: делай по 10–15 заданий ежедневно, анализируя ошибки.
                  </Typography>
                </ul> */}

                <LexicalRenderer node={el.description.root} />
              </div>

              <Card className="flex w-full flex-col gap-6 rounded-xl bg-white px-4 py-5 shadow-none lg:px-8 lg:py-10 xl:flex-row">
                <div className="flex h-full min-w-1/2 flex-col gap-2 overflow-y-auto">
                  {[
                    'Экспресс-тест с анализом ошибок',
                    'Полный видеоразбор заданий и тем',
                    'Тестирование с рекомендациями',
                    'Индивидуальные советы по улучшению',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-light-grey flex items-center gap-3 rounded-[6px] px-[10px] py-3"
                    >
                      🔥
                      <Typography tag="span" className="text-[#6B7280]" variant="poppins-reg-14">
                        {item}
                      </Typography>
                    </div>
                  ))}
                </div>

                <div className="flex w-full flex-col justify-around gap-y-8 bg-white md:min-w-[332px]">
                  <div className="flex w-full flex-col gap-6">
                    <Typography
                      tag="h4"
                      className="text-[#111928] uppercase"
                      variant="poppins-md-16"
                    >
                      СТАНДАРТ — РАЗБЕРИСЬ В СЛОЖНОМ С ПОДДЕРЖКОЙ
                    </Typography>
                    <div className="bg-light-grey px-3 py-2.5">
                      <Typography tag="p" className="text-[#6B7280]" variant="poppins-reg-14">
                        Подходит тем, кто сталкивается с трудностями в отдельных темах и нуждается в
                        разборе.
                      </Typography>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-6">
                    <Typography tag="p" className="text-[#6B7280]" variant="poppins-reg-14">
                      Идеальный баланс: и поддержка, и самостоятельность
                    </Typography>
                    <Typography
                      className="text-dark-grey uppercase"
                      tag="p"
                      variant="poppins-md-16"
                    >
                      От 9990 рублей
                    </Typography>

                    <Button size={'xl'}>Выбрать</Button>
                  </div>
                </div>
              </Card>
            </div>
          )
        })}
      </>
    )
  },
)

export { Topic }
