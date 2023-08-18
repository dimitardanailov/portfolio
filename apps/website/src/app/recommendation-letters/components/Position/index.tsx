'use client'

import {FC} from 'react'

export interface Props {
  text: string
}

const Position: FC<Props> = ({text}) => {
  return <>Position: {text}</>
}

export default Position
