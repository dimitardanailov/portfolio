'use client'

import {FC} from 'react'

import HistoricPrice from '@/classes/HistoricPrice'
import {TableCell} from '@/styled-components/Coingecko'
import PriceComparing from '../PriceComparing'
import pricePercentFormat from '@/utils/format/pricePercentFormat'

import Props from './shared'

const BTCTableRow: FC<Props> = ({item, settings}) => {
  const historicPrice = new HistoricPrice()
  historicPrice.calculateHistoricDiff(item)

  return (
    <>
      <TableCell
        width={settings.lastUpdatedItemParams.width}
        mobile={settings.lastUpdatedItemParams.mobile}
      >
        {item.btc !== 1 && item.btc.toFixed(5)}
      </TableCell>
      <TableCell
        width={settings.historicItemParams.width}
        mobile={settings.historicItemParams.mobile}
      >
        <PriceComparing percent={item.btc_24h_change}>
          <span title={historicPrice.btc.toString()}>
            {pricePercentFormat(item.btc_24h_change)}
          </span>
        </PriceComparing>
      </TableCell>
    </>
  )
}

export default BTCTableRow
