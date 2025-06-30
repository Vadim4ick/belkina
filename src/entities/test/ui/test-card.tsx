'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { Input } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'
import { Progress } from '@/shared/ui/progress'
import { QuestionFragmentFragment } from '@/shared/graphql/__generated__'
import { memo, useMemo } from 'react'
import { useShuffledOnClient } from '@/shared/hooks/useShuffledOnClient'
import { Checkbox } from '@/shared/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group'
import { getSymbolLabel, RUS_LETTERS } from '@/shared/const'
import { Button } from '@/shared/ui/button'
import { questionNameFn } from '../model/const'

type Props = {
  question: QuestionFragmentFragment
  index: number
  total: number
  step: number
  title: string
  startFn: VoidFunction
  start: boolean
  isPendingStart?: boolean
}

const TestCard = memo(
  ({ question, index, total, step, title, startFn, start, isPendingStart }: Props) => {
    const { control } = useFormContext()

    const questionName = questionNameFn(question.id)

    const shuffledRight = useShuffledOnClient(question.matchingPairs?.map((p) => p))

    const renderContent = useMemo(() => {
      switch (question.questionType) {
        case 'single_choice':
          return (
            <Controller
              key={question.id}
              control={control}
              name={questionName}
              defaultValue=""
              render={({ field }) => (
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col gap-4"
                >
                  {question.answers.map((answer) => (
                    <label
                      key={answer.id}
                      className="flex cursor-pointer items-center gap-2"
                      htmlFor={`${questionName}_${answer.value}`}
                    >
                      <RadioGroupItem value={answer.value} id={`${questionName}_${answer.value}`} />
                      <Typography tag="span" variant="poppins-md-16">
                        {answer.label}
                      </Typography>
                    </label>
                  ))}
                </RadioGroup>
              )}
            />
          )

        case 'multiple_choice':
          return (
            <Controller
              key={question.id}
              control={control}
              name={questionName}
              defaultValue={[]}
              render={({ field }) => (
                <div className="flex flex-col gap-4">
                  {question.answers.map((answer) => {
                    const isChecked = field.value?.includes?.(answer.value)

                    const handleChange = (checked: boolean) => {
                      const value = String(answer.value)
                      const current = field.value || []

                      field.onChange(
                        checked ? [...current, value] : current.filter((v: string) => v !== value),
                      )
                    }

                    return (
                      <label key={answer.id} className="flex cursor-pointer items-center gap-2">
                        <Checkbox checked={isChecked} onCheckedChange={handleChange} />

                        <Typography tag="span" variant="poppins-md-16">
                          {answer.label}
                        </Typography>
                      </label>
                    )
                  })}
                </div>
              )}
            />
          )

        case 'text_input':
          return (
            <Controller
              key={question.id}
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
              key={question.id}
              control={control}
              name={questionName}
              defaultValue={{ answer: '', shuffled: shuffledRight }}
              render={({ field }) => (
                <div className="flex flex-col gap-4">
                  <div className="bg-light-grey max-mobile:grid-cols-1 grid grid-cols-2 justify-center gap-4 rounded-md p-4">
                    <div className="flex flex-col gap-2">
                      <Typography variant="poppins-md-16">Левая часть</Typography>
                      {question.matchingPairs.map((pair, idx) => (
                        <Typography key={pair.id} variant="poppins-md-16">
                          {RUS_LETTERS[idx]}) {pair.left}
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
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Typography tag="p" variant="poppins-md-16">
                      Ответ:
                    </Typography>
                    <Input
                      className="h-[35px] w-full bg-transparent"
                      placeholder="Например: 123"
                      maxLength={question.matchingPairs.length}
                      value={field.value.answer || ''}
                      onChange={(e) =>
                        field.onChange({
                          answer: e.target.value.toUpperCase(),
                          shuffled: shuffledRight,
                        })
                      }
                    />
                  </div>
                </div>
              )}
            />
          )

        default:
          return null
      }
    }, [question, control, shuffledRight, questionName])

    if (!start) {
      return (
        <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-6 rounded-2xl px-10 py-12 text-center">
          <div className="text-5xl">🧠</div>

          <Typography tag="h1" variant="poppins-md-16" className="font-bold text-blue-600">
            Готовы пройти тест?
          </Typography>

          <Button
            disabled={isPendingStart}
            size="xl"
            onClick={startFn}
            className="mt-4 w-full max-w-xs"
          >
            Начать тест
          </Button>
        </div>
      )
    }

    return (
      <div>
        <Typography tag="p" variant="visuelt-bold-32" className="max-tablet:text-[26px]">
          {title}
        </Typography>
        <div className="flex flex-col gap-6">
          <Progress value={((step + 1) / total) * 100} />

          <div className="max-tablet:flex-col max-tablet:items-start flex items-center gap-4">
            <Typography
              className="bg-green w-fit rounded-[12px] px-4 py-3 uppercase"
              tag="p"
              variant="poppins-md-16"
            >
              Вопрос {index + 1}
            </Typography>

            {question.questionType === 'matching' && (
              <Typography className="" tag="p" variant="poppins-md-16">
                Введите номера соответствий (<b>{getSymbolLabel(question.matchingPairs.length)}</b>)
                без пробелов, например 132 — означает: {RUS_LETTERS[0]} → 1,
                {RUS_LETTERS[1]} → 3, {RUS_LETTERS[2]} → 2
              </Typography>
            )}
          </div>

          <Typography tag="p" variant="poppins-md-16">
            {question.questionText}
          </Typography>

          {renderContent}
        </div>
      </div>
    )
  },
)

export { TestCard }
