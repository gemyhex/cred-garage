"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
} from "chart.js";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title
);

type RewardProgressProps = {
  user: {
    xp: number;
    level: number;
  };
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
};

export default function RewardProgress({
  user,
  chartData,
}: RewardProgressProps) {
  const xpPercent = useMemo(
    () => Math.min((user.xp % 1000) / 10, 100),
    [user.xp]
  );

  const xpProgressData = useMemo(
    () => ({
      labels: ["Progress"],
      datasets: [
        {
          label: "XP Progress",
          data: [xpPercent, 100 - xpPercent],
          backgroundColor: ["#28CC95", "#2A2A2A"],
          borderWidth: 0,
          cutout: "75%",
        },
      ],
    }),
    [xpPercent]
  );

  const xpHistoryData = useMemo(
    () => ({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "XP Earned",
          data: [400, 800, 1200, 2200, 2800, user.xp],
          fill: true,
          backgroundColor: "rgba(40, 204, 149, 0.2)",
          borderColor: "#28CC95",
          tension: 0.4,
        },
      ],
    }),
    [user.xp]
  );

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      animation: {
        duration: 1200,
      },
    }),
    []
  );

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 text-foreground">
      {/* XP Progress */}
      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg shadow-lg text-center">
        <h2 className="text-lg font-semibold mb-4">💎 XP Progress</h2>
        <div className="relative w-40 h-40 mx-auto">
          <Doughnut data={xpProgressData} options={chartOptions} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xl font-bold">{xpPercent.toFixed(0)}%</p>
            <p className="text-xs text-foreground/70">XP: {user.xp}</p>
            <p className="text-xs text-foreground/70">Level: {user.level}</p>
          </div>
        </div>
      </div>

      {/* XP History Line */}
      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">📈 XP Growth</h2>
        <Line data={xpHistoryData} options={chartOptions} />
      </div>

      {/* Benefit Claim Bar */}
      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">📊 Claimed Benefits</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
