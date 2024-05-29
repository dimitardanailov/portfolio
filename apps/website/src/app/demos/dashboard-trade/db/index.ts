import {CoingeckoSimplePriceRequest} from '@/types/coingecko/simplePrices/RequestParams'
import Currency from '@/enums/CoingeckoCryptoCurrency'

export function getCoingeckoRequestParams(): CoingeckoSimplePriceRequest {
  const coingeckoIds = [
    Currency.BTC,
    Currency.ETHEREUM,
    Currency.SOLANA,
    Currency.CHAINLINK,
    Currency.POLYGON,
    Currency.NEAR,
    Currency.COSMOS,
    Currency.POLKADOT,
  ]

  return {
    ids: coingeckoIds.join(','),
    vs_currencies: 'btc,usd,eth',
    include_24hr_change: true,
    include_7d_change: true,
    include_last_updated_at: true,
  }
}
