'use client'

import { motion } from 'framer-motion'

export default function ThemeHitEffect({ isVisible }: { isVisible: boolean }) {
    return isVisible ? (
        <motion.div
            className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            <svg
                viewBox="0 0 900 600"
                className="w-[1200px] h-[800px]"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Optional background */}
                {/* <rect x="0" y="0" width="900" height="600" fill="#ffffff" /> */}

                <motion.path
                    d="M507 0L590 0L590 86L513 86L513 171L441 171L441 257L428 257L428 343L395 343L395 429L406 429L406 514L423 514L423 600L0 600L0 514L0 514L0 429L0 429L0 343L0 343L0 257L0 257L0 171L0 171L0 86L0 86L0 0L0 0Z"
                    fill="#9900ff"
                />
                <motion.path
                    d="M339 0L415 0L415 86L353 86L353 171L325 171L325 257L401 257L401 343L234 343L234 429L418 429L418 514L392 514L392 600L0 600L0 514L0 514L0 429L0 429L0 343L0 343L0 257L0 257L0 171L0 171L0 86L0 86L0 0L0 0Z"
                    fill="#7700c6"
                />
                <motion.path
                    d="M247 0L139 0L139 86L188 86L188 171L136 171L136 257L260 257L260 343L146 343L146 429L169 429L169 514L92 514L92 600L0 600L0 514L0 514L0 429L0 429L0 343L0 343L0 257L0 257L0 171L0 171L0 86L0 86L0 0L0 0Z"
                    fill="#560090"
                />
            </svg>
        </motion.div>
    ) : null
}
