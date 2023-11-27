'use client'

import {FC} from 'react'

import dynamic from 'next/dynamic'

import {VFlexbox} from '@/styled-components/Grid'

import styled from 'styled-components'

import Avatar from './Avatar'

const Container = styled(VFlexbox)`
  height: 100%;

  justify-content: space-between;
`

const Center = styled.div`
  position: relative;

  height: 180px;
`

const Footer = styled.footer`
  position: relative;

  height: 64px;
`

const Icons = dynamic(() => import('./Icons'), {ssr: false})

export interface Props {
  LeftDrawer: JSX.Element
}

const DrawerContainer: FC<Props> = ({LeftDrawer}) => {
  return (
    <Container>
      {LeftDrawer}
      <Center>
        <Avatar />
      </Center>

      <Footer>
        <Icons />
      </Footer>
    </Container>
  )
}

export default DrawerContainer
