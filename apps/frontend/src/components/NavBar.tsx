import Link from 'next/link'

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/transactions">Transactions</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  )
}
