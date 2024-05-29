'use client'

import {FC} from 'react'
import styled from 'styled-components'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'
import HistoricPrice from '@/classes/HistoricPrice'

import PriceComparing from './PriceComparing'

import {TableRow, CoinCell, PriceUSDCell, TableCell} from '../styled/index'
import {dimensions} from '../setting'

const CryptoIcon = styled.img`
  width: 18px;
  height: 18px;

  margin-right: 0.5rem;
`

export interface Props {
  item: CoingeckoSimplePriceResponse
}

const CoingeckoTableRow: FC<Props> = ({item}) => {
  const historicPrice = new HistoricPrice()
  historicPrice.calculateHistoricDiff(item)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const price = formatter.format(item.usd)
  const usdChange = item.usd.toFixed(2)

  const icon = `/icons/crypto/${item.cryptoCurrency}.svg`

  return (
    <TableRow>
      <CoinCell width={dimensions.coin.width}>
        <CryptoIcon src={icon} title={item.cryptoCurrency} />
      </CoinCell>
      <PriceUSDCell width={dimensions.usd.price.width}>{price}</PriceUSDCell>
      <TableCell width={dimensions.usd.priceChanged.width}>
        <PriceComparing percent={item.usd}>
          {usdChange} % / {formatter.format(historicPrice.usd)}
        </PriceComparing>
      </TableCell>
      <TableCell width={dimensions.btc.price.width}>{item.btc}</TableCell>
      <TableCell width={dimensions.btc.priceChanged.width}>
        <PriceComparing percent={item.btc_24h_change}>
          {item.btc_24h_change.toFixed(2)} % ({historicPrice.btc})
        </PriceComparing>
      </TableCell>
      <TableCell width={dimensions.eth.price.width}>{item.eth}</TableCell>
      <TableCell width={dimensions.eth.priceChanged.width}>
        <PriceComparing percent={item.eth_24h_change}>todo</PriceComparing>
      </TableCell>
    </TableRow>
  )
}

export default CoingeckoTableRow
