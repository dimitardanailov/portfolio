'use client'

import {FC} from 'react'

import {TableHeader, CoinCell} from '@/styled-components/Coingecko/Table'

import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'

import SortingTableHeaderCell from '@/components/Coingecko/SortingTableHeaderCell'

import Props from '@/interfaces/coingecko/sorting/SortingProps'

import HeaderCellGroup from '@/components/Coingecko/HeaderCellGroup'

import {dimensions, usdCellParams, btcCellParams} from '../setting'

const ETHCells: FC<Props> = ({sorting, setSorting}) => {
  const {price, priceChanged} = dimensions.eth

  return (
    <>
      <SortingTableHeaderCell
        label="ETH"
        sortBy={SortingKey.ETH}
        sorting={sorting}
        setSorting={setSorting}
        width={price.width}
        mobile={price.mobile}
      />

      <SortingTableHeaderCell
        label="Day ago"
        sortBy={SortingKey.ETH_HISTORY}
        sorting={sorting}
        setSorting={setSorting}
        width={priceChanged.width}
        mobile={priceChanged.mobile}
      />
    </>
  )
}

const CoingeckoTableHeader: FC<Props> = ({sorting, setSorting}) => {
  const {coin} = dimensions

  return (
    <TableHeader>
      <CoinCell width={coin.width}>Coin</CoinCell>
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

      <ETHCells setSorting={setSorting} sorting={sorting} />
    </TableHeader>
  )
}

export default CoingeckoTableHeader
