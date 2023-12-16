import {Metadata} from 'next'

import {Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from '@vercel/speed-insights/next'

import {Inter} from 'next/font/google'

import StyledComponentsRegistry from '@/lib/registry'

import '@/styles/global.css'

const inter = Inter({subsets: ['latin']})

const generateUrl = (url: string) => {
  return `https://ddanailov.dev/${url}`
}

export const metadata: Metadata = {
  applicationName: 'Dimitar Danailov portfolio',
  authors: {
    name: 'Dimitar Danailov',
  },
  icons: {
    icon: [
      {
        url: generateUrl('favicon-48x48.ico'),
        type: 'image/ico',
        sizes: '48x48',
      },
      {
        url: generateUrl('favicon-32x32.png'),
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: generateUrl('favicon-16x16.png'),
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
        url: generateUrl('javascript-consultant.png'),
      },
    ],
  },
  manifest: generateUrl('site.webmanifest.json'),
  category: 'Portfolio',
  other: {
    'fb:app_id': '1479131055619126',
  },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
