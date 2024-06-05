import {Dispatch, SetStateAction} from 'react'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'
import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'
import Order from '@/enums/Order'
import sortPrices from '@/utils/cryptoCurrencyList/sortCryptoCurrencyList'

interface Props {
  unsortedPrices: Array<CoingeckoSimplePriceResponse>
  sortKey: SortingKey
  order: Order
  setPrices: Dispatch<SetStateAction<CoingeckoSimplePriceResponse[]>>
  setPriceListNotifacationIsVisible: Dispatch<SetStateAction<boolean>>
}

function updatePriceAndUI({
  unsortedPrices,
  sortKey,
  order,
  setPrices,
  setPriceListNotifacationIsVisible,
}: Props) {
  const sortedPrices = sortPrices(unsortedPrices, sortKey, order)
  setPrices(sortedPrices)

  setPriceListNotifacationIsVisible(true)
  setTimeout(() => {
    setPriceListNotifacationIsVisible(false)
  }, 1500)
}

export default updatePriceAndUI
