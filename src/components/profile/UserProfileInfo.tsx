"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { User } from "@/types/users";
import Image from "next/image";

export function UserProfileInfo({ user }: { user: User }) {
  const [displayXP, setDisplayXP] = useState(0);
  const [displayLevel, setDisplayLevel] = useState(0);
  const controls = useAnimation();

 useEffect(() => {
  let mounted = true;
  let step = 0;
  const duration = 2000;
  const totalSteps = duration / 16;

  const xpTarget = user?.xp ?? 0;
  const levelTarget = user?.level ?? 0;
  const progress = Math.min((user?.xp ?? 0) / (user?.nextLevelXP ?? 1) * 100, 100);

  function animate() {
    step++;
    const percent = Math.min(step / totalSteps, 1);

    if (mounted) {
      setDisplayXP(Math.floor(percent * xpTarget));
      setDisplayLevel(Math.floor(percent * levelTarget));
      controls.start({
        strokeDashoffset: 282.74 * (1 - (percent * progress) / 100),
        transition: { duration: 0.1 },
      });
    }

    if (percent < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  return () => {
    mounted = false;
  };
}, [user, controls]);


  return (
    <div className="text-center space-y-3">
      {/* Avatar with Progress Ring */}
      <div className="relative w-28 h-28 mx-auto mb-4 flex items-center justify-center">
        {/* SVG Progress Ring */}
        <svg
          viewBox="0 0 100 100"
          className="absolute w-full h-full rotate-[-90deg] z-0"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#28CC95"
            strokeWidth="4"
            fill="none"
            strokeDasharray="282.74"
            strokeDashoffset="282.74"
            strokeLinecap="round"
            animate={controls}
          />
        </svg>

        {/* Avatar */}
        <Image
          src={user.avatar}
          alt={user.name}
          width={32}
          height={32}
          className="rounded-full object-cover z-10 transition duration-300 dark:brightness-0 dark:invert"
        />
      </div>

      {/* Basic Info */}
      <h2 className="text-xl font-semibold">{user?.name}</h2>
      <p className="text-sm text-muted-foreground">{user?.email}</p>

      {/* Level & XP */}
      <div className="text-sm space-y-1">
        <p>
          Level:{" "}
          <span className="font-medium text-primary">{displayLevel}</span>
        </p>
        <p>
          XP: <span className="font-medium text-primary">{displayXP}</span> /{" "}
          <span className="text-muted-foreground">{user?.nextLevelXP}</span>
        </p>
        <p className="text-xs text-muted-foreground italic">
          Progress to next level:{" "}
          {Math.round((user?.xp / user?.nextLevelXP) * 100)}%
        </p>
      </div>

      {/* Membership & Join Date */}
      <div className="text-sm pt-3 space-y-1">
        <p>
          Membership:{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            {user?.membership}
          </span>
        </p>
        <p className="text-muted-foreground">Joined: {user?.joinedAt}</p>
      </div>
    </div>
  );
}
