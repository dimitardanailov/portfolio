'use client'

import {FC} from 'react'

import {TableHeader, CoinCell} from '@/styled-components/Coingecko/Table'

import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'

import Props from '@/interfaces/coingecko/sorting/SortingProps'

import HeaderCellGroup from '@/components/Coingecko/HeaderCellGroup'

import {
  coinCellParams,
  usdCellParams,
  btcCellParams,
  ethCellParams,
} from '../setting'

const CoingeckoTableHeader: FC<Props> = ({sorting, setSorting}) => {
  return (
    <TableHeader>
      <CoinCell width={coinCellParams.width}>Coin</CoinCell>
      <HeaderCellGroup
        setSorting={setSorting}
        sorting={sorting}
        settings={usdCellParams}
        sortByLastUpdatedItem={SortingKey.USD}
        sortByHistoricItem={SortingKey.USD_HISTORY}
      />
      <HeaderCellGroup
        setSorting={setSorting}
        sorting={sorting}
        settings={btcCellParams}
        sortByLastUpdatedItem={SortingKey.BTC}
        sortByHistoricItem={SortingKey.BTC_HISTORY}
      />

      <HeaderCellGroup
        setSorting={setSorting}
        sorting={sorting}
        settings={ethCellParams}
        sortByLastUpdatedItem={SortingKey.ETH}
        sortByHistoricItem={SortingKey.ETH_HISTORY}
      />
    </TableHeader>
  )
}

export default CoingeckoTableHeader
