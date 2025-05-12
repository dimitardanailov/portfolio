import {CoingeckoSimplePriceRequest} from '@/types/coingecko/simplePrices/RequestParams'
import Currency from '@/enums/CoingeckoCryptoCurrency'

export const coingeckoIds = [
  Currency.BTC,
  Currency.ETHEREUM,
  Currency.SOLANA,
  Currency.COSMOS,
  Currency.SAGA,
  Currency.DYMENSION,
  Currency.JUPITER,
  Currency.ENA,
  Currency.ETHFI,
  Currency.MANTA,
  Currency.SWELL_NETWORK,
  Currency.HYPERLANE,
  Currency.AVAIL,
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
