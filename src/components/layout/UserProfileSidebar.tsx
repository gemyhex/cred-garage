'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { UserProfileInfo } from '../profile/UserProfileInfo'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function UserProfileSidebar({ user }: { user: any }) {
    const [collapsed, setCollapsed] = useState(false)

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
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-800 object-cover"
                        />
                    </div>
                )}
            </div>
        </motion.aside>
    )
}
