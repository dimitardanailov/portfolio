const axios = require('axios')

const Content = () => {
  let config = {
    method: 'get',
    url: 'https://api.exchange.coinbase.com/products',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  axios(config)
    // @ts-ignore
    .then(response => {
      console.log('coinbase:', JSON.stringify(response.data))
    })
    // @ts-ignore
    .catch(error => {
      console.log(error)
    })

  return 'test'
}

export default Content
