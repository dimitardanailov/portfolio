'use client'

import {FC} from 'react'

export interface Props {
  component: string
}

const HeadQuater: FC<Props> = ({component}) => {
  return <>HeadQuarter: {component}</>
}

export default HeadQuater
