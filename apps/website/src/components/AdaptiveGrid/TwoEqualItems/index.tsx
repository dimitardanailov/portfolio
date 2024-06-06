'use client'

import {FC} from 'react'

import Box from '@/styled-components/Grid/Mobile/HFlexBox'

import styled from 'styled-components'

export interface Props {
  ItemA: JSX.Element
  ItemB: JSX.Element
}

const BoxWrapper = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const AdaptiveGridTwoEqualItems: FC<Props> = ({ItemA, ItemB}) => {
  return (
    <Box>
      <BoxWrapper>{ItemA}</BoxWrapper>
      <BoxWrapper>{ItemB}</BoxWrapper>
    </Box>
  )
}

export default AdaptiveGridTwoEqualItems
