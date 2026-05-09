import Link from 'next/link'

export default function HomePage(){return(<div><h1>Scout Platform</h1><p>Professional football scouting workspace.</p><div style={{display:'flex',gap:12,marginTop:24}}><Link href='/dashboard'>Open Dashboard</Link><Link href='/players'>Players</Link><Link href='/import'>Import Data</Link></div></div>)}