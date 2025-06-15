import { FeedbackForm } from "@/features/feedback-form";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";

const MainBanner = () => {
  return (
    <section className="bg-light-grey max-tablet:h-full max-mobile:pt-[calc(var(--header-height)_+_20px)] h-[calc(100vh_-_var(--header-height))]">
      <Container className="flex items-center justify-center">
        <div className="bg-blue max-tablet:flex-col max-mobile:py-[24px] max-mobile:px-4 flex h-fit w-full items-center justify-between gap-6 rounded-[16px] px-[40px] py-[48px]">
          <div className="max-tablet:max-w-full flex w-full max-w-[485px] flex-col gap-[24px]">
            <div className="bg-green flex w-fit items-center gap-[10px] rounded-[12px] px-4 py-3">
              <Typography className="uppercase" tag="p" variant="poppins-md-16">
                бесплатный первый видеоурок
              </Typography>
              👀
            </div>

            <Typography
              className="max-mobile:text-[32px] text-white"
              tag="h1"
              variant="visuelt-bold-48"
            >
              Подготовка к ЕГЭ по русскому языку
            </Typography>

            <Typography className="text-white" tag="p" variant="poppins-md-16">
              Платите только за нужные темы и эффективно готовьтесь к ЕГЭ по
              русскому с персональной программой
            </Typography>

            <div className="max-mobile:p-4 flex flex-col gap-4 rounded-[12px] bg-[#0033B9] px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex h-[36px] w-full max-w-[50px] items-center justify-center rounded-[120px] bg-black">
                  🔥
                </div>
                <Typography
                  className="text-white"
                  tag="p"
                  variant="poppins-reg-14"
                >
                  Пройдите тесты по ОГЭ/ЕГЭ и получите рекомендации по вашим
                  слабым темам для эффективного обучения
                </Typography>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-[36px] w-full max-w-[50px] items-center justify-center rounded-[120px] bg-black">
                  🔥
                </div>
                <Typography
                  className="text-white"
                  tag="p"
                  variant="poppins-reg-14"
                >
                  Начните с бесплатного видеоурока, чтобы оценить качество
                  обучения перед покупкой курса
                </Typography>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-[36px] w-full max-w-[50px] items-center justify-center rounded-[120px] bg-black">
                  🔥
                </div>
                <Typography
                  className="text-white"
                  tag="p"
                  variant="poppins-reg-14"
                >
                  Выбирайте расширенный курс с дополнительными тестами и
                  общением
                </Typography>
              </div>
            </div>
          </div>

          <FeedbackForm />
        </div>
      </Container>
    </section>
  );
};

export { MainBanner };
