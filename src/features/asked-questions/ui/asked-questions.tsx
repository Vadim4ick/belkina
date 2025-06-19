import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";

const AskedQuestions = ({ className }: { className?: string }) => {
  return (
    <section className={cn("max-mobile:py-6 py-12", className)}>
      <Container>
        <div className="flex flex-col gap-12">
          <Typography
            className="text-center"
            tag="h2"
            variant="visuelt-bold-48"
          >
            Часто задаваемые вопросы
          </Typography>

          <Accordion
            className="flex flex-col gap-[14px]"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Для кого подходят ваши курсы?</AccordionTrigger>
              <AccordionContent>
                Наши курсы разработаны для всех уровней: от начинающих до
                продвинутых. Мы предлагаем программы для детей, взрослых, а
                также для подготовки к экзаменам, например, ТРКИ
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Для кого подходят ваши курсы?</AccordionTrigger>
              <AccordionContent>
                Наши курсы разработаны для всех уровней: от начинающих до
                продвинутых. Мы предлагаем программы для детей, взрослых, а
                также для подготовки к экзаменам, например, ТРКИ
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Для кого подходят ваши курсы?</AccordionTrigger>
              <AccordionContent>
                Наши курсы разработаны для всех уровней: от начинающих до
                продвинутых. Мы предлагаем программы для детей, взрослых, а
                также для подготовки к экзаменам, например, ТРКИ
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Для кого подходят ваши курсы?</AccordionTrigger>
              <AccordionContent>
                Наши курсы разработаны для всех уровней: от начинающих до
                продвинутых. Мы предлагаем программы для детей, взрослых, а
                также для подготовки к экзаменам, например, ТРКИ
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export { AskedQuestions };
