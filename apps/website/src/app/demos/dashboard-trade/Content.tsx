'use client'

import {useState} from 'react'

import Collapse from '@mui/material/Collapse'

import GridTwoColumns from '@/components/Grid/TwoColumns'

import TableBody from '@/components/Coingecko/TableBody'
import TableHeader from '@/components/Coingecko/TableHeader'
import CustomAlert from '@/components/Coingecko/CustomAlert'
import PageHeaderContainer from '@/components/Coingecko/PageHeaderContainer'

import {Slogan} from '@/styled-components'
import Table from '@/styled-components/Coingecko/Table/Table'

import useSortingCryptoCurrencyList from '@/hooks/coingecko/simplePrices/useSortingCryptoCurrencyList'
import {useCryptoCurrencyList} from './hooks'

import stack from './stack'

import {
  coinCellParams,
  usdCellParams,
  ethCellParams,
  btcCellParams,
} from './setting'

const Content = () => {
  const [priceListNotifacationIsVisible, setPriceListNotifacationIsVisible] =
    useState(false)

  const {prices, setPrices, apiRequest} = useCryptoCurrencyList(
    setPriceListNotifacationIsVisible,
  )

  const {sorting, setSorting} = useSortingCryptoCurrencyList({
    prices,
    setPrices,
    setPriceListNotifacationIsVisible,
  })

  return (
    <>
      <Slogan>Coingecko portfolio fetcher</Slogan>
      <GridTwoColumns
        LeftBox={
          <>
            <div>Technologies: {stack.join(', ')}</div>
            <p>
              Sort by usd price, Old price USD (24h), Old price BTC (24h), Old
              price ETH (24h)
            </p>
          </>
        }
        RightBox={<PageHeaderContainer apiRequest={apiRequest} />}
      />

      <Collapse in={priceListNotifacationIsVisible}>
        <CustomAlert sorting={sorting} />
      </Collapse>

      <Table>
        <TableHeader
          setSorting={setSorting}
          sorting={sorting}
          coinCellParams={coinCellParams}
          btcCellParams={btcCellParams}
          ethCellParams={ethCellParams}
          usdCellParams={usdCellParams}
        />
        <TableBody
          items={prices}
          coinCellParams={coinCellParams}
          btcCellParams={btcCellParams}
          ethCellParams={ethCellParams}
          usdCellParams={usdCellParams}
        />
      </Table>
    </>
  )
}

export default Content
