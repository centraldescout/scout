export type MonchiScoreInput = {
  age?: number
  minutes?: number
  rating?: number
  percentile?: number
  marketValue?: number
  metrics?: {
    attack?: number
    passing?: number
    defending?: number
    physical?: number
    pressing?: number
  }
}

export type MonchiScoreBreakdown = {
  ageScore: number
  minutesScore: number
  attackingScore: number
  passingScore: number
  defendingScore: number
  physicalScore: number
  obvProxyScore: number
  resaleScore: number
  total: number
}

function clamp(value: number, min = 0, max = 100): number {
  return Math.min(max, Math.max(min, value))
}

function safeNumber(value: unknown, fallback = 0): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

export function calculateMonchiScoreBreakdown(
  player: MonchiScoreInput,
): MonchiScoreBreakdown {
  const age = safeNumber(player.age, 28)
  const minutes = safeNumber(player.minutes, 0)
  const rating = safeNumber(player.rating, 0)
  const percentile = safeNumber(player.percentile, rating)
  const marketValue = safeNumber(player.marketValue, 0)

  const ageScore = clamp(100 - Math.max(0, age - 18) * 3)
  const minutesScore = clamp(minutes / 30)
  const attackingScore = clamp(safeNumber(player.metrics?.attack))
  const passingScore = clamp(safeNumber(player.metrics?.passing))
  const defendingScore = clamp(safeNumber(player.metrics?.defending))
  const physicalScore = clamp(safeNumber(player.metrics?.physical))
  const obvProxyScore = clamp((rating + percentile) / 2)
  const valueEfficiencyScore = clamp(100 - marketValue / 300000)
  const resaleScore = clamp(ageScore * 0.65 + valueEfficiencyScore * 0.35)

  const total = Math.round(
    ageScore * 0.18 +
      minutesScore * 0.14 +
      attackingScore * 0.16 +
      passingScore * 0.12 +
      defendingScore * 0.12 +
      physicalScore * 0.1 +
      obvProxyScore * 0.1 +
      resaleScore * 0.08,
  )

  return {
    ageScore,
    minutesScore,
    attackingScore,
    passingScore,
    defendingScore,
    physicalScore,
    obvProxyScore,
    resaleScore,
    total: clamp(total),
  }
}

export function calculateMonchiScore(player: MonchiScoreInput): number {
  return calculateMonchiScoreBreakdown(player).total
}
