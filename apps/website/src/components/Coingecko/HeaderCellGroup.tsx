'use client'

import {FC} from 'react'

import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'

import SortingTableHeaderCell from '@/components/Coingecko/SortingTableHeaderCell'

import SortingProps from '@/interfaces/coingecko/sorting/SortingProps'
import UICellParams from '@/types/coingecko/cells/UICellParams'

interface Props extends SortingProps {
  settings: UICellParams
  sortByLastUpdatedItem: SortingKey
  sortByHistoricItem: SortingKey
}

const HeaderCellGroup: FC<Props> = ({
  sorting,
  setSorting,
  settings,
  sortByLastUpdatedItem,
  sortByHistoricItem,
}) => {
  const {lastUpdatedItemParams, historicItemParams} = settings

  return (
    <>
      <SortingTableHeaderCell
        label={lastUpdatedItemParams.label}
        sortBy={sortByLastUpdatedItem}
        sorting={sorting}
        setSorting={setSorting}
        width={lastUpdatedItemParams.width}
        mobile={lastUpdatedItemParams.mobile}
      />

      <SortingTableHeaderCell
        label={historicItemParams.label}
        sortBy={sortByHistoricItem}
        sorting={sorting}
        setSorting={setSorting}
        mobile={historicItemParams.mobile}
        width={historicItemParams.width}
      />
    </>
  )
}

export default HeaderCellGroup
