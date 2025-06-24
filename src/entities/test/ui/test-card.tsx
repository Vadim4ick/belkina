'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { Input } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'
import { Progress } from '@/shared/ui/progress'
import { QuestionFragmentFragment } from '@/shared/graphql/__generated__'
import { memo } from 'react'
import { useShuffledOnClient } from '@/shared/hooks/useShuffledOnClient'

type Props = {
  question: QuestionFragmentFragment
  index: number
  total: number
  step: number
}

const TestCard = memo(({ question, index, total, step }: Props) => {
  const { control } = useFormContext()

  const questionName = `q_${question.id}`

  const shuffledRight = useShuffledOnClient(question.matchingPairs?.map((p) => p))

  const renderContent = () => {
    switch (question.questionType) {
      case 'single_choice':
      case 'multiple_choice':
        return (
          <Controller
            control={control}
            name={questionName}
            render={({ field }) => (
              <div className="flex flex-col gap-4">
                {question.answers.map((answer) => (
                  <label key={answer.id} className="flex cursor-pointer items-center gap-2">
                    <input
                      type={question.questionType === 'single_choice' ? 'radio' : 'checkbox'}
                      name={questionName}
                      value={answer.value}
                      checked={
                        question.questionType === 'single_choice'
                          ? field.value === answer.value
                          : field.value?.includes?.(answer.value)
                      }
                      onChange={(e) => {
                        if (question.questionType === 'single_choice') {
                          field.onChange(answer.value)
                        } else {
                          const newValue = field.value || []
                          if (e.target.checked) {
                            field.onChange([...newValue, answer.value])
                          } else {
                            field.onChange(newValue.filter((v: string) => v !== answer.value))
                          }
                        }
                      }}
                    />
                    <Typography tag="span" variant="poppins-md-16">
                      {answer.label}
                    </Typography>
                  </label>
                ))}
              </div>
            )}
          />
        )

      case 'text_input':
        return (
          <Controller
            control={control}
            name={questionName}
            defaultValue=""
            render={({ field }) => (
              <Input
                placeholder="Введите ваш ответ"
                className="bg-transparent"
                {...field}
                value={typeof field.value === 'string' ? field.value : ''}
              />
            )}
          />
        )

      case 'matching':
        return (
          <Controller
            control={control}
            name={questionName}
            defaultValue={{}}
            render={({ field }) => {
              const handleChange = (rightId: string, value: string) => {
                field.onChange({
                  ...field.value,
                  [rightId]: value.trim().toUpperCase(),
                })
              }

              return (
                <div className="bg-light-grey grid grid-cols-2 gap-4 rounded-md p-4">
                  <div className="flex flex-col gap-2">
                    <Typography variant="poppins-md-16">Левая часть</Typography>
                    {question.matchingPairs.map((pair, idx) => (
                      <Typography key={pair.id} variant="poppins-md-16">
                        {String.fromCharCode(65 + idx)}) {pair.left}
                      </Typography>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography variant="poppins-md-16">Правая часть</Typography>
                    {shuffledRight.map((pair, idx) => (
                      <div key={pair.id} className="flex items-center gap-2">
                        <Typography variant="poppins-md-16">
                          {idx + 1}) {pair.right}
                        </Typography>
                        <Input
                          className="w-16"
                          placeholder="A"
                          maxLength={1}
                          value={field.value?.[pair.id] || ''}
                          onChange={(e) => handleChange(pair.id, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )
            }}
          />
        )

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Progress value={((step + 1) / total) * 100} />

      <Typography
        className="bg-green w-fit rounded-[12px] px-4 py-3 uppercase"
        tag="p"
        variant="poppins-md-16"
      >
        Вопрос {index + 1}
      </Typography>

      <Typography tag="p" variant="poppins-md-16">
        {question.questionText}
      </Typography>

      {renderContent()}
    </div>
  )
})

export { TestCard }
