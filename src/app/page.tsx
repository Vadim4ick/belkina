import { Button } from "@/shared/ui/button";

export default function Home() {
  return (
    <div className="max-mobile:hidden max-mobi grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Button>Click</Button>
    </div>
  );
}
