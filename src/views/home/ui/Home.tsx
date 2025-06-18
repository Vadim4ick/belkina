import { TariffList } from "@/features/tariff-list";
import { MainBanner } from "./home-banners/main-banner";
import { TestsBanner } from "./home-banners/tests-banner";

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
