import sanitizeUrl from '@/seo/sanitizeUrl'
import {InternalMetadata} from '@/seo/metadata'

const folder = 'articles/2025/06/10/'

const title =
  'Building a Scalable URL Shortener with Serverless: A High-Level Design for Experienced Developers'
const slogan =
  'Architecting Efficient and Robust Short Link Services with Serverless Functions and Scalable Databases'
const description =
  'Explore the high-level system design for building a scalable URL shortener using Firebase Cloud Functions and NoSQL databases. Understand data models, redirection flow, and strategies for handling high traffic and ensuring optimal performance for experienced developers.'

const tags = [
  'url shortener',
  'serverless',
  'firebase cloud functions',
  'nosql database',
  'scalability',
  'system design',
  'web development',
  'high performance',
]

const canonical = folder + sanitizeUrl(title)

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title, canonical, tags, slogan}
