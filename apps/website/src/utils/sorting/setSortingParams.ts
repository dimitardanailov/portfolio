import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'
import Sorting from '@/types/coingecko/sorting/Sorting'
import Order from '@/enums/Order'

function setSortingParams(sortBy: SortingKey, sorting: Sorting): Sorting {
  const column = sortBy
  let orderBy: Order

  if (sortBy === sorting.column) {
    if (sorting.orderBy === Order.DESC) {
      orderBy = Order.ASC
    } else {
      orderBy = Order.DESC
    }
  } else {
    orderBy = Order.DESC
  }

  return {
    column,
    orderBy,
  }
}

export default setSortingParams
