import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

const title = 'Ex CTO, Staff Engineer, Architect and Engineering manager'
const description =
  '13+ years experience. My portfolio includes clients located: USA, Singapore, Israel, Germany, Great Britain, Switzerland, United Arab Emirates, Indonesia;'
const canonical = '/positions'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
