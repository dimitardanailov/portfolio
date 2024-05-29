import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'
import calculateHistoricDiff from '@/utils/historic/calculateDiff'

class HistoricPrice {
  private _usd: number = 0
  private _btc: number = 0
  private _eth: number = 0

  get usd() {
    return this._usd
  }

  get btc() {
    return this._btc
  }

  get eth() {
    return this._eth
  }

  calculateHistoricDiff(item: CoingeckoSimplePriceResponse) {
    this._usd = calculateHistoricDiff(item.usd, item.usd_24h_change)
    this._btc = calculateHistoricDiff(item.btc, item.btc_24h_change)
    this._eth = calculateHistoricDiff(item.eth, item.eth_24h_change)
  }
}

export default HistoricPrice
