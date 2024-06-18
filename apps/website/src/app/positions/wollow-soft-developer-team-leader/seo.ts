import {InternalMetadata} from '@/seo/metadata'

import {sufix, stack} from './db'

const title = 'Developer and Team Leader'
const description = `Developer - wollow soft. Technology stack: ${stack.join(
  ',',
)}`
const canonical = `/positions/${sufix}`

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title}
