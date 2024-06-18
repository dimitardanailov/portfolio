import {InternalMetadata} from '@/seo/metadata'

import {sufix, stack} from './db'

const title = 'Full Stack Software Architect'
const description = `Technology stack (I'm happy to provide technical tips for each technology in the list): ${stack.join(
  ', ',
)}`
const canonical = `/positions/${sufix}`

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title}
