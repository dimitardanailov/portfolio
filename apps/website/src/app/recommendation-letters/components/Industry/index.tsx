'use client'

import {FC} from 'react'

export interface Props {
  text: string
}

const Industry: FC<Props> = ({text}) => {
  return <>Industry: {text}</>
}

export default Industry
