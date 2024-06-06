'use client'

import {FC} from 'react'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'
import HistoricPrice from '@/classes/HistoricPrice'

import UIComponentProps from '@/types/coingecko/cells/UIComponentProps'

import {TableRow, CoinCell} from '@/styled-components/Coingecko'

import {CryptoIcon} from '@/styled-components/Coingecko/components'
import {
  USDTableRow,
  BTCTableRow,
  ETHTableRow,
} from '@/components/Coingecko/rows'

type Props = {
  item: CoingeckoSimplePriceResponse
} & UIComponentProps

const CoingeckoTableRow: FC<Props> = ({
  item,
  coinCellParams,
  usdCellParams,
  btcCellParams,
  ethCellParams,
}) => {
  const historicPrice = new HistoricPrice()
  historicPrice.calculateHistoricDiff(item)

  const icon = `/icons/crypto/${item.cryptoCurrency}.svg`

  return (
    <TableRow>
      {coinCellParams && (
        <CoinCell width={coinCellParams.width}>
          <CryptoIcon src={icon} title={item.cryptoCurrency} />
        </CoinCell>
      )}

      {usdCellParams && <USDTableRow item={item} settings={usdCellParams} />}
      {btcCellParams && <BTCTableRow item={item} settings={btcCellParams} />}
      {ethCellParams && <ETHTableRow item={item} settings={ethCellParams} />}
    </TableRow>
  )
}

export default CoingeckoTableRow
