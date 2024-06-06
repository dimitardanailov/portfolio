'use client'

import {FC} from 'react'

import HistoricPrice from '@/classes/HistoricPrice'
import {TableCell} from '@/styled-components/Coingecko'
import PriceComparing from '../PriceComparing'
import pricePercentFormat from '@/utils/format/pricePercentFormat'

import Props from './shared'
import CoinbaseIcon from '@/components/Icons/Coinbase'

const ETHTableRow: FC<Props> = ({item, settings}) => {
  const historicPrice = new HistoricPrice()
  historicPrice.calculateHistoricDiff(item)

  return (
    <>
      <TableCell
        width={settings.lastUpdatedItemParams.width}
        mobile={settings.lastUpdatedItemParams.mobile}
      >
        {item.eth !== 1 && item.eth.toFixed(5)}
      </TableCell>
      <TableCell
        width={settings.historicItemParams.width}
        mobile={settings.historicItemParams.mobile}
      >
        <PriceComparing percent={item.eth_24h_change}>
          <CoinbaseIcon cryptoCurrency={item.cryptoCurrency} />
          <span title={historicPrice.eth.toString()}>
            {pricePercentFormat(item.eth_24h_change)}
          </span>
        </PriceComparing>
      </TableCell>
    </>
  )
}

export default ETHTableRow
