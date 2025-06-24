'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

export const BenefitCard = ({
  benefit,
  onClaim,
  onMarkClaimed,
}: {
  benefit: any
  onClaim?: (benefit: any) => void
  onMarkClaimed: (id: string) => void
}) => {
  const [timeLeft, setTimeLeft] = useState<string | null>(null)

  useEffect(() => {
    if (!benefit.expiresAt) return

    const interval = setInterval(() => {
      const diff = new Date(benefit.expiresAt).getTime() - Date.now()

      if (diff <= 0) {
        setTimeLeft('Expired')
        clearInterval(interval)
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)

      setTimeLeft(`${days}d ${hours}h ${minutes}m`)
    }, 1000)

    return () => clearInterval(interval)
  }, [benefit.expiresAt])

  const handleClick = () => {
    if (benefit.claimed) return
    onMarkClaimed(benefit.id)
    onClaim?.(benefit)
  }

  return (
    <div
      className={clsx(
        'relative p-6 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md shadow-lg text-foreground transition-all duration-300 group cursor-pointer',
        'hover:bg-gradient-to-tr hover:from-[#28CC95]/60 hover:to-[#007CF0]/60 hover:border-transparent',
        'flex flex-col justify-between h-full'
      )}
      onClick={handleClick}
    >
      {/* One badge in the same position */}
      <div className="absolute top-3 right-3 z-10">
        {benefit.claimed ? (
          <span className="bg-blue-600/90 text-xs px-2 py-1 rounded-full text-white font-medium shadow">
            Claimed
          </span>
        ) : benefit.isNew ? (
          <span className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-xs px-2 py-1 rounded-full text-white font-bold shadow-md">
            NEW
          </span>
        ) : null}
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="text-4xl mb-2">{benefit.icon}</div>

        <h3 className="text-lg font-semibold mb-1 group-hover:text-white transition-colors">
          {benefit.title}
        </h3>

        <p className="text-sm mb-3 text-muted-foreground group-hover:text-white/80">
          {benefit.description}
        </p>

        <div className="text-xs text-muted-foreground space-y-1 group-hover:text-white/70">
          {benefit.expiresAt && !benefit.claimedAt && (
            <p>
              ⏳ Expires in: <span className="font-medium">{timeLeft ?? '...'}</span>
            </p>
          )}
          {benefit.claimedAt && <p>✅ Claimed on: {benefit.claimedAt}</p>}
          {benefit.type && <p>🏷️ Type: {benefit.type}</p>}
        </div>
      </div>

      <button
        className={clsx(
          'mt-4 w-full px-4 py-2 rounded-md text-white text-sm font-medium border transition',
          'bg-gradient-to-tr from-[#28CC95]/60 to-[#007CF0]/60 hover:bg-white/20',
          benefit.claimed && 'opacity-50 pointer-events-none'
        )}
      >
        {benefit.cta}
      </button>
    </div>
  )
}
