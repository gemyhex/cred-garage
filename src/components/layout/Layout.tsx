'use client'

import { ReactNode, useState } from 'react'
import clsx from 'clsx'

import Navbar from './Navbar'
import UserProfileSidebar from './UserProfileSidebar'
import { User } from '@/types/users'

type DashboardLayoutProps = {
  children: ReactNode
  layoutType?: 'container' | 'full'
  withSidebar?: boolean
  user?: User
}

export default function DashboardLayout({
  children,
  layoutType = 'container',
  withSidebar = true,
  user,
}: DashboardLayoutProps) {
  const [sidebarWidth, setSidebarWidth] = useState(250)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar user={user} />

      {/* Fixed Sidebar */}
      {withSidebar && (
        <UserProfileSidebar user={user} onWidthChange={setSidebarWidth} />
      )}

      <main
        className={clsx(
          'pt-24 transition-all overflow-x-hidden',
          layoutType === 'container' && 'container px-8 py-6 mx-auto',
          layoutType === 'full' && 'w-full px-6 py-6'
        )}
        style={{
          marginLeft: withSidebar ? `${sidebarWidth}px` : undefined,
          width: withSidebar ? `calc(100vw - ${sidebarWidth}px)` : '100vw',
        }}
      >
        {children}
      </main>
    </div>
  )
}
