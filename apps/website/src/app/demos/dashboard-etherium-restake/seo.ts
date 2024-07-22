import {InternalMetadata} from '@/seo/metadata'

import {coingeckoIds} from './db'

const assets = coingeckoIds.join(', ')

const title = 'Coingecko: Ethereum restake price checker'
const description = `Ethereum restake price checker. Monitoring assets are ${assets}`
const canonical = '/demos/dashboard-etherium-restake'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title}
