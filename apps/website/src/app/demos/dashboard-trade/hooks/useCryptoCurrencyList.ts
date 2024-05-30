import {useState, useEffect, Dispatch, SetStateAction} from 'react'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'

import getPrices from '../utils/getPrices'
import {getCoingeckoRequestParams} from '../db'

function useCryptoCurrencyList(
  setPriceListNotifacationIsVisible: Dispatch<SetStateAction<boolean>>,
) {
  const [prices, setPrices] = useState<Array<CoingeckoSimplePriceResponse>>([])

  const apiRequest = () => {
    getPrices(getCoingeckoRequestParams()).then(prices => {
      setPrices(prices)
      setPriceListNotifacationIsVisible(true)

      setTimeout(() => {
        setPriceListNotifacationIsVisible(false)
      }, 3000)
    })
  }

  useEffect(() => {
    if (prices.length === 0) {
      setPriceListNotifacationIsVisible(false)
      apiRequest()
    }
  })

  return {
    prices,
    setPrices,
    apiRequest,
  }
}

export default useCryptoCurrencyList
