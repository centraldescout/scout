"use client"
import Link from 'next/link'
import {useMemo,useState} from 'react'

type Player={id:string;fullName:string;position:string;club:string;competition:string;age:number;rating:number;minutes:number;marketValue:number|null;status:string;metrics:{obv:number;npXg:number;xa:number;pressures:number}}

export function PlayersBrowser({players}:{players:Player[]}){
const[query,setQuery]=useState('')
const[position,setPosition]=useState('All')
const[sort,setSort]=useState('rating')
const positions=['All',...Array.from(new Set(players.map(p=>p.position)))]
const filtered=useMemo(()=>players.filter(p=>p.fullName.toLowerCase().includes(query.toLowerCase())).filter(p=>position==='All'||p.position===position).sort((a,b)=>Number(b[sort as keyof Player])-Number(a[sort as keyof Player])),[players,query,position,sort])

return <div style={{display:'flex',flexDirection:'column',gap:22,maxWidth:'100%',paddingBottom:40}}>
<div style={{display:'flex',flexDirection:'column',gap:6}}>
<h1 style={{fontSize:40,fontWeight:800,color:'#fafafa',letterSpacing:'-.04em'}}>Scouting Database</h1>
<p style={{color:'#71717a',fontSize:15,maxWidth:720,lineHeight:1.6}}>Professional recruitment browser powered by live StatsBomb scouting data.</p>
</div>
<div style={{display:'flex',gap:10,alignItems:'center',flexWrap:'wrap',position:'sticky',top:0,zIndex:30,background:'rgba(9,9,11,.92)',backdropFilter:'blur(18px)',padding:'14px 0',borderBottom:'1px solid #18181b'}}>
<input value={query} onChange={e=>setQuery(e.target.value)} placeholder='Search player, club or competition' style={input}/>
<select value={position} onChange={e=>setPosition(e.target.value)} style={input}>{positions.map(v=><option key={v}>{v}</option>)}</select>
<select value={sort} onChange={e=>setSort(e.target.value)} style={input}><option value='rating'>Scout Rating</option><option value='age'>Age</option><option value='minutes'>Minutes</option></select>
<div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:8,color:'#71717a',fontSize:12,textTransform:'uppercase',letterSpacing:'.08em'}}><div style={{width:8,height:8,borderRadius:999,background:'#22c55e'}}></div>{filtered.length} loaded</div>
</div>
<div style={{border:'1px solid #18181b',borderRadius:22,overflow:'hidden',background:'#09090b',boxShadow:'0 0 0 1px rgba(255,255,255,.02), 0 24px 60px rgba(0,0,0,.45)'}}>
<table style={{width:'100%',borderCollapse:'collapse'}}>
<thead style={{position:'sticky',top:72,background:'rgba(17,17,20,.98)',backdropFilter:'blur(14px)',zIndex:20}}>
<tr>
<th style={th}>Player</th>
<th style={th}>Pos</th>
<th style={th}>Club</th>
<th style={th}>Competition</th>
<th style={th}>Age</th>
<th style={th}>Scout Rating</th>
<th style={th}>Minutes</th>
<th style={th}>OBV</th>
<th style={th}>NP xG</th>
<th style={th}>xA</th>
</tr>
</thead>
<tbody>
{filtered.slice(0,1200).map(p=><tr key={p.id} style={{borderTop:'1px solid #141418',transition:'background .14s ease'}}>
<td style={td}><Link href={`/players/${p.id}`} style={{display:'flex',flexDirection:'column',gap:4,textDecoration:'none'}}><strong style={{color:'#fafafa',fontSize:14,fontWeight:700}}>{p.fullName}</strong><span style={{fontSize:11,color:'#52525b',textTransform:'uppercase',letterSpacing:'.08em'}}>{p.status}</span></Link></td>
<td style={td}><div style={positionBadge(p.position)}>{p.position}</div></td>
<td style={td}>{p.club}</td>
<td style={{...td,color:'#a1a1aa'}}>{p.competition}</td>
<td style={td}>{p.age}</td>
<td style={td}><div style={rating}>{p.rating}</div></td>
<td style={td}>{Intl.NumberFormat('en-US').format(p.minutes)}</td>
<td style={td}><MetricBadge value={p.metrics.obv} color='#22c55e'/></td>
<td style={td}><MetricBadge value={p.metrics.npXg} color='#38bdf8'/></td>
<td style={td}><MetricBadge value={p.metrics.xa} color='#f59e0b'/></td>
</tr>)}
</tbody>
</table>
</div>
</div>}

function MetricBadge({value,color}:{value:number;color:string}){return <div style={{background:`${color}18`,border:`1px solid ${color}30`,color,padding:'5px 10px',borderRadius:999,fontSize:11,fontWeight:700,width:'fit-content',letterSpacing:'.03em'}}>{value}</div>}

function positionBadge(position:string){const colors:{[key:string]:string}={GK:'#38bdf8',CB:'#818cf8',RB:'#22c55e',LB:'#22c55e',DM:'#f59e0b',CM:'#eab308',AM:'#f97316',RW:'#ef4444',LW:'#ef4444',ST:'#ec4899'};const color=colors[position]||'#71717a';return{background:`${color}18`,border:`1px solid ${color}35`,color,padding:'5px 10px',borderRadius:999,fontWeight:700,fontSize:11,letterSpacing:'.06em',width:'fit-content'}}

const input={padding:'12px 14px',borderRadius:14,border:'1px solid #202026',background:'#111114',color:'#fafafa',fontSize:13,minWidth:200,outline:'none'}
const th={padding:'13px 16px',textAlign:'left',fontSize:11,color:'#71717a',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase'} as const
const td={padding:'14px 16px',fontSize:13,color:'#e4e4e7',whiteSpace:'nowrap'} as const
const rating={background:'rgba(59,130,246,.12)',border:'1px solid rgba(96,165,250,.24)',color:'#93c5fd',padding:'5px 10px',borderRadius:999,fontWeight:800,fontSize:11,width:'fit-content',letterSpacing:'.04em'}
