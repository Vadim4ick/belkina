"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { UserIcon } from "@/shared/icons/user-icon";
import { cn } from "@/shared/lib/utils";

export const ProfileAvatar = ({
  path,
  className,
}: {
  path: string;
  className?: string;
}) => {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={path} className="object-cover" />
      <AvatarFallback>
        <UserIcon />
      </AvatarFallback>
    </Avatar>
  );
};
