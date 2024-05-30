import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'
import Order from '@/enums/Order'

type Sorting = {
  column: SortingKey
  orderBy: Order
}

export default Sorting
