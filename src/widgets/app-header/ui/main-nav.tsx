import Link from "next/link";
import { IHeaderItems } from "..";
import { usePathname } from "next/navigation";
import { Logo } from "@/shared/ui/logo";
import { UserProfile } from "./user-profile";
import { Typography } from "@/shared/ui/typography";
import { Container } from "@/shared/ui/container";
import { cn } from "@/shared/lib/utils";

interface MainNavProps {
  headerItems: IHeaderItems[];
  className: string;
}

function MainNav({ headerItems, className }: MainNavProps) {
  const pathname = usePathname();
  return (
    <header
      className={cn(
        "bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex h-[65px] w-full items-center border-b backdrop-blur",
        className,
      )}
    >
      <Container>
        <div className="mx-auto flex h-14 items-center gap-12">
          <div className="mr-4 hidden md:flex">
            <Logo />
          </div>
          <div className="flex flex-1 items-center gap-7">
            {headerItems.map((item, idx) => (
              <Link
                key={idx}
                className={` ${pathname === item.url ? "text-blue" : "text-dark-grey"} hover:text-blue-hover font-medium transition-colors`}
                href={item.url}
              >
                <Typography variant="poppins-md-16" tag="p">
                  {item.title}
                </Typography>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-end space-x-3">
            <UserProfile />
          </div>
        </div>
      </Container>
    </header>
  );
}

export { MainNav };
