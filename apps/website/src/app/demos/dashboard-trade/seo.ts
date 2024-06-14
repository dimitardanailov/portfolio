import {InternalMetadata} from '@/seo/metadata'

import {coingeckoIds} from './db'

const assets = coingeckoIds.join(', ')

const title = 'Coingecko: crypto monitoring dashboard'
const description = `Coingecko monitoring tool. Assets ${assets}`
const canonical = '/demos/dashboard-trade'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title, description, canonical}
