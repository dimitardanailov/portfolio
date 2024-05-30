import {useState, useEffect} from 'react'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'

import getPrices from '../utils/getPrices'
import {getCoingeckoRequestParams} from '../db'

function useCryptoCurrencyList() {
  const [prices, setPrices] = useState<Array<CoingeckoSimplePriceResponse>>([])

  useEffect(() => {
    if (prices.length === 0) {
      getPrices(getCoingeckoRequestParams()).then(prices => {
        setPrices(prices)
      })
    }
  }, [prices.length, prices])

  return {
    prices,
    setPrices,
  }
}

export default useCryptoCurrencyList
