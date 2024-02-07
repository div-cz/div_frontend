export default function NavItem({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className={`block rounded-md px-3 py-2 ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-50'}`}
      >
        {children}
      </a>
    </li>
  )
}
