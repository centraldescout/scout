import { players } from '@/data/mock'

export default function PlayersPage() {
  return (
    <main>
      <h1>Players</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.fullName}</li>
        ))}
      </ul>
    </main>
  )
}
