'use client'

import {FC} from 'react'

import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'

import SortingTableHeaderCell from '@/components/Coingecko/SortingTableHeaderCell'

import SortingProps from '@/interfaces/coingecko/sorting/SortingProps'
import UICellParams from '@/types/coingecko/cells/UICellParams'

interface Props extends SortingProps {
  settings: UICellParams
}

const USDHeaderCell: FC<Props> = ({sorting, setSorting, settings}) => {
  const {lastUpdatedItemParams, historicItemParams} = settings

  return (
    <>
      <SortingTableHeaderCell
        label={lastUpdatedItemParams.label}
        sortBy={SortingKey.USD}
        sorting={sorting}
        setSorting={setSorting}
        width={lastUpdatedItemParams.width}
        mobile={lastUpdatedItemParams.mobile}
      />

      <SortingTableHeaderCell
        label={historicItemParams.label}
        sortBy={SortingKey.USD_HISTORY}
        sorting={sorting}
        setSorting={setSorting}
        mobile={historicItemParams.mobile}
        width={historicItemParams.width}
      />
    </>
  )
}

export default USDHeaderCell
