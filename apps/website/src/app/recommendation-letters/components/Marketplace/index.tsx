'use client'

import {FC} from 'react'

export interface Props {
  text: string
}

const MarketPlace: FC<Props> = ({text}) => {
  return <>Marketplace: {text}</>
}

export default MarketPlace
