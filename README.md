# Scout Platform

Professional football scouting platform inspired by Beelieve, Wyscout and club scouting departments.

## Stack

- Next.js
- TypeScript
- TailwindCSS
- Prisma
- Supabase
- Recharts

## Local Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Supabase

Create a Supabase project and fill `.env.local` based on `.env.example`.

### DATABASE_URL

Use Supabase Transaction Pooler URL.

### DIRECT_URL

Use Supabase Direct Connection URL.

## Prisma

Prisma requires access to:

```txt
binaries.prisma.sh
```

If Prisma engines fail in restricted environments, the application falls back to mock data.

## Deploy

Recommended deployment:

- GitHub
- Vercel
- Supabase

## Current MVP Features

- Dashboard
- Players database
- Player profile
- Radar chart
- CSV/XLSX import page
- Mock scouting dataset
