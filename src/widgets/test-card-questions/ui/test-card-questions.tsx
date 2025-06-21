import { TestForm } from "@/features/test-form";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";

const TestCardQuestions = () => {
  return (
    <section className="max-mobile:py-6 bg-[#F6F6F6] py-12">
      <Container className="max-mobile:gap-6 flex flex-col gap-11">
        <Typography
          tag="h2"
          variant="visuelt-bold-48"
          className="max-mobile:text-[32px] max-w-[600px]"
        >
          Пройди тест и получи бесплатный видеоурок
        </Typography>

        <TestForm />
      </Container>
    </section>
  );
};

export { TestCardQuestions };
