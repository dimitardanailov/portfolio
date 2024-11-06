'use client'

import dynamic from 'next/dynamic'

import styled from 'styled-components'

import {HFlexBox, VFlexbox} from '@/styled-components/Grid'
import {Center as AvatarContainer} from '@/styled-components/Images/Container'

import source from '@/data/me/120x120'

const Container = styled(HFlexBox)`
  width: 100%;
  justify-content: center;
`

const Text = styled.span`
  position: relative;
  width: 100%;

  text-align: center;
  font-size: 1.1rem;
`

const SlogonWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
`

const Avatar = dynamic(() => import('@/components/Avatar'), {ssr: false})

const ProfileAvatar = () => {
  const size = 120
  const title = 'Make it work, make it right, make it fast!'
  const border = '0.2rem solid #000'
  const borderRadius = 100

  return (
    <Container>
      <VFlexbox>
        <AvatarContainer size={size}>
          <Avatar
            size={size}
            title={title}
            source={source}
            border={border}
            radius={borderRadius}
          />
        </AvatarContainer>
        <SlogonWrapper>
          <Text>{title}</Text>
        </SlogonWrapper>
      </VFlexbox>
    </Container>
  )
}

export default ProfileAvatar
