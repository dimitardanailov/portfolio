'use client'

import {FC} from 'react'

import Image from 'next/image'

import styled from 'styled-components'

export interface Props {
  source: string
  title: string
  size: number
  border?: string
  borderRadius?: number
}

interface CustomImageProps {
  border: string
  borderRadius: number
}

const CustomImage = styled(Image)<CustomImageProps>`
  border-radius: ${p => p.borderRadius}%;
  border: ${p => p.border};
`

const Avatar: FC<Props> = ({
  size,
  title,
  source,
  border = '0.1rem solid #000',
  borderRadius = 100,
}) => {
  return (
    <CustomImage
      border={border}
      borderRadius={borderRadius}
      src={source}
      alt={title}
      title={title}
      width={size}
      height={size}
    />
  )
}

export default Avatar
