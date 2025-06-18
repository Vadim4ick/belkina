import { Suspense } from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pt-20 md:pt-0">
        <Suspense>{children}</Suspense>
      </div>
    </>
  );
}
