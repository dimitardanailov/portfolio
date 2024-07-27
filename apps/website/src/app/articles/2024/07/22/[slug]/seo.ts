import sanitizeUrl from '@/seo/sanitizeUrl'

import {InternalMetadata} from '@/seo/metadata'

const folder = 'articles/2024/07/22/'

const title = 'The Ultimate Software Engineer Contractor Guide'
const description = 'How to start doing contract work software development'

const canonical = folder + sanitizeUrl(title)

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title, canonical}
