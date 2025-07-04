"use client";
import { User } from "@/types/users";
import Image from "next/image";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserProfileInfo } from "../profile/UserProfileInfo";

export function UserAvatarMenu({ user }: { user: User }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Image
          src={user.avatar}
          alt={user.name}
          width={32}
          height={32}
          className="rounded-full object-cover z-10 transition duration-300 dark:brightness-0 dark:invert"
        />
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <UserProfileInfo user={user} />
      </PopoverContent>
    </Popover>
  );
}
