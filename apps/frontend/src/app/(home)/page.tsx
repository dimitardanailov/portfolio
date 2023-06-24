'use client'

import HomePage from './HomePage'
import {MetamaskProvider, useMetamask} from '@/hooks/useMetamask'

export default function Home() {
  return (
    <MetamaskProvider>
      <HomePage />
    </MetamaskProvider>
  )
}
