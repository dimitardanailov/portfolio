import {InternalMetadata} from '@/seo/metadata'
import {coingeckoIds} from './db'

const assets = coingeckoIds.join(', ')

const title = 'Coingecko: etherium transaction token fetcher'
const description = `Etherium l2 transaction token price fetcher. Assets: ${assets}`
const canonical = '/demos/dashboard-l2-tx-tokens'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title, description, canonical}
