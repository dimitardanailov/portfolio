'use client'

import {useState} from 'react'

import Collapse from '@mui/material/Collapse'

import AdaptiveGridTwoEqualItems from '@/components/AdaptiveGrid/TwoEqualItems'

import TableBody from '@/components/Coingecko/TableBody'
import TableHeader from '@/components/Coingecko/TableHeader'
import CustomAlert from '@/components/Coingecko/CustomAlert'
import PageHeaderContainer from '@/components/Coingecko/PageHeaderContainer'

import {Slogan} from '@/styled-components'
import Table from '@/styled-components/Coingecko/Table/Table'

import {
  useCryptoCurrencyList,
  useSortingCryptoCurrencyList,
} from '@/hooks/coingecko/simplePrices'

import {getCoingeckoRequestParams} from './db'

import stack from './stack'

import {coinCellParams, usdCellParams} from './setting'

const Content = () => {
  const [priceListNotifacationIsVisible, setPriceListNotifacationIsVisible] =
    useState(false)

  const params = getCoingeckoRequestParams()
  const {prices, setPrices, apiRequest} = useCryptoCurrencyList({
    setPriceListNotifacationIsVisible,
    params,
  })

  const {sorting, setSorting} = useSortingCryptoCurrencyList({
    prices,
    setPrices,
    setPriceListNotifacationIsVisible,
  })

  return (
    <>
      <Slogan>Coingecko portfolio fetcher</Slogan>
      <AdaptiveGridTwoEqualItems
        ItemA={
          <>
            <div>Technologies: {stack.join(', ')}</div>
            <p>
              Sort by usd price, Old price USD (24h), Old price BTC (24h), Old
              price ETH (24h)
            </p>
          </>
        }
        ItemB={<PageHeaderContainer apiRequest={apiRequest} />}
      />

      <Collapse in={priceListNotifacationIsVisible}>
        <CustomAlert sorting={sorting} />
      </Collapse>

      <Table>
        <TableHeader
          setSorting={setSorting}
          sorting={sorting}
          coinCellParams={coinCellParams}
          usdCellParams={usdCellParams}
        />
        <TableBody
          items={prices}
          coinCellParams={coinCellParams}
          usdCellParams={usdCellParams}
        />
      </Table>
    </>
  )
}

export default Content
