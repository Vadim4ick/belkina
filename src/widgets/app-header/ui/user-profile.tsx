"use client";
import { useState } from "react";
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
import { LoginButton } from "@/features/login-user/login-button";
import { UserIcon } from "@/shared/icons/user-icon";
import { LogOutIcon } from "@/shared/icons/log-out-icon";
import { getProfileDisplayName, ProfileAvatar, User } from "@/entities/user";
import { userSessionMoc } from "@/entities/user/model/moc-session";

// !!!! Временно реализована имитация входа. В состояние user сохраняется мок - сессия.

export function UserProfile() {
  const [user, setUserLogedIn] = useState<User>();
  console.log("userLogedIn ==> ", user);

  const session = userSessionMoc;

  if (!user) {
    return (
      <LoginButton>
        <Button variant="ghost" onClick={() => setUserLogedIn(session?.user)}>
          {" "}
          Войти
        </Button>
      </LoginButton>
    );
  }

  return (
    <>
      <p className="text-muted-foreground overflow-hidden text-xs text-ellipsis">
        {user ? getProfileDisplayName(user) : undefined}
      </p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 self-center rounded-full p-px"
          >
            <ProfileAvatar profile={user} className="h-8 w-8" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 w-56">
          <DropdownMenuLabel>
            <p>Мой аккаунт</p>
            <p className="text-muted-foreground overflow-hidden text-xs text-ellipsis">
              {user ? getProfileDisplayName(user) : undefined}
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
            <DropdownMenuItem
              // disabled={isLoadingSignOut}
              onClick={() => setUserLogedIn(undefined)}
            >
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>Выход</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
