import {CoingeckoSimplePriceRequest} from '@/types/coingecko/simplePrices/RequestParams'
import Currency from '@/enums/CoingeckoCryptoCurrency'

export const coingeckoIds = [
  Currency.BTC,
  Currency.COSMOS,
  Currency.INJECTIVE,
  Currency.CELESTIA,
]

export function getCoingeckoRequestParams(): CoingeckoSimplePriceRequest {
  return {
    ids: coingeckoIds.join(','),
    vs_currencies: 'usd',
    include_24hr_change: true,
    include_7d_change: true,
    include_last_updated_at: true,
  }
}
