'use client'

import {FC} from 'react'

import HFlexBox from '@/styled-components/Grid/HFlexBox'
import {Label} from '../styled-components'

export interface Props {
  text: string
}

const MarketPlace: FC<Props> = ({text}) => {
  return (
    <HFlexBox>
      <Label>Marketplace</Label>: {text}
    </HFlexBox>
  )
}

export default MarketPlace
