'use client'

import { memo } from 'react'
import { FormProvider } from 'react-hook-form'

import { TestFragmentFragment } from '@/shared/graphql/__generated__'
import { Button } from '@/shared/ui/button'
import { TestCard } from '@/entities/test'
import { totalCorrectAnswersFn } from '../model/lib'
import { SkeletonTestCard } from './skeleton-test-card'
import { CompletedInfo } from './completed-info'
import { useTestLogic } from '../model/hooks/useTestLogic'

const TestForm = memo(
  ({ test, publicFlag = false }: { test?: TestFragmentFragment; publicFlag?: boolean }) => {
    const {
      questions,
      step,
      setStep,
      start,
      startFn,
      currentQuestion,
      testRes,
      isLoading,
      isFetching,
      isPendingUpdate,
      isPendingStart,
      form,
      onNext,

      publicCorrectAnswers,
      publicCompleted,
    } = useTestLogic({ test, publicFlag })

    const totalCorrectAnswers = totalCorrectAnswersFn(currentQuestion.answers)

    const { formState, handleSubmit } = form

    if (isLoading || isFetching || isPendingUpdate) {
      return <SkeletonTestCard />
    }

    return (
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onNext)}>
          <div className="relative w-full">
            <div className="max-mobile:hidden absolute top-0 right-0 bottom-0 left-0 z-0 h-full rotate-[3deg] rounded-[20px] bg-[#CDCDCD]" />

            <div className="max-tablet:px-3 max-tablet:py-4 relative z-10 rounded-[20px] bg-white px-9 py-6 shadow-lg">
              {testRes?.status !== 'completed' && !publicCompleted && (
                <>
                  <TestCard
                    question={currentQuestion}
                    index={step}
                    total={questions.length}
                    step={step}
                    title={test?.title ?? ''}
                    startFn={startFn}
                    start={start}
                    isPendingStart={isPendingStart}
                  />

                  {start && (
                    <div className="mt-6 flex justify-between">
                      {step !== 0 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="xl"
                          onClick={() => setStep((prev) => prev - 1)}
                        >
                          Назад
                        </Button>
                      )}

                      <Button
                        className="ml-auto"
                        type="submit"
                        size="xl"
                        disabled={!formState.isValid}
                      >
                        {step === questions.length - 1 ? 'Завершить' : 'Далее'}
                      </Button>
                    </div>
                  )}
                </>
              )}

              {(testRes?.status === 'completed' || publicCompleted) && (
                <CompletedInfo
                  totalCorrectAnswers={totalCorrectAnswers}
                  countQuestions={questions.length}
                  publicFlag={publicFlag}
                  publicCorrectAnswers={publicCorrectAnswers}
                />
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    )
  },
)

export { TestForm }
