import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <aside style={{ width: 260, background: '#111111', padding: 24, borderRight: '1px solid #27272a' }}>
            <h2 style={{ marginTop: 0 }}>Scout Platform</h2>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/players">Players</Link>
              <Link href="/import">Import</Link>
            </nav>
          </aside>
          <main style={{ flex: 1, padding: 32 }}>{children}</main>
        </div>
      </body>
    </html>
  )
}
