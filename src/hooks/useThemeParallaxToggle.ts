'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

export function useThemeParallaxToggle(isDark: boolean) {
    useEffect(() => {
        const tl = gsap.timeline()

        tl.to('body', {
            '--bg-color': isDark ? '#0f172a' : '#f8fafc',
            '--fg-color': isDark ? '#f8fafc' : '#0f172a',
            duration: 0.8,
            ease: 'power2.inOut',
        })

        tl.to('.parallax-bg', {
            y: isDark ? -40 : 40,
            scale: 1.05,
            duration: 1.2,
            ease: 'power3.inOut',
        }, 0)
    }, [isDark])
}
