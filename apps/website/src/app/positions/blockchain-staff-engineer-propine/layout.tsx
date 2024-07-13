import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

import {technologies} from './db'

const title = 'Blockchain staff engineer, Propine.com'
const description = `Technology stack (I'm happy to provide technical tips for each technology in the list): ${technologies.join(
  ', ',
)}`

const canonical = '/positions/blockchain-staff-engineer-propine'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
