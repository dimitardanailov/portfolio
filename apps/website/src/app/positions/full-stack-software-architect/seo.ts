import {InternalMetadata} from '@/seo/metadata'

import {sufix} from './db'
import stack from './stack'

const title = 'Full Stack Software Architect'
const description = `Technology stack (I'm happy to provide technical tips for each technology in the list): ${stack.join(
  ', ',
)}`
const canonical = '/positions/full-stack-software-architect'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title}
