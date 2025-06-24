'use client'

import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

export default function CongratulationModal({ benefit, onClose }) {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 flex items-center justify-center z-50 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Confetti width={window.innerWidth} height={window.innerHeight} />

                <motion.div
                    className="bg-white/10 hover:bg-gradient-to-tr hover:from-[#28CC95]/60 hover:to-[#007CF0]/60 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-2xl w-full max-w-xl text-center text-white transition-all duration-75"
                    initial={{ scale: 0, opacity: 0, y: -100 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0, opacity: 0, y: 100 }}
                    transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 25,
                    }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-white">🎉 Congratulations! 🎉</h2>

                    <p className="text-lg text-white/80 mb-6">
                        You successfully claimed: <strong className="text-white">{benefit.title}</strong>
                    </p>

                    <button
                        className="px-6 py-3 rounded-md text-white font-semibold hover:opacity-90 transition"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </motion.div>

            </motion.div>
        </AnimatePresence>
    );
}
