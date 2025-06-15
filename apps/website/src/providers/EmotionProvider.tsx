'use client'

import {CacheProvider} from '@emotion/react'
import createEmotionCache from '@/lib/emotion-cache'
import {ReactNode, useState} from 'react'

export default function EmotionProvider({children}: {children: ReactNode}) {
  const [cache] = useState(() => createEmotionCache())
  return <CacheProvider value={cache}>{children}</CacheProvider>
}
