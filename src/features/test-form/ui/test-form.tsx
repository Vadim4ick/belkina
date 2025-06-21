import { TestCard } from "@/entities/test";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";

const TestForm = () => {
  return (
    <div className="max-mobile:gap-6 flex flex-col gap-18">
      <div className="relative w-fit">
        <div className="max-mobile:hidden absolute top-0 right-0 bottom-0 left-0 z-0 h-full rotate-[3deg] rounded-[20px] bg-[#CDCDCD]" />

        <div className="max-tablet:px-3 max-tablet:py-4 relative z-10 rounded-[20px] bg-white px-9 py-6 shadow-lg">
          <TestCard />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <Typography
              className="text-dark-grey"
              tag="p"
              variant="poppins-md-16"
            >
              А
            </Typography>

            <Input className="bg-transparent" placeholder="Написать" />
          </div>

          <div className="flex items-center gap-6">
            <Typography
              className="text-dark-grey"
              tag="p"
              variant="poppins-md-16"
            >
              Б
            </Typography>

            <Input className="bg-transparent" placeholder="Написать" />
          </div>
        </div>

        <Button size={"xl"}>Далее</Button>
      </div>
    </div>
  );
};

export { TestForm };
