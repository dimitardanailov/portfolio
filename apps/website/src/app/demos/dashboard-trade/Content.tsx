'use client'

import {useState} from 'react'

import Collapse from '@mui/material/Collapse'

import {handlerSortPrices} from './ui'
import {useCryptoCurrencyList, useSortingCryptoCurrencyList} from './hooks'

import {
  CoingeckoTableHeader,
  CoingeckoTableBody,
  PageHeaderContainer,
  CustomAlert,
} from './Components'

import Table from './styled/Table/Table'

const Content = () => {
  const [priceListNotifacationIsVisible, setPriceListNotifacationIsVisible] =
    useState(false)

  const {prices, setPrices, apiRequest} = useCryptoCurrencyList(
    setPriceListNotifacationIsVisible,
  )

  const {sorting} = useSortingCryptoCurrencyList({
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
        <CoingeckoTableHeader handlerSortPrices={handlerSortPrices} />
        <CoingeckoTableBody items={prices} />
      </Table>
    </>
  )
}

export default Content
