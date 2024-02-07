import Nav from '@/components/Nav/Nav'
import NavItem from '@/components/NavItem/NavItem'
import List from '@/components/List/List'
import ListItem from '@/components/ListItem/ListItem'
import { books } from '@/app/lib/mockData'

export default function Books() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <h1>Books</h1>
      <div className={'divide-y divide-slate-100'}>
        <Nav>
          <NavItem href="/new" isActive>
            New Release
          </NavItem>
          <NavItem href="/new">Top rated</NavItem>
          <NavItem href="/new">Vincents Picks</NavItem>
        </Nav>
        <List>
          {books.map((item) => (
            <ListItem key={item.id} data={item} />
          ))}
        </List>
      </div>
    </main>
  )
}
