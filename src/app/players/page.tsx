import { PlayersBrowser } from '@/components/players/players-browser'
import { loadRuntimePlayers } from '@/runtime-dataset/load-players'

export default async function PlayersPage(){
const players=await loadRuntimePlayers()
return(<div><h1 style={{fontSize:42,marginBottom:10}}>Players Database</h1><p style={{color:'#a1a1aa'}}>Live StatsBomb scouting browser using production runtime dataset.</p><PlayersBrowser players={players} /></div>)}