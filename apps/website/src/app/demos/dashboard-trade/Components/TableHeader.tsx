'use client'

import {FC} from 'react'

import {TableHeader, CoinCell} from '@/styled-components/Coingecko/Table'

import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'

import SortingTableHeaderCell from '@/components/Coingecko/SortingTableHeaderCell'

import Props from '@/interfaces/coingecko/sorting/SortingProps'

import {dimensions, usdCellParams} from '../setting'
import USDHeaderCell from '@/components/Coingecko/USDHeaderCell'

const BTCCells: FC<Props> = ({sorting, setSorting}) => {
  const {price, priceChanged} = dimensions.btc

  return (
    <>
      <SortingTableHeaderCell
        label="BTC"
        sortBy={SortingKey.BTC}
        sorting={sorting}
        setSorting={setSorting}
        width={price.width}
        mobile={price.mobile}
      />

      <SortingTableHeaderCell
        label="Day ago"
        sortBy={SortingKey.BTC_HISTORY}
        sorting={sorting}
        setSorting={setSorting}
        width={priceChanged.width}
        mobile={priceChanged.mobile}
      />
    </>
  )
}

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
      <USDHeaderCell
        setSorting={setSorting}
        sorting={sorting}
        settings={usdCellParams}
      />
      <BTCCells setSorting={setSorting} sorting={sorting} />
      <ETHCells setSorting={setSorting} sorting={sorting} />
    </TableHeader>
  )
}

export default CoingeckoTableHeader
