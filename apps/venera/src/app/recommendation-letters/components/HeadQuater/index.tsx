'use client'

import {FC} from 'react'

import HFlexBox from '@/styled-components/Grid/HFlexBox'
import {Label} from '../styled-components'

export interface Props {
  text: string
}

const HeadQuater: FC<Props> = ({text}) => {
  return (
    <HFlexBox>
      <Label>HeadQuarter</Label>: {text}
    </HFlexBox>
  )
}

export default HeadQuater
