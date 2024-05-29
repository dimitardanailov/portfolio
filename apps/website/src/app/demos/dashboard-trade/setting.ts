export const dimensions = {
  coin: {
    width: '8%',
  },
  usd: {
    price: {
      width: '12.5%',
    },
    priceChanged: {
      width: '20%',
    },
  },
  btc: {
    price: {
      width: '10.5%',
    },
    priceChanged: {
      width: '19.25%',
    },
  },
  eth: {
    price: {
      width: '10.5%',
    },
    priceChanged: {
      width: '19.25%',
    },
  },
}

export enum PriceConfigurations {
  USD = 'usd',
  USD_HISTORY = 'usd_24h_change',
  BTC_HISTORY = 'btc_24h_change',
  ETH_HISTORY = 'eth_24h_change',
}
