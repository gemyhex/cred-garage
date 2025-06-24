'use client'

import { motion } from 'framer-motion'

export default function ThemeOverlayEffect({ isVisible }: { isVisible: boolean }) {
    return isVisible ? (
        <motion.div
            className="fixed inset-0 z-[999] pointer-events-none"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 10, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            <div className="absolute inset-0 m-auto h-40 w-40 rounded-full bg-primary" />
        </motion.div>
    ) : null
}
