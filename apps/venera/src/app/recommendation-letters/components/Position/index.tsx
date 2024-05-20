'use client'

import {FC} from 'react'

import HFlexBox from '@/styled-components/Grid/HFlexBox'
import {Label} from '../styled-components'

export interface Props {
  text: string
}

const Position: FC<Props> = ({text}) => {
  return (
    <HFlexBox>
      <Label>Position</Label>: {text}
    </HFlexBox>
  )
}

export default Position
