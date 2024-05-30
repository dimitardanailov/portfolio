import {useState, useEffect, Dispatch, SetStateAction, useCallback} from 'react'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'

import getPrices from '../utils/getPrices'
import {getCoingeckoRequestParams} from '../db'

function useCryptoCurrencyList(
  setPriceListNotifacationIsVisible: Dispatch<SetStateAction<boolean>>,
) {
  const [prices, setPrices] = useState<Array<CoingeckoSimplePriceResponse>>([])
  const params = getCoingeckoRequestParams()

  const apiRequest = useCallback(() => {
    getPrices(params).then(prices => {
      setPrices(prices)
      setPriceListNotifacationIsVisible(true)

      setTimeout(() => {
        setPriceListNotifacationIsVisible(false)
      }, 3000)
    })
  }, [setPrices, setPriceListNotifacationIsVisible, params])

  useEffect(() => {
    if (prices.length === 0) {
      setPriceListNotifacationIsVisible(false)
      apiRequest()
    }
  }, [prices, apiRequest, setPriceListNotifacationIsVisible])

  return {
    prices,
    setPrices,
    apiRequest,
  }
}

export default useCryptoCurrencyList
