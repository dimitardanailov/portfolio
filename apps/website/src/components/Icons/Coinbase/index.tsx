'use client'

import {FC} from 'react'

import {pairs} from '@/utils/coinbase/ethPairs'
import styled from 'styled-components'

const Icon = styled.img`
  width: 18px;
  height: 18px;

  margin-right: 0.5rem;
`

export interface Props {
  cryptoCurrency: string
}

const CoinbaseIcon: FC<Props> = ({cryptoCurrency}) => {
  const isSupported = pairs(cryptoCurrency)

  if (!isSupported) return null

  return <Icon src="/icons/crypto/coinbase-icon-symbol-1.svg" />
}

export default CoinbaseIcon
