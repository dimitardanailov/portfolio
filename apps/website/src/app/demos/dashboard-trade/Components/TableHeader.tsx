'use client'

import {FC} from 'react'

import {TableHeader, CoinCell} from '@/styled-components/Coingecko/Table'

import SortingKey from '@/enums/cryptoCurrencyList/SortingKey'

import SortingProps from '@/interfaces/coingecko/sorting/SortingProps'

import HeaderCellGroup from '@/components/Coingecko/HeaderCellGroup'

import {UICoinCellParams, UICellParams} from '@/types/coingecko/cells'

interface Props extends SortingProps {
  coinCellParams?: UICoinCellParams
  usdCellParams?: UICellParams
  btcCellParams?: UICellParams
  ethCellParams?: UICellParams
}

const CoingeckoTableHeader: FC<Props> = ({
  sorting,
  setSorting,
  coinCellParams,
  usdCellParams,
  btcCellParams,
  ethCellParams,
}) => {
  return (
    <TableHeader>
      {coinCellParams && <CoinCell width={coinCellParams.width}>Coin</CoinCell>}
      {usdCellParams && (
        <HeaderCellGroup
          setSorting={setSorting}
          sorting={sorting}
          settings={usdCellParams}
          sortByLastUpdatedItem={SortingKey.USD}
          sortByHistoricItem={SortingKey.USD_HISTORY}
        />
      )}
      {btcCellParams && (
        <HeaderCellGroup
          setSorting={setSorting}
          sorting={sorting}
          settings={btcCellParams}
          sortByLastUpdatedItem={SortingKey.BTC}
          sortByHistoricItem={SortingKey.BTC_HISTORY}
        />
      )}
      {ethCellParams && (
        <HeaderCellGroup
          setSorting={setSorting}
          sorting={sorting}
          settings={ethCellParams}
          sortByLastUpdatedItem={SortingKey.ETH}
          sortByHistoricItem={SortingKey.ETH_HISTORY}
        />
      )}
    </TableHeader>
  )
}

export default CoingeckoTableHeader
