import {CoingeckoSimplePriceRequest} from '@/types/coingecko/simplePrices/RequestParams'
import Currency from '@/enums/CoingeckoCryptoCurrency'

export function getCoingeckoRequestParams(): CoingeckoSimplePriceRequest {
  const coingeckoIds = [
    Currency.BTC,
    Currency.ETHEREUM,
    Currency.SOLANA,
    Currency.DRIFT_PROTOCOL,
    Currency.JUPITER,
    Currency.WEN_SOLANA,
    Currency.WORMHOLE,
    Currency.PARCL,
  ]

  return {
    ids: coingeckoIds.join(','),
    vs_currencies: 'usd',
    include_24hr_change: true,
    include_7d_change: true,
    include_last_updated_at: true,
  }
}
