'use client'

import {FC} from 'react'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'

import CoingeckoTableRow from './TableRow'

export interface Props {
  items: Array<CoingeckoSimplePriceResponse>
}

const CoingeckoTableBody: FC<Props> = ({items}) => {
  const listItems = items.map(
    (item: CoingeckoSimplePriceResponse, index: number) => (
      <li key={index} className="list-none">
        <CoingeckoTableRow item={item} />
      </li>
    ),
  )

  return <>{listItems}</>
}

export default CoingeckoTableBody
