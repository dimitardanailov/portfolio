'use client'

import {useEffect, useState, useRef} from 'react'

import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'

import styled from 'styled-components'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'

import {getCoingeckoRequestParams} from './db'
import getPrices from './utils/getPrices'
import {handlerSortPrices} from './ui'
import {usePriceListNotifacationHook} from './hooks'

import {
  CoingeckoTableHeader,
  CoingeckoTableBody,
  PageHeaderContainer,
} from './Components'
import {
  CoinCell,
  CryptoIcon,
  PriceUSDCell,
  Table,
  TableCell,
  TableRow,
} from './styled'

const CustomAlert = styled(Alert)`
  position: relative;
`

const columnDimensions = {
  coin: {
    width: '8%',
  },
  usd: {
    price: {
      width: '8.5%',
    },
    priceChanged: {
      width: '14%',
    },
  },
  btc: {
    price: {
      width: '10.5%',
    },
    priceChanged: {
      width: '24.25%',
    },
  },
  eth: {
    price: {
      width: '10.5%',
    },
    priceChanged: {
      width: '24.25%',
    },
  },
}

// @ts-ignore
function renderRow({data, index, style}) {
  const item = data.prices[index]
  const usdChange = parseFloat(item['usd_24h_change']).toFixed(2)
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const price = formatter.format(parseFloat(item.usd))

  const calcOldPrice = (currentPriceStr: string, percent: number) => {
    const currentPrice = parseFloat(currentPriceStr)
    let indexChange = Math.abs(percent) / 100
    const dif = currentPrice * indexChange
    const sign = Math.sign(percent) * -1

    return currentPrice + sign * dif
  }

  const oldPriceUSD = calcOldPrice(item.usd, item['usd_24h_change'])
  const oldPriceBTC = calcOldPrice(item.btc, item['btc_24h_change'])
  const oldPriceETH = calcOldPrice(item.eth, item['eth_24h_change'])
  const pairSupportedByCoinbase = {
    eth: true,
  }

  const icon = `https://ddanailov.dev/_next/static/crypto/${item.cryptoCurrency}.svg`
  const coinBaseIcon =
    'https://ddanailov.dev/_next/static/crypto/coinbase-icon-symbol-1.svg'

  return <>{item.cryptoCurrency}</>
}

const Content = () => {
  const [prices, setPrices] = useState<Array<CoingeckoSimplePriceResponse>>([])

  useEffect(() => {
    if (prices.length === 0) {
      getPrices(getCoingeckoRequestParams()).then(prices => {
        setPrices(prices)
      })
    }
  }, [prices.length, prices])

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
