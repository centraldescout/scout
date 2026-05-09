import { players } from '@/data/mock'
import { MonchiBrowser } from '@/components/monchi/monchi-browser'
export default function MonchiRadarPage(){return(<div><h1 style={{fontSize:42}}>Monchi Radar</h1><p style={{color:'#a1a1aa'}}>Recruitment intelligence focused on undervalued opportunities and resale potential.</p><MonchiBrowser players={players} /></div>)}