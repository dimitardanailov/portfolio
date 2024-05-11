'use client'

import {FC} from 'react'

export interface Props {
  text: string
}

const SectionTitle: FC<Props> = ({text}) => {
  return <h2 className="font-bold">{text}</h2>
}

export default SectionTitle
