'use client'

import {useState} from 'react'

import Collapse from '@mui/material/Collapse'

import Table from '@/styled-components/Coingecko/Table/Table'

import {useCryptoCurrencyList, useSortingCryptoCurrencyList} from './hooks'

import {
  CoingeckoTableHeader,
  CoingeckoTableBody,
  PageHeaderContainer,
  CustomAlert,
} from './Components'

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
      <PageHeaderContainer apiRequest={apiRequest} />
      <Collapse in={priceListNotifacationIsVisible}>
        <CustomAlert sorting={sorting} />
      </Collapse>
      <p>
        Sort by usd price, Old price USD (24h), Old price BTC (24h), Old price
        ETH (24h)
      </p>
      <Table>
        <CoingeckoTableHeader setSorting={setSorting} sorting={sorting} />
        <CoingeckoTableBody items={prices} />
      </Table>
    </>
  )
}

export default Content
