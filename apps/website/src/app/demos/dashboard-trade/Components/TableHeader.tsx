'use client'

import {FC} from 'react'

import {TableHeader, TableCell, CoinCell, PriceUSDCell} from '../styled'

import {PriceConfigurations, dimensions} from '../setting'
import {MouseDatasetEventHandler} from '@/types/ui/DatasetEvent'

const title = 'sort'
const cursor = 'pointer'

interface Props {
  handlerSortPrices: () => void
}

const USDCells: FC<Props> = ({handlerSortPrices}) => {
  const {price, priceChanged} = dimensions.usd

  return (
    <>
      <PriceUSDCell
        title={title}
        cursor={cursor}
        data-sort={PriceConfigurations.USD}
        width={price.width}
        onClick={handlerSortPrices}
      >
        USD
      </PriceUSDCell>
      <TableCell
        title={title}
        cursor={title}
        data-sort={PriceConfigurations.USD_HISTORY}
        width={priceChanged.width}
      >
        Historic
      </TableCell>
    </>
  )
}

const BTCCells: FC<Props> = ({handlerSortPrices}) => {
  const {price, priceChanged} = dimensions.btc

  return (
    <>
      <TableCell width={price.width}>BTC</TableCell>
      <TableCell
        title={title}
        cursor={cursor}
        data-sort={PriceConfigurations.BTC_HISTORY}
        width={priceChanged.width}
        onClick={handlerSortPrices}
      >
        Historic
      </TableCell>
    </>
  )
}

const ETHCells: FC<Props> = ({handlerSortPrices}) => {
  const {price, priceChanged} = dimensions.eth

  return (
    <>
      <TableCell width={price.width}>ETH</TableCell>
      <TableCell
        title={title}
        cursor={cursor}
        data-sort={PriceConfigurations.USD_HISTORY}
        width={priceChanged.width}
        onClick={handlerSortPrices}
      >
        Historic price
      </TableCell>
    </>
  )
}

const CoingeckoTableHeader: FC<Props> = ({handlerSortPrices}) => {
  const {coin} = dimensions

  return (
    <TableHeader>
      <CoinCell width={coin.width}>Coin</CoinCell>
      <USDCells handlerSortPrices={handlerSortPrices} />
      <BTCCells handlerSortPrices={handlerSortPrices} />
      <ETHCells handlerSortPrices={handlerSortPrices} />
    </TableHeader>
  )
}

export default CoingeckoTableHeader
