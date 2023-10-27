'use client'

import {FC} from 'react'

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
    <>
      <Title>
        {title} - {href}
      </Title>
    </>
  )
}

export default ProjectTitle
