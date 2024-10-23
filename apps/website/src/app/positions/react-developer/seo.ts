import {InternalMetadata} from '@/seo/metadata'

import {sufix, technologies} from './db'

const title = 'React Developer'
const description = `Technology stack: ${technologies.join(',')}`
const canonical = `/positions/${sufix}`

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title}
