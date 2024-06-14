import {InternalMetadata} from '@/seo/metadata'
import {coingeckoIds} from './db'

const assets = coingeckoIds.join(', ')

const title = 'Coingecko: etherium airdrop price checker (2024 edition)'
const description = `Etherium price checker (Edition: 2024). Coingecko API fetches the following crypto assets ${assets}`
const canonical = '/demos/dashboard-etherium-airdrops'

const props: InternalMetadata = {
  title,
  description,
  canonical,
}

export default props

export {title, description, canonical}
