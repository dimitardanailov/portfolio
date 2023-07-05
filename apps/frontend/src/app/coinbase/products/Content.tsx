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
    .then(response => {
      setProducts(response.data)
    })
    .catch(error => {
      console.log(error)
    })

  return (
    <ul>
      {products.map(function (product) {
        return <li key={product.id}>{product.id}</li>
      })}
    </ul>
  )

  JSON.stringify(products)
}

export default Content
