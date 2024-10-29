'use client'

import {FC} from 'react'

export interface Props {
  phrase: string
}

const ListLabel: FC<Props> = ({phrase}) => {
  return <span className="font-bold">{phrase}:</span>
}

export default ListLabel
