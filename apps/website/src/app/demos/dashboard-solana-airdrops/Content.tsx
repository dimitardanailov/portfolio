'use client'

import {useState} from 'react'

import {useCryptoCurrencyList} from './hooks'

import {Slogan} from '@/styled-components'

const Content = () => {
  const [priceListNotifacationIsVisible, setPriceListNotifacationIsVisible] =
    useState(false)

  const {prices, setPrices, apiRequest} = useCryptoCurrencyList(
    setPriceListNotifacationIsVisible,
  )

  return (
    <>
      <Slogan>Coingecko solana airdrop checker</Slogan>
      {JSON.stringify(prices)}
    </>
  )
}

export default Content
