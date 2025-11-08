import comparing from './comparing'

export function pairs(cryptoSymbol: string) {
  const supportedCoins = [
    'ALGORAND',
    'polygon-ecosystem-token',
    'CARDANO',
    'ethereum',
    'solana',
    'dogecoin',
    'cosmos',
    'chainlink',
    'stellar',
    'decentraland',
    'uniswap',
    'aave',
    'maker',
    'avalanche-2',
  ]

  return comparing(supportedCoins, cryptoSymbol)
}
