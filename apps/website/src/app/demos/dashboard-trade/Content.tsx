'use client'

import {useEffect, useState, useRef} from 'react'

// import Collapse from '@mui/material/Collapse'

// import {Slogan} from '@/styled-components'
import getPrices from './utils/getPrices'

const Content = () => {
  const [prices, setPrices] = useState([])

  getPrices(setPrices)

  console.log('prices', prices)

  return <>Hello world!</>
}

export default Content
