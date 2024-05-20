'use client'

import {FC} from 'react'

import HFlexBox from '@/styled-components/Grid/HFlexBox'
import {Label} from '../styled-components'

export interface Props {
  technologies: string
}

const Technologies: FC<Props> = ({technologies}) => {
  return (
    <HFlexBox>
      <Label>Technologies</Label>: {technologies}
    </HFlexBox>
  )
}

export default Technologies
