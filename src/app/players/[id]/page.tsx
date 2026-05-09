interface Props {
  params: Promise<{ id: string }>
}

export default async function PlayerPage({ params }: Props) {
  const { id } = await params

  return (
    <main>
      <h1>Player {id}</h1>
    </main>
  )
}
