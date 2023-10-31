'use client'

import {FC} from 'react'

import {VFlexbox} from '@/styled-components/Grid'

import styled from 'styled-components'

import Avatar from './Avatar'
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
      <Avatar />
      <Icons />
    </Container>
  )
}

export default DrawerContainer
