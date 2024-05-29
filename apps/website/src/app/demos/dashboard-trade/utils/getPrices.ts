import axios from 'axios'

import {
  CoingeckoSimplePriceRequest,
  CoingeckoSimplePriceResponse,
} from '@/types/coingecko/simplePrices'

function getPrices(
  params: CoingeckoSimplePriceRequest,
): Promise<Array<CoingeckoSimplePriceResponse>> {
  const domain = process.env.NEXT_PUBLIC_COINGECKO_DOMAIN
  const key = process.env.NEXT_PUBLIC_COINGECKO_API_KEY

  const url = `${domain}/simple/price`

  const options = {
    method: 'GET',
    url,
    params: params,
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': key,
    },
  }

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

          console.log('axios.prices', coingeckoPrices)

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
