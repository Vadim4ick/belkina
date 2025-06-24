/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { memo, useEffect, useMemo, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { TestFragmentFragment } from '@/shared/graphql/__generated__'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { createStepSchema } from '@/entities/test/model/schema'
import { Input } from '@/shared/ui/input'
import { TestCard } from '@/entities/test'
import { checkMatchingCorrectness } from '../model/const'

const TestForm = memo(({ test }: { test?: TestFragmentFragment }) => {
  const questions = test?.questions || []

  const [step, setStep] = useState(0)
  const [completed, setCompleted] = useState(false)

  const currentQuestion = questions[step]
  const schema = useMemo(() => createStepSchema(currentQuestion), [currentQuestion])

  const resolver = zodResolver(schema)

  const form = useForm({
    defaultValues: {},
    mode: 'onChange',
    resolver,
  })
  const { handleSubmit, getValues, formState } = form

  useEffect(() => {
    form.reset(form.getValues())
    form.trigger()
  }, [step])

  const onNext = () => {
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1)
    } else {
      setCompleted(true)

      const allAnswers: Record<string, any> = getValues()

      console.log('Ответы:', allAnswers)

      const results: Record<string, boolean> = {}

      questions.forEach((question) => {
        switch (question.questionType) {
          case 'matching': {
            const userAnswer = allAnswers[`q_${question.id}`] as Record<string, string>

            if (!userAnswer) {
              results[question.id] = false
              break
            }

            const matchResults = checkMatchingCorrectness(
              question.matchingPairs.map((el) => el),
              userAnswer,
            )

            // вопрос считается верным, если все пары правильные
            const isAllCorrect = Object.values(matchResults).every(Boolean)

            results[question.id] = isAllCorrect
            break
          }

          default:
            results[question.id] = false
        }
      })

      console.log('Результаты:', results)
      // Можно добавить: подсчёт правильных
      const correctCount = Object.values(results).filter(Boolean).length
      console.log(`Правильных ответов: ${correctCount} из ${questions.length}`)
    }
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0))
  }

  if (completed) {
    return (
      <div className="border-blue mx-auto flex max-w-md flex-col items-center justify-center gap-8 rounded-2xl border bg-white p-10 text-center shadow-lg">
        <div className="text-4xl">🎉</div>

        <Typography tag="h2" variant="poppins-md-16" className="font-semibold text-green-400">
          Вы успешно прошли тест!
        </Typography>

        <Typography tag="p" variant="poppins-md-16" className="text-dark-grey">
          Для получения бесплатного видеоурока укажите свой e-mail
        </Typography>

        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="flex w-full flex-col gap-4"
        >
          <Input type="email" name="email" placeholder="Ваш e-mail" />

          <Button>Отправить</Button>
        </form>
      </div>
    )
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onNext)}>
        <div className="relative w-full">
          <div className="max-mobile:hidden absolute top-0 right-0 bottom-0 left-0 z-0 h-full rotate-[3deg] rounded-[20px] bg-[#CDCDCD]" />
          <div className="max-tablet:px-3 max-tablet:py-4 relative z-10 rounded-[20px] bg-white px-9 py-6 shadow-lg">
            <TestCard
              question={currentQuestion}
              index={step}
              total={questions.length}
              step={step}
            />

            <div className="mt-6 flex justify-between">
              {step !== 0 && (
                <Button type="button" variant="ghost" onClick={handleBack}>
                  Назад
                </Button>
              )}

              <Button className="ml-auto" type="submit" size="xl" disabled={!formState.isValid}>
                {step === questions.length - 1 ? 'Завершить' : 'Далее'}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
})

export { TestForm }
