import comparing from './comparing'

export function pairs(cryptoSymbol: string) {
  const supportedCoins = [
    'bitcoin',
    'CARDANO',
    'solana',
    'chainlink',
    'decentraland',
  ]

  return comparing(supportedCoins, cryptoSymbol)
}
