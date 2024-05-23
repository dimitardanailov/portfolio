import {TableHeader, TableCell, CoinCell, PriceUSDCell} from '../styled'

import {PriceConfigurations, dimensions} from '../setting'

const title = 'sort'
const cursor = 'pointer'

function USDCells() {
  const {price, priceChanged} = dimensions.usd

  return (
    <>
      <PriceUSDCell
        title={title}
        cursor={cursor}
        data-sort={PriceConfigurations.USD}
        width={price.width}
      >
        USD
      </PriceUSDCell>
      <TableCell
        title={title}
        cursor={title}
        data-sort={PriceConfigurations.USD_HISTORY}
        width={priceChanged.width}
      >
        Old price USD (24h)
      </TableCell>
    </>
  )
}

function BTCCells() {
  const {price, priceChanged} = dimensions.btc

  return (
    <>
      <TableCell width={price.width}>BTC</TableCell>
      <TableCell
        title={title}
        cursor={cursor}
        data-sort={PriceConfigurations.BTC_HISTORY}
        width={priceChanged.width}
      >
        Old price BTC (24h)
      </TableCell>
    </>
  )
}

function ETHCells() {
  const {price, priceChanged} = dimensions.eth

  return (
    <>
      <TableCell width={price.width}>ETH</TableCell>
      <TableCell
        title={title}
        cursor={cursor}
        data-sort={PriceConfigurations.USD_HISTORY}
        width={priceChanged.width}
      >
        Old price ETH (24h)
      </TableCell>
    </>
  )
}

function CoingeckoTableHeader() {
  const {coin} = dimensions

  return (
    <TableHeader>
      <CoinCell width={coin.width}>Coin</CoinCell>
      <USDCells />
      <BTCCells />
      <ETHCells />
    </TableHeader>
  )
}

export default CoingeckoTableHeader
