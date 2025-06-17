"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { UserIcon } from "@/shared/icons/user-icon";
import { LogOutIcon } from "@/shared/icons/log-out-icon";
import { ProfileAvatar } from "@/shared/ui/profile-avatar";
import { Typography } from "@/shared/ui/typography";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function UserProfile() {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status !== "authenticated") {
    return (
      <Button onClick={() => router.push("/auth/sign-in")} variant="ghost">
        Войти
      </Button>
    );
  }

  return (
    <>
      <Typography variant="poppins-md-16">
        {session.user && session.user?.name}
      </Typography>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-12 w-12 self-center rounded-full p-px"
          >
            <ProfileAvatar
              path={session.user?.image || ""}
              className="h-12 w-12"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 w-56">
          <DropdownMenuLabel>
            <p>Мой аккаунт</p>
            <p className="text-muted-foreground overflow-hidden text-xs text-ellipsis">
              {session.user && session.user?.email}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuGroup></DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link className="cursor-pointer" href={`/profile`}>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Личный кабинет</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button
                className="h-[32px] w-full cursor-pointer justify-start"
                variant="ghostWhite"
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
              >
                <LogOutIcon className="mr-2 h-4 w-4" />
                Выйти
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
