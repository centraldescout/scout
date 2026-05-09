import { players } from '@/data/mock'
import { PlayersBrowser } from '@/components/players/players-browser'
export default function PlayersPage(){return(<div><h1 style={{fontSize:42,marginBottom:10}}>Players Database</h1><p style={{color:'#a1a1aa'}}>Professional scouting browser with filters and ranking.</p><PlayersBrowser players={players} /></div>)}