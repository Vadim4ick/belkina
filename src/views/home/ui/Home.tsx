import { TariffList } from "@/features/tariff-list";
import { MainBanner, TestsBanner } from "@/widgets/home-banners";

const Home = () => {
  return (
    <>
      <MainBanner />
      <TariffList />
      <TestsBanner />
    </>
  );
};

export { Home };
