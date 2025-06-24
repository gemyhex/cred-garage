"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UserProfileInfo } from "../profile/UserProfileInfo";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { User } from "@/types/users";
import Image from "next/image";

export default function UserProfileSidebar({ user }: { user: User }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 250 }}
      transition={{ duration: 0.3 }}
      className="relative h-screen overflow-hidden flex flex-col bg-white/80 dark:bg-zinc-900/70 backdrop-blur-lg border-r border-border shadow-lg"
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-2">
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-muted"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      <div className="p-4 flex-1">
        {!collapsed ? (
          <UserProfileInfo user={user} />
        ) : (
          <div className="flex justify-center mt-6">
            <Image
              src={user.avatar}
              alt={user.name}
              width={32}
              height={32}
              className="rounded-full object-cover z-10 transition duration-300 dark:brightness-0 dark:invert"
            />
          </div>
        )}
      </div>
    </motion.aside>
  );
}
