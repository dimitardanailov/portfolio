import {UICellParams} from '@/types/coingecko/cells'
import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'

interface Props {
  item: CoingeckoSimplePriceResponse
  settings: UICellParams
}

export default Props
