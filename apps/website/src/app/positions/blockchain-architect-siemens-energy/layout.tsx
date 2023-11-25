import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

import stack from './stack'

const title = 'Full stack engineer, Collinson group'
const description = `Technology stack (I'm happy to provide technical tips for each technology in the list): ${stack.join(
  ', ',
)}`

const canonical = '/positions/blockchain-architect-siemens-energy'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
