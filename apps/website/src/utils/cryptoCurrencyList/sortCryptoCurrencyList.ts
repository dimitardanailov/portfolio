import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices/ResponseParams'
import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'
import Order from '@/enums/Order'

const sortPrices = (
  unsortedPrices: Array<CoingeckoSimplePriceResponse>,
  sortKey = SortingKey.USD,
  order = Order.ASC,
) => {
  return unsortedPrices.sort((a, b) => {
    if (a[sortKey] < b[sortKey]) {
      return order === Order.ASC ? 1 : -1
    }

    if (a[sortKey] > b[sortKey]) {
      return order === Order.ASC ? -1 : 1
    }

    return 0
  })
}

export default sortPrices
