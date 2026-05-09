export const players = Array.from({ length: 50 }).map((_, i) => ({
  id: `${i + 1}`,
  fullName: `Player ${i + 1}`,
  position: ['GK','CB','FB','DM','CM','AM','WG','ST'][i % 8],
  club: ['Guarani','Palmeiras','Santos','Corinthians'][i % 4],
  age: 18 + (i % 15),
  nationality: 'Brazil',
}))
