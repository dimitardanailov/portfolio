'use client'

import {FC} from 'react'

export interface Props {
  text: string
}

const HeadQuater: FC<Props> = ({text}) => {
  return <>HeadQuarter: {text}</>
}

export default HeadQuater
