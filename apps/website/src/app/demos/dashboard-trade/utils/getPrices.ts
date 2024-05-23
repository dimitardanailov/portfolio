import axios from 'axios'

function getPrices(setPrices: unknown) {
  const domain = process.env.NEXT_PUBLIC_COINGECKO_DOMAIN
  const key = process.env.NEXT_PUBLIC_COINGECKO_API_KEY

  const options = {
    method: 'GET',
    url: `${domain}/simple/price?ids=bitcoin&vs_currencies=usd`,
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': key,
    },
  }

  axios
    .request(options)
    .then(function (response) {
      console.log('prices ...', response.data)
    })
    .catch(function (error) {
      console.error('prices ...', error)
    })
}

export default getPrices
