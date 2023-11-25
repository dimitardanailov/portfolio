import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

import stack from './stack'

const title = 'Software Engineering Manager, Elephant stocks'
const description = `Technology stack (I'm happy to provide technical tips for each technology in the list): ${stack.join(
  ', ',
)}`

const canonical = '/positions/software-engineering-manager'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
