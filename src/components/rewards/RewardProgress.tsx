'use client'

import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js'
import { useMemo } from 'react'

ChartJS.register(ArcElement, Tooltip, Legend)

type RewardProgressProps = {
    user: {
        xp: number
        level: number
    }
}

export default function RewardProgress({ user }: RewardProgressProps) {
    const xpPercent = Math.min((user.xp % 1000) / 10, 100)

    const data = useMemo(
        () => ({
            labels: ['Progress'],
            datasets: [
                {
                    label: 'XP Progress',
                    data: [xpPercent, 100 - xpPercent],
                    backgroundColor: ['#28CC95', '#2A2A2A'],
                    borderWidth: 0,
                    cutout: '75%',
                },
            ],
        }),
        [user.xp]
    )

    const options = {
        responsive: true,
        animation: {
            animateRotate: true,
            duration: 1500,
            easing: 'easeInOutCubic',
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
    }

    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 text-center text-white w-full max-w-sm mx-auto">
            <h2 className="text-lg font-semibold mb-4">💎 Reward Points Progress</h2>
            <div className="relative w-40 h-40 mx-auto">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xl font-bold">{xpPercent.toFixed(0)}%</p>
                    <p className="text-xs text-white/70">XP: {user.xp}</p>
                    <p className="text-xs text-white/70">Level: {user.level}</p>
                </div>
            </div>
        </div>
    )
}
