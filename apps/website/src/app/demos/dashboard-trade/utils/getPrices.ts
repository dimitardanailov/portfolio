import axios from 'axios'

function getPrices(setPrices: unknown) {
  const COINGECKO_API = 'https://api.coingecko.com/api/v3'

  const coingeckoIds = ['solana']

  const request = (setPrices: unknown) => {
    axios
      .get(`${COINGECKO_API}/simple/price`, {
        params: {
          ids: coingeckoIds.join(','),
          vs_currencies: 'btc,usd,eth',
          include_24hr_change: true,
          include_7d_change: true,
          include_last_updated_at: true,
        },
      })
      .then(body => {
        if (body.status === 200) {
          const keys = Object.keys(body.data)
          const coingeckoPrices = keys.map(key => {
            const item = body.data[key]
            return {
              cryptoCurrency: key,
              btc: item.btc,
              usd: item.usd,
              eth: item.eth,
              btc_24h_change: item.btc_24h_change,
              eth_24h_change: item.eth_24h_change,
              usd_24h_change: item.usd_24h_change,
            }
          })

          setPrices(coingeckoPrices)
        }
      })
  }

  request(setPrices)
}

export default getPrices
