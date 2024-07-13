import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

import {sufix, technologies} from './db'

const title = 'Full stack engineer, Collinson group'
const description = `Technology stack (I'm happy to provide technical tips for each technology in the list): ${technologies.join(
  ', ',
)}`

const canonical = `/positions/${sufix}`

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
