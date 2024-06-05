/**
 * Docs:
 * https://docs.coingecko.com/v3.0.1/reference/simple-price
 */
export type CoingeckoSimplePriceRequest = {
  ids: string
  vs_currencies: string
  include_24hr_change: boolean
  include_7d_change: boolean
  include_last_updated_at: boolean
}
