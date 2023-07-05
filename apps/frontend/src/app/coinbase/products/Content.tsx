import {useState} from 'react'

const axios = require('axios')

const Content = () => {
  const [products, setProducts] = useState([])

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
      setProducts(response.data)
    })
    // @ts-ignore
    .catch(error => {
      console.log(error)
    })

  return (
    <ul>
      {products.map(function (product) {
        // @ts-ignore
        return <li key={product.id}>{product.id}</li>
      })}
    </ul>
  )

  JSON.stringify(products)
}

export default Content
