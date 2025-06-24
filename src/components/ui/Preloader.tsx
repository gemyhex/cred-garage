'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onFinish }: { onFinish: () => void }) {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
            onFinish()
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="pre-loader fixed inset-0 z-[9999] flex items-center justify-center bg-background text-foreground transition-colors duration-500"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="140"
                        viewBox="0 0 74 88"
                        fill="none"
                        initial="hidden"
                        animate="visible"
                        className="text-foreground"
                    >
                        <motion.g
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.3 } },
                            }}
                        >
                        <motion.path
                            d="M36.9957 57.4618C36.6778 57.4628 36.3652 57.3812 36.0889 57.225L12.5222 44.0271C12.2371 43.8671 11.9999 43.6345 11.835 43.3533C11.6701 43.072 11.5834 42.7521 11.5839 42.4266V1.83446C11.5839 1.34793 11.7783 0.88133 12.1243 0.537302C12.4703 0.193273 12.9396 0 13.429 0H60.5595C61.0489 0 61.5182 0.193273 61.8642 0.537302C62.2102 0.88133 62.4046 1.34793 62.4046 1.83446V42.4266C62.4051 42.7521 62.3184 43.072 62.1535 43.3533C61.9887 43.6345 61.7514 43.8671 61.4663 44.0271L37.8996 57.225C37.6242 57.3808 37.3126 57.4624 36.9957 57.4618ZM15.274 41.3681L36.9957 53.5332L58.7145 41.3681V3.66892H15.274V41.3681Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            variants={pathVariants}
                        />
                        <motion.path
                            d="M36.9957 39.0858C36.678 39.0854 36.3658 39.0038 36.0889 38.849L28.6284 34.6665C28.3433 34.5069 28.106 34.2749 27.9406 33.9942C27.7752 33.7135 27.6878 33.3941 27.6872 33.0688V25.3915H31.3773V32.0132L36.9986 35.1515L43.5552 31.4769L45.3658 34.6722L37.9053 38.8547C37.6271 39.0081 37.3138 39.0877 36.9957 39.0858Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            variants={pathVariants}
                        />
                        <motion.path
                            d="M36.9957 48.2752C36.678 48.2748 36.3658 48.1933 36.0889 48.0384L20.5739 39.3482C20.2891 39.1885 20.0522 38.9563 19.8873 38.6756C19.7225 38.3949 19.6356 38.0756 19.6356 37.7506V17.8425C19.6356 17.356 19.83 16.8894 20.176 16.5453C20.522 16.2013 20.9913 16.008 21.4806 16.008H44.2668V19.6855H23.3199V36.6864L36.99 44.3438L50.6571 36.6864V28.7323H54.3472V37.7506C54.3472 38.0756 54.2603 38.3949 54.0954 38.6756C53.9306 38.9563 53.6936 39.1885 53.4089 39.3482L37.8938 48.0384C37.6196 48.192 37.3104 48.2735 36.9957 48.2752Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            variants={pathVariants}
                        />
                        <motion.path
                            d="M54.3529 21.7197H50.6628V11.6744H26.1664V8.00545H52.5108C53.0001 8.00545 53.4694 8.19872 53.8154 8.54275C54.1614 8.88678 54.3558 9.35338 54.3558 9.83991L54.3529 21.7197Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            variants={pathVariants}
                        />
                        </motion.g>
                    </motion.svg>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
