import sanitizeUrl from '@/seo/sanitizeUrl'

const folder = 'articles/2023/11/28/'

export const title = 'System design'

export const canonical = folder + sanitizeUrl(title)

export const tags = [
  'system design',
  'distributed systems',
  'microservices',
  'monolith',
]

export const description =
  'Resources about system design, distributed systems, microservices and monolith'
