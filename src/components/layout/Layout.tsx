'use client'

import { ReactNode, useState, useEffect } from 'react'
import Navbar from './Navbar'
import Preloader from '../ui/Preloader'
import clsx from 'clsx'
import UserProfileSidebar from './UserProfileSidebar'

type DashboardLayoutProps = {
    children: ReactNode
    layoutType?: 'container' | 'full'
    withSidebar?: boolean
    user?: any
}

export default function DashboardLayout({
                                            children,
                                            layoutType = 'container',
                                            withSidebar = true,
                                            user,
                                        }: DashboardLayoutProps) {
    const [loadingDone, setLoadingDone] = useState(false)
    const [hideSidebar, setHideSidebar] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY
            if (currentScroll > lastScrollY && currentScroll > 10) {
                setHideSidebar(true)
            } else {
                setHideSidebar(false)
            }
            setLastScrollY(currentScroll)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <>
            {!loadingDone && <Preloader onFinish={() => setLoadingDone(true)} />}

            {loadingDone && (
                <div className="relative min-h-screen flex flex-col bg-background text-foreground">
                    <Navbar user={user} sidebarHidden={hideSidebar} />

                    <div className="flex flex-1 overflow-hidden">
                        {withSidebar && !hideSidebar && <UserProfileSidebar user={user} />}

                        <main
                            className={clsx(
                                'flex-1 py-6 overflow-y-auto transition-all',
                                withSidebar && !hideSidebar,
                                layoutType === 'container' && 'container px-4 mx-auto',
                                layoutType === 'full' && 'w-full px-6'
                            )}
                        >
                            {children}
                        </main>
                    </div>
                </div>
            )}
        </>
    )
}
