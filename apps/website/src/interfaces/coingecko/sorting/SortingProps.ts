import {Dispatch, SetStateAction} from 'react'

import Sorting from '@/types/coingecko/sorting/Sorting'

export interface Props {
  setSorting: Dispatch<SetStateAction<Sorting>>
  sorting: Sorting
}

export default Props
