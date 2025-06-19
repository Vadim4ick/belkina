import { AppHeader } from "@/widgets/app-header";
import { Suspense } from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader route="PUBLIC" />
      <div className="max-mobile:pt-0 pt-[var(--header-height)]">
        <Suspense>{children}</Suspense>
      </div>
    </>
  );
}
