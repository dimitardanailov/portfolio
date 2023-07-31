'use client'

import {FC} from 'react'

export interface Props {
  component: string
}

const Industry: FC<Props> = ({component}) => {
  return <>{component}</>
}

export default Industry
