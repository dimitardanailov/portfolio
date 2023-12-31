import {Inter} from 'next/font/google'

import '@/styles/global.css'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Dimitar Danailov - Web3 Demo',
  description: 'web3 demo project',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
