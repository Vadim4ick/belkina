import { auth } from "@/entities/user/auth";
import { AppHeader } from "@/widgets/app-header";
import { AppSidebar } from "@/widgets/app-sidebar.tsx";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  console.log("session ==> ", session);

  const role = session ? (session?.user.role as "USER" | "ADMIN") : "USER";
  return (
    <>
      <AppHeader route="PRIVATE" />
      <div className="flex h-full">
        <AppSidebar />
        <main className="h-full w-full flex-1 pt-16">{children}</main>
      </div>
    </>
  );
}
