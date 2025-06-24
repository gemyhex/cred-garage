"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserProfileInfo } from "../profile/UserProfileInfo";

export function UserAvatarMenu({ user }: { user: any }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <img
          src={user.avatar}
          alt={user.name}
          className="w-8 h-8 rounded-full object-cover z-10 transition duration-300 dark:brightness-0 dark:invert"
        />
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <UserProfileInfo user={user} />
      </PopoverContent>
    </Popover>
  );
}
