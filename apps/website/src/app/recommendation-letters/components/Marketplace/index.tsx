'use client'

import {FC} from 'react'

export interface Props {
  component: string
}

const MarketPlace: FC<Props> = ({component}) => {
  return <>{component}</>
}

export default MarketPlace
