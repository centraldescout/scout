import { players } from '@/data/mock'
import { PlayerRadar } from '@/components/charts/player-radar'

interface Props { params: Promise<{ id: string }> }

export default async function PlayerPage({ params }: Props){const { id } = await params
const player = players.find((p)=>p.id===id)
if(!player){return <main>Player not found</main>}
return(<div><h1 style={{fontSize:42}}>{player.fullName}</h1><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16,marginTop:24}}><div style={{background:'#18181b',padding:20,borderRadius:18}}>Position: {player.position}</div><div style={{background:'#18181b',padding:20,borderRadius:18}}>Club: {player.club}</div><div style={{background:'#18181b',padding:20,borderRadius:18}}>Age: {player.age}</div><div style={{background:'#18181b',padding:20,borderRadius:18}}>Foot: {player.foot}</div></div><PlayerRadar /></div>)}