'use client'

import HomePage from './HomePage'
import LayoutProvider from '@/providers/LayoutProvider'

export default function Home() {
  return (
    <LayoutProvider>
      <HomePage />
    </LayoutProvider>
  )
}
