// import { Footer } from "@/widgets/app-footer"
import { AppHeader } from "@/widgets/app-header";
import { Suspense } from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            " ... add Spinner"
          </div>
        }
      >
        <main className="w-full">{children}</main>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
}
