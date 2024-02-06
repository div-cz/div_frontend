import { urls } from '@/app/lib/webData'
import Link from 'next/link'

export const Navigation = () => {
  return (
    <header className="bg-white">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div>
          <Link href={'/'}>Logo</Link>
        </div>
        {urls.map((item) => (
          <a
            href={item.url}
            key={item.id}
            className="text-2xl font-bold text-gray-800"
          >
            {item.title}
          </a>
        ))}
        <div className={'flex gap-4'}>
          <div>Přihlásit se</div>
          <div>Registrovat se</div>
        </div>
      </nav>
    </header>
  )
}
