import sanitizeUrl from '@/seo/sanitizeUrl'

const folder = 'articles/2023/12/01/'

export const title = 'Backend nodejs engineering onboarding'

export const canonical = folder + sanitizeUrl(title)

export const tags = [
  'nodejs',
  'agile',
  'async-await',
  'ecmascript6',
  'styled components',
]

export const description =
  'The article contains materials of onboarding backend end engineer. The key subjects are:' +
  tags.join(',')
