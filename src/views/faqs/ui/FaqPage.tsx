import { AskedQuestions } from '@/features/asked-questions'
import { getFAQ } from '@/shared/actions/faq.action'
import { Typography } from '@/shared/ui/typography'
import { EmptyDataMessage } from '@/widgets/empty-data-message'

const FaqPage = async () => {
  const res = await getFAQ()

  if (!res || !res.Faqs || res.Faqs.docs.length === 0) {
    return (
      <section className="max-mobile:py-6 py-12">
        <EmptyDataMessage
          title="Результаты не найдены"
          message="Измените параметры поиска или попробуйте снова."
        />
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-6 py-12">
      <div className="flex flex-col gap-6">
        <Typography tag="h2" variant="visuelt-bold-48">
          Часто задаваемые вопросы
        </Typography>
      </div>

      <AskedQuestions faqs={res?.Faqs.docs} />
    </section>
  )
}

export { FaqPage }
