import layout from '@/components/NextjsLayout'
import generateMetadata from '@/seo/metadata'

import {title, description, canonical} from './seo'

export const metadata = generateMetadata({title, description, canonical})

export default layout
