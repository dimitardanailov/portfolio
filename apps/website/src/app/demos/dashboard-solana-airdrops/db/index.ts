import {CoingeckoSimplePriceRequest} from '@/types/coingecko/simplePrices/RequestParams'
import Currency from '@/enums/CoingeckoCryptoCurrency'

export const coingeckoIds = [
  Currency.BTC,
  Currency.ETHEREUM,
  Currency.SOLANA,
  Currency.DRIFT_PROTOCOL,
  Currency.JUPITER,
  Currency.WEN_SOLANA,
  Currency.WORMHOLE,
  Currency.PARCL,
  Currency.JITO_GOVERNANCE_TOKEN,
  Currency.PYTH_NETWORK,
  Currency.KAMINO,
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
