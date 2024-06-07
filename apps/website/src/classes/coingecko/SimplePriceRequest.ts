import axios, {AxiosResponse} from 'axios'

import {
  CoingeckoSimplePriceRequest,
  CoingeckoSimplePriceResponse,
} from '@/types/coingecko/simplePrices'
import generateRequestParams from '@/utils/coingecko/simplePrices/generateRequestParams'

class SimplePriceRequest {
  params: CoingeckoSimplePriceRequest

  constructor(params: CoingeckoSimplePriceRequest) {
    this.params = params
  }

  async execute(): Promise<Array<CoingeckoSimplePriceResponse>> {
    const options = generateRequestParams(this.params)

    const promise: Promise<Array<CoingeckoSimplePriceResponse>> = new Promise(
      (resolve, reject) => {
        axios
          .request(options)
          .then(function (response: AxiosResponse) {
            const keys = Object.keys(response.data)

            const coingeckoPrices: Array<CoingeckoSimplePriceResponse> =
              keys.map(key => {
                const item = response.data[key]
                const cryptoCurrency = key

                const btc = item.btc || 0
                const eth = item.eth || 0
                const usd = item.usd || 0
                const btc_24h_change = item.btc_24h_change || 0
                const eth_24h_change = item.eth_24h_change || 0
                const usd_24h_change = item.usd_24h_change || 0

                return {
                  cryptoCurrency,
                  btc: btc,
                  usd: usd,
                  eth: eth,
                  btc_24h_change,
                  eth_24h_change,
                  usd_24h_change,
                }
              })

            resolve(coingeckoPrices)
          })
          .catch(function (error) {
            console.error('prices ...', error)
            reject(error)
          })
      },
    )

    return promise
  }
}

export default SimplePriceRequest
