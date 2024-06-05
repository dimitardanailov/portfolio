import axios from 'axios'

import {
  CoingeckoSimplePriceRequest,
  CoingeckoSimplePriceResponse,
} from '@/types/coingecko/simplePrices'

import generateRequestParams from '@/utils/coingecko/simplePrices/generateRequestParams'

function getPrices(
  params: CoingeckoSimplePriceRequest,
): Promise<Array<CoingeckoSimplePriceResponse>> {
  const options = generateRequestParams(params)

  const promise: Promise<Array<CoingeckoSimplePriceResponse>> = new Promise(
    (resolve, reject) => {
      axios
        .request(options)
        .then(function (response) {
          const keys = Object.keys(response.data)

          const coingeckoPrices: Array<CoingeckoSimplePriceResponse> = keys.map(
            key => {
              const item = response.data[key]
              return {
                cryptoCurrency: key,
                btc: item.btc,
                usd: item.usd,
                eth: item.eth,
                btc_24h_change: item.btc_24h_change,
                eth_24h_change: item.eth_24h_change,
                usd_24h_change: item.usd_24h_change,
              }
            },
          )

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

export default getPrices
