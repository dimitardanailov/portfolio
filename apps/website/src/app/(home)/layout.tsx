import layout from '@/components/NextjsLayout'
import generateMetadata, {InternalMetadata} from '@/seo/metadata'

import props from './seo'

export const metadata = generateMetadata(props)

export default layout
