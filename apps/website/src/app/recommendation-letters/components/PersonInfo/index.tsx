'use client'

import {FC} from 'react'

import Image from 'next/image'

import styled from 'styled-components'

import {HFlexBox, VFlexbox} from '@/styled-components/Grid'

const CustomImage = styled(Image)`
  border-radius: 100%;
`

const CustomVFlexbox = styled(VFlexbox)`
  margin-left: 1rem;
`

export interface Props {
  name: string
  source: string
  title: string
}

const PersonInfo: FC<Props> = ({name, source, title}) => {
  const size = 120

  return (
    <HFlexBox>
      <CustomImage
        src={source}
        alt={title}
        title={title}
        width={size}
        height={size}
      />
      <CustomVFlexbox>
        <div>{name}</div>
        <div>{title}</div>
      </CustomVFlexbox>
    </HFlexBox>
  )
}

export default PersonInfo
