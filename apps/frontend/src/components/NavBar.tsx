import Link from 'next/link'

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/transactions">Transactions</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/ipfs/empty">IPFS - empty container</Link>
        </li>
        <li>
          <Link href="/ipfs/dummy">IPFS - dummy container</Link>
        </li>
      </ul>
    </nav>
  )
}
