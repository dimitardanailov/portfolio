import {useState, useEffect, Dispatch, SetStateAction, useCallback} from 'react'

import {
  CoingeckoSimplePriceRequest,
  CoingeckoSimplePriceResponse,
} from '@/types/coingecko/simplePrices'

import SimplePriceRequest from '@/classes/coingecko/SimplePriceRequest'

type Props = {
  setPriceListNotifacationIsVisible: Dispatch<SetStateAction<boolean>>
  params: CoingeckoSimplePriceRequest
}

function useCryptoCurrencyList({
  setPriceListNotifacationIsVisible,
  params,
}: Props) {
  const [prices, setPrices] = useState<Array<CoingeckoSimplePriceResponse>>([])

  const apiRequest = useCallback(() => {
    const request = new SimplePriceRequest()
    request.execute(params).then(prices => {
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
