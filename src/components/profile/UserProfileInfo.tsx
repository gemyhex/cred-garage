'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export function UserProfileInfo({ user }: { user: any }) {
    const [displayXP, setDisplayXP] = useState(0)
    const [displayLevel, setDisplayLevel] = useState(0)
    const controls = useAnimation()

    useEffect(() => {
        let mounted = true
        let step = 0
        const duration = 2000
        const totalSteps = duration / 16

        const xpTarget = user.xp
        const levelTarget = user.level
        const progress = Math.min((xpTarget % 1000) / 10, 100)

        function animate() {
            step++
            const percent = Math.min(step / totalSteps, 1)

            if (mounted) {
                setDisplayXP(Math.floor(percent * xpTarget))
                setDisplayLevel(Math.floor(percent * levelTarget))
                controls.start({
                    strokeDashoffset: 282.74 * (1 - (percent * progress) / 100),
                    transition: { duration: 0.1 },
                })
            }

            if (percent < 1) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)

        return () => {
            mounted = false
        }
    }, [user])

    return (
        <div className="text-center">
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
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover z-10"
                />
            </div>

            {/* Info */}
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">Level {displayLevel}</p>
            <p className="text-sm">
                XP: <span className="font-medium text-primary">{displayXP}</span>
            </p>
        </div>
    )
}
