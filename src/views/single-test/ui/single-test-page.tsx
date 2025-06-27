import { TestForm } from '@/features/test-form'
import { SkeletonTestCard } from '@/features/test-form/ui/skeleton-test-card'
import { Typography } from '@/shared/ui/typography'
import { TestsList } from '@/widgets/tests-list'

const SingleTestPage = ({ title }: { title?: string }) => {
  const test = undefined
  return (
    <section className="max-mobile:py-6 mb-12 flex flex-col gap-y-10 py-12">
      <Typography tag="h1" variant="visuelt-bold-48">
        {title}
      </Typography>
      {test! ? <TestForm test={undefined} /> : <SkeletonTestCard />}
      <TestsList title="Так же рекомендуем" />
    </section>
  )
}

export { SingleTestPage }
