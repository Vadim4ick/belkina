import { TariffList } from "@/features/tariff-list";
import { MainBanner } from "./home-banners/main-banner";
import { TestsBanner } from "./home-banners/tests-banner";
import { AboutBanner } from "./home-banners/about-banner";

const Home = () => {
  return (
    <>
      <MainBanner />
      <TariffList />
      <AboutBanner />
      <TestsBanner />
    </>
  );
};

export { Home };
