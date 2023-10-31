'use client'

import {FC} from 'react'

import HFlexBox from '@/styled-components/Grid/HFlexBox'

import styled from 'styled-components'

const Container = styled(HFlexBox)`
  margin: 1rem 0.4rem;
`

const Icons: FC = () => {
  return <Container>{'Hello world'}</Container>
}

export default Icons
