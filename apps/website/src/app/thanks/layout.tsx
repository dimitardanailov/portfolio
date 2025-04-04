import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

const title = '15 years of helping build an inclusive web2 or web3 projects'
const description =
  'Deep understanding for upcoming technologies to solve complex business problems;'
const canonical = '/thanks'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
