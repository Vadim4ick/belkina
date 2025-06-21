import { cn } from '@/shared/lib/utils'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion'
import { GetFaGsQuery } from '@/shared/graphql/__generated__'

const AskedQuestions = ({
  className,
  faqs,
}: {
  className?: string
  faqs?: GetFaGsQuery['Faqs']['docs']
}) => {
  if (!faqs) return null

  return (
    <section className={cn('max-mobile:py-6 py-12', className)}>
      <Container>
        <div className="flex flex-col gap-12">
          <Typography className="text-center" tag="h2" variant="visuelt-bold-48">
            Часто задаваемые вопросы
          </Typography>

          <Accordion className="flex flex-col gap-[14px]" type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}

export { AskedQuestions }
