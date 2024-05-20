import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

const title =
  'Deep understanding for upcoming technologies to solve complex business problems;'
const description =
  'Expertise in writing JavaScript/TypeScript code characterized by its cleanliness, impressive performance, and potential for scalability'
const canonical = '/hire-me'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
