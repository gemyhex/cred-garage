import { useState } from 'react'
import { BenefitCard } from './BenefitCard'
import CongratulationModal from './CongratulationModal'

type BenefitListProps = {
  benefits: any[]
  onClaim: (id: string) => void
}

export const BenefitList = ({ benefits, onClaim }: BenefitListProps) => {
  const [selected, setSelected] = useState<any | null>(null)

  const handleClaim = (benefit: any) => {
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

      {/* Modal */}
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
