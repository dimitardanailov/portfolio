'use client'

import {FC} from 'react'

import dynamic from 'next/dynamic'

import styled from 'styled-components'

import {HFlexBox, VFlexbox} from '@/styled-components/Grid'
import BaseTitle from '@/styled-components/Text/Title'
import AvatarContainer from '@/styled-components/Images/Container'

const Container = styled(HFlexBox)`
  margin: 1rem 0.5rem;
`

const CustomVFlexbox = styled(VFlexbox)`
  margin-left: 1rem;
`

const NameTitle = styled(BaseTitle)`
  font-size: 1.2rem;
  font-weight: bold;
`

const Position = styled(BaseTitle)`
  font-style: italic;
`

export interface Props {
  name: string
  source: string
  title: string
}

const Avatar = dynamic(() => import('@/components/Avatar'), {ssr: false})

const PersonInfo: FC<Props> = ({name, source, title}) => {
  const size = 120
  const border = '0.2rem solid #000'
  const borderRadius = 100

  return (
    <Container>
      <AvatarContainer size={size}>
        <Avatar
          size={size}
          title={title}
          source={source}
          border={border}
          borderRadius={borderRadius}
        />
      </AvatarContainer>
      <CustomVFlexbox>
        <NameTitle>{name}</NameTitle>
        <Position>{title}</Position>
      </CustomVFlexbox>
    </Container>
  )
}

export default PersonInfo
