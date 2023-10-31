'use client'

import {FC} from 'react'

import {VFlexbox} from '@/styled-components/Grid'

import styled from 'styled-components'

import Icons from './Icons'

const Container = styled(VFlexbox)`
  height: 100%;

  justify-content: space-between;
`

export interface Props {
  LeftDrawer: JSX.Element
}

const DrawerContainer: FC<Props> = ({LeftDrawer}) => {
  return (
    <Container>
      {LeftDrawer}
      <Icons />
    </Container>
  )
}

export default DrawerContainer
