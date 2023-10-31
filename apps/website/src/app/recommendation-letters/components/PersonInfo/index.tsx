'use client'

import {FC} from 'react'

import Image from 'next/image'

import styled from 'styled-components'

import {HFlexBox, VFlexbox} from '@/styled-components/Grid'
import BaseTitle from '@/styled-components/Text/Title'

const Container = styled(HFlexBox)`
  margin: 1rem 0.5rem;
`

const CustomImage = styled(Image)`
  border-radius: 100%;
  border: 0.2rem solid #000;
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

const PersonInfo: FC<Props> = ({name, source, title}) => {
  const size = 120

  return (
    <Container>
      <CustomImage
        src={source}
        alt={title}
        title={title}
        width={size}
        height={size}
      />
      <CustomVFlexbox>
        <NameTitle>{name}</NameTitle>
        <Position>{title}</Position>
      </CustomVFlexbox>
    </Container>
  )
}

export default PersonInfo
