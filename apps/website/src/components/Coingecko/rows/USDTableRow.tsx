'use client'

import {FC} from 'react'

import HistoricPrice from '@/classes/HistoricPrice'
import {PriceUSDCell, TableCell} from '@/styled-components/Coingecko'
import PriceComparing from '../PriceComparing'
import pricePercentFormat from '@/utils/format/pricePercentFormat'

import Props from './shared'

const USDTableRow: FC<Props> = ({item, settings}) => {
  const historicPrice = new HistoricPrice()
  historicPrice.calculateHistoricDiff(item)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const priceValue = formatter.format(item.usd)
  const {lastUpdatedItemParams, historicItemParams} = settings

  return (
    <>
      <PriceUSDCell
        width={lastUpdatedItemParams.width}
        mobile={lastUpdatedItemParams.mobile}
      >
        {priceValue}
      </PriceUSDCell>
      <TableCell
        width={historicItemParams.width}
        mobile={historicItemParams.mobile}
      >
        <PriceComparing percent={item.usd_24h_change}>
          <span>{pricePercentFormat(item.usd_24h_change)}</span>
          <span>({formatter.format(historicPrice.usd)})</span>
        </PriceComparing>
      </TableCell>
    </>
  )
}

export default USDTableRow
