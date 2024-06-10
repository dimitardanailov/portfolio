import {CoingeckoSimplePriceRequest} from '@/types/coingecko/simplePrices/RequestParams'
import Currency from '@/enums/CoingeckoCryptoCurrency'

export function getCoingeckoRequestParams(): CoingeckoSimplePriceRequest {
  const coingeckoIds = [
    Currency.BTC,
    Currency.ETHEREUM,
    Currency.ENA,
    Currency.ETHFI,
    Currency.REZ,
    Currency.MANTA,
  ]

  return {
    ids: coingeckoIds.join(','),
    vs_currencies: 'usd',
    include_24hr_change: true,
    include_7d_change: true,
    include_last_updated_at: true,
  }
}
