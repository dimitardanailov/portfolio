import {MouseDatasetEventHandler} from '@/types/ui/DatasetEvent'

const handlerSortPrices = async (event: MouseDatasetEventHandler) => {
  const {sort} = event.target.dataset

  console.log('sort', sort)
}

export default handlerSortPrices
