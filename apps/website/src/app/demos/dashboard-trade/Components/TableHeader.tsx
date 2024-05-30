'use client'

import {Dispatch, FC, SetStateAction} from 'react'

import {TableHeader, TableCell, CoinCell, PriceUSDCell} from '../styled'

import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'

import {dimensions} from '../setting'
import SortingTableHeaderCell from './SortingTableHeaderCell'
import Sorting from '../types/Sorting'

export interface Props {
  setSorting: Dispatch<SetStateAction<Sorting>>
  sorting: Sorting
}

const USDCells: FC<Props> = ({sorting, setSorting}) => {
  const {price, priceChanged} = dimensions.usd

  return (
    <>
      <SortingTableHeaderCell
        label="usd"
        sortBy={SortingKey.USD}
        sorting={sorting}
        setSorting={setSorting}
        width={price.width}
      />

      <SortingTableHeaderCell
        label="Day ago"
        sortBy={SortingKey.USD_HISTORY}
        sorting={sorting}
        setSorting={setSorting}
        width={priceChanged.width}
      />
    </>
  )
}

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
      />

      <SortingTableHeaderCell
        label="Day ago"
        sortBy={SortingKey.BTC_HISTORY}
        sorting={sorting}
        setSorting={setSorting}
        width={priceChanged.width}
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
      />

      <SortingTableHeaderCell
        label="Day ago"
        sortBy={SortingKey.ETH_HISTORY}
        sorting={sorting}
        setSorting={setSorting}
        width={priceChanged.width}
      />
    </>
  )
}

const CoingeckoTableHeader: FC<Props> = ({sorting, setSorting}) => {
  const {coin} = dimensions

  return (
    <TableHeader>
      <CoinCell width={coin.width}>Coin</CoinCell>
      <USDCells setSorting={setSorting} sorting={sorting} />
      <BTCCells setSorting={setSorting} sorting={sorting} />
      <ETHCells setSorting={setSorting} sorting={sorting} />
    </TableHeader>
  )
}

export default CoingeckoTableHeader
