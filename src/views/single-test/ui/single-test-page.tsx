import { Typography } from '@/shared/ui/typography'
import { TestsList } from '@/widgets/tests-list'

const SingleTestPage = ({ title }: { title?: string }) => {
  return (
    <section className="max-mobile:py-6 py-12">
      <Typography tag="h1" variant="visuelt-bold-48" className="mb-6">
        {title}
      </Typography>
      {/* <TestForm test={test} /> */}
      <p>!!!!!!!! Вставить тест !!!!!</p>
      <TestsList title="Так же рекомендуем" />
    </section>
  )
}

export { SingleTestPage }
