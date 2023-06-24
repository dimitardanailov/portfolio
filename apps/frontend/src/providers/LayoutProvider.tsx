'use client'

import {MetamaskProvider} from '@/hooks/useMetamask'

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <MetamaskProvider>{children}</MetamaskProvider>
}
