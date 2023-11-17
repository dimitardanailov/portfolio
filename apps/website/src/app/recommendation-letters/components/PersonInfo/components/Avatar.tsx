'use client'

import {FC} from 'react'

import Image from 'next/image'

import styled from 'styled-components'

export interface Props {
  source: string
  title: string
  size: number
}

const CustomImage = styled(Image)`
  border-radius: 100%;
  border: 0.2rem solid #000;
`

const Avatar: FC<Props> = ({size, title, source}) => {
  return (
    <CustomImage
      src={source}
      alt={title}
      title={title}
      width={size}
      height={size}
    />
  )
}

export default Avatar
