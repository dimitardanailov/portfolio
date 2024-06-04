'use client'

import {FC} from 'react'

import {TableCell} from '@/styled-components/Coingecko/'

import {Props as SharedProps} from './TableHeader'
import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'
import setSortingParams from '../utils/setSortingParams'
import MobileSortingCellParams from '@/types/coingecko/cells/MobileSortingCellParams'

const title = 'sort'
const cursor = 'pointer'

interface Props extends SharedProps {
  width: string
  label: string
  sortBy: SortingKey
  mobile?: MobileSortingCellParams
}

const SortingTableHeaderCell: FC<Props> = ({
  sortBy,
  sorting,
  setSorting,
  width,
  label,
  mobile,
}) => {
  const onClickHandler = () => {
    const updatedSorting = setSortingParams(sortBy, sorting)
    setSorting(updatedSorting)
  }

  return (
    <TableCell
      title={title}
      cursor={cursor}
      width={width}
      mobile={mobile}
      onClick={onClickHandler}
    >
      {label}
    </TableCell>
  )
}

export default SortingTableHeaderCell
