'use client'

import {FC} from 'react'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'

import UIComponentProps from '@/types/coingecko/cells/UIComponentProps'

import {TableRow} from '@/components/Coingecko/rows'

type Props = {
  items: Array<CoingeckoSimplePriceResponse>
} & UIComponentProps

const CoingeckoTableBody: FC<Props> = ({
  items,
  coinCellParams,
  usdCellParams,
  btcCellParams,
  ethCellParams,
}) => {
  const listItems = items.map(
    (item: CoingeckoSimplePriceResponse, index: number) => (
      <li key={index} className="list-none">
        <TableRow
          item={item}
          coinCellParams={coinCellParams}
          usdCellParams={usdCellParams}
          btcCellParams={btcCellParams}
          ethCellParams={ethCellParams}
        />
      </li>
    ),
  )

  return <>{listItems}</>
}

export default CoingeckoTableBody
