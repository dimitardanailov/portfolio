import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

const title = '13 years of helping build an inclusive web2 or web3 projects'
const description =
  'Deep understanding for upcoming technologies to solve complex business problems;'
const canonical = ''

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
