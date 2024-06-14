import {InternalMetadata} from '@/seo/metadata'

import {coingeckoIds} from './db'

const assets = coingeckoIds.join(', ')

const title = 'Coingecko: solana airdrop price checker'
const description = `Solana airdrop price checker. Coingecko is used to monitoring the following assets: ${assets}`
const canonical = '/demos/dashboard-solana-airdrops'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title}
