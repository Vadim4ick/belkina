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
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { ProfileAvatar } from "@/shared/ui/profile-avatar";
import { Typography } from "@/shared/ui/typography";

export function UserProfile() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn || !user) {
    return (
      <SignInButton>
        <Button variant="ghost">Войти</Button>
      </SignInButton>
    );
  }

  return (
    <>
      <Typography variant="poppins-md-16">{user && user.fullName}</Typography>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-12 w-12 self-center rounded-full p-px"
          >
            <ProfileAvatar path={user.imageUrl || ""} className="h-12 w-12" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 w-56">
          <DropdownMenuLabel>
            <p>Мой аккаунт</p>
            <p className="text-muted-foreground overflow-hidden text-xs text-ellipsis">
              {user && user.fullName}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuGroup></DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href={`/profile`}>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Личный кабинет</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOutIcon className="mr-2 h-4 w-4" />
              <SignOutButton>
                <button>Выйти</button>
              </SignOutButton>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
