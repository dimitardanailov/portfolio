import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

const title = 'Ex - contractor in Siemens and The international Red cross'
const description =
  'Deep understanding for upcoming technologies to solve complex business problems;'
const canonical = '/recommendation-letters'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
