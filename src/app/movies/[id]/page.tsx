import { movies } from '@/app/lib/mockData'

export default function Page({ params }: { params: { id: number } }) {
  const test = movies.find((item) => item.id === Number(params.id))

  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <h1>MovieDetail id: {params.id}</h1>
      {test && (
        <>
          <h2>{test.title}</h2>
          <p>{test.description}</p>
        </>
      )}
    </main>
  )
}
