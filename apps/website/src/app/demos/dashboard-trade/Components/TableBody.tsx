'use client'

import {FC} from 'react'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'

export interface Props {
  prices: Array<CoingeckoSimplePriceResponse>
}

const CoingeckoTableBody: FC<Props> = ({prices}) => {
  const listItems = prices.map(
    (prices: CoingeckoSimplePriceResponse, index: number) => (
      <li key={index}>{prices.cryptoCurrency}</li>
    ),
  )

  return <>{listItems}</>
}

export default CoingeckoTableBody
