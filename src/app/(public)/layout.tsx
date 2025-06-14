import { Suspense } from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <main className="w-full">{children}</main>
    </Suspense>
  );
}
