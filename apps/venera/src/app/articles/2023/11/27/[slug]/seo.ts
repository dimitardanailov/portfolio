import sanitizeUrl from '@/seo/sanitizeUrl'

const folder = 'articles/2023/11/27/'

export const title =
  'StyledComponentsRegistry the missing part between react, vercel and nextjs'

export const canonical = folder + sanitizeUrl(title)

export const tags = [
  'react',
  'vercel',
  'nextjs',
  'css-in-js',
  'styled components',
]

export const description =
  'StyledComponentsRegistry is used to update global registry about styled components (css-in-js) configurations'
