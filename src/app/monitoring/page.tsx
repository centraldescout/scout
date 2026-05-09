import { players } from '@/data/mock'
import { MonitoringBoard } from '@/components/monitoring/monitoring-board'
export default function MonitoringPage(){return(<div><h1 style={{fontSize:42}}>Monitoring</h1><p style={{color:'#a1a1aa'}}>Scouting tracking and recruitment workflow.</p><MonitoringBoard players={players} /></div>)}