import {Metadata} from 'next'

import {Inter} from 'next/font/google'

import '@/styles/global.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  applicationName: 'Dimitar Danailov portfolio',
  authors: {
    name: 'Dimitar Danailov',
  },
  icons: {
    icon: [
      {
        url: 'https://ddanailov.dev/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: 'https://ddanailov.dev/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
  },
  creator: 'Dimitar Danailov',
  generator: 'Next.js',
  referrer: 'origin',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    images: [
      {
        width: '3840',
        height: '2160',
        url: 'https://ddanailov.dev/javascript-consultant.png',
      },
    ],
  },
  manifest: 'https://ddanailov.dev/site.webmanifest',
  category: 'Portfolio',
  other: {
    'fb:app_id': '1479131055619126',
  },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
