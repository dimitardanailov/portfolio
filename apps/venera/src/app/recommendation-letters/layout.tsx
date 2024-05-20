import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

const title = 'Remote consultant with technology stack: React, Nodejs and Go'
const description =
  'My skills are: React, Nodejs, Typescript, Blockchain, Nextjs, Full Stack Development and Staff Management'
const canonical = '/recommendation-letters'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
