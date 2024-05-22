import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

const title = 'Coingecko: crypto monitoring dashboard'
const description = 'Trading pairs are'
const canonical = '/demos/dashboard-trade'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
