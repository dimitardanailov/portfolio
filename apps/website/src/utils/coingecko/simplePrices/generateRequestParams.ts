import {AxiosRequestConfig} from 'axios'

import {CoingeckoSimplePriceRequest} from '@/types/coingecko/simplePrices'

function generateRequestParams(
  params: CoingeckoSimplePriceRequest,
): AxiosRequestConfig {
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

  return options
}

export default generateRequestParams
