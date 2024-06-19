'use client'

import {FC} from 'react'

export interface Props {
  phrase: string
}

const ListLabel: FC<Props> = ({phrase}) => {
  return <>{phrase}:</>
}

export default ListLabel
