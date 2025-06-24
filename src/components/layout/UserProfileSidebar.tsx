'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '../ui/button'
import { UserProfileInfo } from '../profile/UserProfileInfo'
import { User } from '@/types/users'
import { Skeleton } from '../ui/skeleton' 

type UserProfileSidebarProps = {
  user?: User
  onWidthChange?: (width: number) => void
}

export default function UserProfileSidebar({ user, onWidthChange }: UserProfileSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const width = collapsed ? 80 : 250

  useEffect(() => {
    onWidthChange?.(width)
  }, [width, onWidthChange])

  const isLoading = !user

  return (
    <motion.aside
      animate={{ width }}
      transition={{ duration: 0.3 }}
      className="fixed top-16 left-0 bottom-0 z-40 flex flex-col bg-white/80 dark:bg-zinc-900/70 backdrop-blur-lg border-r border-border shadow-lg"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      {/* Collapse Button */}
      <div className="flex justify-end p-2">
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-muted"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      {/* Sidebar Content */}
      <div className="p-4 flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="w-20 h-20 rounded-full mx-auto" />
            {!collapsed && (
              <>
                <Skeleton className="h-4 w-3/4 mx-auto" />
                <Skeleton className="h-3 w-1/2 mx-auto" />
                <Skeleton className="h-3 w-5/6 mx-auto" />
              </>
            )}
          </div>
        ) : !collapsed ? (
          <UserProfileInfo user={user} />
        ) : (
          <div className="flex justify-center mt-6">
            <Image
              src={user.avatar}
              alt={user.name}
              width={32}
              height={32}
              className="rounded-full object-cover transition duration-300 dark:brightness-0 dark:invert"
            />
          </div>
        )}
      </div>
    </motion.aside>
  )
}
