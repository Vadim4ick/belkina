'use client'

import { GetRecommendationsByIdsQuery } from '@/shared/graphql/__generated__'
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
    recomendations: GetRecommendationsByIdsQuery['Recomendations']['docs']
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

                <LexicalRenderer node={el.description.root} />
              </div>
            </div>
          )
        })}
      </>
    )
  },
)

export { Topic }
