import sanitizeUrl from '@/seo/sanitizeUrl'

import {InternalMetadata} from '@/seo/metadata'

const folder = 'articles/2024/08/03/'

const title = 'Mastering React 19: Enhanced Actions for Better State Management'
const description =
  "Upgrade your React skills with React 19's enhanced Actions feature. Learn how to manage data mutations more efficiently and handle state updates seamlessly. Ideal for developers aiming to optimize their React applications."
const canonical = folder + sanitizeUrl(title)

const slogan = 'React 19: Simplify Data Mutations with New Actions Feature'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title, canonical, slogan}
