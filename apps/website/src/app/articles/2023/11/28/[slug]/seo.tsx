import sanitizeUrl from '@/seo/sanitizeUrl'

const folder = 'articles/2023/11/28/'

export const title =
  'System design collection about Web Development - Scalability, Distributed Systems, Real-Time and Streaming, Microservices and monolith'

export const canonical = folder + sanitizeUrl(title)

export const tags = [
  'system design',
  'distributed systems',
  'microservices',
  'monolith',
]

export const description =
  'Resources about system design, distributed systems, microservices and monolith'
