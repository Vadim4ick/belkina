import { Typography } from "@/shared/ui/typography";
import { Progress } from "@/shared/ui/progress";

const TestCard = () => {
  return (
    <div className="flex flex-col gap-6">
      <Progress value={33} />

      <Typography
        className="bg-green w-fit rounded-[12px] px-4 py-3 uppercase"
        tag="p"
        variant="poppins-md-16"
      >
        Вопрос 1
      </Typography>

      <div className="flex flex-col gap-3">
        <Typography tag="p" variant="poppins-md-16">
          Установите соответствие между грамматическими ошибками и
          предложениями, в которых они допущены: к каждой позиции первого
          столбца подберите соответствующую позицию из второго столбца.
        </Typography>

        <div className="bg-light-grey max-mobile:gap-4 max-mobile:grid-cols-1 mobile:min-h-[580px] grid grid-cols-2 gap-[10px] rounded-[8px] p-[10px]">
          <div className="flex flex-col gap-1">
            <Typography
              className="text-dark-grey"
              tag="p"
              variant="poppins-md-16"
            >
              Грамматические ошибки
            </Typography>

            <Typography
              className="text-dark-grey"
              tag="p"
              variant="poppins-md-16"
            >
              А) каждый позиции первого столбца подберите соответствующую
              позицию из второго столбца.
            </Typography>
            <Typography
              className="text-dark-grey"
              tag="p"
              variant="poppins-md-16"
            >
              Б) каждый позиции первого столбца подберите соответствующую
            </Typography>
          </div>

          <div className="flex flex-col gap-1">
            <Typography
              className="text-dark-grey"
              tag="p"
              variant="poppins-md-16"
            >
              Предложения
            </Typography>

            <Typography
              className="text-dark-grey"
              tag="p"
              variant="poppins-md-16"
            >
              1) каждый позиции первого столбца подберите соответствующую
              позицию из второго столбца.
            </Typography>
            <Typography
              className="text-dark-grey"
              tag="p"
              variant="poppins-md-16"
            >
              2) каждый позиции первого столбца подберите соответствующую
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TestCard };
