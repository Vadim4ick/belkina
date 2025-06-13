import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Button>Click</Button>
      <Button variant={"ghost"}>Click</Button>
      <Button variant={"ghostWhite"}>Click</Button>
      <Button variant={"secondary"} disabled>
        Click
      </Button>
      <Button variant={"primary-inverted"} disabled>
        Click
      </Button>

      <Input />
    </div>
  );
}
