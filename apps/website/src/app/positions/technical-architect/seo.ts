import {InternalMetadata} from '@/seo/metadata'
import stack from './stack'

const title = 'Technical Architect, Livearea'
const description = `Technology stack (I'm happy to provide technical tips for each technology in the list): ${stack.join(
  ', ',
)}`

const canonical = '/positions/software-engineering-manager'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title}
