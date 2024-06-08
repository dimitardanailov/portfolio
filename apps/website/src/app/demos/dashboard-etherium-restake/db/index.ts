import {CoingeckoSimplePriceRequest} from '@/types/coingecko/simplePrices/RequestParams'
import Currency from '@/enums/CoingeckoCryptoCurrency'

export function getCoingeckoRequestParams(): CoingeckoSimplePriceRequest {
  const coingeckoIds = [
    Currency.BTC,
    Currency.ETHEREUM,
    Currency.STETH,
    Currency.RETH,
    Currency.METH,
    Currency.RSETH,
    Currency.WEETH,
    Currency.EZETH,
    Currency.STONE,
    Currency.CBETH,
  ]

  return {
    ids: coingeckoIds.join(','),
    vs_currencies: 'usd,btc,eth',
    include_24hr_change: true,
    include_7d_change: true,
    include_last_updated_at: true,
  }
}
