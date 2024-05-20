import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

const title = 'Certified Engineer by Google, Meta, AWS'
const description =
  'Certification in the following areas: Blockchain, AWS, Docker, Kubernetes, Smart Contracts, React'
const canonical = '/certificates'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export const metadata = generateMetadata(props)

export default layout
