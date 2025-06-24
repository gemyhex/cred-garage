export type Benefit = {
  id: string
  title: string
  icon: string
  description: string
  type: string
  claimed: boolean
  claimedAt?: string
  expiresAt?: string
  cta: string
  isNew: boolean
}
