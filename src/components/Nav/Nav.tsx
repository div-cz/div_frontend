export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav className={'px-6 py-4 text-sm font-medium'}>
      <ul className={'flex space-x-3'}>{children}</ul>
    </nav>
  )
}
