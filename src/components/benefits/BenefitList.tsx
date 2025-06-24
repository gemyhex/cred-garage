import { useState } from 'react'
import { BenefitCard } from './BenefitCard'
import CongratulationModal from './CongratulationModal'
import type { Benefit } from '@/types/benefit'

type BenefitListProps = {
  benefits: Benefit[]
  onClaim: (id: string) => void
}

export const BenefitList = ({ benefits, onClaim }: BenefitListProps) => {
  const [selected, setSelected] = useState<Benefit | null>(null)

  const handleClaim = (benefit: Benefit) => {
    if (benefit.claimed) return
    setSelected(benefit)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            benefit={benefit}
            onClaim={handleClaim}
            onMarkClaimed={onClaim}
          />
        ))}
      </div>

      {selected && (
        <CongratulationModal
          benefit={selected}
          onClose={() => {
            setSelected(null)
            onClaim(selected.id)
          }}
        />
      )}
    </>
  )
}
