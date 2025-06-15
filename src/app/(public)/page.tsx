"use client";

import { Container } from "@/shared/ui/container";
import { MainBanner, TestsBanner } from "@/widgets/home-banners";

export default function Home() {
  return (
    <>
      <MainBanner />
      <section className="max-mobile:py-6 py-12">
        <Container>Промежуточная страница</Container>
      </section>
      <TestsBanner />
    </>
  );
}
