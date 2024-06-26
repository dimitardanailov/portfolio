'use client'

import {FC} from 'react'

export interface Props {
  text: string
}

const SimpleLabel: FC<Props> = ({text}) => {
  return <span className="font-bold">{text}:</span>
}

export default SimpleLabel
