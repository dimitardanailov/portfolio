import axios from 'axios'

import {CoingeckoSimplePriceRequest} from '@/types/coingecko/simplePrices'

import generateRequestParams from '@/utils/coingecko/simplePrices/generateRequestParams'

function getPrices(params: CoingeckoSimplePriceRequest) {
  const options = generateRequestParams(params)

  const promise = new Promise((resolve, reject) => {
    axios
      .request(options)
      .then(function (response) {
        const keys = Object.keys(response.data)

        const coingeckoPrices = keys.map(key => {
          const item = response.data[key]
          return {
            cryptoCurrency: key,
            usd: item.usd,
            usd_24h_change: item.usd_24h_change,
          }
        })

        resolve(coingeckoPrices)
      })
      .catch(function (error) {
        console.error('prices ...', error)
        reject(error)
      })
  })

  return promise
}

export default getPrices
