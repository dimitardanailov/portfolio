'use client'

import {CacheProvider} from '@emotion/react'
import createEmotionCache from '@/lib/emotion-cache'
import {ReactNode, useState} from 'react'
import {useServerInsertedHTML} from 'next/navigation'

export default function EmotionSSRProvider({children}: {children: ReactNode}) {
  const [cache] = useState(() => {
    const emotionCache = createEmotionCache()
    // @ts-ignore
    emotionCache.compat = true
    return emotionCache
  })

  useServerInsertedHTML(() => {
    return (
      <>
        {cache.sheet.tags.map((tag, i) => (
          <style
            key={i}
            data-emotion={`${cache.key}`}
            dangerouslySetInnerHTML={{__html: tag.textContent || ''}}
          />
        ))}
      </>
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
