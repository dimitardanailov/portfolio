'use client'

import {FC} from 'react'

import Link from 'next/link'

import styled from 'styled-components'

import BaseTitle from '@/styled-components/Text/Title'

const Title = styled(BaseTitle)`
  font-size: 2rem;
`

export interface Props {
  title: string
  href: string
}

const ProjectTitle: FC<Props> = ({title, href}) => {
  return (
    <Link href={href} target="_blank">
      <Title>{title}</Title>
    </Link>
  )
}

export default ProjectTitle
