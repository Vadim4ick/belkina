import { TariffCard, TARIFFS_LIST } from "@/entities/tariff";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";

const TariffList = ({ title = "Тарифы" }: { title?: string }) => {
  return (
    <section className="max-mobile:py-6 py-12">
      <Container>
        <div className="flex flex-col gap-12">
          <Typography tag="h2" variant="visuelt-bold-48">
            {title}
          </Typography>

          <div className="max-tablet:grid-cols-1 grid grid-cols-3 gap-6">
            {TARIFFS_LIST.map((item, idx) => (
              <TariffCard
                key={idx}
                item={item}
                className={cn(idx === 1 && "border-blue border")}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { TariffList };
