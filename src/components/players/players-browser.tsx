"use client"
import Link from 'next/link'
import {useMemo,useState} from 'react'
import {PositionBadge} from './position-badge'

type Player={id:string;fullName:string;position:string;club:string;competition:string;age:number;rating:number;minutes:number;marketValue:number|null;status:string;metrics:{obv:number;npXg:number;xa:number;pressures:number}}

export function PlayersBrowser({players}:{players:Player[]}){
const[query,setQuery]=useState('')
const[position,setPosition]=useState('All')
const[sort,setSort]=useState('rating')
const positions=['All',...Array.from(new Set(players.map(p=>p.position)))]
const filtered=useMemo(()=>players.filter(p=>p.fullName.toLowerCase().includes(query.toLowerCase())).filter(p=>position==='All'||p.position===position).sort((a,b)=>Number(b[sort as keyof Player])-Number(a[sort as keyof Player])),[players,query,position,sort])

return <div style={{display:'flex',flexDirection:'column',gap:18}}>
<div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap',position:'sticky',top:0,zIndex:20,background:'#09090b',padding:'12px 0'}}>
<input value={query} onChange={e=>setQuery(e.target.value)} placeholder='Search player...' style={input}/>
<select value={position} onChange={e=>setPosition(e.target.value)} style={input}>{positions.map(v=><option key={v}>{v}</option>)}</select>
<select value={sort} onChange={e=>setSort(e.target.value)} style={input}><option value='rating'>Scout Rating</option><option value='age'>Age</option><option value='minutes'>Minutes</option></select>
<div style={{marginLeft:'auto',color:'#71717a',fontSize:13}}>{filtered.length} players</div>
</div>
<div style={{border:'1px solid #18181b',borderRadius:20,overflow:'hidden',background:'#09090b'}}>
<table style={{width:'100%',borderCollapse:'collapse'}}>
<thead style={{position:'sticky',top:70,background:'#111114',zIndex:10}}>
<tr>
<th style={th}>Player</th>
<th style={th}>Position</th>
<th style={th}>Club</th>
<th style={th}>Competition</th>
<th style={th}>Age</th>
<th style={th}>Rating</th>
<th style={th}>Minutes</th>
<th style={th}>OBV</th>
<th style={th}>NP xG</th>
<th style={th}>xA</th>
</tr>
</thead>
<tbody>
{filtered.slice(0,1500).map(p=><tr key={p.id} style={{borderTop:'1px solid #18181b',transition:'all .15s ease'}}>
<td style={td}><Link href={`/players/${p.id}`} style={{display:'flex',flexDirection:'column',gap:2,textDecoration:'none'}}><strong style={{color:'#fafafa'}}>{p.fullName}</strong><span style={{fontSize:12,color:'#71717a'}}>{p.status}</span></Link></td>
<td style={td}><PositionBadge position={p.position}/></td>
<td style={td}>{p.club}</td>
<td style={td}>{p.competition}</td>
<td style={td}>{p.age}</td>
<td style={td}><div style={rating}>{p.rating}</div></td>
<td style={td}>{Intl.NumberFormat('en-US').format(p.minutes)}</td>
<td style={td}><MetricBadge value={p.metrics.obv}/></td>
<td style={td}><MetricBadge value={p.metrics.npXg}/></td>
<td style={td}><MetricBadge value={p.metrics.xa}/></td>
</tr>)}
</tbody>
</table>
</div>
</div>}

function MetricBadge({value}:{value:number}){return <div style={{background:'rgba(34,197,94,.12)',color:'#4ade80',padding:'6px 10px',borderRadius:999,fontSize:12,fontWeight:600,width:'fit-content'}}>{value}</div>}

const input={padding:'12px 14px',borderRadius:14,border:'1px solid #27272a',background:'#111114',color:'#fafafa',fontSize:14,minWidth:180}
const th={padding:'14px 16px',textAlign:'left',fontSize:12,color:'#71717a',fontWeight:600,letterSpacing:'.04em'} as const
const td={padding:'16px',fontSize:14,color:'#e4e4e7'} as const
const rating={background:'rgba(59,130,246,.14)',color:'#60a5fa',padding:'6px 10px',borderRadius:999,fontWeight:700,width:'fit-content'}
