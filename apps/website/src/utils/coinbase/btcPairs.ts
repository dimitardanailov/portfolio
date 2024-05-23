import comparing from './comparing'

export function btcPairIsSupportedByCoinbase(cryptoSymbol: string) {
  const supportedCoins = [
    'ALGORAND',
    'matic-network',
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
