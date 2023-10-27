'use client'

import {FC} from 'react'

import styled from 'styled-components'

import HFlexBox from '@/styled-components/Grid/HFlexBox'
import BaseTitle from '@/styled-components/Text/Title'

const Title = styled(BaseTitle)`
  font-size: 1rem;
`

export interface Props {
  text: string
}

const Position: FC<Props> = ({text}) => {
  return (
    <HFlexBox>
      <Title>Position:</Title>
      {text}
    </HFlexBox>
  )
}

export default Position
