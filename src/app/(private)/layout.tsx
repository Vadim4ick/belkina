import { AppHeader } from "@/widgets/app-header";
import { AppSidebar } from "@/widgets/app-sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader route="PUBLIC" />
      <div className="flex h-full pt-16">
        <AppSidebar />
        <main className="h-full w-full flex-1">{children}</main>
      </div>
    </>
  );
}
