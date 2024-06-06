'use client'

import {FC} from 'react'

import Box from '@/styled-components/Grid/Mobile/HFlexBox'

import styled from 'styled-components'

export interface Props {
  LeftBox: JSX.Element
  RightBox: JSX.Element
}

const BoxWrapper = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const GridTwoColumns: FC<Props> = ({LeftBox, RightBox}) => {
  return (
    <Box>
      <BoxWrapper>{LeftBox}</BoxWrapper>
      <BoxWrapper>{RightBox}</BoxWrapper>
    </Box>
  )
}

export default GridTwoColumns
