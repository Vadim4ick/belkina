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
  faqs: GetFaGsQuery['Faqs']['docs']
}) => {
  return (
    <section className={cn('max-mobile:py-6 py-12', className)}>
      <Container>
        <Accordion className="flex flex-col gap-[14px]" type="single" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

export { AskedQuestions }
