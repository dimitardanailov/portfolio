import axios from 'axios'

function getPrices(setPrices: unknown) {
  const domain = process.env.NEXT_PUBLIC_COINGECKO_DOMAIN
  const key = process.env.NEXT_PUBLIC_COINGECKO_API_KEY

  const url = `${domain}/simple/price`

  const coingeckoIds = ['bitcoin,chainlink,cosmos,solana']

  const options = {
    method: 'GET',
    url,
    params: {
      ids: coingeckoIds.join(','),
      vs_currencies: 'btc,usd,eth',
      include_24hr_change: true,
      include_7d_change: true,
      include_last_updated_at: true,
    },
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': key,
    },
  }

  axios
    .request(options)
    .then(function (response) {
      const keys = Object.keys(response.data)

      const coingeckoPrices = keys.map(key => {
        const item = response.data[key]
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

      console.log('coingeckoPrices', coingeckoPrices)
    })
    .catch(function (error) {
      console.error('prices ...', error)
    })
}

export default getPrices
