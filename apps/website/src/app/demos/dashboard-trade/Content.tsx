'use client'

import {useEffect, useState, useRef} from 'react'

import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'

import styled from 'styled-components'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'

import {getCoingeckoRequestParams} from './db'
import getPrices from './utils/getPrices'
import {handlerSortPrices} from './ui'
import {useCryptoCurrencyList, usePriceListNotifacationHook} from './hooks'

import {
  CoingeckoTableHeader,
  CoingeckoTableBody,
  PageHeaderContainer,
} from './Components'

import Table from './styled/Table/Table'

const CustomAlert = styled(Alert)`
  position: relative;
`

const Content = () => {
  const {prices} = useCryptoCurrencyList()

  const [priceListNotifacationIsVisible, setPriceListNotifacationIsVisible] =
    useState(false)

  const ASC = 'ASC'
  const DESC = 'DESC'
  const [sorting, setSorting] = useState<Sorting>({
    column: null,
    orderBy: null,
  })

  useEffect(() => {
    if (prices.length > 0) {
    } else {
    }
  }, [sorting, prices.length])

  return (
    <>
      <PageHeaderContainer />
      <Collapse in={priceListNotifacationIsVisible}>
        <CustomAlert severity="success">Alert</CustomAlert>
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
