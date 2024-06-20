import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

const title = 'Full Stack Engineer, Tech Lead'
const description =
  'Backend Development: Led the communication interface between our application and SwissPort using Node.js, TypeScript, GraphQL, and MongoDB.'

const canonical = '/positions/full-stack-engineer-collinson'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
