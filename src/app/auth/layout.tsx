import { Suspense } from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mobile:pt-0 pt-[var(--header-height)]">
        <Suspense>{children}</Suspense>
      </div>
    </>
  );
}
