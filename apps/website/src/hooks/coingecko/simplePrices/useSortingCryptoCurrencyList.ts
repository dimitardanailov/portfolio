import {useState, useEffect, Dispatch, SetStateAction} from 'react'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'

import Sorting from '@/types/coingecko/sorting/Sorting'
import updatePriceAndUI from '@/utils/coingecko/ui/updatePriceAndUI'

import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'
import Order from '@/enums/Order'

interface Props {
  prices: Array<CoingeckoSimplePriceResponse>
  setPrices: Dispatch<SetStateAction<CoingeckoSimplePriceResponse[]>>
  setPriceListNotifacationIsVisible: Dispatch<SetStateAction<boolean>>
}

function useSortingCryptoCurrencyList({
  prices,
  setPrices,
  setPriceListNotifacationIsVisible,
}: Props) {
  const [sorting, setSorting] = useState<Sorting>({
    column: SortingKey.USD,
    orderBy: Order.ASC,
  })

  useEffect(() => {
    if (prices.length > 0) {
      updatePriceAndUI({
        unsortedPrices: prices,
        sortKey: sorting.column,
        order: sorting.orderBy,
        setPrices: setPrices,
        setPriceListNotifacationIsVisible,
      })
    }
  }, [sorting, prices, setPrices, setPriceListNotifacationIsVisible])

  return {
    sorting,
    setSorting,
  }
}

export default useSortingCryptoCurrencyList
