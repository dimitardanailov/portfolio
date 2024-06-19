import {InternalMetadata} from '@/seo/metadata'
import {coingeckoIds} from './db'

const assets = coingeckoIds.join(', ')

const title = 'Coingecko cosmos ecosystem airdrop price checker'
const description = `The tool is tracking the following crypto assets: ${assets}`
const canonical = '/demos/dashboard-cosmos-ecosystem'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title}
