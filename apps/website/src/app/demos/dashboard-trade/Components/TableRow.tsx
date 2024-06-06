'use client'

import {FC} from 'react'

import CoinbaseIcon from '@/components/Icons/Coinbase'
import PriceComparing from '@/components/Coingecko/PriceComparing'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'
import HistoricPrice from '@/classes/HistoricPrice'

import {TableRow, CoinCell, TableCell} from '@/styled-components/Coingecko'
import {
  coinCellParams,
  usdCellParams,
  btcCellParams,
  ethCellParams,
} from '../setting'
import pricePercentFormat from '@/utils/format/pricePercentFormat'

import {CryptoIcon} from '@/styled-components/Coingecko/components'
import USDTableRow from '@/components/Coingecko/USDTableRow'

export interface Props {
  item: CoingeckoSimplePriceResponse
}

const CoingeckoTableRow: FC<Props> = ({item}) => {
  const historicPrice = new HistoricPrice()
  historicPrice.calculateHistoricDiff(item)

  const icon = `/icons/crypto/${item.cryptoCurrency}.svg`

  return (
    <TableRow>
      <CoinCell width={coinCellParams.width}>
        <CryptoIcon src={icon} title={item.cryptoCurrency} />
      </CoinCell>
      <USDTableRow item={item} settings={usdCellParams} />
      <TableCell
        width={btcCellParams.lastUpdatedItemParams.width}
        mobile={btcCellParams.lastUpdatedItemParams.mobile}
      >
        {item.btc !== 1 && item.btc.toFixed(5)}
      </TableCell>
      <TableCell
        width={btcCellParams.historicItemParams.width}
        mobile={btcCellParams.historicItemParams.mobile}
      >
        <PriceComparing percent={item.btc_24h_change}>
          <span title={historicPrice.btc.toString()}>
            {pricePercentFormat(item.btc_24h_change)}
          </span>
        </PriceComparing>
      </TableCell>
      <TableCell
        width={ethCellParams.lastUpdatedItemParams.width}
        mobile={ethCellParams.lastUpdatedItemParams.mobile}
      >
        {item.eth !== 1 && item.eth.toFixed(5)}
      </TableCell>
      <TableCell
        width={ethCellParams.historicItemParams.width}
        mobile={ethCellParams.historicItemParams.mobile}
      >
        <PriceComparing percent={item.eth_24h_change}>
          <CoinbaseIcon cryptoCurrency={item.cryptoCurrency} />
          <span title={historicPrice.eth.toString()}>
            {pricePercentFormat(item.eth_24h_change)}
          </span>
        </PriceComparing>
      </TableCell>
    </TableRow>
  )
}

export default CoingeckoTableRow
