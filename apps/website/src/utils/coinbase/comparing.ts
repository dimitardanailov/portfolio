function comparing(supportedCoins: Array<string>, cryptoSymbol: string) {
  const coins = supportedCoins.map(coin => {
    return coin.toLowerCase()
  })

  return coins.includes(cryptoSymbol.toLowerCase())
}

export default comparing
