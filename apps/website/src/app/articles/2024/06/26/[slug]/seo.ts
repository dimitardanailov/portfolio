import sanitizeUrl from '@/seo/sanitizeUrl'
import {InternalMetadata} from '@/seo/metadata'

const folder = 'articles/2024/06/26/'

const title =
  'Write-Back Cache Explained: Boost Database Performance and Reduce Costs'
const slogan =
  'Understanding Write-Back Cache: When to Use It and When to Avoid It'
const description =
  'Explore the advantages and disadvantages of Write-Back Cache. Understand its best use cases, including high-performance applications, and when to avoid it. Perfect for optimizing database interactions and improving efficiency.'

const tags = [
  'database performance',
  'write-back cache',
  'high-performance applications',
  'caching strategies',
  'styled components',
]

const canonical = folder + sanitizeUrl(title)

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title, canonical, tags, slogan}
