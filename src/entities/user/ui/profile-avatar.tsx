"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { UserIcon } from "@/shared/icons/user-icon";
import { Profile } from "../model/profile";
import { cn } from "@/shared/lib/utils";

export const ProfileAvatar = ({
  profile,
  className,
}: {
  profile?: Profile;
  className?: string;
}) => {
  if (!profile) {
    return null;
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={profile.image ?? ""} className="object-cover" />
      <AvatarFallback>
        <UserIcon />
      </AvatarFallback>
    </Avatar>
  );
};
