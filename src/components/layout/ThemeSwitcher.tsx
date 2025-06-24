'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useThemeParallaxToggle } from '@/hooks/useThemeParallaxToggle'

export function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false)

    useThemeParallaxToggle(isDark)

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const dark = saved === 'dark' || (!saved && prefersDark)
        setIsDark(dark)
        document.documentElement.classList.toggle('dark', dark)
    }, [])

    const toggleTheme = () => {
        const next = !isDark
        setIsDark(next)
        document.documentElement.classList.toggle('dark', next)
        localStorage.setItem('theme', next ? 'dark' : 'light')
    }

    return (
        <Button variant="outline" size="icon" onClick={toggleTheme}>
            {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
