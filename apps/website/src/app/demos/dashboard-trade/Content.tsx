'use client'

import {useState} from 'react'

import Collapse from '@mui/material/Collapse'

import {Slogan} from '@/styled-components'
import Table from '@/styled-components/Coingecko/Table/Table'

import {useCryptoCurrencyList, useSortingCryptoCurrencyList} from './hooks'

import {
  CoingeckoTableHeader,
  CoingeckoTableBody,
  PageHeaderContainer,
  CustomAlert,
} from './Components'

import stack from './stack'
import Box from '@/styled-components/Grid/HFlexBox'

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
      <Box>
        <section className="w-6/12">
          <div>Technologies: {stack.join(', ')}</div>
          <p>
            Sort by usd price, Old price USD (24h), Old price BTC (24h), Old
            price ETH (24h)
          </p>
        </section>
        <section className="w-6/12">
          <PageHeaderContainer apiRequest={apiRequest} />
        </section>
      </Box>

      <Collapse in={priceListNotifacationIsVisible}>
        <CustomAlert sorting={sorting} />
      </Collapse>

      <Table>
        <CoingeckoTableHeader setSorting={setSorting} sorting={sorting} />
        <CoingeckoTableBody items={prices} />
      </Table>
    </>
  )
}

export default Content
